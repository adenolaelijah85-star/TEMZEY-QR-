// ════════════════════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════════════════════
const ALL_QUESTIONS = [
  // ── TEACHING AS A PROFESSION ─────────────────────────────
  {id:1,topic:"Teaching as a Profession",q:"How did Datta (1984) define a profession?",opts:["Any paid job that requires a university degree","An occupation of a special kind involving expertise, self-determination and public recognition","A career that is dominated by a single gender","An occupation with high remuneration and social status"],ans:1},
  {id:2,topic:"Teaching as a Profession",q:"Which of the following is NOT listed as a quality of a profession?",opts:["Intensive academic preparation","High remuneration","Provision of essential services","Research and experimentation"],ans:1},
  {id:3,topic:"Teaching as a Profession",q:"A code of ethics is a characteristic of a profession. Which body provides the code of conduct for teachers in Nigeria?",opts:["Federal Ministry of Education","NUC","TRCN","WAEC"],ans:2},
  {id:4,topic:"Teaching as a Profession",q:"During which phase did teaching unions first form to campaign for improved pay and working conditions?",opts:["Pre-19th Century","19th Century","Early 20th Century","Mid-20th Century"],ans:2},
  {id:5,topic:"Teaching as a Profession",q:"Which century saw state involvement in education grow and Teacher Training colleges being established?",opts:["17th Century","18th Century","19th Century","20th Century"],ans:2},
  {id:6,topic:"Teaching as a Profession",q:"In the 21st century, the emphasis in teaching is on:",opts:["Religious instruction and moral education","Evidence-based practice, continuous professional development and accountability","Degree-level qualifications and national standards","Forming teaching unions and improving pay"],ans:1},
  {id:7,topic:"Teaching as a Profession",q:"Which of the following is an argument AGAINST teaching being a full profession?",opts:["It requires formal university qualifications","It has professional bodies","Teachers have limited autonomy as curriculum is often state-controlled","It demands specialised pedagogical knowledge"],ans:2},
  {id:8,topic:"Teaching as a Profession",q:"What is the distinction between 'professionalism' and 'professionalisation'?",opts:["Professionalism is collective and structural; professionalisation is personal","Professionalism is a personal, internal quality of conduct; professionalisation is the collective process by which an occupation earns professional status","They mean the same thing","Professionalisation refers only to salary increases"],ans:1},
  {id:9,topic:"Teaching as a Profession",q:"Teachers' professional identity is shaped by:",opts:["Personal values, training, experience, institutional culture and societal expectations","Salary and retirement benefits alone","The number of years spent in school","Government policy only"],ans:0},
  {id:10,topic:"Teaching as a Profession",q:"The 'reality shock' experienced by new teachers refers to:",opts:["The shock of receiving a low salary","When ideals meet actual classroom practice and expectations are not met","Discovering that their qualifications are not recognised","The shock of large class sizes"],ans:1},
  {id:11,topic:"Teaching as a Profession",q:"Which of the following is a CORE PROFESSIONAL RESPONSIBILITY of a teacher?",opts:["Ignoring student welfare outside the classroom","Reflective practice","Avoiding collaboration with colleagues","Limiting professional development"],ans:1},
  {id:12,topic:"Teaching as a Profession",q:"Which of the following is an ACADEMIC quality of a good teacher?",opts:["Patience and sensibility","Dedication and commitment","Competence in the subject matter","Tolerance and democracy"],ans:2},
  {id:13,topic:"Teaching as a Profession",q:"Good communication skills and proficiency in audio-visual materials are classified as which category of teacher quality?",opts:["Personal qualities","Academic qualities","Professional qualities","Administrative qualities"],ans:2},
  {id:14,topic:"Teaching as a Profession",q:"The TRCN was established by which Act?",opts:["Education Act No. 4 of 1988","Teachers Registration Council of Nigeria Act 31 of 1993","Federal Education Policy Act of 2000","National Policy on Education Act of 1977"],ans:1},
  {id:15,topic:"Teaching as a Profession",q:"The Teachers Investigative Panel (TIP) is responsible for:",opts:["Registering teachers nationwide","Conducting preliminary investigations into teacher misconduct","Setting examination standards","Publishing the teachers' register"],ans:1},
  {id:16,topic:"Teaching as a Profession",q:"The Teachers Disciplinary Committee (TDC) functions as:",opts:["A training college for new teachers","A tribunal that considers and determines cases referred by the TIP","An examination body","A registration office"],ans:1},
  {id:17,topic:"Teaching as a Profession",q:"Which of the following is a PERSONAL quality of a good teacher?",opts:["High intelligence","Qualification in area of specialisation","Evidence of scholarship","Humility and respect"],ans:3},
  {id:18,topic:"Teaching as a Profession",q:"Which characteristic of a profession states that members should place service above personal gains?",opts:["A code of ethics","Exalting service above personal gains","A body of specialised knowledge","Recognition by the public"],ans:1},
  {id:19,topic:"Teaching as a Profession",q:"TRCN is an agency of which body?",opts:["The National Universities Commission (NUC)","The Federal Ministry of Education","The National Assembly","The Nigerian Bar Association"],ans:1},
  {id:20,topic:"Teaching as a Profession",q:"Which of the following best describes 'pastoral care' as a teacher's responsibility?",opts:["Planning and delivering lessons","Maintaining attendance records","Attending to the welfare and wellbeing of learners","Collaborating with colleagues on curriculum"],ans:2},
  // ── ETHICS OF TEACHING ───────────────────────────────────
  {id:21,topic:"Ethics of Teaching",q:"How many chapters does the Teachers' Code of Conduct (TCC) have?",opts:["Five","Seven","Nine","Twelve"],ans:2},
  {id:22,topic:"Ethics of Teaching",q:"The Teachers' Code of Conduct (TCC) is published by which body?",opts:["Federal Ministry of Education","TRCN","NUT","NBTE"],ans:1},
  {id:23,topic:"Ethics of Teaching",q:"Which core ethical principle of teaching requires treating every learner with dignity regardless of background?",opts:["Accountability","Confidentiality","Respect for persons","Professional boundaries"],ans:2},
  {id:24,topic:"Ethics of Teaching",q:"Protecting sensitive information about learners and their families relates to which ethical principle?",opts:["Honesty and integrity","Confidentiality","Justice and fairness","Duty of care"],ans:1},
  {id:25,topic:"Ethics of Teaching",q:"Which objective of the TCC aims to 'boost public confidence in the ability of the teaching profession to regulate itself'?",opts:["Objective i","Objective ii","Objective iv","Objective vii"],ans:2},
  {id:26,topic:"Ethics of Teaching",q:"Which ethical principle requires a teacher to apply rules, assessments and opportunities consistently and impartially?",opts:["Duty of care","Justice and fairness","Professional boundaries","Accountability"],ans:1},
  {id:27,topic:"Ethics of Teaching",q:"Which of the following is NOT listed as a source of ethical guidance for teachers?",opts:["Codes of conduct","National professional standards","Social media trends","Safeguarding legislation"],ans:2},
  {id:28,topic:"Ethics of Teaching",q:"Maintaining appropriate relationships with learners and avoiding conflicts of interest describes which ethical principle?",opts:["Honesty and integrity","Duty of care","Professional boundaries","Accountability"],ans:2},
  {id:29,topic:"Ethics of Teaching",q:"One objective of the TCC is to 're-awaken the sense of self-esteem, dignity, honour, selfless service and moral rectitude in the teacher.' This reflects which broader purpose?",opts:["Improving teachers' salaries","Reducing the number of teachers","Transforming the professional character of teachers","Expanding the school curriculum"],ans:2},
  {id:30,topic:"Ethics of Teaching",q:"Professional ethics in teaching refers to:",opts:["Rules about classroom decoration","Moral principles and standards that guide the behaviour of individuals within a profession","Methods of lesson planning","Financial management by school administrators"],ans:1},
  {id:31,topic:"Ethics of Teaching",q:"The duty of care principle in teaching means:",opts:["Only treating learners who are physically ill","Ensuring the physical, emotional and academic safety of learners","Caring for the school building and equipment","Providing food for learners"],ans:1},
  {id:32,topic:"Ethics of Teaching",q:"Which TCC objective aims to 'clarify teachers' rights, privileges, obligations and their legal bases'?",opts:["Objective i","Objective iii","Objective v","Objective vii"],ans:3},
  {id:33,topic:"Ethics of Teaching",q:"The TCC covers the teacher's relationship with all of the following EXCEPT:",opts:["Colleagues","Learners","Foreign governments","Parents/guardians"],ans:2},
  {id:34,topic:"Ethics of Teaching",q:"Taking responsibility for one's professional actions and decisions is called:",opts:["Confidentiality","Duty of care","Accountability","Professionalism"],ans:2},
  {id:35,topic:"Ethics of Teaching",q:"Being truthful in professional conduct, assessment and reporting reflects which ethical principle?",opts:["Respect for persons","Honesty and integrity","Justice and fairness","Professional boundaries"],ans:1},
  // ── SOCIOLOGY OF EDUCATION ───────────────────────────────
  {id:36,topic:"Sociology of Education",q:"Etymologically, the word 'sociology' comes from 'Socius' (Latin) meaning:",opts:["Science","Study","Companionship/Society","Behaviour"],ans:2},
  {id:37,topic:"Sociology of Education",q:"Who is regarded as the father of modern Sociology?",opts:["Karl Marx","Auguste Comte","Emile Durkheim","Max Weber"],ans:1},
  {id:38,topic:"Sociology of Education",q:"According to Professor Edward Ezewu, Sociology of Education is:",opts:["The study of individual behaviour in school","An academic discipline that studies the relations between the school and society","The application of psychology to education","A branch of philosophy that examines values"],ans:1},
  {id:39,topic:"Sociology of Education",q:"Martin Heidegger referred to the human person as:",opts:["A rational animal","A bundle of instincts","A 'being-in-the-world' and a 'being-with-others'","A tabula rasa"],ans:2},
  {id:40,topic:"Sociology of Education",q:"Sociology differs from psychology primarily because:",opts:["Sociology studies individuals; psychology studies groups","Sociology studies group dynamics; psychology studies individual behaviour","Sociology is a natural science; psychology is a social science","There is no difference between them"],ans:1},
  {id:41,topic:"Sociology of Education",q:"Auguste Comte coined the concept of sociology in which year?",opts:["1798","1820","1833","1857"],ans:2},
  {id:42,topic:"Sociology of Education",q:"The exponents of the Consensus (Functionalist) theory include all of the following EXCEPT:",opts:["Auguste Comte","Talcott Parsons","Karl Marx","Emile Durkheim"],ans:2},
  {id:43,topic:"According to structural functionalism, the school is expected to:",opts:["Promote class conflict","Work in synergy with society to contribute to social order and stability","Operate independently from the society","Focus only on intellectual development"],ans:1},
  {id:44,topic:"Sociology of Education",q:"Conflict theorists believe the school system was established primarily to:",opts:["Socialize learners into national values","Develop the intellectual capacity of all students equally","Legitimise oppression","Promote democratic participation"],ans:2},
  {id:45,topic:"Sociology of Education",q:"Karl Marx is an exponent of which sociological theory?",opts:["Structural functionalism","Idealism","Conflict theory","Pragmatism"],ans:2},
  {id:46,topic:"Sociology of Education",q:"According to the conflict theory, conflict in the school system is:",opts:["Avoidable with proper management","A sign of failure","A sine qua non — a regular and permanent feature","Only caused by external forces"],ans:2},
  {id:47,topic:"Sociology of Education",q:"Sociology of Education reveals that there is a _______ relationship between the school and society.",opts:["Hostile and antagonistic","Symbolic and symbiotic","Temporary and fragile","One-directional"],ans:1},
  {id:48,topic:"Sociology of Education",q:"Ralph Dahrendorf and George Simmel are associated with which theory?",opts:["Functionalism","Pragmatism","Conflict theory","Idealism"],ans:2},
  {id:49,topic:"Sociology of Education",q:"Structural functionalism is also referred to as:",opts:["Conflict theory","Consensus theory of society","Existentialism","Naturalism"],ans:1},
  {id:50,topic:"Sociology of Education",q:"To be socialized, according to functionalists, means to be:",opts:["Enrolled in a private school","Integrated into the norms, ethos and values of society","Given a formal certificate of education","Exposed to conflict and competition"],ans:1},
  // ── PHILOSOPHY OF EDUCATION ──────────────────────────────────
  {id:51,topic:"Philosophy of Education",q:"John Dewey defined philosophy as:",opts:["A search for intellectual culture","Logical clarification of thoughts","Criticism of criticisms","A rational search for answers"],ans:2},
  {id:52,topic:"Philosophy of Education",q:"Etymologically, 'educere' means:",opts:["To nurture or bring up a child","To lead towards light","To train or drill","To examine and assess"],ans:1},
  {id:53,topic:"Philosophy of Education",q:"Philosophy of education is best defined as:",opts:["The history of educational ideas","The application of philosophical techniques and tools to solving problems in education","A study of teaching methods only","The psychology of learning"],ans:1},
  {id:54,topic:"Philosophy of Education",q:"Which feature of philosophy means that it approaches issues in a procedural manner?",opts:["Rational","Critical","Systematic","Analytical"],ans:2},
  {id:55,topic:"Philosophy of Education",q:"Plato defines knowledge as:",opts:["Empirical observation","Justified True Belief","Social consensus","Divine revelation"],ans:1},
  {id:56,topic:"Philosophy of Education",q:"Which branch of philosophy studies the nature of things and the universe?",opts:["Epistemology","Axiology","Metaphysics","Logic"],ans:2},
  {id:57,topic:"Philosophy of Education",q:"Cosmology, as a sub-area of metaphysics, studies:",opts:["The nature of being or existence","The origin, nature and structures of the universe","The workings of the mind","The nature of God"],ans:1},
  {id:58,topic:"Philosophy of Education",q:"Epistemology deals with:",opts:["The study of beauty in arts","The meaning, nature, possibility and validity of knowledge","The study of morality","Human reasoning and logic"],ans:1},
  {id:59,topic:"Philosophy of Education",q:"Aesthetics is the study of:",opts:["Moral principles","Human reasoning","Beauty within the context of Arts","The nature of God"],ans:2},
  {id:60,topic:"Philosophy of Education",q:"Ethics is best defined as:",opts:["The study of beauty","The study of the principles that guide human conduct (morality)","The study of knowledge and its validity","The study of the universe"],ans:1},
  {id:61,topic:"Philosophy of Education",q:"Logic as a branch of philosophy focuses on:",opts:["The nature of God","Human reasoning","Observable phenomena","Cultural values"],ans:1},
  {id:62,topic:"Philosophy of Education",q:"Ontology is the aspect of metaphysics that studies:",opts:["The origin of the universe","The nature of being or existence","The workings of the mind","Divine revelation"],ans:1},
  {id:63,topic:"Philosophy of Education",q:"According to the criteria for knowledge, which of the following is NOT a requirement?",opts:["Knowledge must be true","Knowledge must be popular","Knowledge must be coherent","Knowledge must have conclusive evidence"],ans:1},
  {id:64,topic:"Philosophy of Education",q:"Professor Otonti Nduka defined education as:",opts:["A process of reminiscence","The sum of all processes by which an individual develops attitudes and abilities","A sociological process of cultural transmission of values from one generation to another","The reconstruction and reorganisation of human experience"],ans:2},
  {id:65,topic:"Philosophy of Education",q:"The informal form of education is also known as:",opts:["Formal schooling","Vocational education","Traditional or indigenous education","Non-formal education"],ans:2},
  // ── IDEALISM ─────────────────────────────────────────────
  {id:66,topic:"Idealism",q:"Which philosopher is NOT an exponent of idealism?",opts:["Plato","Immanuel Kant","Aristotle","Socrates"],ans:2},
  {id:67,topic:"Idealism",q:"Idealism contends that the world is basically:",opts:["Material and physical","Spiritual rather than material","Empirical and observable","Relative and changing"],ans:1},
  {id:68,topic:"Idealism",q:"For idealists, the classroom teacher is best described as:",opts:["An authority figure who transmits facts","A strict disciplinarian","A facilitator of learning who helps learners discover potentials","An examiner of learners"],ans:2},
  {id:69,topic:"Idealism",q:"Specifically for Plato, education is defined as:",opts:["Problem-solving experience","The process of reminiscence","Reconstruction of experience","Sensory perception"],ans:1},
  {id:70,topic:"Idealism",q:"Which is a weakness of idealism as a philosophy of education?",opts:["It emphasises all three domains of learning","It promotes moral and cultural values","There is no significant emphasis on science and technology","It gives emphasis to spiritual aspects of life"],ans:2},
  {id:71,topic:"Idealism",q:"The Socratic Method of teaching is recommended by which philosophical school?",opts:["Realism","Pragmatism","Idealism","Existentialism"],ans:2},
  {id:72,topic:"Idealism",q:"Idealism is best described as which type of philosophy of education?",opts:["Learner-centred","Society-centred","Teacher-centred","Technology-centred"],ans:2},
  // ── REALISM ──────────────────────────────────────────────
  {id:73,topic:"Realism",q:"Realists argue that the human mind at birth is:",opts:["Full of innate ideas","A bundle of instincts","Blank (tabula rasa)","Already formed by God"],ans:2},
  {id:74,topic:"Realism",q:"The Aristotelian theory of Hylemorphism holds that:",opts:["Mind and body are separate entities","Matter never exists without form, nor form without matter","The spiritual controls the physical","Education is the process of reminiscence"],ans:1},
  {id:75,topic:"Realism",q:"Realists are exponents of which theory of truth?",opts:["Coherence theory","Pragmatic theory","Correspondence theory","Consensus theory"],ans:2},
  {id:76,topic:"Realism",q:"According to Aristotle's developmental curriculum, what should be emphasised between ages 15–21?",opts:["Play, songs and physical activities","Moral and physical education","Intellectual pursuits including mathematics, humanities and speculative subjects","Vocational and technical skills"],ans:2},
  {id:77,topic:"Realism",q:"Which of the following is a weakness of realism as a philosophy of education?",opts:["It lays strong emphasis on the environment","It applies scientific method to discovering truth","It is fundamentally a teacher-centred philosophy","It promotes the use of instructional materials"],ans:2},
  {id:78,topic:"Realism",q:"Realist curriculum is described as:",opts:["Child-centred","Society-centred","Learner-centred","Technology-centred"],ans:1},
  {id:79,topic:"Realism",q:"Which philosopher is considered the father of Realism?",opts:["Plato","Socrates","Aristotle","John Dewey"],ans:2},
  {id:80,topic:"Realism",q:"Realists believe that knowledge is perceivable rather than conceivable. This means knowledge comes through:",opts:["Divine revelation","Intuition","Sense perception","Pure reasoning"],ans:2},
  // ── PRAGMATISM ───────────────────────────────────────────
  {id:81,topic:"Pragmatism",q:"The word 'pragmatism' derives from the Greek word 'pragma' meaning:",opts:["Reason","Truth","Action","Beauty"],ans:2},
  {id:82,topic:"Pragmatism",q:"Pragmatism is described as an American philosophical ideology. Which of the following is NOT one of its main exponents?",opts:["Charles Sanders Peirce","William James","John Dewey","Immanuel Kant"],ans:3},
  {id:83,topic:"Pragmatism",q:"For John Dewey, 'education is life' means:",opts:["Education should only take place in the classroom","Education prepares the young for adulthood","Education is the process of reconstructing and reorganising human experience for continuous improvement","Education is a spiritual journey"],ans:2},
  {id:84,topic:"Pragmatism",q:"Pragmatism's curriculum is described as 'fluid'. This means it is:",opts:["Rigid and water-tight","Fixed by the government","Flexible and sensitive to learners' needs, interests and aspirations","Based solely on science and technology"],ans:2},
  {id:85,topic:"Pragmatism",q:"Which teaching method is NOT approved by pragmatists?",opts:["Discussion method","Project method","Lecture method only","Activity-based method"],ans:2},
  {id:86,topic:"Pragmatism",q:"A weakness of pragmatism is that it may promote:",opts:["Too much emphasis on science","Individualism and a 'survival of the fittest' mentality","Excessive focus on religious instruction","Overemphasis on teacher authority"],ans:1},
  {id:87,topic:"Pragmatism",q:"Pragmatism views values as:",opts:["Absolute and universal","Divinely ordained","Relative","Fixed by tradition"],ans:2},
  {id:88,topic:"Pragmatism",q:"Pragmatism promotes the view that education should train learners to become:",opts:["Passive recipients of knowledge","Social engineers and problem-solvers","Obedient followers of authority","Religious leaders"],ans:1},
  {id:89,topic:"Pragmatism",q:"According to pragmatism, the human person has which two natures?",opts:["Spiritual and divine","Rational and emotional","Biological and social","Physical and metaphysical"],ans:2},
  {id:90,topic:"Pragmatism",q:"Pragmatism is best classified as which type of philosophy of education?",opts:["Teacher-centred","Society-centred","Learner-centred","Subject-centred"],ans:2},
  // ── GENERAL ──────────────────────────────────────────────
  {id:91,topic:"General",q:"Which philosopher defined education as 'the sum of all processes by which an individual develops attitudes, abilities and behaviour useful to him/herself and society'?",opts:["Otonti Nduka","John Dewey","Babs Fafunwa","Plato"],ans:2},
  {id:92,topic:"General",q:"Which of the following is NOT a form of education?",opts:["Formal education","Non-formal education","Informal education","Supernatural education"],ans:3},
  {id:93,topic:"General",q:"Learning is defined as:",opts:["A temporary change in knowledge due to memorisation","A relatively permanent change in behaviour due to exposure, experience and practice","The ability to pass examinations","Socialisation into cultural norms"],ans:1},
  {id:94,topic:"General",q:"Culture is defined as:",opts:["A government policy on education","The totality of the ways of life of a group of people","The process of teaching and learning","A form of religious instruction"],ans:1},
  {id:95,topic:"General",q:"Which of the following is an agent of education?",opts:["Post offices","Banks","The family","Hotels"],ans:2},
  {id:96,topic:"General",q:"There are how many traditional schools of thought in philosophy of education?",opts:["Three","Four","Five","Six"],ans:2},
  {id:97,topic:"General",q:"Which of the following CORRECTLY matches the philosopher to their definition of education?",opts:["Aristotle — 'Education is the process of reminiscence'","John Dewey — 'Education is a sociological process of cultural transmission'","John Dewey — 'Education is the reconstruction and reorganisation of human experience'","Plato — 'Education is the sum of all processes that develop attitudes and abilities'"],ans:2},
  {id:98,topic:"General",q:"Non-formal education is primarily:",opts:["Planned and takes place within school walls","Unplanned and serendipitous","Organised and takes place outside the formal school system — vocational and skills-oriented","The same as informal education"],ans:2},
  {id:99,topic:"General",q:"Which of the following statements about the five traditional schools of thought is CORRECT?",opts:["Idealism is learner-centred; Pragmatism is teacher-centred","Realism is learner-centred; Idealism is society-centred","Pragmatism is learner-centred; Realism is society-centred","All five schools of thought are teacher-centred"],ans:2},
  {id:100,topic:"General",q:"The three domains of learning emphasised by Idealism are:",opts:["Reading, writing and arithmetic","Cognitive, affective and psychomotor","Spiritual, physical and intellectual","Formal, non-formal and informal"],ans:1},
];

