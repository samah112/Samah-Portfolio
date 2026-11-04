import { Project, HighlightItem, AwardItem, ResearchDomain, EducationItem, SkillCategory } from '../types';
import { PORTFOLIO_CONFIG } from '../config';

export const HERO_CONTENT = {
  greeting: {
    en: "Hello, I am",
    ar: "أهلاً، أنا",
  },
  name: {
    en: "Samah A.Basoodan",
    ar: "سماح باسودان",
  },
  titleRole: {
    en: "AI Researcher · Computer Science Student · Biomedical Innovator",
    ar: "باحثة ذكاء اصطناعي · طالبة علوم حاسب · مبتكرة هندسة طبية حيوية",
  },
  heroHeading: {
    en: "Building intelligent technologies for medicine, biomedical innovation, and investment",
    ar: "أبني تقنيات ذكية للطب والابتكار الطبي الحيوي والاستثمار",
  },
  heroSubheading: {
    en: "I'm a Computer Science student, AI researcher, and Biomedical Innovator developing intelligent systems that transform complex research into meaningful real-world impact.",
    ar: "طالبة علوم حاسب، وباحثة في الذكاء الاصطناعي، ومبتكرة في التقنيات الطبية الحيوية أعمل على تطوير أنظمة ذكية تحوّل الأبحاث المعقدة إلى ابتكارات ذات أثر ملموس.",
  },
  ctaPrimary: {
    en: "Explore My Work",
    ar: "استكشف أعمالي",
  },
  ctaSecondary: {
    en: "Let's Connect",
    ar: "تواصل معي",
  },
  statusBadge: {
    en: "Open to Research & AI Collaborations",
    ar: "متاحة للتعاون البحثي ومشاريع الذكاء الاصطناعي",
  },
  orbitalPills: {
    datathon: {
      en: "2nd Place · Health Datathon",
      ar: "المركز الثاني · الداتاثون الصحي",
    },
    founder: {
      en: "Founder · ULTRA Investment",
      ar: "مؤسسة · ULTRA Investment",
    },
    programs: {
      en: "SEU · KAUST · KACST",
      ar: "الجامعة السعودية الإلكترونية · كاوست · كاكيست",
    },
  },
};

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: "award-datathon",
    badge: {
      en: "National Recognition",
      ar: "تكريم وطني",
    },
    title: {
      en: "2nd Place — Health Datathon",
      ar: "المركز الثاني — الداتاثون الصحي",
    },
    description: {
      en: "Honored for developing an AI-based medical innovation in the premature mortality reduction track, supported by the Ministry of Health and SDAIA.",
      ar: "تكريم لتطوير ابتكار طبي قائم على الذكاء الاصطناعي في مسار تقليل الوفيات المبكرة، بدعم وزارة الصحة وسدايا.",
    },
    iconName: "Trophy",
    featured: true,
  },
  {
    id: "medical-ai",
    badge: {
      en: "Biomedical Innovation",
      ar: "ابتكار طبي حيوي",
    },
    title: {
      en: "AI & Medical Innovation",
      ar: "أبحاث الذكاء الاصطناعي والابتكار الطبي",
    },
    description: {
      en: "Developing non-invasive brain cancer ultrasound concepts and predictive stroke risk modeling systems.",
      ar: "أبحاث في الموجات فوق الصوتية المركزة غير الجراحية لعلاج أورام الدماغ ونماذج التنبؤ بالسكتات الدماغية.",
    },
    iconName: "Activity",
  },
  {
    id: "ultra-investment",
    badge: {
      en: "Venture & FinTech",
      ar: "ريادة الأعمال والتقنية المالية",
    },
    title: {
      en: "Founder — ULTRA Investment",
      ar: "مؤسسة — ULTRA Investment",
    },
    description: {
      en: "Architected an institutional AI platform connecting generative foundation models with deep financial intelligence workflows.",
      ar: "منصة ذكاء اصطناعي مؤسسية لربط النماذج التوليدية بإجراءات التحليل المالي والاستثماري.",
    },
    iconName: "TrendingUp",
  },
  {
    id: "leadership-toastmasters",
    badge: {
      en: "5+ Years Leadership",
      ar: "+5 سنوات قيادة",
    },
    title: {
      en: "President — Okaz Toastmasters",
      ar: "رئيسة — نادي عكاظ للتوستماسترز",
    },
    description: {
      en: "Presiding over Okaz Toastmasters Club hosted at Ithra (King Abdulaziz Center for World Culture by Aramco), mentoring members and directing executive teams.",
      ar: "رئاسة نادي عكاظ للتوستماسترز المستضاف في مركز إثراء (أرامكو)، وقيادة الفرق التنفيذية وتمكين المهارات الخطابية.",
    },
    iconName: "Award",
  },
  {
    id: "kaust-program",
    badge: {
      en: "Advanced AI",
      ar: "ذكاء اصطناعي متقدم",
    },
    title: {
      en: "AI Program — KAUST Academy",
      ar: "برنامج الذكاء الاصطناعي — أكاديمية كاوست",
    },
    description: {
      en: "Specialized training in machine learning, computer vision, deep architectures, and frontier artificial intelligence models.",
      ar: "تدريب متخصص في تعلم الآلة والرؤية الحاسوبية والشبكات العميقة ونماذج الذكاء الاصطناعي الحديثة.",
    },
    iconName: "Brain",
  },
  {
    id: "kacst-program",
    badge: {
      en: "Semiconductors",
      ar: "أشباه الموصلات",
    },
    title: {
      en: "Semiconductor ICs — KACST",
      ar: "برنامج أشباه الموصلات — مدينة الملك عبدالعزيز (KACST)",
    },
    description: {
      en: "Explored integrated circuit design, hardware architecture, and edge computing for intelligent hardware systems.",
      ar: "دراسة تصميم الدوائر المتكاملة وهندسة العتاد والحوسبة الطرفية للأنظمة الذكية.",
    },
    iconName: "Cpu",
  },
];

