/* =====================================================================
   ISF GRADE 4 REPORT COMMENT BANK — DATA FILE
   Pastoral examples = editable inspiration (lightly polished for grammar).
   English & Guided Discovery statements = locked verbatim from the
   2025-26 CONFIRMED Reporting Standards, except two broken placeholders
   repaired ("(his/ her)" -> "(his/her)", "(NAME) shouldaim" -> "X should aim").
   See the chat message for the full change log.
===================================================================== */

/* ---------------------- PASTORAL / VIRTUE BANK ---------------------- */
const ISF_VIRTUES = [
  { id:'zhong', name:'忠 Zhong', theme:'Loyalty & Commitment', examples:[
    "X demonstrates the virtue Zhong by consistently showing dedication to (his/her) studies, completing assignments on time, and putting forth (his/her) best effort in all tasks.",
    "X demonstrates loyalty to group projects by actively participating and ensuring that all team members contribute equally, showing the virtue Zhong.",
    "X demonstrates the virtue Zhong by taking responsibility for (his/her) commitments, whether in academics or extracurricular activities, reflecting a strong sense of duty.",
    "X is committed to personal growth, regularly seeking feedback and striving to improve (his/her) skills in various subjects, showing the virtue Zhong.",
    "X demonstrates the virtue Zhong by supporting classmates in (his/her) learning journeys, showing loyalty by encouraging them during challenging tasks."
  ]},
  { id:'xiao', name:'孝 Xiao', theme:'Respect & Obligation', examples:[
    "X demonstrates the virtue Xiao by treating teachers and classmates with respect, listening attentively and valuing diverse opinions during discussions.",
    "X demonstrates the virtue Xiao by showing a strong sense of obligation by helping to maintain a clean and organized classroom environment.",
    "X respects cultural traditions and engages thoughtfully in discussions about different backgrounds, showing the virtue Xiao.",
    "X demonstrates responsibility by completing home learning and projects diligently, showing the virtue Xiao.",
    "X demonstrates the virtue Xiao by actively participating in class activities, contributing positively to the classroom dynamic."
  ]},
  { id:'ren', name:'仁 Ren', theme:'Compassion & Kindness', examples:[
    "X demonstrates the virtue Ren by consistently displaying compassion towards peers, offering help and support when (he/she) sees others struggling academically or emotionally.",
    "X demonstrates the virtue Ren by showing kindness by including classmates in games and activities, ensuring no one feels left out during recess.",
    "X expresses empathy during discussions about social issues, helping classmates understand different perspectives with sensitivity, showing the virtue Ren.",
    "X demonstrates the virtue Ren by often checking in on friends who may be feeling down, showing a caring attitude that contributes to a positive classroom atmosphere."
  ]},
  { id:'ai', name:'愛 Ai', theme:'Love & Passion', examples:[
    "X exhibits a deep love for learning, often going beyond the curriculum to explore topics that interest (him/her) further, demonstrating the virtue Ai.",
    "X approaches science experiments with excitement and curiosity, demonstrating passion for hands-on learning experiences, demonstrating the virtue Ai.",
    "X shares (his/her) enthusiasm for reading by recommending books to classmates, fostering a love of literature among peers, demonstrating the virtue Ai.",
    "X participates actively in discussions about global issues, showing a passion for making a difference in the world, demonstrating the virtue Ai.",
    "X's creativity shines through in art projects; (he/she) approaches each task with joy and an eagerness to express (himself/herself) artistically, demonstrating the virtue Ai."
  ]},
  { id:'li', name:'禮 Li', theme:'Etiquette & Ceremony', examples:[
    "X consistently demonstrates good manners by using polite language and being considerate of others' feelings during interactions, demonstrating the virtue Li.",
    "X follows classroom rules diligently, showing self-discipline that contributes to a respectful learning environment for all, demonstrating the virtue Li.",
    "X thinks before speaking or acting, ensuring that (his/her) contributions are thoughtful and appropriate during discussions, demonstrating the virtue Li.",
    "X embodies the qualities of respectfulness by acknowledging the efforts of others and celebrating (his/her) achievements openly, demonstrating the virtue Li.",
    "X demonstrates exemplary behavior during school events, showing respect for traditions and contributing positively to the occasion, demonstrating the virtue Li."
  ]},
  { id:'yi', name:'義 Yi', theme:'Principles & Justice', examples:[
    "X stands up for fairness among peers, advocating for those who may feel marginalized or overlooked during group activities, demonstrating the virtue Yi.",
    "X consistently makes ethical choices in (his/her) work, demonstrating integrity by avoiding shortcuts or dishonesty in assignments, demonstrating the virtue Yi.",
    "X engages thoughtfully in discussions about justice issues, offering insights that reflect a strong understanding of fairness and equality, demonstrating the virtue Yi.",
    "X takes responsibility for (his/her) actions and learns from mistakes, demonstrating maturity and a commitment to personal growth, demonstrating the virtue Yi.",
    "X encourages classmates to include everyone in games and projects, promoting an atmosphere of fairness and cooperation, demonstrating the virtue Yi."
  ]},
  { id:'he', name:'和 He', theme:'Harmony & Tolerance', examples:[
    "X fosters harmony within group work by promoting collaboration and ensuring everyone's voice is heard during discussions, demonstrating the virtue He.",
    "X embraces diversity by participating actively in multicultural events at school, showing appreciation for different cultures and traditions, demonstrating the virtue He.",
    "X helps mediate conflicts among peers with patience and understanding, contributing to a peaceful classroom environment, demonstrating the virtue He.",
    "X celebrates differences among classmates by encouraging inclusive practices that promote unity within the school community, demonstrating the virtue He.",
    "X demonstrates tolerance by engaging respectfully with differing viewpoints during class debates or discussions on sensitive topics, demonstrating the virtue He."
  ]},
  { id:'ping', name:'平 Ping', theme:'Balance & Equality', examples:[
    "X effectively balances academic responsibilities with extracurricular activities, showing strong time management skills throughout the term, demonstrating the virtue Ping.",
    "X treats all classmates equally during group activities, ensuring everyone has an opportunity to contribute (his/her) ideas without bias, demonstrating the virtue Ping.",
    "X understands the importance of self-care; (he/she) takes breaks when needed to maintain focus and well-being throughout the school day, demonstrating the virtue Ping.",
    "X promotes fairness by encouraging equal participation among group members during collaborative projects or presentations, demonstrating the virtue Ping.",
    "X demonstrates an understanding of healthy competition; (he/she) celebrates both personal achievements and those of (his/her) peers equally, without jealousy or rivalry, demonstrating the virtue Ping."
  ]},
  { id:'zhi', name:'智 Zhi', theme:'Intelligence & Wisdom', examples:[
    "X demonstrates the virtue Zhi by applying critical thinking skills effectively when tackling complex problems in classwork, often finding innovative solutions independently or collaboratively with peers.",
    "X demonstrates the virtue Zhi by showing good judgment when making decisions about group work; (he/she) often takes the lead while ensuring everyone's contributions are valued.",
    "X reflects on past experiences when approaching new challenges; this wisdom helps (him/her) navigate difficult situations thoughtfully, demonstrating the virtue Zhi.",
    "X shares interesting facts (he/she) discovers while researching topics independently, which enhances classroom discussions significantly, demonstrating the virtue Zhi."
  ]}
];