const TOPIC_COLORS = {
  "Teaching as a Profession": "#3B82F6",
  "Ethics of Teaching":       "#10B981",
  "Sociology of Education":   "#F59E0B",
  "Philosophy of Education":  "#8B5CF6",
  "Idealism":                 "#EC4899",
  "Realism":                  "#EF4444",
  "Pragmatism":               "#06B6D4",
  "General":                  "#6B7280",
};

const TOPICS = ["All Topics", ...Array.from(new Set(ALL_QUESTIONS.map(q => q.topic)))];

// ════════════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════
let filterTopic = "All Topics";
let questions   = [];
let current     = 0;
let selected    = null;
let confirmed   = false;
let answers     = [];

// ════════════════════════════════════════════════════════════
//  UTILS
// ════════════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ════════════════════════════════════════════════════════════
//  HOME
// ════════════════════════════════════════════════════════════
function buildHome() {
  // Orbs
  const home = document.getElementById('home');
  for (let i = 0; i < 6; i++) {
    const o = document.createElement('div');
    o.className = 'orb';
    o.style.cssText = `
      width:${120+i*80}px; height:${120+i*80}px;
      top:${10+i*8}%; left:${5+i*12}%;
      animation:${i%2===0?'spinCW':'spinCCW'} ${20+i*5}s linear infinite;
    `;
    home.insertBefore(o, home.firstChild);
  }

  // Topic filter buttons
  const container = document.getElementById('topicFilters');
  TOPICS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'topic-btn' + (t === filterTopic ? ' active' : '');
    btn.textContent = t;
    btn.onclick = () => {
      filterTopic = t;
      document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateFilterCount();
    };
    container.appendChild(btn);
  });
  updateFilterCount();
  updateVisitCount();
}

