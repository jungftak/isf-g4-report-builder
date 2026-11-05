// ===================== STATE & PERSISTENCE =====================
const STORAGE_KEY = "isf_g4_report_builder_v1";

function defaultState(){
  return { semester: "S1", students: [], currentStudentId: null, currentSubject: "pastoral" };
}
let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){ return defaultState(); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function uid(){ return 'stu_' + Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

// ===================== PRONOUN HELPERS =====================
const PRONOUNS = {
  he:  { subj:"he",  obj:"him", poss:"his", reflexive:"himself" },
  she: { subj:"she", obj:"her", poss:"her", reflexive:"herself" }
};

function capIfStart(word, matchIndex, fullStr){
  const before = fullStr.slice(0, matchIndex);
  const trimmed = before.replace(/\s+$/,'');
  const atStart = trimmed.length === 0 || /[.!?]$/.test(trimmed);
  return atStart ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

function regexReplace(str, pattern, he, she, pronoun){
  return str.replace(pattern, (match, ...rest) => {
    const offset = rest[rest.length - 2];
    const full = rest[rest.length - 1];
    const word = pronoun === 'she' ? she : he;
    return capIfStart(word, offset, full);
  });
}

function applyNamePronoun(text, name, pronoun){
  if(!text) return "";
  const P = PRONOUNS[pronoun] || PRONOUNS.he;
  let out = text;
  out = regexReplace(out, /\(\s*him\s*\/\s*her\s*\)/gi, P.obj, P.obj, pronoun);
  out = regexReplace(out, /\(\s*her\s*\/\s*him\s*\)/gi, P.obj, P.obj, pronoun);
  out = regexReplace(out, /\(\s*himself\s*\/\s*herself\s*\)/gi, P.reflexive, P.reflexive, pronoun);
  out = regexReplace(out, /\(\s*herself\s*\/\s*himself\s*\)/gi, P.reflexive, P.reflexive, pronoun);
  out = regexReplace(out, /\(\s*his\s*\/\s*her\s*\)/gi, P.poss, P.poss, pronoun);
  out = regexReplace(out, /\(\s*her\s*\/\s*his\s*\)/gi, P.poss, P.poss, pronoun);
  out = regexReplace(out, /\(\s*he\s*\/\s*she\s*\)/gi, P.subj, P.subj, pronoun);
  out = regexReplace(out, /\(\s*she\s*\/\s*he\s*\)/gi, P.subj, P.subj, pronoun);
  out = out.replace(/\(NAME\)/gi, name);
  out = out.replace(/\bX\b/g, name);
  return out;
}

// ===================== STUDENT HELPERS =====================
function getStudent(id){ return state.students.find(s => s.id === id); }
function currentStudent(){ return getStudent(state.currentStudentId); }

function newStudent(name, pronoun){
  return {
    id: uid(), name: name.trim(), pronoun: pronoun,
    pastoral: { text: "" },
    english: { strengths: [], growth: [] },
    gd: { strengths: [], growth: [] }
  };
}

// selection key for a statement: identifies it uniquely & stably
function statementKey(standardId, unitId, bucket, idx){
  return `${standardId}|${unitId||'_'}|${bucket}|${idx}`;
}

// ===================== TOAST =====================
let toastTimer;
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.add('hidden'), 2200);
}

// ===================== NAVIGATION =====================
document.getElementById('mainNav').addEventListener('click', (e)=>{
  const btn = e.target.closest('.tab-btn'); if(!btn) return;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-' + btn.dataset.view).classList.add('active');
  if(btn.dataset.view === 'editor') renderEditor();
});

document.getElementById('commentTypeTabs').addEventListener('click', (e)=>{
  const btn = e.target.closest('.subtab-btn'); if(!btn) return;
  state.currentSubject = btn.dataset.type;
  document.querySelectorAll('.subtab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.comment-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-' + btn.dataset.type).classList.add('active');
  renderCommentPanel(btn.dataset.type);
});

// ===================== SEMESTER =====================
document.getElementById('semesterSelect').value = state.semester;
document.getElementById('semesterSelect').addEventListener('change', (e)=>{
  state.semester = e.target.value; saveState();
  renderEditor();
});

// ===================== ROSTER VIEW =====================
document.getElementById('addStudentForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('newStudentName').value.trim();
  if(!name) return;
  const pronoun = document.querySelector('input[name=newPronoun]:checked').value;
  const s = newStudent(name, pronoun);
  state.students.push(s);
  state.currentStudentId = s.id;
  saveState();
  document.getElementById('newStudentName').value = '';
  renderRoster();
  toast(`${name} added.`);
});