export const ABOUT_CONTENT = {
  sectionTag: {
    en: "About Samah",
    ar: "عن سماح",
  },
  heading: {
    en: "Bridging AI & Healthcare",
    ar: "الجسر بين الذكاء الاصطناعي والرعاية الصحية",
  },
  p1: {
    en: "Samah is a Computer Science student at Saudi Electronic University, driven by a deep passion for Artificial Intelligence, Biomedical Engineering, Medical Innovation, and intelligent systems.",
    ar: "سماح باسودان طالبة علوم حاسب في الجامعة السعودية الإلكترونية، شغوفة بالذكاء الاصطناعي والهندسة الطبية الحيوية والابتكار الطبي والأنظمة الذكية.",
  },
  p2: {
    en: "Her work spans AI-powered medical systems—from focused ultrasound concepts for non-invasive brain cancer treatment to stroke prediction models—translating research and technology into solutions with meaningful real-world potential.",
    ar: "تتنوع مجالات أبحاثها لتشمل الأنظمة الطبية المدعومة بالذكاء الاصطناعي، من مفاهيم الموجات فوق الصوتية المركزة لعلاج أورام الدماغ غير الجراحية إلى نماذج التنبؤ بمخاطر السكتة الدماغية.",
  },
  p3: {
    en: "She is also the founder of ULTRA Investment, an institutional AI platform designed to bridge generative models with financial intelligence.",
    ar: "وهي أيضاً مؤسسة منصة ULTRA Investment، وهي منصة ذكاء اصطناعي مؤسسية صُممت للربط بين النماذج اللغوية التوليدية وحلول التحليل المالي الذكي.",
  },
  p4: {
    en: "Her technical work is supported by more than five years of leadership experience at Okaz Toastmasters Club, hosted at Ithra by Aramco.",
    ar: "يتكامل عملها التقني مع أكثر من خمس سنوات من الخبرة القيادية كرئيسة لنادي عكاظ للتوستماسترز المستضاف في مركز إثراء التابع لأرامكو.",
  },
  identityPillars: [
    {
      title: { en: "AI Researcher", ar: "باحثة ذكاء اصطناعي" },
      desc: { en: "Machine Learning, Deep Neural Architectures, Computer Vision & LLMs", ar: "تعلم الآلة، الشبكات العصبية العميقة، الرؤية الحاسوبية والنماذج التوليدية" },
      icon: "Sparkles",
    },
    {
      title: { en: "Medical Inventor", ar: "مبتكرة ومخترعة طبية" },
      desc: { en: "Biomedical Engineering, Focused Ultrasound, Health Analytics & Diagnostics", ar: "هندسة طبية حيوية، موجات فوق صوتية مركزة، تحليلات صحية ونظم تشخيص" },
      icon: "HeartPulse",
    },
    {
      title: { en: "Technology Builder", ar: "مطورة وبانية أنظمة" },
      desc: { en: "System Architecture, Generative SaaS, Embedded AI & FinTech Systems", ar: "هندسة وبناء النظم، البرمجيات التوليدية، والأنظمة المالية والذكية" },
      icon: "Code2",
    },
    {
      title: { en: "Community Leader", ar: "قائدة وموجهة" },
      desc: { en: "5+ Years Toastmasters Leadership, Public Speaking & Executive Direction", ar: "+5 سنوات قيادة في التوستماسترز، الخطابة العامة والتوجيه التنفيذي" },
      icon: "Users",
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ultra-investment",
    categoryKey: "fintech",
    category: {
      en: "Financial Technology · Generative AI",
      ar: "تقنية مالية · ذكاء اصطناعي توليدي",
    },
    title: {
      en: "ULTRA Investment",
      ar: "ULTRA Investment",
    },
    badge: {
      en: "Founder & Architect",
      ar: "مؤسسة ومطورة",
    },
    shortDescription: {
      en: "Generative AI-powered institutional investment intelligence platform designed to support investment research, company analysis, portfolio management, and decision-making.",
      ar: "منصة ذكاء اصطناعي مؤسسية لدعم أبحاث الاستثمار، وتحليل الشركات، وإدارة المحافظ واتخاذ القرارات الاستثمارية بربط النماذج اللغوية بسير العمل المالي.",
    },
    fullDescription: {
      en: "ULTRA Investment connects enterprise large language models with specialized financial data pipelines. The platform automates complex equity research, regulatory filings extraction, competitive matrix generation, and scenario simulation for investment analysts and decision-makers.",
      ar: "تربط منصة ULTRA Investment بين النماذج التوليدية المتطورة وقنوات البيانات المالية المتخصصة، حيث تؤتمت أبحاث الأسهم، واستخراج التقارير المالية، وبناء مصفوفات المقارنة التنافسية لمحترفي الاستثمار.",
    },
    role: {
      en: "Founder, System Architect & AI Concept Lead",
      ar: "المؤسسة، مهندسة النظام وقائدة الذكاء الاصطناعي",
    },
    technologies: {
      en: ["Generative AI", "Large Language Models", "FinTech", "Data Analytics", "Portfolio Management", "React"],
      ar: ["الذكاء الاصطناعي التوليدي", "النماذج اللغوية الكبيرة", "التقنية المالية", "تحليل البيانات", "إدارة المحافظ", "رياكت"],
    },
    highlights: {
      en: [
        "Automated financial report parsing and metric extraction",
        "Multi-agent reasoning loops for comprehensive market risk analysis",
        "Dynamic investment thesis summarization and scenario planning",
      ],
      ar: [
        "أتمتة قراءة وتحليل التقارير المالية واستخراج المؤشرات الجوهرية",
        "سلاسل استدلال متعددة الوكلاء لتحليل مخاطر السوق",
        "تلخيص أطروحات الاستثمار ومحاكاة السيناريوهات المختلفة",
      ],
    },
    accentColor: "#AD73A1",
  },
  {
    id: "ai-stroke-prediction",
    categoryKey: "medical",
    category: {
      en: "Healthcare Analytics · Machine Learning",
      ar: "تحليلات الرعاية الصحية · تعلم الآلة",
    },
    title: {
      en: "AI Stroke Prediction",
      ar: "التنبؤ المبكر بالسكتات الدماغية بالذكاء الاصطناعي",
    },
    badge: {
      en: "2nd Place Winner Award",
      ar: "الحائز على المركز الثاني",
    },
    shortDescription: {
      en: "An AI-powered early stroke risk prediction and detection project developed for the Ministry of Health-supported Health Datathon, achieving 2nd Place in the premature mortality reduction track.",
      ar: "مشروع تنبؤ وكشف مبكر لمخاطر السكتة الدماغية بالذكاء الاصطناعي تم تطويره للداتاثون الصحي المدعوم من وزارة الصحة، محققاً المركز الثاني بمسار تقليل الوفيات المبكرة.",
    },
    fullDescription: {
      en: "Developed during the national Health Datathon under the patronage of the Ministry of Health and SDAIA. The predictive system synthesizes longitudinal physiological indicators, biometric anomalies, and patient risk factors to flag impending cerebrovascular events before irreversible damage occurs.",
      ar: "تم تطوير هذا النظام خلال الداتاثون الصحي الوطني برعاية وزارة الصحة وسدايا، حيث يحلل المؤشرات الفسيولوجية الحيوية وعوامل الخطورة للتنبؤ بالحوادث الدماغية الوعائية قبل حدوث الضرر الدائم.",
    },
    role: {
      en: "AI Modeling & Healthcare Data Specialist",
      ar: "أخصائية نمذجة الذكاء الاصطناعي والبيانات الصحية",
    },
    technologies: {
      en: ["Machine Learning", "Health Data", "Predictive Modeling", "Risk Analytics", "Python"],
      ar: ["تعلم الآلة", "بيانات الرعاية الصحية", "النمذجة التنبؤية", "تحليل المخاطر", "بايثون"],
    },
    highlights: {
      en: [
        "Awarded 2nd Place out of nationwide competitive health tracks",
        "Pre-emptive risk stratification algorithm across patient cohorts",
        "Designed to integrate into clinical decision support workflows",
      ],
      ar: [
        "الفوز بالمركز الثاني على مستوى المسارات التنافسية للداتاثون",
        "خوارزمية تصنيف استباقي لمستويات الخطورة لدى المرضى",
        "مصمم للتكامل مع أنظمة دعم القرار الإكلينيكي في المستشفيات",
      ],
    },
    clinicalNote: {
      en: "Healthcare Analytics Note: Developed as an analytical datathon prototype focusing on early risk indicators; clinical validation is ongoing.",
      ar: "ملاحظة تحليلية: طُوّر كنموذج أولي تحليلي في الداتاثون للتركيز على مؤشرات الخطر المبكرة.",
    },
    accentColor: "#F2A5A8",
  },
  {
    id: "medical-thrombosis-dosing",
    categoryKey: "medical",
    category: {
      en: "Clinical Software · Healthcare Innovation",
      ar: "برمجيات إكلينيكية · ابتكار صحي",
    },
    title: {
      en: "Medical Thrombosis Dosing Innovation",
      ar: "ابتكار تحديد جرعات أدوية التخثر الذكي",
    },
    badge: {
      en: "KSAU-HS Hackathon",
      ar: "هاكاثون جامعة الملك سعود للعلوم الصحية",
    },
    shortDescription: {
      en: "A healthcare innovation developed during the King Saud bin Abdulaziz University for Health Sciences Health Innovation Hackathon, focused on intelligent thrombosis medication dosing using patient-specific parameters.",
      ar: "ابتكار صحي طُوّر في هاكاثون الابتكار الصحي بجامعة الملك سعود بن عبدالعزيز للعلوم الصحية، يركز على الحساب الدقيق لجرعات أدوية التخثر بناءً على المعايير الخاصة بكل مريض.",
    },
    fullDescription: {
      en: "Anti-coagulation therapy requires delicate balancing between thrombosis prevention and hemorrhage risk. This clinical decision-support tool calculates personalized therapeutic dosing curves by correlating renal function, hepatic clearance, age, and pharmacological interactions.",
      ar: "يتطلب العلاج بمضادات التخثر توازناً دقيقاً بين منع الجلطات وتجنب مخاطر النزيف. تقدم هذه الأداة دعماً إكلينيكياً لحساب منحنيات الجرعات المناسبة وفق وظائف الكلى والكبد وعمر المريض والتفاعلات الدوائية.",
    },
    role: {
      en: "Clinical Algorithm Designer & UX Lead",
      ar: "مصممة الخوارزميات الإكلينيكية وتجربة المستخدم",
    },
    technologies: {
      en: ["Healthcare AI", "Clinical Algorithms", "Pharmacology", "UI/UX Design", "Decision Support"],
      ar: ["الذكاء الاصطناعي الصحي", "خوارزميات سريرية", "علم الأدوية", "تصميم الواجهات وتجربة المستخدم", "دعم القرار الطبي"],
    },
    highlights: {
      en: [
        "Patient-specific pharmacokinetic calibration models",
        "Interactive hazard-zone visualization for attending clinicians",
        "Streamlined decision support interface reducing dosage calculation errors",
      ],
      ar: [
        "نماذج معايرة دوائية مخصصة لبيانات كل مريض",
        "واجهة بصرية تفاعلية لتنبيه الأطباء بمناطق الخطر الدوائي",
        "تقليل احتمالات الخطأ الحسابي في الجرعات الطبية الحرجة",
      ],
    },
    accentColor: "#8C659E",
  },
  {
    id: "mvp-design-platform",
    categoryKey: "fintech",
    category: {
      en: "SaaS · Product Design",
      ar: "برمجيات كخدمة · تصميم المنتجات",
    },
    title: {
      en: "MVP Design Platform",
      ar: "منصة تصميم النماذج الأولية الذكية",
    },
    badge: {
      en: "Product Architecture",
      ar: "هندسة المنتجات",
    },
    shortDescription: {
      en: "An AI-powered platform concept for designing startup MVPs and transforming early ideas into structured digital product experiences.",
      ar: "مفهوم منصة مدعومة بالذكاء الاصطناعي لتصميم النماذج الأولية للمشاريع الناشئة وتحويل الأفكار الأولية إلى منتجات رقمية متكاملة.",
    },
    fullDescription: {
      en: "A design-to-spec intelligence workbench that helps founders map user journeys, generate structural component taxonomies, and iterate on product mechanics through guided generative workflows.",
      ar: "بيئة عمل ذكية تساعد رواد الأعمال والمطورين على رسم رحلات المستخدمين، وتوليد هياكل المكونات البرمجية، واختبار آليات المنتج بسرعة وكفاءة.",
    },
    role: {
      en: "Product Architect & Full-Stack Designer",
      ar: "مهندسة المنتج والمصممة الشاملة",
    },
    technologies: {
      en: ["Generative Design", "Product Architecture", "React", "AI/ML", "UI/UX Design"],
      ar: ["التصميم التوليدي", "هندسة المنتجات", "رياكت", "الذكاء الاصطناعي وتعلم الآلة", "تصميم الواجهات وتجربة المستخدم"],
    },
    highlights: {
      en: [
        "Prompt-driven UI architecture generation",
        "Design system consistency verification engine",
        "Rapid prototyping export pipelines",
      ],
      ar: [
        "توليد هياكل واجهات المستخدمين عبر الأوامر الذكية",
        "محرك تدقيق اتساق نظم التصميم الرقمية",
        "تصدير النماذج الأولية التفاعلية بسرعة قياسية",
      ],
    },
    accentColor: "#AD73A1",
  },
  {
    id: "medical-device-architecture",
    categoryKey: "systems",
    category: {
      en: "Hardware · Embedded Systems",
      ar: "عتاد · أنظمة مدمجة",
    },
    title: {
      en: "Medical Device Architecture",
      ar: "هندسة الأجهزة الطبية الذكية",
    },
    badge: {
      en: "Hardware & Edge AI",
      ar: "العتاد والذكاء الطرفي",
    },
    shortDescription: {
      en: "AI-powered biomedical device architecture concepts integrating sensor arrays, embedded systems, signal-processing pipelines, and intelligent inference for clinical applications.",
      ar: "مفاهيم هندسية لأجهزة طبية ذكية تدمج مصفوفات الاستشعار، والأنظمة المدمجة، ومعالجة الإشارات، والاستدلال الذكي للتطبيقات السريرية.",
    },
    fullDescription: {
      en: "Bridging the gap between physical biosensing and real-time computation. Explores embedded microcontroller architectures, noise filtration algorithms, and edge neural processing units for continuous physiological telemetry.",
      ar: "الربط بين الاستشعار الحيوي الفيزيائي والمعالجة الحسابية اللحظية، مع استكشاف المعالجات المدمجة وخوارزميات تنقية الإشارات لتتبع المؤشرات الحيوية.",
    },
    role: {
      en: "Embedded Systems & Hardware Architecture Researcher",
      ar: "باحثة الأنظمة المدمجة وهندسة العتاد",
    },
    technologies: {
      en: ["Embedded Systems", "Hardware Design", "Biosensors", "Edge AI", "System Architecture"],
      ar: ["الأنظمة المدمجة", "تصميم العتاد", "المستشعرات الحيوية", "الذكاء الاصطناعي الطرفي", "هندسة النظم"],
    },
    highlights: {
      en: [
        "Low-latency real-time biosignal filtering pipelines",
        "Edge inference optimization for resource-constrained microcontrollers",
        "Fault-tolerant telemetry protocol design",
      ],
      ar: [
        "معالجة فورية للإشارات الحيوية بزمن استجابة منخفض",
        "تحسين الاستدلال بالذكاء الاصطناعي على المعالجات المدمجة",
        "بروتوكولات نقل بيانات مقاومة للأخطاء والانقطاع",
      ],
    },
    accentColor: "#45438A",
  },
  {
    id: "environmental-sustainability",
    categoryKey: "eco",
    category: {
      en: "Eco-Tech · Smart Systems",
      ar: "تقنية بيئية · أنظمة ذكية",
    },
    title: {
      en: "Environmental Sustainability Platform",
      ar: "منصة الاستدامة ومكافحة التصحر",
    },
    badge: {
      en: "Smart Systems & GIS",
      ar: "أنظمة ذكية ونظم معلومات جغرافية",
    },
    shortDescription: {
      en: "A technology platform concept focused on combating desertification, environmental sustainability, climate awareness, and intelligent environmental monitoring.",
      ar: "مفهوم منصة تقنية تُعنى بمكافحة التصحر، والاستدامة البيئية، والتوعية المناخية، والمراقبة البيئية الذكية باستخدام بيانات الأقمار الصناعية.",
    },
    fullDescription: {
      en: "Utilizes geospatial satellite imagery, vegetative indexes (NDVI), and hydrological simulation models to pinpoint vulnerable desertification zones and track reforestation initiatives across arid terrains.",
      ar: "توظيف صور الأقمار الصناعية الجغرافية ومؤشرات الغطاء النباتي والنماذج المائية لتحديد مناطق التصحر ومتابعة مشاريع التشجير في البيئات الجافة.",
    },
    role: {
      en: "System Modeler & Environmental Data Analyst",
      ar: "محللة النظم والبيانات البيئية",
    },
    technologies: {
      en: ["Satellite Data", "GIS", "Sustainability", "Smart Systems", "IoT"],
      ar: ["بيانات الأقمار الصناعية", "نظم المعلومات الجغرافية", "الاستدامة البيئية", "الأنظمة الذكية", "إنترنت الأشياء"],
    },
    highlights: {
      en: [
        "Vegetation health tracking using multi-spectral satellite channels",
        "Micro-climate trend forecasting across regional topography",
        "Community awareness dashboard and environmental metric tracking",
      ],
      ar: [
        "تتبع صحة الغطاء النباتي عبر القنوات الطيفية للأقمار الصناعية",
        "التنبؤ بالاتجاهات المناخية المحلية وتغيرات التربة",
        "لوحة بيانات تفاعلية للتوعية المجتمعية والمؤشرات البيئية",
      ],
    },
    accentColor: "#8C659E",
  },
];

export const AWARD_SPOTLIGHT: AwardItem = {
  id: "health-datathon-2024",
  title: {
    en: "2nd Place Winner — Health Datathon",
    ar: "المركز الثاني — الداتاثون الصحي",
  },
  organization: {
    en: "Ministry of Health & SDAIA",
    ar: "وزارة الصحة والهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)",
  },
  track: {
    en: "Reducing Premature Mortality Track",
    ar: "مسار تقليل الوفيات المبكرة",
  },
  statement: {
    en: "2nd Place at the Health Datathon for an AI-driven medical innovation focused on early detection and prediction within the premature mortality reduction track.",
    ar: "المركز الثاني في الداتاثون الصحي عن ابتكار طبي قائم على الذكاء الاصطناعي للكشف والتنبؤ المبكر ضمن مسار تقليل الوفيات المبكرة.",
  },
  supporters: {
    en: [
      "Ministry of Health (MOH)",
      "Saudi Data and AI Authority (SDAIA)",
      "Misk Foundation",
      "Dal Initiative",
      "Hosted during Global Health Exhibition",
    ],
    ar: [
      "وزارة الصحة",
      "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)",
      "مؤسسة مسك",
      "مبادرة دال",
      "استُضيف خلال ملتقى الصحة العالمي",
    ],
  },
  recognition: {
    en: [
      "Recognition by H.E. Fahad bin Abdulrahman AlJalajel, Minister of Health",
      "Recognition by H.R.H. Dr. Haya bint Khalid Al Saud",
    ],
    ar: [
      "تكريم من معالي وزير الصحة الأستاذ فهد بن عبدالرحمن الجلاجل",
      "تكريم من سمو الأميرة الدكتورة هيا بنت خالد آل سعود",
    ],
  },
  imageUrl: PORTFOLIO_CONFIG.images.datathonAward,
};

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  {
    id: "ai-core",
    title: {
      en: "Artificial Intelligence",
      ar: "الذكاء الاصطناعي",
    },
    description: {
      en: "Exploring frontier neural architectures, computer vision, deep generative modeling, and multi-agent reasoning systems.",
      ar: "استكشاف الشبكات العصبية المتقدمة، والرؤية الحاسوبية، والنماذج التوليدية وأنظمة الاستدلال متعددة الوكلاء.",
    },
    iconName: "Brain",
    color: "#45438A",
    topics: {
      en: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "Neural Networks"],
      ar: ["تعلم الآلة", "التعلم العميق", "الرؤية الحاسوبية", "الذكاء الاصطناعي التوليدي", "الشبكات العصبية"],
    },
    impact: {
      en: "Applied across clinical analytics, computer vision diagnostics, and high-dimensional decision modeling.",
      ar: "تطبيقات في التشخيص البصري والتحليلات الإكلينيكية ونمذجة اتخاذ القرار.",
    },
  },
  {
    id: "med-intelligence",
    title: {
      en: "Medical Intelligence",
      ar: "الذكاء الطبي والابتكار الحيوي",
    },
    description: {
      en: "Integrating computational algorithms with clinical physics, focused ultrasound therapy, and stroke risk prediction.",
      ar: "دمج الخوارزميات الحسابية مع الفيزياء الطبية، والعلاج بالموجات فوق الصوتية المركزة، والتنبؤ بمخاطر الجلطات.",
    },
    iconName: "HeartPulse",
    color: "#AD73A1",
    topics: {
      en: ["Medical AI", "Biomedical Engineering", "Medical Devices", "Focused Ultrasound", "Healthcare Innovation"],
      ar: ["الذكاء الاصطناعي الطبي", "الهندسة الطبية الحيوية", "الأجهزة الطبية", "الموجات فوق الصوتية المركزة", "الابتكار الصحي"],
    },
    impact: {
      en: "Pioneering non-invasive intracranial tumor management and predictive acute mortality reduction concepts.",
      ar: "حلول مبتكرة للعلاج غير الجراحي لأورام الدماغ وتقليل معدلات الوفيات المبكرة.",
    },
  },
  {
    id: "infra-hardware",
    title: {
      en: "Intelligent Infrastructure",
      ar: "البنية التحتية والأنظمة الذكية",
    },
    description: {
      en: "Bridging software algorithms with semiconductor integrated circuits, embedded microcontrollers, and edge computing.",
      ar: "الربط بين البرمجيات الذكية وتصميم دوائر أشباه الموصلات والأنظمة المدمجة والحوسبة الطرفية.",
    },
    iconName: "Cpu",
    color: "#8C659E",
    topics: {
      en: ["Semiconductor Engineering", "Embedded AI", "Smart Systems", "System Architecture", "Biosensing"],
      ar: ["هندسة أشباه الموصلات", "الذكاء الطرفي المدمج", "الأنظمة الذكية", "هندسة النظم", "الاستشعار الحيوي"],
    },
    impact: {
      en: "Enabling ultra-low power on-device intelligence for continuous clinical monitoring and telemetry.",
      ar: "تمكين المعالجة الذكية منخفضة استهلاك الطاقة على الأجهزة الطبية والمراقبة المستمرة.",
    },
  },
  {
    id: "financial-intel",
    title: {
      en: "Financial Intelligence",
      ar: "الذكاء المالي والاستثماري",
    },
    description: {
      en: "Designing generative intelligence workflows that bridge language models with institutional investment research.",
      ar: "تصميم أنظمة ذكية تربط بين النماذج التوليدية وسير عمل أبحاث الاستثمار والتحليل المالي المؤسسي.",
    },
    iconName: "TrendingUp",
    color: "#F2A5A8",
    topics: {
      en: ["Investment Intelligence", "Generative Models", "Data-Driven Decisions", "FinTech Systems", "Risk Modeling"],
      ar: ["ذكاء الاستثمار", "النماذج التوليدية", "القرارات المعتمدة على البيانات", "التقنية المالية", "نمذجة المخاطر"],
    },
    impact: {
      en: "Powering automated equity analysis, regulatory synthesis, and probabilistic scenario planning.",
      ar: "أتمتة تحليل الأسهم وفحص القوائم المالية وتوقع السيناريوهات الاستثمارية.",
    },
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "seu-cs",
    degree: {
      en: "Bachelor of Computer Science",
      ar: "بكالوريوس علوم الحاسب",
    },
    institution: {
      en: "Saudi Electronic University (SEU)",
      ar: "الجامعة السعودية الإلكترونية",
    },
    status: {
      en: "Current Student",
      ar: "طالبة حالية",
    },
    focus: {
      en: [
        "Computer Science fundamentals & algorithms",
        "Software engineering & architecture",
        "Intelligent systems & computational theory",
      ],
      ar: [
        "أساسيات علوم الحاسب والخوارزميات",
        "هندسة البرمجيات وهيكلة النظم",
        "الأنظمة الذكية والنظرية الحسابية",
      ],
    },
    color: "#45438A",
  },
  {
    id: "kaust-ai",
    degree: {
      en: "Artificial Intelligence Program",
      ar: "برنامج الذكاء الاصطناعي",
    },
    institution: {
      en: "KAUST Academy",
      ar: "أكاديمية كاوست (KAUST Academy)",
    },
    status: {
      en: "Advanced Certification & Research",
      ar: "برنامج متخصص وبحثي متقدم",
    },
    focus: {
      en: [
        "Artificial Intelligence & Machine Learning",
        "Deep Learning architectures & optimization",
        "Computer Vision & real-world AI deployment",
      ],
      ar: [
        "الذكاء الاصطناعي وتعلم الآلة",
        "بنى التعلم العميق وتحسين النماذج",
        "الرؤية الحاسوبية وتطبيقات الذكاء الاصطناعي الحديثة",
      ],
    },
    color: "#AD73A1",
  },
  {
    id: "kacst-semiconductors",
    degree: {
      en: "Semiconductor Integrated Circuits Program",
      ar: "برنامج الدوائر المتكاملة وأشباه الموصلات",
    },
    institution: {
      en: "KACST (King Abdulaziz City for Science and Technology)",
      ar: "مدينة الملك عبدالعزيز للعلوم والتقنية (KACST)",
    },
    status: {
      en: "Specialized Engineering Program",
      ar: "برنامج هندسي تخصصي",
    },
    focus: {
      en: [
        "Semiconductor engineering & fabrication principles",
        "Integrated circuit (IC) design & logic",
        "Co-design of intelligent hardware & software systems",
      ],
      ar: [
        "هندسة أشباه الموصلات ومبادئ التصنيع",
        "تصميم الدوائر المتكاملة والمنطق الرقمي",
        "تكامل العتاد الصلب مع البرمجيات والأنظمة الذكية",
      ],
    },
    color: "#8C659E",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-data",
    title: {
      en: "AI & Data",
      ar: "الذكاء الاصطناعي والبيانات",
    },
    iconName: "Brain",
    skills: [
      { name: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" }, iconName: "Sparkles" },
      { name: { en: "Machine Learning", ar: "تعلم الآلة" }, iconName: "GitBranch" },
      { name: { en: "Deep Learning", ar: "التعلم العميق" }, iconName: "Layers" },
      { name: { en: "Computer Vision", ar: "الرؤية الحاسوبية" }, iconName: "Eye" },
      { name: { en: "Generative AI", ar: "الذكاء الاصطناعي التوليدي" }, iconName: "Wand2" },
      { name: { en: "Python", ar: "بايثون" }, iconName: "Terminal" },
      { name: { en: "Data Analytics", ar: "تحليل البيانات" }, iconName: "BarChart3" },
    ],
  },
  {
    id: "biomedical-research",
    title: {
      en: "Research & Biomedical Innovation",
      ar: "البحث العلمي والابتكار الطبي الحيوي",
    },
    iconName: "HeartPulse",
    skills: [
      { name: { en: "Scientific Research", ar: "البحث العلمي" }, iconName: "BookOpen" },
      { name: { en: "Biomedical Engineering", ar: "الهندسة الطبية الحيوية" }, iconName: "Activity" },
      { name: { en: "Medical Innovation", ar: "الابتكار الطبي" }, iconName: "Stethoscope" },
      { name: { en: "Medical Device Design", ar: "تصميم الأجهزة الطبية" }, iconName: "Component" },
      { name: { en: "Medical Invention", ar: "الاختراع الطبي" }, iconName: "Lightbulb" },
      { name: { en: "Healthcare AI", ar: "الذكاء الاصطناعي الصحي" }, iconName: "ShieldAlert" },
    ],
  },
  {
    id: "product-engineering",
    title: {
      en: "Product & Engineering",
      ar: "المنتجات والهندسة",
    },
    iconName: "Cpu",
    skills: [
      { name: { en: "System Architecture", ar: "هندسة النظم" }, iconName: "Network" },
      { name: { en: "Product Design", ar: "تصميم المنتجات" }, iconName: "Figma" },
      { name: { en: "UI / UX Design", ar: "تصميم الواجهات وتجربة المستخدم" }, iconName: "Palette" },
      { name: { en: "Embedded Systems", ar: "الأنظمة المدمجة" }, iconName: "Microchip" },
      { name: { en: "Hardware Concepts", ar: "مفاهيم العتاد الصلب" }, iconName: "HardDrive" },
      { name: { en: "Tech Innovation", ar: "الابتكار التقني" }, iconName: "Rocket" },
    ],
  },
  {
    id: "leadership-comm",
    title: {
      en: "Leadership & Communication",
      ar: "القيادة والتواصل",
    },
    iconName: "Users",
    skills: [
      { name: { en: "Executive Leadership", ar: "القيادة التنفيذية" }, iconName: "Crown" },
      { name: { en: "Public Speaking", ar: "الخطابة والتحدث أمام الجمهور" }, iconName: "Mic" },
      { name: { en: "Effective Communication", ar: "التواصل الفعال" }, iconName: "MessageSquare" },
      { name: { en: "Critical Thinking", ar: "التفكير النقدي" }, iconName: "Target" },
      { name: { en: "Problem Solving", ar: "حل المشكلات المعقدة" }, iconName: "CheckCircle2" },
      { name: { en: "Team Mentorship", ar: "توجيه وتمكين الفرق" }, iconName: "Compass" },
    ],
  },
];