function updateVisitCount() {
  const key = 'qiize-device-visits';
  const current = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, current);
  const visitElem = document.getElementById('visitCount');
  if (visitElem) visitElem.textContent = current;
}

function updateFilterCount() {
  const cnt = document.getElementById('filterCount');
  if (filterTopic !== "All Topics") {
    const n = ALL_QUESTIONS.filter(q => q.topic === filterTopic).length;
    cnt.textContent = `${n} questions available`;
  } else {
    cnt.textContent = '';
  }
}

function goHome() { showScreen('home'); }

// ════════════════════════════════════════════════════════════
//  QUIZ
// ════════════════════════════════════════════════════════════
function startQuiz() {
  const pool = filterTopic === "All Topics"
    ? ALL_QUESTIONS
    : ALL_QUESTIONS.filter(q => q.topic === filterTopic);
  questions = shuffle(pool);
  current   = 0;
  selected  = null;
  confirmed = false;
  answers   = [];
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  const color = TOPIC_COLORS[q.topic] || '#6B7280';

  // Header
  const tag = document.getElementById('topicTag');
  tag.textContent = q.topic;
  tag.style.cssText = `background:${color}22; border:1px solid ${color}66; color:${color};`;
  document.getElementById('qCounter').textContent = `${current+1}/${questions.length}`;

  // Progress
  document.getElementById('progressBar').style.width = `${(current/questions.length)*100}%`;

  // Live score
  const correct = answers.filter(a => a.selected === a.correct).length;
  const wrong   = answers.filter(a => a.selected !== a.correct).length;
  const remain  = questions.length - answers.length;
  document.getElementById('liveScore').innerHTML = `
    <div class="score-chip" style="color:#10B981">✓ ${correct}</div>
    <div class="score-chip" style="color:#EF4444">✗ ${wrong}</div>
    <div class="score-chip" style="color:#64748b">— ${remain}</div>
  `;

  // Question card border top
  document.querySelector('.question-card').style.borderTopColor = color;

  // Question text
  document.getElementById('questionText').innerHTML =
    `<span class="q-num" style="color:${color}">Q${current+1}. </span>${q.q}`;

  // Options
  const list = document.getElementById('optionsList');
  list.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-circle">${String.fromCharCode(65+i)}</span>${opt}`;
    btn.onclick = () => {
      if (confirmed) return;
      selected = i;
      renderOptions();
    };
    list.appendChild(btn);
  });

  // Feedback
  document.getElementById('feedback').style.display = 'none';

  // Action
  renderAction();

  // Animate in
  document.getElementById('quizInner').classList.remove('fade-up');
  void document.getElementById('quizInner').offsetWidth;
  document.getElementById('quizInner').classList.add('fade-up');
}