document.getElementById('rosterSearch').addEventListener('input', renderRoster);

function subjectProgress(student, subject){
  if(subject === 'pastoral') return student.pastoral.text.trim().length > 0;
  const s = student[subject];
  return s.strengths.length > 0 || s.growth.length > 0;
}

function renderRoster(){
  const q = (document.getElementById('rosterSearch').value || '').toLowerCase();
  const list = document.getElementById('rosterList');
  const filtered = state.students.filter(s => s.name.toLowerCase().includes(q));
  document.getElementById('studentCount').textContent = state.students.length;
  document.getElementById('rosterEmpty').classList.toggle('hidden', state.students.length > 0);
  list.innerHTML = filtered.map(s => `
    <div class="roster-card" data-id="${s.id}">
      <h3>${escapeHtml(s.name)}</h3>
      <div class="pr">${s.pronoun === 'she' ? 'She / Her / Her' : 'He / Him / His'}</div>
      <div class="roster-progress">
        <span class="chip ${subjectProgress(s,'pastoral')?'ok':'empty'}">Pastoral</span>
        <span class="chip ${subjectProgress(s,'english')?'ok':'empty'}">English</span>
        <span class="chip ${subjectProgress(s,'gd')?'ok':'empty'}">GD</span>
      </div>
      <div class="roster-card-actions">
        <button class="btn btn-maroon open-student">Open &rarr;</button>
        <button class="btn btn-danger-ghost delete-student">Remove</button>
      </div>
    </div>`).join('');
}

document.getElementById('rosterList').addEventListener('click', (e)=>{
  const card = e.target.closest('.roster-card'); if(!card) return;
  const id = card.dataset.id;
  if(e.target.classList.contains('open-student')){
    state.currentStudentId = id; saveState();
    document.querySelector('.tab-btn[data-view="editor"]').click();
  } else if(e.target.classList.contains('delete-student')){
    const s = getStudent(id);
    if(confirm(`Remove ${s.name} and all of their comments? This cannot be undone.`)){
      state.students = state.students.filter(x=>x.id!==id);
      if(state.currentStudentId === id) state.currentStudentId = state.students[0]?.id || null;
      saveState(); renderRoster();
    }
  }
});