export const LEADERSHIP_CONTENT = {
  sectionTag: {
    en: "Leadership & Impact",
    ar: "القيادة والأثر الإنساني",
  },
  heading: {
    en: "Impact Through Leadership",
    ar: "صناعة الأثر من خلال القيادة",
  },
  highlightNumber: "5+",
  highlightLabel: {
    en: "Years of Leadership & Public Speaking",
    ar: "سنوات من القيادة والخطابة العامة",
  },
  story: {
    en: "True innovation marries technological mastery with the ability to inspire, communicate, and lead people. Samah has served as President of Okaz Toastmasters Club, proudly hosted at Ithra (King Abdulaziz Center for World Culture by Aramco), guiding executive teams, mentoring aspiring communicators, and curating impactful educational programs.",
    ar: "الابتكار الحقيقي يجمع بين البراعة التقنية والقدرة على إلهام وتوجيه الآخرين. خدمت سماح كرئيسة لنادي عكاظ للتوستماسترز المستضاف في مركز إثراء (مركز الملك عبدالعزيز الثقافي العالمي التابع لأرامكو)، حيث قادت الفرق التنفيذية، ووجهت الأعضاء، ونظمت مبادرات تعليمية وخطابية نوعية.",
  },
  roles: [
    {
      title: { en: "President & Executive Director", ar: "رئيسة النادي والإدارة التنفيذية" },
      organization: { en: "Okaz Toastmasters Club (Hosted at Ithra by Aramco)", ar: "نادي عكاظ للتوستماسترز (المستضاف في مركز إثراء - أرامكو)" },
      desc: { en: "Steered club strategy, conducted executive board meetings, oversaw membership growth, and sustained excellence in educational milestones.", ar: "قيادة استراتيجية النادي، وإدارة اجتماعات الهيئة التنفيذية، والإشراف على نمو العضوية وتحقيق الإنجازات التعليمية." },
      badge: { en: "Executive Leadership", ar: "قيادة تنفيذية" },
    },
    {
      title: { en: "Public Speaking Coach & Mentor", ar: "التدريب والتوجيه الخطابي" },
      organization: { en: "Toastmasters International", ar: "التوستماسترز الدولية" },
      desc: { en: "Mentored members in speechcraft, persuasive rhetoric, impromptu speaking, and constructive peer evaluation methodologies.", ar: "توجيه الأعضاء في مهارات الإلقاء، وفنون الإقناع، والحديث الارتجالي، وتقديم التقييم البنّاء." },
      badge: { en: "Mentorship", ar: "التوجيه والتمكين" },
    },
    {
      title: { en: "Educational Initiative Organizer", ar: "تنظيم المبادرات التعليمية" },
      organization: { en: "Ithra Cultural Programs & Toastmasters", ar: "البرامج الثقافية بإثراء والتوستماسترز" },
      desc: { en: "Facilitated collaborative leadership workshops, inter-club speech contests, and youth communication symposiums.", ar: "تنظيم ورش عمل قيادية مشتركة، ومسابقات خطابة تنافسية، وملتقيات تواصل شبابية." },
      badge: { en: "Community Impact", ar: "أثر مجتمعي" },
    },
  ],
};