function renderOptions() {
  const q = questions[current];
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach((btn, i) => {
    btn.classList.remove('selected', 'correct', 'wrong');
    const circle = btn.querySelector('.opt-circle');
    circle.textContent = String.fromCharCode(65+i);
    if (!confirmed && selected === i) {
      btn.classList.add('selected');
    }
    if (confirmed && i === q.ans) {
      btn.classList.add('correct');
      circle.textContent = '✓';
    }
    if (confirmed && selected === i && i !== q.ans) {
      btn.classList.add('wrong');
      circle.textContent = '✗';
    }
    btn.disabled = confirmed;
  });

  // Ensure submit button enabled/disabled state follows selection
  const submit = document.getElementById('submitBtn');
  if (submit) submit.disabled = (selected === null || confirmed);
}

function renderAction() {
  const row = document.getElementById('actionRow');
  if (!confirmed) {
    row.innerHTML = `<button class="submit-btn" id="submitBtn" onclick="confirmAnswer()" ${selected === null ? 'disabled' : ''}>Submit Answer</button>`;
  } else {
    const last = current + 1 >= questions.length;
    row.innerHTML = `<button class="next-btn" onclick="nextQuestion()">
      ${last ? 'See Results →' : 'Next Question →'}</button>`;
  }
}

function confirmAnswer() {
  if (selected === null) return;
  confirmed = true;
  answers.push({ id: questions[current].id, selected, correct: questions[current].ans });
  renderOptions();
  // Feedback
  const fb = document.getElementById('feedback');
  const isCorrect = selected === questions[current].ans;
  fb.className = 'feedback ' + (isCorrect ? 'correct' : 'wrong');
  fb.textContent = isCorrect
    ? '✓ Correct! Well done.'
    : `✗ Incorrect. The correct answer is: ${questions[current].opts[questions[current].ans]}`;
  fb.style.display = 'block';
  renderAction();
}