/* ============================= ENGLISH ============================= */
const ISF_ENGLISH = [

  { id:'eng-discuss', title:'Collaborative Discussions', code:'Semester 1 & 2', semesters:['S1','S2'], units:[
    { id:'main', name:'Discussions', strengths:[
      {t:"X engages with diverse partners on grade 4 topics and texts, sharing relevant thoughts and insights during discussions."},
      {t:"X waits for appropriate moments to contribute to class discussions and encourages others to share (his/her) thoughts. This shows (his/her) engagement with peers and willingness to understand different perspectives."},
      {t:"X engages in deep discussions about concepts, asking open-ended questions that encourage exploration of various viewpoints. This skill enhances critical thinking."},
      {t:"X incorporates relevant vocabulary from different subjects into (his/her) discussions, which enhances (his/her) ability to communicate complex ideas effectively."},
      {t:"X effectively listens to peers in discussions and can connect and build upon (his/her) ideas meaningfully."},
      {t:"X differentiates between contexts that call for formal English (e.g., presenting ideas) and situations where informal discourse is appropriate (e.g., small-group discussion)."}
    ], growth:[
      {t:"To build confidence in speaking, X should participate more in small group discussions at home and school."},
      {t:"To manage disagreements positively, X should apply conflict resolution strategies, such as 'agreeing to disagree' or considering how different opinions can lead to better solutions."},
      {t:"To manage time effectively during group discussions, X could set time limits for different parts of the discussion and use timers to reinforce this skill."},
      {t:"To improve (his/her) ability to ask thoughtful questions that stimulate deeper discussion, X should formulate open-ended questions during family discussions or while reading together, promoting curiosity and critical thinking."},
      {t:"To improve (his/her) contributions in class discussions, X should practice active listening techniques to help (him/her) connect better with (his/her) peers' ideas and build upon them."},
      {t:"To recognize when to use formal versus informal language, X should engage in conversations about different situations where specific language styles are appropriate, helping (him/her) practice adapting (his/her) communication accordingly."}
    ]}
  ]},

  { id:'eng-report', title:'Oral Reports (Topic Organization)', code:'Semester 1 & 2', semesters:['S1','S2'], units:[
    { id:'main', name:'Reporting on a Topic', strengths:[
      {t:"X presents (his/her) topic in a well-structured manner, skillfully using appropriate facts while remembering (his/her) lines, maintaining eye contact, and engaging gestures.", lvl:"H"},
      {t:"X shows an understanding of presenting (his/her) topic with organization, using relevant details while remembering (his/her) lines, maintaining eye contact, and engaging gestures.", lvl:"M"},
      {t:"X presents (his/her) topic in a logical sequence, supported by appropriate facts and details, while remembering (his/her) lines and maintaining eye contact.", lvl:"M"},
      {t:"X includes relevant facts that effectively support (his/her) presentation's main topic.", lvl:"M"},
      {t:"X organizes (his/her) oral presentations logically, using a clear structure that is easy for the audience to follow.", lvl:"M"},
      {t:"X presents information using complete sentences, making (his/her) speech easy to understand.", lvl:"M"},
      {t:"X engages the audience with an interesting introduction that captures attention at the start of (his/her) presentation.", lvl:"M"},
      {t:"X incorporates visual aids (e.g., charts, pictures) that effectively complement (his/her) spoken content during presentations.", lvl:"M"},
      {t:"X is beginning to show an understanding of presenting (his/her) topic with organization, using relevant details while remembering (his/her) lines, maintaining eye contact, and using engaging gestures.", lvl:"L"},
      {t:"X is beginning to show an understanding of presenting (his/her) topic with organization, using relevant details while remembering (his/her) lines, and maintaining eye contact.", lvl:"L"},
      {t:"X is beginning to include relevant facts that effectively support (his/her) presentation's main topic.", lvl:"L"},
      {t:"X is beginning to organize (his/her) oral presentations logically, using a clear structure that is easy for the audience to follow.", lvl:"L"},
      {t:"X is beginning to present information in complete sentences, making (his/her) speech easy to understand.", lvl:"L"},
      {t:"X is beginning to engage the audience with an interesting introduction that captures attention at the start of (his/her) presentation.", lvl:"L"},
      {t:"X is beginning to incorporate visual aids (e.g., charts, pictures) that effectively complement (his/her) spoken content during presentations.", lvl:"L"}
    ], growth:[
      {t:"To refine conclusions, X should summarize key points effectively at the end of (his/her) reports or presentations.", lvl:"H"},
      {t:"To refine conclusions, X should summarize key points effectively at the end of (his/her) reports or presentations.", lvl:"M"},
      {t:"To improve audience awareness, X should consider who will hear or read (his/her) report and adjust tone and language accordingly.", lvl:"M"},
      {t:"To enhance engagement, X should practice writing or delivering more compelling introductions that pose questions or interesting facts.", lvl:"M"},
      {t:"To improve transitions, X should practice using transition words or phrases to connect ideas smoothly in writing and speaking.", lvl:"M"},
      {t:"To improve audience engagement, X would benefit from practicing gestures that illustrate (his/her) points more vividly and create a more dynamic presentation.", lvl:"M"},
      {t:"To improve audience engagement, X is encouraged to practice looking at (his/her) audience more frequently, as this will make (his/her) presentation feel more interactive.", lvl:"M"},
      {t:"To enhance presentation skills, X would benefit from rehearsing (his/her) lines more often, which will help reduce reliance on notes and lead to a more fluid and engaging performance.", lvl:"M"},
      {t:"To communicate clearly, X should plan and organise (his/her) ideas before presenting, focusing on key points and supporting details.", lvl:"L"}
    ]}
  ]},

  { id:'eng-fluency', title:'Reading Fluency & Expression', code:'Semester 1 & 2', semesters:['S1','S2'], units:[
    { id:'main', name:'Fluency & Expression', strengths:[
      {t:"X demonstrates strong reading fluency and accuracy, employing expressive intonation that engages listeners and enhances the enjoyment of the text."},
      {t:"X demonstrates appropriate pacing when reading aloud, adjusting speed based on the text's mood or meaning."},
      {t:"X recognizes punctuation marks and uses them to guide expression while reading."},
      {t:"X shows confidence while reading aloud, demonstrating familiarity with the text."},
      {t:"X self-corrects errors while reading, demonstrating awareness of accuracy."},
      {t:"X reads with a loud and clear voice that captures listeners' attention and greatly enhances (his/her) engagement with the text."}
    ], growth:[
      {t:"To enhance fluency, X should practice reading familiar texts multiple times to build confidence and speed."},
      {t:"To improve expression, X should emphasize keywords and phrases that convey meaning in the text."},
      {t:"To refine phrasing when reading, X should practice chunking sentences into meaningful phrases rather than reading word by word."},
      {t:"To build reading stamina, X should gradually increase the length of texts read aloud to improve endurance and confidence."},
      {t:"To strengthen (his/her) reading accuracy, X should focus on self-monitoring to catch mispronounced words, skipped words, and unnecessary additions during (his/her) reading."},
      {t:"To engage listeners more effectively, X would benefit from projecting (his/her) voice more loudly during readings."}
    ]},
    { id:'overall', name:'Overall Reading', strengths:[], growth:[
      {t:"With consistent daily reading practice, X will continue to grow in confidence and fluency as a reader."},
      {t:"Encouraging X to consistently choose grade-level books will help build stronger reading habits and comprehension skills."},
      {t:"To build strong reading habits, X should practice choosing a balance of fiction and nonfiction books at grade level."}
    ]}
  ]},

  { id:'eng-comprehension', title:'Reading Comprehension', code:'Semester 1 & 2', semesters:['S1','S2'], units:[
    { id:'u1-nonfiction', name:'U1 — Non-Fiction Text Structures', strengths:[
      {t:"X consistently identifies various nonfiction text structures and adeptly uses this insight to identify key ideas when summarizing texts clearly.", lvl:"H"},
      {t:"X can recognize nonfiction text structures and apply this knowledge to identify key ideas when summarizing texts.", lvl:"M"},
      {t:"X is beginning to recognize nonfiction text structures and apply this knowledge to identify key ideas when summarizing texts.", lvl:"L"}
    ], growth:[
      {t:"To improve, X needs to work on recognizing different nonfiction text structures, which will help (him/her) better identify key ideas when summarizing texts.", lvl:"H"}
    ]},
    { id:'u1-summarizing', name:'U1 — Summarizing', strengths:[
      {t:"X can summarize the main points of a text with clear and relevant supporting evidence, demonstrating a solid understanding of the material.", lvl:"H"},
      {t:"X understands summarizing the main points in a text with supporting evidence.", lvl:"M"},
      {t:"X is beginning to summarize the main points of a text with supporting evidence.", lvl:"L"}
    ], growth:[
      {t:"To improve summarization skills, X needs to write more concise summaries that capture only the essential points.", lvl:"H"},
      {t:"To enhance summarizing skills, X should focus on the main points in a text and add supporting evidence.", lvl:"M"},
      {t:"To improve summarizing, X should practice with simpler texts to help (him/her) identify main points and supporting evidence.", lvl:"L"}
    ]},
    { id:'u1-synthesis', name:'U1 — Synthesis', strengths:[
      {t:"X demonstrates a strong ability to synthesize information from similar texts, generating insightful and nuanced understandings.", lvl:"H"},
      {t:"X understands synthesis by connecting ideas across different texts to build understanding.", lvl:"M"},
      {t:"X is beginning to synthesize by connecting ideas across different texts to build understanding.", lvl:"L"}
    ], growth:[
      {t:"To improve synthesizing skills, X should focus on identifying key subtopics across texts to integrate better (his/her) insights.", lvl:"H"},
      {t:"To improve synthesizing skills, X should practice comparing and contrasting main ideas from different texts.", lvl:"M"},
      {t:"To improve synthesizing skills, X should practice integrating information from texts with conflicting or differing perspectives.", lvl:"L"},
      {t:"To improve synthesizing, X should practice with simpler texts to help (him/her) connect ideas across different texts to build understanding.", lvl:"L"},
      {t:"To develop (his/her) synthesis skills even further, X is encouraged to focus on analyzing key words between original texts to identify subtle nuances when synthesizing information.", lvl:"L"}
    ]},
    { id:'u1-both', name:'U1 — Summarizing & Synthesis Combined', strengths:[
      {t:"X demonstrates a strong ability to summarize and synthesize key concepts from multiple texts, showcasing a deep understanding of the material.", lvl:"H"},
      {t:"X understands summarizing and synthesizing information, effectively logically organizing (his/her) thoughts.", lvl:"M"}
    ], growth:[
      {t:"To strengthen (his/her) summarization and synthesis skills, X should focus on paraphrasing information from referenced texts into (his/her) own words while carefully retaining the original meaning.", lvl:"H"}
    ]},
    { id:'u23-character-trait', name:'U2 & U3 — Character Trait Analysis', strengths:[
      {t:"X displays a strong understanding of character analysis, consistently providing solid claims, relevant evidence, and clear explanations to illustrate traits and changes.", lvl:"H"},
      {t:"X displays a strong understanding of character analysis, consistently providing well-reasoned claims supported by relevant evidence and clear explanations to illustrate specific traits.", lvl:"H"},
      {t:"X displays a strong understanding of character analysis, consistently providing solid claims, relevant evidence, and clear explanations to illustrate how a character changes throughout a story.", lvl:"H"},
      {t:"X provides in-depth character analysis, showcasing contrasting traits and supporting (his/her) insights with relevant evidence.", lvl:"H"},
      {t:"X clearly understands character analysis, consistently providing solid claims, relevant evidence, and clear explanations to illustrate traits and changes.", lvl:"M"},
      {t:"X displays a clear understanding of character analysis, consistently providing solid claims while progressively working to include relevant evidence and clear explanations to illustrate character traits and changes.", lvl:"M"},
      {t:"X clearly understands character analysis, consistently providing solid claims, including relevant evidence and attempting to have clear explanations to illustrate traits and changes.", lvl:"M"},
      {t:"X clearly understands character analysis, consistently providing solid claims, have clear explanations to illustrate traits and changes while attempting to include relevant evidence.", lvl:"M"},
      {t:"X is beginning to understand character analysis, demonstrating growth in supporting claims with relevant evidence and providing explanations to illustrate character traits and changes.", lvl:"L"}
    ], growth:[
      {t:"To deepen (his/her) understanding of character analysis, X should expand (his/her) explanations to more effectively support (his/her) claims.", lvl:"H"},
      {t:"To enhance the depth of (his/her) literary analysis, X should focus on learning a wider variety of descriptive words to more accurately capture a character's complex personality and behavior.", lvl:"H"},
      {t:"To deepen (his/her) understanding of character analysis, X should integrate more varied evidence to support (his/her) claims effectively.", lvl:"H"},
      {t:"To enhance character analytical skills, X needs to connect (his/her) claims about traits and changes to appropriate evidence and explanations more effectively.", lvl:"M"},
      {t:"To improve character analysis skills, X should work on finding appropriate and effective evidence that helps support a claim about a character's trait.", lvl:"M"}
    ]},
    { id:'u3-character-perspective', name:'U3 — Character Perspective Analysis', strengths:[
      {t:"X effectively analyzes how a character's experiences and societal role influence their perspective, decisions, and actions within the narrative.", lvl:"H"},
      {t:"X can analyze how a character's experiences and societal role influence their perspective, decisions, and actions within the narrative.", lvl:"M"},
      {t:"X is beginning to analyze how a character's experiences and societal role influence their perspective, decisions, and actions within the narrative.", lvl:"L"}
    ], growth:[
      {t:"To improve (his/her) perspective analysis skills, X should examine how a character's experiences and/or societal role influence their decisions and actions within the narrative.", lvl:"H"},
      {t:"To improve (his/her) perspective analysis skills, X should focus on explaining in greater depth how a character's experiences and/or societal role influence their decisions and actions within the narrative.", lvl:"M"}
    ]},
    { id:'u3-parts-whole', name:'U3 — Parts of a Whole & Symbolism', strengths:[
      {t:"X skillfully analyzes how specific parts of the story enhance the plot and themes, showcasing deep insight and understanding.", lvl:"H"},
      {t:"X skillfully analyzes how a specific part of a story intricately contributes to character development, plot progression, and thematic depth.", lvl:"H"},
      {t:"X excels in noticing and analyzing symbolism in the text, demonstrating a sophisticated understanding of how small objects convey deeper meanings.", lvl:"H"},
      {t:"X is beginning to analyze how different elements in the story support the overall plot and themes.", lvl:"M"},
      {t:"X can analyze how a specific part of a story contributes to the development of a character, plot, or theme.", lvl:"M"},
      {t:"X effectively identifies symbolic elements within the reading material, showing a developing understanding of their significance.", lvl:"M"},
      {t:"X is learning to recognize the relationship between specific story parts and the whole; with support, (he/she) can explain how a particular scene influences the development of a character or the plot.", lvl:"L"},
      {t:"X is beginning to identify symbolic elements within the reading material, showing a developing understanding of their significance.", lvl:"L"}
    ], growth:[
      {t:"To enhance (his/her) analysis skills, X must delve deeper into how various parts of the story support the central themes and plot development.", lvl:"H"},
      {t:"To improve (his/her) understanding of symbolism, X should focus on developing (his/her) ability to notice key symbols in the text and explore their deeper meanings.", lvl:"H"},
      {t:"To enhance his/her analysis skills in reading, X would benefit from exploring the connections between story parts and their deeper impact on character, plot, and theme.", lvl:"M"}
    ]},
    { id:'u23-book-clubs', name:'U2 & U3 — Book Clubs', strengths:[
      {t:"X demonstrates a strong ability to refine questioning techniques, consistently posing more profound, analytical questions about the text during discussions.", lvl:"H"},
      {t:"X is developing questioning techniques and often asks analytical questions about the text during discussions.", lvl:"M"},
      {t:"X shows enthusiasm for reading the book club selection and actively participates in discussions, enhancing (his/her) understanding and enjoyment of the story."},
      {t:"X demonstrates a notable ability in (his/her) analytical skills and understanding of the book club selection by actively participating in discussions, which enhances (his/her) engagement with the material."},
      {t:"X asks insightful questions about the book club selection, demonstrating curiosity and a desire to explore its themes and ideas more deeply."}
    ], growth:[
      {t:"To develop a deeper comprehension of the book club selection, X would benefit from increasing (his/her) participation in discussions.", lvl:"H"},
      {t:"To refine questioning techniques, X should learn to ask more profound and analytical questions about the text during discussions.", lvl:"M"},
      {t:"To develop analytical skills and an understanding of the book club selection, X should aim to participate more actively in discussions about the book club selection."},
      {t:"To develop analytical reading skills, X should focus on comparing and contrasting characters or events within the same genre."}
    ]},
    { id:'general-comprehension', name:'General Reading Comprehension', strengths:[
      {t:"X enhances comprehension by effectively identifying the author's purpose in various texts, such as to inform, entertain, or persuade."},
      {t:"X applies various comprehension strategies, such as predicting, questioning, visualizing, and summarizing while reading, which aids in understanding complex material."},
      {t:"X excels at identifying main ideas and supporting details in texts, demonstrating strong analytical skills that contribute to deeper understanding."}
    ], growth:[
      {t:"To enhance reading comprehension, X should practice identifying the author's purpose in various texts (e.g., to inform, entertain, persuade)."},
      {t:"To strengthen inference skills, X should practice drawing conclusions based on hints and clues provided in the text."}
    ]}
  ]},

  { id:'eng-writing', title:'Writing Variety (Opinion / Narrative / Biography)', code:'Semester 1 & 2', semesters:['S1','S2'], units:[
    { id:'overall-writing', name:'Overall Writing', strengths:[], growth:[
      {t:"To continue to develop (his/her) writing stamina, X should maintain focus by establishing daily writing habits and celebrating milestones."}
    ]},
    { id:'u1-opinion', name:'U1 — Opinion Writing', strengths:[
      {t:"X effectively uses clear topic and concluding sentences, creating well-structured paragraphs that support (his/her) ideas.", lvl:"H"},
      {t:"X demonstrates an impressive command of expert vocabulary in (his/her) writing, enriching (his/her) work with precise and engaging language that captivates the reader.", lvl:"H"},
      {t:"X consistently applies correct citation formats in (his/her) reference list, demonstrating strong research skills.", lvl:"H"},
      {t:"X skillfully includes a range of evidence, such as statistics, quotes and anecdotes, to convincingly support (his/her) arguments.", lvl:"H"},
      {t:"X skillfully uses figurative language to enhance (his/her) opinion writing and successfully engage the reader.", lvl:"H"},
      {t:"X skillfully includes a range of evidence, such as statistics and mini-stories, to convincingly support (his/her) arguments.", lvl:"H"},
      {t:"X crafts compelling and thorough explanations for each piece of evidence, providing clear and sufficient detail for the reader.", lvl:"H"},
      {t:"X successfully uses the mini-lessons to create thought-provoking leads that hook the reader.", lvl:"M"},
      {t:"X successfully uses the mini-lessons to create compelling endings that bring the writing to a close.", lvl:"M"},
      {t:"X is consistently improving (his/her) writing stamina, resulting in more focused and well-developed writing pieces.", lvl:"M"},
      {t:"X is beginning to include a variety of evidence, such as facts and examples, to support (his/her) arguments.", lvl:"M"},
      {t:"X effectively uses interesting vocabulary in (his/her) writing, making (his/her) ideas more vivid and engaging.", lvl:"M"},
      {t:"X effectively expands on (his/her) evidence, providing clear and sufficient detail for the reader.", lvl:"M"},
      {t:"X is beginning to use clear topic and concluding sentences, creating well-structured paragraphs that support (his/her) ideas.", lvl:"M"},
      {t:"X is beginning to use expert vocabulary in (his/her) writing to make it more engaging.", lvl:"L"},
      {t:"X is starting to add relevant facts in (his/her) opinion writing in order to provide solid evidence to support (his/her) reasons.", lvl:"L"},
      {t:"X is learning to add a wider range of evidence, such as data, quotes and anecdotes, to support (his/her) thesis statement in opinion writing.", lvl:"L"},
      {t:"X is beginning to expand on (his/her) evidence, providing clear and sufficient detail for the reader.", lvl:"L"}
    ], growth:[
      {t:"To improve (his/her) paragraph structure in writing, X could work on consistently including clear topics and concluding sentences.", lvl:"H"},
      {t:"To enhance the engagement of (his/her) work, X should aim to use more dynamic verbs and sensory adjectives.", lvl:"H"},
      {t:"To improve (his/her) writing, X should incorporate a wider variety of figurative language to add depth and creativity to (his/her) pieces.", lvl:"H"},
      {t:"To strengthen (his/her) arguments when writing opinion pieces, X could benefit from including a wider variety of evidence to support (his/her) points.", lvl:"H"},
      {t:"To demonstrate stronger research skills, X can add a list of references at the end of (his/her) opinion writing.", lvl:"H"},
      {t:"X can add more data or statistics to strengthen the reasons supporting (his/her) opinion writing thesis statement.", lvl:"H"},
      {t:"To make (his/her) opinion writing lead more thought-provoking, X should pay attention to the strategies shared in class and apply them to (his/her) writing.", lvl:"H"},
      {t:"To make (his/her) opinion writing conclusion more compelling, X should pay attention to the strategies shared in class and apply them to (his/her) writing.", lvl:"M"},
      {t:"X should continue to improve (his/her) writing stamina to be able to write well-developed and finished writing pieces.", lvl:"M"},
      {t:"To strengthen (his/her) opinion writing, X should provide evidence that is relevant to the reason.", lvl:"M"},
      {t:"To improve (his/her) opinion writing, X must work on providing evidence gathered during the research phase to support (his/her) reasons.", lvl:"M"},
      {t:"To improve (his/her) opinion writing, X must work on moving from stating evidence to explaining its significance in greater detail.", lvl:"M"},
      {t:"To improve (his/her) opinion writing, X would benefit from spending more time explaining how (his/her) evidence connects to the main ideas.", lvl:"M"},
      {t:"To strengthen (his/her) arguments, X should focus on crafting clear concluding sentences at the end of (his/her) paragraphs that explicitly link back to their main claim.", lvl:"M"}
    ]},
    { id:'u2-realistic-fiction', name:'U2 — Realistic Fiction', strengths:[
      {t:"X incorporates elements of conflict and resolution in (his/her) narratives, effectively generating tension and engaging the reader's interest."},
      {t:"X incorporates dialogue effectively to develop characters and advance the story."},
      {t:"X writes in a voice that matches the tone of (his/her) narrative."},
      {t:"X organizes (his/her) narratives well by using paragraphs to separate the different events in the story.", lvl:"M"},
      {t:"X successfully uses the mini-lessons to create engaging endings that bring the story to a close."},
      {t:"X effectively conveys (his/her) narratives in a sequential paragraph format, utilizing transitions to advance the story."},
      {t:"X skillfully uses figurative language to enhance (his/her) writing and create engaging imagery for the reader."},
      {t:"X independently plans and writes a realistic fiction story using the story arc framework."},
      {t:"X uses descriptive language to paint vivid images in (his/her) narratives."},
      {t:"X successfully uses the mini-lessons to create engaging leads that hook the reader.", lvl:"M"},
      {t:"X builds toward an effective climax in narratives by using vivid details to create tension and advance the story."},
      {t:"X uses dialogue and internal thoughts effectively to show a character's emotions and motivations in narratives."},
      {t:"X demonstrates strong character development in narratives by showing how characters change or grow through their actions, dialogue, and thoughts."}
    ], growth:[
      {t:"To expand vocabulary, X should explore synonyms and descriptive phrases that enhance (his/her) storytelling."},
      {t:"To provide more focus and detail in (his/her) narratives, X is encouraged to focus on the small moment of the story rather than recounting the entire event."},
      {t:"To hook the reader, X should work on creating engaging leads from a variety of prompts."},
      {t:"To bring (his/her) story to a close, X should create engaging endings, a closure, or a conclusion that follows from the narrated experiences or events.", lvl:"M"},
      {t:"To enhance plot development, X should practice planning (his/her) stories before writing to ensure a coherent structure."},
      {t:"To bring the story to life, X needs to elaborate on the main parts by including more sensory details and figurative language."},
      {t:"To improve the climax in narratives, X should use more vivid details to build tension."},
      {t:"To improve character depth in narratives, X should include internal thoughts to better reveal emotions and motivations."}
    ]},
    { id:'u3-biography', name:'U3 — Biography Writing', strengths:[
      {t:"X successfully uses the mini-lessons to create engaging endings that bring the biography to a close."},
      {t:"X creates thought-provoking biography introductions that successfully hook the reader."},
      {t:"X successfully creates engaging endings that bring the biography to a close, leaving the reader with a final thought.", lvl:"H"},
      {t:"X effectively uses clear topic and concluding sentences, creating well-structured paragraphs that support (his/her) ideas.", lvl:"H"},
      {t:"X expertly connects different pieces of information using meaningful transition words and phrases."},
      {t:"X introduces information in chronological order when writing biographies, making (his/her) writing easy to follow and understand.", lvl:"H"},
      {t:"X organizes (his/her) paragraphs well in (his/her) writing, using appropriate headings and sub-headings that enhance clarity and guide the reader through the text.", lvl:"H"},
      {t:"X consistently maintains a formal tone in (his/her) biography writing, effectively conveying ideas with clarity and professionalism, significantly enhancing the quality of (his/her) work.", lvl:"H"},
      {t:"X chose compelling comparisons and used figurative language effectively to clarify (his/her) points throughout the biography.", lvl:"H"},
      {t:"X consistently demonstrates a sophisticated ability to synthesize complex ideas by using a wide range of transition phrases such as \"moreover\" and \"as a result\" to create a seamless flow of information.", lvl:"H"},
      {t:"X shows a strong understanding of paraphrasing by rephrasing ideas with precision, maintaining the original meaning, and integrating them smoothly into (his/her) biographies with clear, coherent wording.", lvl:"H"},
      {t:"X's citations are accurate and consistently formatted, reflecting a thorough understanding of academic integrity.", lvl:"H"},
      {t:"X's citations are mostly accurate and appropriately formatted, demonstrating strong research skills.", lvl:"M"},
      {t:"X shows a good understanding of paraphrasing, effectively rephrasing ideas coherently.", lvl:"M"},
      {t:"X demonstrates a solid understanding of formal language, using an appropriate tone in (his/her) writing that contributes to clear communication; continued refinement will further elevate (his/her) expression.", lvl:"M"},
      {t:"X is beginning to use clear topic and concluding sentences, creating well-structured paragraphs that support (his/her) ideas.", lvl:"L"},
      {t:"X groups information into sections and writes biography paragraphs that focus on one topic or aspect of a famous person's life.", lvl:"L"},
      {t:"X is beginning to effectively use a teaching tone in (his/her) writing, guiding the reader through the biography with clarity and a sense of authority.", lvl:"L"}
    ], growth:[
      {t:"To further enhance the quality of (his/her) writing, X should incorporate a wider variety of facts and details, such as dates, names, examples, quotes, charts, and definition boxes in (his/her) biography."},
      {t:"To improve the quality of (his/her) biography writing, X should focus on maintaining a consistent formal tone, which will enhance both the clarity and the impact of (his/her) ideas.", lvl:"H"},
      {t:"To improve (his/her) paragraph structure in writing, X could work on consistently including clear topics and concluding sentences.", lvl:"H"},
      {t:"To improve flow in (his/her) biography, X should use a variety of transition words to link ideas smoothly between sentences.", lvl:"H"},
      {t:"To create more engaging endings for (his/her) biography, X should summarize the key points and leave the reader with a final thought about why the person matters.", lvl:"H"},
      {t:"To maintain (his/her) clarity when writing biographies, X could work on presenting information more consistently in chronological order.", lvl:"H"},
      {t:"To improve (his/her) writing, X should enhance (his/her) paraphrasing skills by fully capturing the original meaning in (his/her) own words.", lvl:"H"},
      {t:"To strengthen (his/her) research skills, X would benefit from reviewing the correct citation formats for both (his/her) essay and reference list.", lvl:"M"},
      {t:"Taking the time to write detailed and accurate notes will help X significantly improve the length and quality of (his/her) biography.", lvl:"M"},
      {t:"Adding figurative language and interesting comparisons will help X write a more engaging biography that helps the reader visualize the struggles and achievements of the person they are writing about.", lvl:"M"},
      {t:"To improve overall clarity and coherence of (his/her) biography, X should aim to group information into sections that focus on one topic or aspect of a famous person's life.", lvl:"L"}
    ]}
  ]},

  { id:'eng-writingprocess', title:'Writing Process (Plan • Draft • Revise)', code:'Semester 2 only', semesters:['S2'], units:[
    { id:'main', name:'Writing Process', strengths:[
      {t:"X uses the writing template with clarity and detail, and (his/her) ideas are fully developed and consistently revisited as the drafting process progresses.", lvl:"H"},
      {t:"X reflects on (his/her) writing after completing a piece, recognizing what (he/she) did well and what (he/she) can improve.", lvl:"H"},
      {t:"X effectively utilizes available resources and tools to critically reflect on (his/her) work, making thoughtful edits that enhance the quality of (his/her) writing.", lvl:"H"},
      {t:"X effectively applies (his/her) knowledge of grammatical rules to proofread and improve the final draft of (his/her) writing."},
      {t:"X plans (his/her) writing well by brainstorming ideas and organizing them using outlines or graphic organizers.", lvl:"M"},
      {t:"X edits (his/her) writing carefully, checking for grammar, punctuation, and spelling mistakes.", lvl:"M"},
      {t:"X writes clear drafts that include a strong introduction, detailed body paragraphs, and a conclusion that wraps up (his/her) ideas.", lvl:"M"},
      {t:"X applies (his/her) knowledge of grammatical rules to proofread and improve the final draft of (his/her) writing.", lvl:"M"},
      {t:"X demonstrates an emerging ability to use the planning template to organize (his/her) ideas.", lvl:"L"},
      {t:"X makes small improvements, such as fixing spelling and capitalization, which somewhat enhance the overall quality of (his/her) work.", lvl:"L"},
      {t:"X is starting to self-reflect on (his/her) writing and occasionally offers peer feedback while beginning to apply some of the teacher's suggestions during the editing and revising process.", lvl:"L"},
      {t:"X is beginning to apply (his/her) knowledge of grammatical rules to proofread and improve the final draft of (his/her) writing.", lvl:"L"}
    ], growth:[
      {t:"X is encouraged to use the writing template with clarity and detail while ensuring that (his/her) ideas are fully developed and consistently revisited throughout the drafting process.", lvl:"H"},
      {t:"To strengthen (his/her) writing process, X is encouraged to use the writing template more thoughtfully, ensuring that (his/her) ideas are fully developed and consistently revisited throughout the drafting process.", lvl:"H"},
      {t:"To better use feedback, X should practice understanding peer comments and incorporating helpful suggestions into (his/her) revisions.", lvl:"H"},
      {t:"To improve (his/her) writing, X could benefit from consistently using resources and tools to reflect on and edit (his/her) work.", lvl:"M"},
      {t:"To enhance (his/her) writing process, X should focus on incorporating available resources and tools for critical reflection and editing.", lvl:"M"},
      {t:"To enhance editing skills, X should work on identifying more complex grammar issues in (his/her) writing.", lvl:"M"},
      {t:"To improve clarity, X's next step is to consciously plan the sequence of (his/her) ideas to ensure a smooth and logical flow for the reader.", lvl:"M"},
      {t:"To utilize the writing process more effectively, X is encouraged to develop a more detailed planning approach and structure (his/her) work more thoughtfully.", lvl:"L"},
      {t:"To enhance editing skills, X should develop a more systematic proofreading strategy to catch recurring grammatical errors.", lvl:"L"},
      {t:"To enhance (his/her) editing skills, X should continue using a systematic approach to eliminate recurring grammatical errors.", lvl:"L"},
      {t:"To improve the polish of (his/her) work, X should use (his/her) understanding of the rules to proofread for minor inconsistencies.", lvl:"L"},
      {t:"To enhance (his/her) writing process, X should work on balancing (his/her) time across planning, drafting, and revising to allow each stage to develop fully."},
      {t:"To enhance the detail in (his/her) final writing, X is encouraged to consistently transfer the concrete facts gathered from (his/her) research directly into (his/her) drafts."}
    ]}
  ]},

  { id:'eng-grammar-s1', title:'Grammar Conventions', code:'Semester 1', semesters:['S1'], units:[
    { id:'overall', name:'Overall', strengths:[{t:"X demonstrates a strong command of grammar, punctuation, and spelling, consistently spotting and amending errors in (his/her) writing."}], growth:[{t:"To strengthen (his/her) writing, X should make grammar a key focus, addressing frequent errors in tenses, sentence structure, spelling, punctuation, and capitalization."}]},
    { id:'varying', name:'Varying Sentences', strengths:[{t:"X mixes simple, compound, and complex sentences, including varying sentence openings, to engage the reader."}], growth:[{t:"For a more engaging experience for the reader, X should mix simple, compound, and complex sentences and vary sentence openings."}]},
    { id:'tenses', name:'Tenses', strengths:[{t:"X demonstrates that (he/she) can use verb tenses accurately and consistently in (his/her) writing."}], growth:[{t:"To improve (his/her) writing, X should use verb tenses accurately and consistently."}]},
    { id:'dialogue', name:'Dialogue Punctuation', strengths:[{t:"X uses dialogue punctuation successfully by placing commas and quotation marks in the correct positions."}], growth:[{t:"X should improve the use of dialogue punctuation by placing commas and quotation marks correctly."}]},
    { id:'punctuation', name:'General Punctuation', strengths:[{t:"X uses correct punctuation, such as commas, full stops, and apostrophes, so ideas are communicated clearly and are easy to understand."}], growth:[{t:"To strengthen (his/her) writing, X should use correct punctuation, such as commas, full stops, and apostrophes, to ensure ideas are communicated clearly and are easy to understand."}]},
    { id:'runon', name:'Run-on Sentences', strengths:[{t:"X revises run-on sentences into clear, concise, and correctly punctuated statements with significant success."}], growth:[{t:"To improve sentence structure, X should revise run-on sentences into clear, concise, and correctly punctuated statements."}]},
    { id:'spelling', name:'Spellings', strengths:[{t:"X successfully applies spelling rules and phonetic strategies to unfamiliar words."}], growth:[{t:"To improve (his/her) spelling, X should apply spelling rules and phonetic strategies to unfamiliar words and develop routines for checking words that may be misspelled."}]},
    { id:'capitalisation', name:'Capitalisation', strengths:[{t:"X consistently capitalizes the first word in sentences, the pronoun I, and proper nouns such as names, places, and titles."}], growth:[{t:"To improve (his/her) capitalization, X should consistently capitalize the first word in sentences, the pronoun I, and proper nouns, such as names, places, and titles."}]},
    { id:'sva', name:'Subject–Verb Agreement', strengths:[{t:"X ensures consistent subject–verb agreement by matching singular and plural subjects with the correct verb forms throughout (his/her) writing."}], growth:[{t:"To improve accuracy, X should ensure consistent subject–verb agreement by matching singular and plural subjects with the correct verb forms throughout (his/her) writing."}]},
    { id:'sendings', name:'S Endings', strengths:[{t:"X checks final -s, -es, and 's endings throughout drafts for correct use in verbs, plurals, and possession."}], growth:[{t:"To add clarity to (his/her) writing, X should check final -s, -es, and 's endings throughout drafts for correct use in verbs, plurals, and possession."}]}
  ]},

  { id:'eng-grammar-s2', title:'Grammar Conventions', code:'Semester 2', semesters:['S2'], units:[
    { id:'overall', name:'Overall', strengths:[{t:"X consistently demonstrates a strong command of writing conventions; (his/her) ability to independently proofread and refine (his/her) work ensures a high level of accuracy and professionalism."}], growth:[{t:"To improve the overall clarity of (his/her) assignments, X should continue to focus on technical accuracy, refining (his/her) use of tenses, sentence structure, spelling and punctuation to create more polished final drafts."}]},
    { id:'varying', name:'Varying Sentences', strengths:[{t:"X skillfully employs a variety of sentence structures, including simple, compound, and complex sentences, with diverse openings to maintain reader interest."}], growth:[{t:"To enhance reader engagement, X should continue to focus on incorporating a mix of simple, compound, and complex sentences with varied sentence openings, creating a more dynamic flow in (his/her) writing."}]},
    { id:'tenses', name:'Tenses', strengths:[{t:"X has shown consistent mastery of verb tenses, applying them accurately and appropriately throughout (his/her) writing."}], growth:[{t:"To ensure a logical chronological flow, X should continue to work on applying verb tenses accurately, maintaining consistency throughout (his/her) writing to avoid confusion for the reader."}]},
    { id:'dialogue', name:'Dialogue Punctuation', strengths:[{t:"X demonstrates proficiency in dialogue punctuation, correctly positioning commas and quotation marks with confidence."}], growth:[{t:"To ensure (his/her) writing is clear and properly formatted, X should continue practicing dialogue punctuation, focusing on the correct placement of commas and quotation marks to distinguish spoken words from narrative text."}]},
    { id:'punctuation', name:'General Punctuation', strengths:[{t:"X applies punctuation conventions effectively, including commas, full stops, and apostrophes, ensuring clarity and readability in (his/her) writing."}], growth:[{t:"To enhance clarity in (his/her) writing, X should continue to focus on applying correct punctuation, including commas, full stops, and apostrophes, so ideas are communicated clearly and are easy to understand."}]},
    { id:'runon', name:'Run-on Sentences', strengths:[{t:"X demonstrates a strong ability to identify and correct run-on sentences, transforming them into well-structured, properly punctuated statements."}], growth:[{t:"To improve sentence clarity, X should continue to focus on identifying and revising run-on sentences into clear, concise, and correctly punctuated statements."}]},
    { id:'spelling', name:'Spellings', strengths:[{t:"X consistently applies spelling conventions and phonetic knowledge when tackling challenging or unfamiliar vocabulary, demonstrating a resilient approach to writing."}], growth:[{t:"To strengthen (his/her) written accuracy, X should continue applying spelling rules and phonetic strategies to unfamiliar words, establishing consistent routines for checking (his/her) words to identify and correct potential errors."}]},
    { id:'capitalisation', name:'Capitalisation', strengths:[{t:"X demonstrates mastery of capitalization rules, correctly capitalizing sentence beginnings, the pronoun I, and proper nouns including names, places, and titles."}], growth:[{t:"To refine (his/her) capitalization skills, X should continue to consistently capitalize the first word in sentences, the pronoun \"I,\" and proper nouns."}]},
    { id:'sva', name:'Subject–Verb Agreement', strengths:[{t:"X maintains accurate subject–verb agreement, consistently pairing singular and plural subjects with the appropriate verb forms in (his/her) writing."}], growth:[{t:"To enhance writing accuracy, X should continue to focus on maintaining consistent subject-verb agreement by matching singular and plural subjects with the correct verb forms throughout (his/her) writing."}]},
    { id:'sendings', name:'S Endings', strengths:[{t:"X demonstrates careful attention to -s, -es, and 's endings, applying them correctly in verbs, plurals, and possessive forms throughout (his/her) drafts to ensure grammatical accuracy."}], growth:[{t:"To enhance the technical quality of (his/her) work, X should focus on the accurate application of inflectional suffixes, working to distinguish between pluralization and possession to provide greater clarity for the reader."}]}
  ]}
];