export const CONTACT_CONTENT = {
  sectionTag: {
    en: "Get In Touch",
    ar: "تواصل معي",
  },
  heading: {
    en: "Let's Build the Future",
    ar: "لنصنع المستقبل معاً",
  },
  subheading: {
    en: "Interested in AI research collaboration, biomedical innovation, or investment intelligence? I’d love to connect.",
    ar: "مهتم بالتعاون في أبحاث الذكاء الاصطناعي، أو الابتكار الطبي الحيوي، أو حلول الاستثمار الذكية؟ يسعدني التواصل وتبادل الأفكار.",
  },
  form: {
    nameLabel: { en: "Your Full Name", ar: "الاسم الكامل" },
    namePlaceholder: { en: "Dr. / Eng. Sarah Al-Ahmad", ar: "سارة الأحمد" },
    emailLabel: { en: "Your Email Address", ar: "البريد الإلكتروني" },
    emailPlaceholder: { en: "name@organization.com", ar: "name@organization.com" },
    subjectLabel: { en: "Subject / Area of Interest", ar: "الموضوع / مجال التعاون" },
    subjectOptions: [
      { value: "research", en: "AI & Medical Research Collaboration", ar: "تعاون بحثي في الذكاء الاصطناعي والطب" },
      { value: "biomedical", en: "Biomedical Innovation & Focused Ultrasound", ar: "الابتكار الطبي الحيوي والموجات المركزة" },
      { value: "ultra", en: "ULTRA Investment / FinTech Platform", ar: "منصة ULTRA Investment والتقنية المالية" },
      { value: "speaking", en: "Keynote, Speaking & Toastmasters", ar: "المشاركات الخطابية والمؤتمرات" },
      { value: "general", en: "General Inquiry", ar: "استفسار عام" },
    ],
    messageLabel: { en: "Your Message", ar: "رسالتك" },
    messagePlaceholder: { en: "Share details about your research, inquiry, or collaboration idea...", ar: "اكتب تفاصيل الفكرة، الاستفسار أو مجال التعاون..." },
    submitButton: { en: "Send Message", ar: "إرسال الرسالة" },
    sendingButton: { en: "Sending securely...", ar: "جاري الإرسال بأمان..." },
    successTitle: { en: "Message Received", ar: "تم استلام رسالتك بنجاح" },
    successMessage: {
      en: "Thank you for reaching out! Samah will review your inquiry and respond shortly.",
      ar: "شكراً لتواصلك! ستطلع سماح على رسالتك وترد عليك في أقرب وقت.",
    },
    errorMessage: {
      en: "Could not send message. Please ensure your inputs are valid or try again.",
      ar: "تعذر إرسال الرسالة حالياً. يرجى التأكد من صحة البيانات والمحاولة مجدداً.",
    },
  },
  directContacts: {
    emailTitle: { en: "Direct Email", ar: "البريد الإلكتروني المباشر" },
    locationTitle: { en: "Location", ar: "الموقع" },
    socialsTitle: { en: "Professional Networks", ar: "الشبكات المهنية" },
  },
};