// ===================== EDITOR: STUDENT SWITCHING =====================
function renderEditor(){
  const sel = document.getElementById('studentSelect');
  sel.innerHTML = state.students.map(s=>`<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
  if(!state.currentStudentId && state.students.length) state.currentStudentId = state.students[0].id;
  sel.value = state.currentStudentId || '';

  const has = !!currentStudent();
  document.getElementById('noStudentMsg').classList.toggle('hidden', has);
  document.getElementById('editorBody').classList.toggle('hidden', !has);
  if(!has) return;

  updatePronounButtons();
  renderCommentPanel(state.currentSubject);
  renderFinalPreview();
}

document.getElementById('studentSelect').addEventListener('change', (e)=>{
  state.currentStudentId = e.target.value; saveState(); renderEditor();
});
document.getElementById('prevStudentBtn').addEventListener('click', ()=> stepStudent(-1));
document.getElementById('nextStudentBtn').addEventListener('click', ()=> stepStudent(1));
function stepStudent(dir){
  if(!state.students.length) return;
  const idx = state.students.findIndex(s=>s.id===state.currentStudentId);
  const next = (idx + dir + state.students.length) % state.students.length;
  state.currentStudentId = state.students[next].id; saveState(); renderEditor();
}
document.getElementById('removeStudentBtn').addEventListener('click', ()=>{
  const s = currentStudent(); if(!s) return;
  if(confirm(`Remove ${s.name} and all of their comments? This cannot be undone.`)){
    state.students = state.students.filter(x=>x.id!==s.id);
    state.currentStudentId = state.students[0]?.id || null;
    saveState(); renderEditor(); renderRoster();
  }
});

document.getElementById('pronounGroup').addEventListener('click', (e)=>{
  const btn = e.target.closest('.pill-btn'); if(!btn) return;
  const s = currentStudent(); if(!s) return;
  s.pronoun = btn.dataset.p; saveState();
  updatePronounButtons();
  renderCommentPanel(state.currentSubject);
});
function updatePronounButtons(){
  const s = currentStudent(); if(!s) return;
  document.querySelectorAll('#pronounGroup .pill-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.p === s.pronoun);
  });
}

// ===================== BUILDER STATE (which standard/unit/level is being viewed) =====================
const viewState = {
  english: { standardId:null, unitId:null, level:'ALL' },
  gd: { standardId:null, unitId:null, level:'ALL' }
};

function availableStandards(subject){
  const list = subject === 'english' ? ISF_ENGLISH : ISF_GD;
  return list.filter(st => subject === 'english' ? st.semesters.includes(state.semester) : st.semester === state.semester);
}

function renderCommentPanel(subject){
  if(subject === 'pastoral') return renderPastoral();
  return renderBuilder(subject);
}

// ===================== PASTORAL =====================
let pastoralVirtueId = null;
function renderPastoral(){
  const s = currentStudent(); if(!s) return;
  const grid = document.getElementById('virtueGrid');
  grid.innerHTML = ISF_VIRTUES.map(v => `
    <button class="virtue-card ${v.id===pastoralVirtueId?'active':''}" data-vid="${v.id}">
      <b>${v.name}</b><span>${v.theme}</span>
    </button>`).join('');
  if(!pastoralVirtueId && ISF_VIRTUES.length) pastoralVirtueId = ISF_VIRTUES[0].id;
  renderVirtueExamples();
  document.getElementById('pastoralText').value = s.pastoral.text;
  updatePastoralCount();
  renderFinalPreview();
}
document.getElementById('virtueGrid').addEventListener('click', (e)=>{
  const btn = e.target.closest('.virtue-card'); if(!btn) return;
  pastoralVirtueId = btn.dataset.vid;
  renderPastoral();
});
function renderVirtueExamples(){
  const v = ISF_VIRTUES.find(x=>x.id===pastoralVirtueId);
  document.getElementById('virtueSelectedName').textContent = v ? `${v.name} (${v.theme})` : '—';
  const s = currentStudent();
  const box = document.getElementById('virtueExamples');
  if(!v){ box.innerHTML=''; return; }
  box.innerHTML = v.examples.map((ex,i)=>`
    <div class="statement-row" data-ex="${i}">
      <span>${escapeHtml(applyNamePronoun(ex, s.name, s.pronoun))}</span>
    </div>`).join('');
}
document.getElementById('virtueExamples').addEventListener('click', (e)=>{
  const row = e.target.closest('.statement-row'); if(!row) return;
  const v = ISF_VIRTUES.find(x=>x.id===pastoralVirtueId);
  const s = currentStudent();
  const text = applyNamePronoun(v.examples[row.dataset.ex], s.name, s.pronoun);
  const ta = document.getElementById('pastoralText');
  ta.value = (ta.value.trim() ? ta.value.trim() + ' ' : '') + text;
  s.pastoral.text = ta.value; saveState();
  updatePastoralCount();
  renderFinalPreview();
});
document.getElementById('pastoralText').addEventListener('input', (e)=>{
  const s = currentStudent(); if(!s) return;
  s.pastoral.text = e.target.value; saveState();
  updatePastoralCount();
  renderFinalPreview();
});
function updatePastoralCount(){
  const text = document.getElementById('pastoralText').value.trim();
  const sentences = text ? (text.match(/[^.!?]+[.!?]+/g) || [text]).length : 0;
  const badge = document.getElementById('pastoralCount');
  badge.textContent = `${sentences} sentence${sentences===1?'':'s'} (aim for 2–3)`;
  badge.className = 'count-badge ' + (sentences>=2 && sentences<=3 ? 'ok':'warn');
}

// ===================== ENGLISH / GD BUILDER =====================
function renderBuilder(subject){
  const s = currentStudent(); if(!s) return;
  const vs = viewState[subject];
  const standards = availableStandards(subject);
  if(!standards.find(st=>st.id===vs.standardId)) {
    vs.standardId = standards[0]?.id || null;
    vs.unitId = null; vs.level = 'ALL';
  }

  // sidebar
  const sideEl = document.getElementById(subject + '-standard-list');
  sideEl.innerHTML = standards.map(st => `
    <button class="standard-btn ${st.id===vs.standardId?'active':''}" data-sid="${st.id}">
      ${escapeHtml(st.title)}<small>${escapeHtml(st.code || '')}</small>
    </button>`).join('');

  const standard = standards.find(st=>st.id===vs.standardId);
  if(!standard){ 
    document.getElementById(subject+'-unit-tabs').innerHTML='';
    document.getElementById(subject+'-level-filter').innerHTML='';
    document.getElementById(subject+'-strength-list').innerHTML='';
    document.getElementById(subject+'-growth-list').innerHTML='';
    renderFinalPreview();
    return;
  }
  if(!standard.units.find(u=>u.id===vs.unitId)){ vs.unitId = standard.units[0]?.id; vs.level='ALL'; }

  // unit tabs
  const unitEl = document.getElementById(subject + '-unit-tabs');
  if(standard.units.length > 1){
    unitEl.innerHTML = standard.units.map(u => `
      <button class="unit-tab-btn ${u.id===vs.unitId?'active':''}" data-uid="${u.id}">${escapeHtml(u.name)}</button>`).join('');
  } else { unitEl.innerHTML=''; }

  const unit = standard.units.find(u=>u.id===vs.unitId);

  // level filter
  const levels = Array.from(new Set(
    [...unit.strengths, ...unit.growth].map(i=>i.lvl).filter(Boolean)
  ));
  const lfEl = document.getElementById(subject + '-level-filter');
  if(levels.length){
    lfEl.innerHTML = `<span class="lf-label">Filter by level:</span>` +
      ['ALL', ...levels].map(l => `
        <button class="level-pill ${vs.level===l?'active':''}" data-lvl="${l}">${l==='ALL'?'All levels':l}</button>`).join('');
  } else { lfEl.innerHTML=''; }

  renderStatementBucket(subject, standard, unit, 'strengths');
  renderStatementBucket(subject, standard, unit, 'growth');
  renderFinalPreview();
}

function renderStatementBucket(subject, standard, unit, bucket){
  const s = currentStudent();
  const vs = viewState[subject];
  const listEl = document.getElementById(`${subject}-${bucket==='strengths'?'strength':'growth'}-list`);
  const items = unit[bucket];
  const selected = s[subject][bucket]; // array of {key, text(raw)}
  listEl.innerHTML = items.map((item, idx) => {
    if(vs.level !== 'ALL' && item.lvl && item.lvl !== vs.level) return '';
    const key = statementKey(standard.id, unit.id, bucket, idx);
    const checked = selected.some(x=>x.key===key);
    const badge = item.lvl ? `<span class="badge badge-${item.lvl.replace('/','')||'any'}">${item.lvl}</span>`
                : item.tag ? `<span class="badge badge-tag">${escapeHtml(item.tag)}</span>` : `<span class="badge badge-any">any</span>`;
    return `<label class="statement-row ${checked?'checked':''}" data-key="${key}">
      <input type="checkbox" ${checked?'checked':''}>
      <span>${badge}${escapeHtml(applyNamePronoun(item.t, s.name, s.pronoun))}</span>
    </label>`;
  }).join('');
  updateCountBadge(subject, bucket);
  updatePreview(subject, bucket);
}

['english','gd'].forEach(subject=>{
  document.getElementById(subject + '-standard-list').addEventListener('click', (e)=>{
    const btn = e.target.closest('.standard-btn'); if(!btn) return;
    viewState[subject].standardId = btn.dataset.sid;
    viewState[subject].unitId = null; viewState[subject].level = 'ALL';
    renderBuilder(subject);
  });
  document.getElementById(subject + '-unit-tabs').addEventListener('click', (e)=>{
    const btn = e.target.closest('.unit-tab-btn'); if(!btn) return;
    viewState[subject].unitId = btn.dataset.uid; viewState[subject].level = 'ALL';
    renderBuilder(subject);
  });
  document.getElementById(subject + '-level-filter').addEventListener('click', (e)=>{
    const btn = e.target.closest('.level-pill'); if(!btn) return;
    viewState[subject].level = btn.dataset.lvl;
    renderBuilder(subject);
  });
  ['strength','growth'].forEach(b=>{
    document.getElementById(`${subject}-${b}-list`).addEventListener('click', (e)=>{
      const row = e.target.closest('.statement-row'); if(!row) return;
      toggleStatement(subject, b==='strength'?'strengths':'growth', row.dataset.key);
    });
  });
});

function toggleStatement(subject, bucket, key){
  const s = currentStudent();
  const arr = s[subject][bucket];
  const idx = arr.findIndex(x=>x.key===key);
  if(idx >= 0){
    arr.splice(idx,1);
  } else {
    const [standardId, unitId, , itemIdx] = key.split('|');
    const standards = subject==='english' ? ISF_ENGLISH : ISF_GD;
    const standard = standards.find(st=>st.id===standardId);
    const unit = standard.units.find(u=>u.id===(unitId==='_'?undefined:unitId)) || standard.units.find(u=>u.id===unitId);
    const item = unit[bucket][parseInt(itemIdx,10)];
    arr.push({ key, raw: item.t });
  }
  saveState();
  renderBuilder(subject);
}

function updateCountBadge(subject, bucket){
  const s = currentStudent();
  const count = s[subject][bucket].length;
  const el = document.getElementById(`${subject}-${bucket==='strengths'?'strength':'growth'}-count`);
  const min = bucket==='strengths' ? 3 : 2, max = bucket==='strengths' ? 4 : 3;
  el.textContent = `${count} / ${bucket==='strengths'?'3–4':'2–3'}`;
  el.className = 'count-badge ' + (count>=min && count<=max ? 'ok' : 'warn');
}

function buildCommentText(student, subject, bucket){
  return student[subject][bucket]
    .map(x => applyNamePronoun(x.raw, student.name, student.pronoun))
    .join(' ');
}

function updatePreview(subject, bucket){
  const s = currentStudent();
  const text = buildCommentText(s, subject, bucket);
  const el = document.getElementById(`${subject}-${bucket==='strengths'?'strength':'growth'}-preview`);
  el.textContent = text || 'Select statements above…';
}

// ===================== FINAL POWERSCHOOL-READY PREVIEW (bottom panel) =====================
function setSpacedBox(id, rawArray, student, skipSubstitution, emptyMsg){
  const el = document.getElementById(id);
  if(!el) return;
  if(!rawArray.length){
    el.innerHTML = `<p class="ps-empty">${emptyMsg || 'Nothing selected yet…'}</p>`;
    return;
  }
  el.innerHTML = rawArray.map(raw => {
    const text = skipSubstitution ? raw : applyNamePronoun(raw, student.name, student.pronoun);
    return `<p>${escapeHtml(text)}</p>`;
  }).join('');
}

function renderFinalPreview(){
  const s = currentStudent(); if(!s) return;
  const nameEl = document.getElementById('previewStudentName');
  if(nameEl) nameEl.textContent = s.name;
  setSpacedBox('ps-pastoral', s.pastoral.text.trim() ? [s.pastoral.text.trim()] : [], s, true, 'No comment written yet…');
  setSpacedBox('ps-english-strengths', s.english.strengths.map(x=>x.raw), s, false);
  setSpacedBox('ps-english-growth', s.english.growth.map(x=>x.raw), s, false);
  setSpacedBox('ps-gd-strengths', s.gd.strengths.map(x=>x.raw), s, false);
  setSpacedBox('ps-gd-growth', s.gd.growth.map(x=>x.raw), s, false);
}

// ===================== COPY TO CLIPBOARD (handles both per-subject + final preview buttons) =====================
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.btn-copy'); if(!btn) return;
  const s = currentStudent();
  let text = '';

  if(btn.dataset.copyTarget){
    const el = document.getElementById(btn.dataset.copyTarget);
    if(el){
      text = (el.tagName === 'TEXTAREA') ? el.value : el.textContent;
      if(text && text.includes('Select statements above')) text = '';
    }
  } else if(btn.dataset.copyRaw && s){
    const type = btn.dataset.copyRaw;
    if(type === 'pastoral') text = s.pastoral.text.trim();
    else if(type === 'english-strengths') text = buildCommentText(s,'english','strengths');
    else if(type === 'english-growth') text = buildCommentText(s,'english','growth');
    else if(type === 'gd-strengths') text = buildCommentText(s,'gd','strengths');
    else if(type === 'gd-growth') text = buildCommentText(s,'gd','growth');
  }

  if(!text){ toast('Nothing to copy yet.'); return; }
  navigator.clipboard.writeText(text).then(()=> toast('Copied — ready to paste into PowerSchool!'));
});

// ===================== DATA MENU: BACKUP / RESTORE / CLEAR =====================
const dataMenuBtn = document.getElementById('dataMenuBtn');
const dataMenu = document.getElementById('dataMenu');
dataMenuBtn.addEventListener('click', ()=> dataMenu.classList.toggle('hidden'));
document.addEventListener('click', (e)=>{ if(!dataMenuBtn.contains(e.target) && !dataMenu.contains(e.target)) dataMenu.classList.add('hidden'); });

document.getElementById('backupBtn').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify(state, null, 2)], {type:'application/json'});
  downloadBlob(blob, `isf-g4-report-backup-${new Date().toISOString().slice(0,10)}.json`);
  toast('Backup downloaded.');
});
document.getElementById('restoreBtn').addEventListener('click', ()=> document.getElementById('restoreFile').click());
document.getElementById('restoreFile').addEventListener('change', (e)=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const parsed = JSON.parse(reader.result);
      if(!confirm('This will replace all current data in this browser with the backup file. Continue?')) return;
      state = Object.assign(defaultState(), parsed);
      saveState(); renderRoster(); renderEditor();
      toast('Data restored.');
    }catch(err){ alert('Could not read that file — is it a valid backup .json?'); }
  };
  reader.readAsText(file);
});
document.getElementById('clearBtn').addEventListener('click', ()=>{
  if(confirm('This will permanently delete ALL students and comments saved in this browser. Make sure you have a backup first. Continue?')){
    state = defaultState(); saveState(); renderRoster(); renderEditor();
    toast('All data cleared.');
  }
});

// ===================== EXPORT ALL TO WORD =====================
function sectionHtml(title, items){
  const inner = items.length
    ? items.map(t=>`<p>${escapeHtml(t)}</p>`).join('')
    : `<div class="box empty"><p>No comment entered yet.</p></div>`;
  const boxed = items.length ? `<div class="box">${inner}</div>` : inner;
  return `<h2>${escapeHtml(title)}</h2>${boxed}`;
}

document.getElementById('exportWordBtn').addEventListener('click', ()=>{
  if(!state.students.length){ toast('Add at least one student first.'); return; }
  let html = `<html><head><meta charset="utf-8"><style>
    body{font-family:Calibri,Arial,sans-serif; color:#242230; font-size:12px;}
    h1{color:#7A1232; border-bottom:3px solid #C9A24B; padding-bottom:6px; font-size:18px; margin-top:36px;}
    h1:first-of-type{margin-top:0;}
    h2{color:#1B2A4A; font-size:13px; margin:18px 0 6px; text-transform:uppercase; letter-spacing:.03em;}
    .box{border:1px solid #D8D2C4; background:#FBF9F5; border-radius:6px; padding:10px 14px; margin-bottom:4px;}
    .box p{margin:0 0 10px 0; line-height:1.5;}
    .box p:last-child{margin-bottom:0;}
    .box.empty{color:#8a8a8a; font-style:italic;}
    .note{font-size:10.5px; color:#6B6B76; margin-bottom:30px; border-bottom:1px solid #ccc; padding-bottom:10px;}
    hr{margin:28px 0; border:none; border-top:1px solid #ccc;}
  </style></head><body>`;
  html += `<p class="note">⚠️ When pasting into PowerSchool, each statement should be separated by a single space (not a line break) — this document shows statements on separate lines only to make proofreading easier. Use the 📋 Copy buttons in the app for PowerSchool-ready text.</p>`;
  state.students.forEach(st=>{
    html += `<h1>${escapeHtml(st.name)} — Semester ${state.semester==='S1'?'1':'2'}</h1>`;
    html += sectionHtml('General Comment (Overall Performance — Pastoral)', st.pastoral.text.trim() ? [st.pastoral.text.trim()] : []);
    html += sectionHtml('English — Area(s) of Strength', st.english.strengths.map(x=>applyNamePronoun(x.raw, st.name, st.pronoun)));
    html += sectionHtml('English — Area(s) for Growth', st.english.growth.map(x=>applyNamePronoun(x.raw, st.name, st.pronoun)));
    html += sectionHtml('Guided Discovery — Area(s) of Strength', st.gd.strengths.map(x=>applyNamePronoun(x.raw, st.name, st.pronoun)));
    html += sectionHtml('Guided Discovery — Area(s) for Growth', st.gd.growth.map(x=>applyNamePronoun(x.raw, st.name, st.pronoun)));
    html += `<hr>`;
  });
  html += `</body></html>`;
  const blob = new Blob(['\ufeff', html], {type:'application/msword'});
  downloadBlob(blob, `Grade4_Report_Comments_${state.semester}_${new Date().toISOString().slice(0,10)}.doc`);
  toast('Word document downloaded.');
});

function downloadBlob(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(str){
  return String(str).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

// ===================== INIT =====================
renderRoster();
renderEditor();