function nextQuestion() {
  if (current + 1 >= questions.length) {
    showResults();
  } else {
    current++;
    selected  = null;
    confirmed = false;
    renderQuestion();
  }
}

// ════════════════════════════════════════════════════════════
//  RESULTS
// ════════════════════════════════════════════════════════════
function showResults() {
  showScreen('results');
  const score = answers.filter(a => a.selected === a.correct).length;
  const pct   = Math.round((score / questions.length) * 100);

  const grade = pct>=80?"Distinction":pct>=60?"Credit":pct>=50?"Pass":"Needs More Study";
  const gc    = pct>=80?"#10B981":pct>=60?"#3B82F6":pct>=50?"#F59E0B":"#EF4444";
  const emoji = pct>=80?"🏆":pct>=60?"🎓":pct>=50?"📚":"💪";

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultPct').textContent   = pct + '%';
  document.getElementById('resultPct').style.color   = gc;
  document.getElementById('resultPct').style.textShadow = `0 0 30px ${gc}66`;

  const badge = document.getElementById('gradeBadge');
  badge.textContent = grade;
  badge.style.cssText = `background:${gc}22; border:1px solid ${gc}; color:${gc};`;

  document.getElementById('resultScore').innerHTML =
    `You scored <b>${score}</b> out of <b>${questions.length}</b> questions`;

  // Breakdown
  const map = {};
  answers.forEach(a => {
    const topic = ALL_QUESTIONS.find(q => q.id === a.id)?.topic || "General";
    if (!map[topic]) map[topic] = { correct:0, total:0 };
    map[topic].total++;
    if (a.selected === a.correct) map[topic].correct++;
  });

  const rows = document.getElementById('breakdownRows');
  rows.innerHTML = '';
  Object.entries(map).forEach(([topic, {correct, total}]) => {
    const tp  = Math.round((correct/total)*100);
    const col = TOPIC_COLORS[topic] || '#6B7280';
    rows.innerHTML += `
      <div class="topic-row">
        <div class="topic-row-header">
          <span style="color:#e2e8f0">${topic}</span>
          <span style="color:${col};font-weight:700">${correct}/${total} (${tp}%)</span>
        </div>
        <div class="bar-bg">
          <div class="bar-fill" style="width:${tp}%;background:${col}"></div>
        </div>
      </div>`;
  });
}

// ════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════
buildHome();