/* ========================= GUIDED DISCOVERY ========================= */
const ISF_GD = [

  { id:'gd-questions', title:'Asks & Identifies Questions', code:'Semester 2', semester:'S2', units:[
    { id:'main', name:'Questioning & Variables', strengths:[
      {t:"In Guided Discovery, X asks relevant questions, demonstrating an understanding of how to connect (his/her) inquiries to scientific phenomena.", lvl:"G4"},
      {t:"In Guided Discovery, X's questions are related to specific phenomena.", lvl:"G4"},
      {t:"In Guided Discovery, X formulates questions based on direct observations or personal experiences, showing (his/her) ability to engage with the material meaningfully.", lvl:"G4"},
      {t:"In Guided Discovery, X successfully formulates testable questions that lead to scientific investigations, reflecting (his/her) understanding of the inquiry process.", lvl:"G4"},
      {t:"In Guided Discovery, X can make a simple, testable hypothesis for (his/her) investigation, showcasing (his/her) developing analytical skills.", lvl:"G4"},
      {t:"In Guided Discovery, X asks testable questions that require sufficient and relevant evidence to answer, showcasing (his/her) ability to engage critically with the material.", lvl:"G5"},
      {t:"In Guided Discovery, X formulates questions that relate to the phenomenon in observable and testable ways, reflecting (his/her) understanding of the inquiry process.", lvl:"G5"},
      {t:"In Guided Discovery, X successfully formulates testable questions and hypotheses, indicating a firm grasp of structuring scientific investigations.", lvl:"G5"},
      {t:"In Guided Discovery, X can identify and explain independent and controlled variables relevant to (his/her) experiment, demonstrating an understanding of how these variables can be changed and managed in fair trials.", lvl:"G5"},
      {t:"In Guided Discovery, X understands fair tests by formulating testable questions and identifying the relevant variables within (his/her) experiment.", lvl:"G5"},
      {t:"In Guided Discovery, X asks testable questions that require sufficient and relevant evidence to answer, clearly explaining why each question is testable, showcasing (his/her) analytical skills.", lvl:"G6-7"},
      {t:"In Guided Discovery, X evaluates (his/her) questions to determine if (he/she) are testable and appropriate, successfully framing a hypothesis based on observations and scientific principles.", lvl:"G6-7"},
      {t:"In Guided Discovery, X independently asks questions that relate to phenomena, ensuring they are observable, researchable, or testable without the need for teacher guidance.", lvl:"G6-7"},
      {t:"In Guided Discovery, X formulates specific testable questions and hypotheses, adeptly explaining the variables involved in (his/her) investigations and how these can be maintained or changed to test (his/her) questions effectively.", lvl:"G6-7"},
      {t:"In Guided Discovery, X can identify and explain independent, dependent, and controlled variables in (his/her) experiments, demonstrating a strong ability to manage these variables without assistance.", lvl:"G6-7"},
      {t:"In Guided Discovery, X demonstrates a strong understanding of fair tests by independently formulating testable questions and identifying the relevant variables within (his/her) experiment.", lvl:"G6-7"}
    ], growth:[
      {t:"To improve in Guided Discovery, X can focus on asking relevant and important questions by clarifying how (his/her) inquiries connect to specific scientific phenomena.", lvl:"G2-3"},
      {t:"To support X in developing (his/her) questioning techniques in Guided Discovery, (he/she) should focus on asking more specific, testable questions that directly relate to the topic of study.", lvl:"G2-3"},
      {t:"To help X focus (his/her) inquiries in Guided Discovery, (he/she) should work on identifying questions that remain on topic while also seeking clarification when (he/she) struggles with the primary focus of the study.", lvl:"G2-3"},
      {t:"To improve, X can focus on connecting (his/her) Guided Discovery inquiries to scientific phenomena by encouraging (him/her) to deepen (his/her) understanding of the underlying scientific principles behind (his/her) questions.", lvl:"G4"},
      {t:"To enhance X's exploration of specific phenomena in Guided Discovery, (he/she) should make stronger connections between (his/her) observations and the relevant scientific concepts.", lvl:"G4"},
      {t:"To help X refine (his/her) inquiries in Guided Discovery, (he/she) should add specificity to (his/her) questions, enhancing the clarity and focus of (his/her) scientific investigations.", lvl:"G4"},
      {t:"To strengthen X's analytical skills in Guided Discovery, (he/she) should continue to develop detailed hypotheses for (his/her) investigations.", lvl:"G4"},
      {t:"To enhance X's grasp of experimental design in Guided Discovery, (he/she) needs to continue to work on identifying and understanding relevant variables in (his/her) experiments to clearly understand what is being changed and what is being measured.", lvl:"G4"},
      {t:"To formulate testable questions in Guided Discovery, X should develop an understanding of variables being able to show what is being changed, measured and controlled.", lvl:"G4"},
      {t:"To improve X's ability to connect (his/her) observations and questions to relevant scientific concepts, (he/she) is encouraged to use more precise scientific vocabulary in (his/her) Guided Discovery inquiries.", lvl:"G5"},
      {t:"To enhance (his/her) critical engagement with the material in Guided Discovery, X should ask testable questions that require sufficient and relevant evidence for answers.", lvl:"G5"},
      {t:"To reinforce (his/her) understanding of the Guided Discovery inquiry process and its application in scientific investigations, X should focus on formulating both observable and testable questions.", lvl:"G5"},
      {t:"To deepen (his/her) understanding of experimental design in Guided Discovery, X can identify and explain independent and controlled variables in (his/her) questions, ensuring (he/she) can articulate how these variables affect fair trials.", lvl:"G5"},
      {t:"To improve X's ability to connect (his/her) questions to multiple relevant scientific concepts, (he/she) is encouraged to use even more precise scientific vocabulary in Guided Discovery inquiries.", lvl:"G6-7"},
      {t:"To enhance X's analytical skills in Guided Discovery, (he/she) should clearly explain why (his/her) testable questions require sufficient and relevant evidence for answers.", lvl:"G6-7"},
      {t:"To support X in evaluating (his/her) questions in Guided Discovery to ensure they are testable and appropriate, (he/she) should ensure (his/her) hypotheses are based on observations and scientific principles.", lvl:"G6-7"},
      {t:"To help X formulate specific testable questions and hypotheses in Guided Discovery, (he/she) should explain the variables involved in (his/her) investigations and how to maintain or change them effectively.", lvl:"G6-7"},
      {t:"To deepen X's understanding of experimental design in Guided Discovery by ensuring (he/she) can identify and explain independent, dependent, and controlled variables in (his/her) experiments, demonstrating (his/her) ability to manage these variables independently.", lvl:"G6-7"}
    ]}
  ]},

  { id:'gd-plans', title:'Plans & Conducts Investigations', code:'Semester 2', semester:'S2', units:[
    { id:'main', name:'Investigations & Fair Trials', strengths:[
      {t:"In Guided Discovery, X is willing to engage in the investigation process.", lvl:"G2-3"},
      {t:"With support in Guided Discovery, X can demonstrate a basic understanding of the purpose of (his/her) investigation, indicating potential for growth in grasping scientific inquiry.", lvl:"G2-3"},
      {t:"While X investigates in Guided Discovery, (he/she) requires assistance to follow the data collection plan effectively, indicating a need for further practice in independent data collection.", lvl:"G2-3"},
      {t:"In Guided Discovery, X records some results and observations during scientific investigations.", lvl:"G2-3"},
      {t:"In Guided Discovery, X effectively describes the data to be collected, demonstrating an understanding of how this data will serve as the basis for evidence in (his/her) investigation.", lvl:"G4"},
      {t:"In Guided Discovery, X develops an investigation plan based on collected evidence and explains the purpose of (his/her) investigation, indicating growth in (his/her) understanding of scientific inquiry.", lvl:"G4"},
      {t:"In Guided Discovery, X designs a fair test investigation that will produce relevant data and evidence, showing a strong ability to address the driving questions effectively.", lvl:"G4"},
      {t:"In Guided Discovery, X decides what tools are needed for gathering data and identifies how measurements will be recorded, reflecting (his/her) understanding of the investigation process.", lvl:"G4"},
      {t:"In Guided Discovery, X conducts an investigation and evaluates the experimental design to produce data that meets the goals of the investigation, showcasing (his/her) ability to connect theory with practice.", lvl:"G4"},
      {t:"While X records results in Guided Discovery, there may be some inaccuracies in (his/her) observations and measurements, indicating an opportunity for improvement in data accuracy.", lvl:"G4"},
      {t:"In Guided Discovery, X identifies the dependent and independent variables in (his/her) investigation and explains how these will be managed, demonstrating a solid understanding of experimental controls.", lvl:"G4"},
      {t:"In Guided Discovery, X writes plans and clear, detailed procedures during the planning stage of an investigation.", lvl:"G4"},
      {t:"In Guided Discovery, X records observations according to the given investigation plan, effectively providing evidence to support (his/her) findings.", lvl:"G4"},
      {t:"In Guided Discovery, X effectively describes how the evidence collected will address the purpose of the investigation and its connection to the phenomenon, demonstrating a strong understanding of the inquiry process.", lvl:"G5"},
      {t:"In Guided Discovery, X designs a fair test investigation to produce relevant data and evidence, ensuring that these will be used to answer the driving question and explore the scientific phenomenon.", lvl:"G5"},
      {t:"In Guided Discovery, X decides which tools are needed for data gathering and identifies clear methods for recording measurements, showcasing (his/her) organizational skills.", lvl:"G5"},
      {t:"In Guided Discovery, X conducts the investigation and evaluates the experimental design effectively, producing data that serves as a solid basis for evidence in accordance with the investigation's goals.", lvl:"G5"},
      {t:"In Guided Discovery, X records accurate results and makes thorough observations, including detailed measurements, which reflect (his/her) careful approach to data collection.", lvl:"G5"},
      {t:"In Guided Discovery, X identifies the dependent and independent variables in (his/her) investigation and explains how these will be managed, demonstrating a solid grasp of experimental controls.", lvl:"G5"},
      {t:"In Guided Discovery, X records observations and measurements accurately, effectively managing variables to collect precise data as evidence for (his/her) investigations.", lvl:"G5"},
      {t:"In Guided Discovery, X systematically collects data as a solid basis for answering scientific questions or testing design solutions under various conditions.", lvl:"G5"},
      {t:"In Guided Discovery, X can identify specific evidence to collect for the investigation, clearly connecting it to the relevant phenomenon being studied.", lvl:"G6-7"},
      {t:"In Guided Discovery, X demonstrates strong critical thinking by analyzing the relevance of specific variables to their overall investigation, demonstrating a strong understanding of the inquiry process.", lvl:"G6-7"},
      {t:"In Guided Discovery, X designs a fair test investigation to produce relevant data and evidence, successfully addressing the driving question and explaining the scientific phenomenon.", lvl:"G6-7"},
      {t:"In Guided Discovery, X decides which tools are necessary for data gathering and identifies how measurements will be recorded, showcasing (his/her) organizational skills and attention to detail.", lvl:"G6-7"},
      {t:"In Guided Discovery, X records accurate results and makes detailed observations, including precise measurements, reflecting (his/her) careful approach to data collection.", lvl:"G6-7"},
      {t:"In Guided Discovery, X explains the dependent and independent variables and the controlled variables and how these will be managed in a practical investigation, demonstrating a solid grasp of experimental design.", lvl:"G6-7"},
      {t:"In Guided Discovery, X effectively develops clear, detailed procedures during investigation planning, ensuring a structured and organized approach.", lvl:"G6-7"}
    ], growth:[
      {t:"To improve X's engagement in the investigation process in Guided Discovery, (he/she) needs to focus on identifying evidence and understanding the overall purpose of (his/her) investigations.", lvl:"G2-3"},
      {t:"To enhance X's understanding of scientific inquiry in Guided Discovery, (he/she) must clearly articulate the purpose of (his/her) investigations.", lvl:"G2-3"},
      {t:"To reinforce (his/her) understanding of the investigation process in Guided Discovery, X is encouraged to independently decide on the tools needed for gathering data and to identify how measurements will be recorded.", lvl:"G2-3"},
      {t:"To improve X's documentation skills, (he/she) is encouraged to include essential details in (his/her) results and observations, enhancing the clarity and completeness of (his/her) records in Guided Discovery.", lvl:"G2-3"},
      {t:"To support X in describing the variables involved in (his/her) investigations and how these will be managed, (he/she) is encouraged to revise experimental controls and the importance of maintaining fair trials in Guided Discovery.", lvl:"G2-3"},
      {t:"To make Guided Discovery investigation plans clearer, X needs support to write down all the steps using appropriate commands and scientific vocabulary.", lvl:"G2-3"},
      {t:"To improve X's ability to describe the data to be collected, (he/she) can elaborate on how this data will serve as the basis for evidence in Guided Discovery investigations.", lvl:"G4"},
      {t:"To enhance X's understanding of scientific inquiry in Guided Discovery, (he/she) should develop more detailed investigation plans based on collected evidence and provide clearer explanations of the purpose of (his/her) investigations.", lvl:"G4"},
      {t:"To ensure X consistently produces relevant data and evidence that effectively addresses (his/her) driving questions in Guided Discovery, (he/she) needs to focus on designing investigations that are fair tests.", lvl:"G4"},
      {t:"To encourage X to independently decide on the tools needed for gathering data and to outline clearly how measurements will be recorded, (he/she) needs to review the steps of the investigation process in Guided Discovery.", lvl:"G4"},
      {t:"To help X improve (his/her) ability to evaluate experimental designs during Guided Discovery investigations, (he/she) needs to ensure the data produced aligns with the goals of the investigation and connects theory with practice.", lvl:"G4"},
      {t:"To promote accuracy in X's data recording and to enhance the overall data quality, (he/she) needs to focus efforts on minimizing inaccuracies in observations and measurements in Guided Discovery.", lvl:"G4"},
      {t:"To support X in identifying and managing dependent and independent variables in (his/her) Guided Discovery investigations, (he/she) needs to focus effort on (his/her) understanding of experimental controls and the importance of maintaining fair trials.", lvl:"G4"},
      {t:"To ensure a structured approach to Guided Discovery investigation planning, X needs support in developing more detailed procedures.", lvl:"G4"},
      {t:"To further enhance X's understanding of the inquiry process in Guided Discovery, (he/she) needs to improve (his/her) articulation of how the evidence collected will address the investigation's purpose and its connection to the phenomenon.", lvl:"G5"},
      {t:"To enhance X's skills in developing detailed investigation plans in Guided Discovery, (he/she) needs to review the purpose of (his/her) investigation and explain how (his/her) observations will provide evidence.", lvl:"G5"},
      {t:"To help X refine (his/her) organizational skills, (he/she) is encouraged to decide which tools are needed for data gathering and to identify clear methods for recording measurements in Guided Discovery.", lvl:"G5"},
      {t:"To ensure that the data produced from (his/her) experimental designs serves as a solid basis for evidence, X must evaluate (his/her) experimental designs more effectively during investigations in Guided Discovery.", lvl:"G5"},
      {t:"To encourage X to maintain accuracy in (his/her) data collection, (he/she) needs to make more detailed measurements and thorough observations that reflect a careful approach in Guided Discovery.", lvl:"G5"},
      {t:"To develop a more structured approach in Guided Discovery, X should focus on creating clear and detailed procedures for investigation planning.", lvl:"G5"},
      {t:"To help X improve in Guided Discovery, (he/she) is encouraged to identify specific evidence to collect in the procedure and connect it to the relevant phenomenon being studied.", lvl:"G6-7"},
      {t:"To enhance X's understanding of the inquiry process in Guided Discovery, (he/she) needs to effectively explain the relevance of the data collected through different variables in the investigation.", lvl:"G6-7"},
      {t:"To support X in designing fair test investigations in Guided Discovery that consistently produce relevant data and evidence, (he/she) needs to successfully address the driving question and explain the scientific phenomenon involved.", lvl:"G6-7"},
      {t:"To help X refine (his/her) organizational skills in Guided Discovery, (he/she) should focus on which tools are necessary for data gathering and clearly outline how measurements will be recorded.", lvl:"G6-7"},
      {t:"To promote X's confidence in conducting investigations in Guided Discovery, (he/she) is encouraged to lead others through the process while effectively evaluating and revising the experimental design to produce data that aligns with the investigation goals.", lvl:"G6-7"},
      {t:"To solidify (his/her) grasp of experimental design in Guided Discovery, X should further explain the dependent, independent, and controlled variables and how these will be managed in practical investigations.", lvl:"G6-7"},
      {t:"To enhance X's ability to synthesize information in Guided Discovery, (he/she) is encouraged to articulate further how the evidence collected through different trials will help answer the question(s), demonstrating (his/her) skill in concluding (his/her) findings.", lvl:"G6-7"},
      {t:"To improve Guided Discovery investigation plans, X can add more detail for complex situations to (his/her) procedures by studying good examples and using the checklist as a guide.", lvl:"G6-7"}
    ]}
  ]},

  { id:'gd-data', title:'Collects Data & Draws Conclusions', code:'Semester 2', semester:'S2', units:[
    { id:'main', name:'Evidence & Scientific Conclusions', strengths:[
      {t:"In Guided Discovery, X writes scientific conclusions that include a claim connected to the science task and shares an idea related to the scientific question.", lvl:"G2-3"},
      {t:"In Guided Discovery, X attempts to use observations and data collected from the investigation to support (his/her) thinking when writing scientific conclusions.", lvl:"G2-3"},
      {t:"In Guided Discovery, X writes scientific conclusions that include an initial attempt to describe what (he/she) observed or collected.", lvl:"G2-3"},
      {t:"In Guided Discovery, X writes scientific conclusions that include a claim that is related to the investigation question.", lvl:"G4"},
      {t:"In Guided Discovery, X writes scientific conclusions that include evidence that generally supports the claim (and gives a reason when it does not).", lvl:"G4"},
      {t:"In Guided Discovery, X writes scientific conclusions that include an attempt at using scientific vocabulary that links the evidence to the scientific phenomenon.", lvl:"G4"},
      {t:"In Guided Discovery, X writes scientific conclusions that include key vocabulary showing an understanding of the phenomenon being explored.", lvl:"G5"},
      {t:"In Guided Discovery, X shows proficiency in selecting relevant evidence to back up their claim when writing scientific conclusions.", lvl:"G5"},
      {t:"In Guided Discovery, X writes scientific conclusions that use scientific vocabulary to describe the relationship between the data collected and (his/her) claim.", lvl:"G5"},
      {t:"In Guided Discovery, X writes scientific conclusions that include reasoning and key scientific terms linking the evidence collected to the claim and the scientific question.", lvl:"G5"},
      {t:"In Guided Discovery, X writes scientific conclusions that meet all criteria, showing careful consideration of data collection, analysis, and use of key terms to communicate ideas after investigations.", lvl:"G6-7"},
      {t:"In Guided Discovery, X writes scientific conclusions that demonstrate incredible proficiency by making strong evidence-based claims and explaining scientific reasoning with exceptional clarity.", lvl:"G6-7"}
    ], growth:[
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should make the claim a full sentence.", lvl:"G2-3"},
      {t:"To further enhance X's growth in Guided Discovery, (he/she) should ensure the evidence used in scientific conclusions matches their hypothesis.", lvl:"G2-3"},
      {t:"To further enhance X's growth in Guided Discovery, (he/she) would benefit from reviewing the scientific phenomenon to support the connection between data and hypothesis in the class investigations.", lvl:"G2-3"},
      {t:"To further enhance X's growth in writing scientific conclusions in Guided Discovery, (he/she) should strengthen (his/her) claim alignment by ensuring it directly answers the scientific question.", lvl:"G4"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should choose evidence that more consistently and clearly supports the claim.", lvl:"G4"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should strengthen the scientific explanation by using key terms correctly and connecting to the scientific phenomena.", lvl:"G4"},
      {t:"To support X's growth in Guided Discovery, (he/she) would benefit from reviewing scientific vocabulary related to the phenomena in order to strengthen their reasoning behind what was observed during investigations.", lvl:"G4"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should continue using the scientific question's key wording so (his/her) claim stays precise and focused.", lvl:"G5"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should keep refining (his/her) evidence selection to ensure it always directly supports the claim.", lvl:"G5"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should make sure the relationship between results and claim is stated clearly and stays connected to the scientific question.", lvl:"G5"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X would benefit from rereading (his/her) work to ensure that the key terms have been used correctly.", lvl:"G5"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X could continue extending (his/her) thinking by pursuing even more advanced scientific connections and explanations using more complex/advanced scientific terminology.", lvl:"G6-7"},
      {t:"To support (his/her) growth in writing scientific conclusions during Guided Discovery, X should keep challenging (himself/herself) to make (his/her) explanations even more consistently detailed and strongly justified with evidence.", lvl:"G6-7"}
    ]}
  ]},

  { id:'gd-models', title:'Develops Scientific Models', code:'Semester 1', semester:'S1', units:[
    { id:'main', name:'Modeling Scientific Principles', strengths:[
      {t:"In Guided Discovery, X is in the process of developing a model to describe a scientific principle.", lvl:"G2-3"},
      {t:"In Guided Discovery, X has constructed a simple model with a diagram or drawing related to the phenomenon.", lvl:"G2-3"},
      {t:"In Guided Discovery, X develops models that meet some task requirements and include relevant parts to explain what caused the phenomenon, demonstrating a foundational understanding of the scientific principle.", lvl:"G4"},
      {t:"In Guided Discovery, X constructs simple models with only minor errors or omissions, such as a diagram or drawing, that include some details.", lvl:"G4"},
      {t:"In Guided Discovery, X shows an effort to articulate the connections between the model and the studied scientific concepts.", lvl:"G4"},
      {t:"In Guided Discovery, X is starting to use relevant scientific vocabulary more consistently throughout (his/her) explanation, indicating a growing proficiency in scientific language.", lvl:"G4"},
      {t:"In Guided Discovery, X is beginning to organize (his/her) models neatly, and with guidance, is learning to use techniques like sequencing to improve clarity.", lvl:"G4"},
      {t:"In Guided Discovery, X develops models that meet all basic task requirements, effectively connecting all relevant components and relationships to explain the prototype or what caused the phenomenon.", lvl:"G5"},
      {t:"In Guided Discovery, X's models include clear labels and explanations that articulate the connections to scientific principles, demonstrating a strong understanding of the concepts involved.", lvl:"G5"},
      {t:"In Guided Discovery, X constructs simple models, reflecting attention to detail in (his/her) work.", lvl:"G5"},
      {t:"In Guided Discovery, X clearly explains (his/her) models, showcasing (his/her) ability to effectively communicate scientific ideas.", lvl:"G5"},
      {t:"In Guided Discovery, X uses relevant scientific vocabulary more consistently throughout (his/her) explanation, with some terms explained in depth, indicating a growing proficiency in scientific language.", lvl:"G5"},
      {t:"In Guided Discovery, X creates organized models that include some labeling and sequencing, which helps communicate (his/her) ideas clearly.", lvl:"G5"},
      {t:"In Guided Discovery, X develops models that meet all requirements, effectively connecting all relevant observable and unobservable components while providing additional explanations about the relationships that fit the scientific model.", lvl:"G6-7"},
      {t:"In Guided Discovery, X's models include zoom-in diagrams that effectively describe specific parts and processes, demonstrating a comprehensive understanding of the subject matter.", lvl:"G6-7"},
      {t:"In Guided Discovery, X's models are clearly explained so that others can understand how and why the phenomena occur, illustrating (his/her) strong communication skills in conveying scientific concepts.", lvl:"G6-7"},
      {t:"In Guided Discovery, X uses scientific vocabulary extensively throughout (his/her) explanation, with terms explained in depth, reflecting a high level of proficiency in scientific language and understanding.", lvl:"G6-7"},
      {t:"In Guided Discovery, X explains the materials chosen for (his/her) prototype, making connections to (his/her) properties and suitability for the intended purpose.", lvl:"G6-7"},
      {t:"In Guided Discovery, X's models are neat and well-organized, utilizing techniques such as color coding, arrows, and number sequencing, which enhance the clarity and effectiveness of (his/her) presentation.", lvl:"G6-7"}
    ], growth:[
      {t:"To improve modeling skills in Guided Discovery, X must complete (his/her) simple models, such as diagrams or drawings, addressing any significant errors or omissions.", lvl:"G2-3"},
      {t:"To connect (his/her) models to the scientific concepts being studied in Guided Discovery, X must articulate clear explanations of (his/her) models.", lvl:"G2-3"},
      {t:"To enhance (his/her) understanding and communication of scientific principles in Guided Discovery, X needs to use scientific vocabulary in (his/her) model.", lvl:"G2-3"},
      {t:"To improve (his/her) understanding and application of scientific language in Guided Discovery, X needs to use scientific vocabulary in (his/her) explanation.", lvl:"G4"},
      {t:"To make connections between the model and the scientific concepts being studied in Guided Discovery, X needs to include more detail in (his/her) explanations.", lvl:"G4"},
      {t:"To ensure that X's models in Guided Discovery include all the elements of a scientific model, (he/she) would benefit from using the resources available to check (his/her) work.", lvl:"G4"},
      {t:"To ensure that X is communicating scientific principles effectively, (he/she) would benefit from using the resources available to check the accuracy of (his/her) explanations.", lvl:"G4"},
      {t:"To enhance (his/her) models in Guided Discovery, X should focus on neatness and organization, ensuring all parts are clearly presented and easy to understand.", lvl:"G4"},
      {t:"To deepen the use of scientific language in Guided Discovery, X is encouraged to consistently incorporate relevant scientific vocabulary throughout (his/her) models.", lvl:"G5"},
      {t:"To articulate connections in models to scientific principles in Guided Discovery, X should refine (his/her) labels and explanations, ensuring (he/she) effectively demonstrates (his/her) strong understanding of the concepts involved.", lvl:"G5"},
      {t:"To achieve greater completeness in (his/her) models in Guided Discovery, X should reinforce (his/her) attention to detail in (his/her) work by reviewing checklists critically and reviewing any minor errors or omissions.", lvl:"G5"},
      {t:"To enhance clarity in Guided Discovery, X needs to organize model components more deliberately, ensuring each part is consistently labeled and logically placed.", lvl:"G5"},
      {t:"To further demonstrate (his/her) comprehensive understanding of scientific phenomena in Guided Discovery, X can use zoom-in diagrams that include detailed descriptions of specific parts and processes.", lvl:"G6-7"},
      {t:"To further (his/her) modeling skills in Guided Discovery, X should connect parts of (his/her) models to real-world examples, reinforcing (his/her) ability to showcase how theoretical concepts relate to practical applications.", lvl:"G6-7"},
      {t:"To reflect a high level of proficiency in scientific language and understanding in Guided Discovery, X is encouraged to continue using scientific vocabulary extensively throughout (his/her) explanations.", lvl:"G6-7"}
    ]}
  ]},

  { id:'gd-engineering', title:'Generates & Evaluates Solutions (Engineering Cycle)', code:'Semester 1', semester:'S1', units:[
    { id:'main', name:'ISF Engineering Cycle', strengths:[
      {t:"In Guided Discovery, X generates one possible solution for a problem, demonstrating an initial effort to engage with the engineering design process.", lvl:"G2-3"},
      {t:"In Guided Discovery, X applies limited scientific principles or knowledge in (his/her) solution, suggesting an opportunity to deepen (his/her) understanding of relevant concepts.", lvl:"G2-3"},
      {t:"In Guided Discovery, X used limited scientific vocabulary in (his/her) proposal.", lvl:"G2-3"},
      {t:"In Guided Discovery, X provides minimal reflection on (his/her) design, lacking specific details on how it could be improved, indicating an area for further development in evaluating and refining (his/her) solutions.", lvl:"G2-3"},
      {t:"In Guided Discovery, X generates one or two possible solutions for a problem, demonstrating an emerging ability to engage with the engineering design process.", lvl:"G4"},
      {t:"In Guided Discovery, X proposes a design plan and identifies the problem's criteria, constraints, or intent.", lvl:"G4"},
      {t:"In Guided Discovery, X is starting to consider solutions to the issues raised, showing progress in (his/her) problem-solving skills.", lvl:"G4"},
      {t:"In Guided Discovery, X applies some scientific principles to help develop (his/her) solution, reflecting (his/her) evolving understanding of relevant scientific and engineering concepts.", lvl:"G4"},
      {t:"In Guided Discovery, X incorporates some scientific vocabulary.", lvl:"G4"},
      {t:"In Guided Discovery, X reflects on (his/her) design and explains a single solution to improve it, indicating a developing ability to evaluate and enhance (his/her) work.", lvl:"G4"},
      {t:"In Guided Discovery, X's writing is neat and organized, effectively integrating (his/her) knowledge of relevant scientific principles into (his/her) solution.", lvl:"G4"},
      {t:"In Guided Discovery, X generates at least two possible solutions for a problem, demonstrating an ability to explore multiple avenues within the engineering design process.", lvl:"G5"},
      {t:"In Guided Discovery, X proposes a detailed design plan that identifies the criteria, constraints, and intent of the problem, showcasing (his/her) understanding of the project's requirements.", lvl:"G5"},
      {t:"In Guided Discovery, X contemplates alternatives or improvements, indicating a willingness to refine (his/her) ideas and enhance (his/her) solutions.", lvl:"G5"},
      {t:"In Guided Discovery, X's justifications are well organized, effectively integrating (his/her) knowledge of relevant scientific principles into (his/her) solution.", lvl:"G5"},
      {t:"In Guided Discovery, X compares solutions based on the indicated criteria and constraints, thoughtfully choosing the best option, which shows (his/her) analytical thinking skills.", lvl:"G5"},
      {t:"In Guided Discovery, X articulates multiple ways to improve the prototype, demonstrating (his/her) ability to critically evaluate and enhance (his/her) work.", lvl:"G5"},
      {t:"In Guided Discovery, X generates two or more possible solutions that thoughtfully address a problem, demonstrating insight into how these solutions could effectively resolve the issues.", lvl:"G6-7"},
      {t:"In Guided Discovery, X uses all key vocabulary accurately and explains terms in depth, employing connected scientific vocabulary that reflects (his/her) comprehension of the subject matter.", lvl:"G6-7"},
      {t:"In Guided Discovery, X proposes a detailed design plan and clearly explains how the plan adequately meets the criteria, constraints, and intent of the problem, showcasing (his/her) understanding of the project requirements.", lvl:"G6-7"},
      {t:"In Guided Discovery, X considers alternative or key improvements that align with specifically identified issues or constraints, indicating a strong ability to evaluate (his/her) options critically.", lvl:"G6-7"},
      {t:"In Guided Discovery, X integrates relevant scientific principles from the unit and other scientific disciplines into (his/her) solution, demonstrating a comprehensive understanding of the topic.", lvl:"G6-7"},
      {t:"In Guided Discovery, X compares solutions based on the indicated criteria and constraints, thoughtfully choosing the best option, which reflects (his/her) analytical skills.", lvl:"G6-7"},
      {t:"In Guided Discovery, X explains the materials chosen for (his/her) design and justifies (his/her) choices based on the properties of those materials, demonstrating an understanding of material suitability.", lvl:"G6-7"},
      {t:"In Guided Discovery, X considers alternative solutions for efficiency and sustainability, indicating a forward-thinking approach to problem-solving.", lvl:"G6-7"},
      {t:"In Guided Discovery, X articulates multiple ways to improve the design, connecting these improvements to relevant scientific principles and enhancing user experience.", lvl:"G6-7"}
    ], growth:[
      {t:"To enhance the clarity of (his/her) work and knowledge of the scientific concepts in Guided Discovery, X needs to incorporate more scientific language in (his/her) solutions.", lvl:"G2-3"},
      {t:"To improve (his/her) understanding of the engineering design process in Guided Discovery, X is encouraged to generate multiple possible solutions for a problem.", lvl:"G2-3"},
      {t:"To strengthen (his/her) understanding of the engineering design process in Guided Discovery, X needs to identify the success criteria, constraints, and intent of the problem.", lvl:"G2-3"},
      {t:"To ensure effective written communication about (his/her) understanding of the problem in Guided Discovery, X needs to better organize and present (his/her) ideas more legibly.", lvl:"G2-3"},
      {t:"To deepen (his/her) application of the engineering design process in Guided Discovery, X needs to focus on integrating relevant scientific concepts and vocabulary into (his/her) designs.", lvl:"G2-3"},
      {t:"To enhance X's design planning skills in Guided Discovery, X needs to identify the problem's criteria, constraints, and intent while addressing any minor errors or omissions for further refinement.", lvl:"G4"},
      {t:"To advance (his/her) problem-solving skills in Guided Discovery, X needs to consider a wider range of solutions to the issues raised in (his/her) designs.", lvl:"G4"},
      {t:"To deepen (his/her) scientific understanding and knowledge in Guided Discovery, X needs to expand (his/her) use of relevant scientific vocabulary.", lvl:"G4"},
      {t:"To develop (his/her) evaluative skills in Guided Discovery, X needs to reflect on (his/her) designs more comprehensively and articulate multiple solutions for improvement.", lvl:"G4"},
      {t:"To improve solution exploration in Guided Discovery, X needs to generate even more possible solutions for problems, further enhancing (his/her) engagement with the engineering design process.", lvl:"G5"},
      {t:"To enhance design planning skills in Guided Discovery, X needs to provide more detailed explanations that identify the criteria, constraints, and intent of the problem.", lvl:"G5"},
      {t:"To promote writing clarity and organization in Guided Discovery, X should maintain neatness while effectively integrating knowledge of relevant scientific principles into (his/her) solutions.", lvl:"G5"},
      {t:"To deepen (his/her) use of scientific vocabulary in Guided Discovery, X needs to use all key terms accurately and provide in-depth explanations.", lvl:"G5"},
      {t:"To develop (his/her) analytical thinking skills in Guided Discovery, X should compare solutions based on established criteria and constraints, and thoughtfully justify (his/her) choice of the best option.", lvl:"G5"},
      {t:"To articulate the materials chosen for (his/her) designs in Guided Discovery, X should make clear connections to the properties and suitability of these materials for (his/her) intended purposes.", lvl:"G5"},
      {t:"To demonstrate (his/her) ability to evaluate and enhance (his/her) work effectively in Guided Discovery, X needs to articulate multiple ways to improve (his/her) designs.", lvl:"G5"},
      {t:"To reinforce (his/her) understanding of project requirements in Guided Discovery, X must clearly explain how (his/her) detailed design plan meets the criteria, constraints, and intent of the problem.", lvl:"G6-7"},
      {t:"To critically evaluate (his/her) options in Guided Discovery, X needs to consider a wider range of alternative solutions or key improvements that align with identified issues or constraints.", lvl:"G6-7"},
      {t:"To deepen (his/her) integration of relevant scientific principles in Guided Discovery, X should incorporate concepts from other scientific phenomena into (his/her) solutions.", lvl:"G6-7"},
      {t:"To develop (his/her) analytical skills in Guided Discovery, X should compare solutions based on indicated criteria and constraints, thoughtfully justifying (his/her) choice of the best option.", lvl:"G6-7"},
      {t:"To promote a forward-thinking approach in Guided Discovery, X could consider alternative solutions for efficiency and sustainability in (his/her) problem-solving processes.", lvl:"G6-7"}
    ]}
  ]}
];