export const AI_ASSISTANT_CONTENT = {
  launcherTooltip: {
    en: "Chat with Samah's AI",
    ar: "تحدث مع مساعد سماح الذكي",
  },
  welcomeBubble: {
    en: "Hello! I'm Samah's AI assistant. Ask me about her research, biomedical innovations, projects, or any scientific and technical topic.",
    ar: "أهلاً بك! أنا مساعد سماح الذكي. يسعدني الإجابة عن أبحاثها، ابتكاراتها الطبية، مشاريعها، أو أي سؤال علمي وتقني ترغب في استكشافه.",
  },
  headerTitle: {
    en: "Samah AI Assistant",
    ar: "مساعد سماح الذكي",
  },
  headerSubtitle: {
    en: "Grounded in Samah's portfolio with expanded intelligence",
    ar: "مرتكز على أبحاث سماح مع ذكاء معرفي شامل",
  },
  suggestedQuestions: [
    {
      en: "What are Samah’s main research interests?",
      ar: "ما هي أهم مجالات أبحاث سماح باسودان؟",
    },
    {
      en: "Tell me about her medical AI projects.",
      ar: "حدثني عن مشاريعها في الذكاء الاصطناعي الطبي.",
    },
    {
      en: "What did she achieve at the Health Datathon?",
      ar: "ما الذي حققته في الداتاثون الصحي؟",
    },
    {
      en: "What is ULTRA Investment?",
      ar: "ما هي منصة ULTRA Investment؟",
    },
    {
      en: "What is Samah currently studying?",
      ar: "ما الذي تدرسه سماح حالياً؟",
    },
    {
      en: "How can I contact Samah for collaboration?",
      ar: "كيف يمكنني التواصل مع سماح للتعاون؟",
    },
  ],
  inputPlaceholder: {
    en: "Ask about Samah's work or any AI & tech topic...",
    ar: "اسأل عن أبحاث ومشاريع سماح أو أي موضوع تقني...",
  },
  clearChat: {
    en: "Clear",
    ar: "مسح",
  },
  stopGenerating: {
    en: "Stop",
    ar: "إيقاف",
  },
};
