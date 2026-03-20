// ===================================================
// i18n.js — ملف الترجمة الموحد — نسخة 2.0
// يشمل: index · mo9adima · kainat · byanat
//        maktaba · mutaqaddim · regex · api
//        privacy · terms
// ===================================================

const translations = {
  ar: {
    // ---- مشترك ----
    "nav-home"    : "الرئيسية",
    "nav-about"   : "حول",
    "nav-courses" : "الدورات",
    "nav-contact" : "اتصل بنا",
    "nav-privacy" : "سياسة الخصوصية",
    "nav-terms"   : "شروط الاستخدام",
    "nav-basics"  : "الأساسيات",
    "nav-stdlib"  : "المكتبات",
    "nav-advanced": "متقدم",
    "nav-regex"   : "Regex",
    "nav-api"     : "APIs",
    "footer-text"    : "© 2025 تعلم لغة بايثون. جميع الحقوق محفوظة.",
    "footer-privacy" : "سياسة الخصوصية",
    "footer-terms"   : "شروط الاستخدام",

    // ---- index.html ----
    "idx-title"            : "تعلم لغة بايثون",
    "idx-home-welcome"     : "مرحباً بكم في موقع تعلم لغة بايثون",
    "idx-home-description" : "هنا ستجد كل الموارد والدورات اللازمة لتعلم لغة بايثون من البداية إلى الاحتراف.",
    "idx-start-learning"   : "ابدأ التعلم الآن",
    "idx-about-title"      : "حول بايثون",
    "idx-about-description": "بايثون هي لغة برمجة عالية المستوى، مشهورة بسهولتها وبساطتها. تُستخدم في تطوير البرمجيات، تحليل البيانات، الذكاء الاصطناعي، وتطوير الويب.",
    "idx-about-features"   : "تتميز بايثون بمكتبات قوية مثل pandas وnumpy وtensorflow، مما يجعلها مثالية للمبتدئين والمحترفين.",
    "idx-courses-title"    : "الدورات",
    "idx-course-intro"     : "مقدمة إلى بايثون",
    "idx-course-intro-desc": "دورة شاملة للمبتدئين تغطي الأساسيات من صفر.",
    "idx-course-oo"        : "برمجة الكائنات (OOP)",
    "idx-course-oo-desc"   : "الكلاسات والوراثة وتعدد الأشكال والتغليف.",
    "idx-course-data"      : "تحليل البيانات ببايثون",
    "idx-course-data-desc" : "pandas وnumpy وmatplotlib وseaborn.",
    "idx-course-lib"       : "المكتبات القياسية والملفات",
    "idx-course-lib-desc"  : "os وjson وdatetime وrandom وmath والملفات.",
    "idx-course-adv"       : "مفاهيم بايثون المتقدمة",
    "idx-course-adv-desc"  : "Decorators وGenerators وLambda و*args/**kwargs.",
    "idx-course-regex"     : "التعابير النمطية (Regex)",
    "idx-course-regex-desc": "ابحث واستخرج وعدّل النصوص بقوة.",
    "idx-course-api"       : "APIs و Web Scraping",
    "idx-course-api-desc"  : "اربط برنامجك بالعالم — requests وBeautifulSoup.",
    "idx-contact-title"       : "اتصل بنا",
    "idx-contact-description" : "تواصلوا معنا عبر وسائل التواصل أو أرسلوا رسالة!",
    "idx-form-title"  : "أرسل لنا رسالة",
    "idx-form-name"   : "الاسم:",
    "idx-form-email"  : "البريد الإلكتروني:",
    "idx-form-message": "الرسالة:",
    "idx-form-submit" : "إرسال",

    // ---- إضافات index.html الجديدة ----
    "idx-stat-courses"  : "دورات شاملة",
    "idx-stat-lessons"  : "موضوعاً تعليمياً",
    "idx-stat-exercises": "تمريناً وتحدياً",
    "idx-stat-free"     : "100% بدون رسوم",
    "idx-features-title": "لماذا تتعلم هنا؟",
    "idx-feat1-title"   : "أمثلة حقيقية",
    "idx-feat1-desc"    : "كل درس مبني على مشاريع وأمثلة من الواقع — ليس مجرد نظرية.",
    "idx-feat2-title"   : "تمارين وتحديات",
    "idx-feat2-desc"    : "تمارين تفاعلية وأسئلة بعد كل موضوع لاختبار فهمك.",
    "idx-feat3-title"   : "كود قابل للنسخ",
    "idx-feat3-desc"    : "كل مثال كود يمكن نسخه بضغطة زر وتشغيله مباشرة.",
    "idx-feat4-title"   : "عربي وإنجليزي",
    "idx-feat4-desc"    : "الموقع متاح بالكامل باللغتين العربية والإنجليزية.",
    "idx-path-title"    : "🗺️ مسار التعلم الكامل",
    "idx-path-subtitle" : "اتبع هذا المسار خطوة بخطوة للوصول من المبتدئ إلى المحترف",
    "idx-courses-sub"   : "انقر على أي دورة للبدء مباشرة",
    "idx-level-beginner": "مبتدئ",
    "idx-level-mid"     : "متوسط",
    "idx-level-advanced": "متقدم",
    "idx-level-expert"  : "خبير",
    "idx-dur-1"         : "⏱ ~4 ساعات",
    "idx-dur-2"         : "⏱ ~3 ساعات",
    "idx-dur-3"         : "⏱ ~3 ساعات",
    "idx-dur-4"         : "⏱ ~4 ساعات",
    "idx-dur-5"         : "⏱ ~5 ساعات",
    "idx-dur-6"         : "⏱ ~3 ساعات",
    "idx-dur-7"         : "⏱ ~4 ساعات",

    // ---- mo9adima.html ----
    "bas-page-title"   : "مقدمة إلى بايثون — الدرس الكامل للمبتدئين",
    "bas-hero-title"   : "🐍 مقدمة إلى بايثون — من الصفر إلى الأساسيات",
    "bas-hero-desc"    : "دليل شامل ومبسط يأخذك خطوة بخطوة في تعلم لغة بايثون، مع أمثلة حقيقية وتمارين عملية وتحديات.",
    "bas-tag-vars"     : "📦 المتغيرات وأنواع البيانات",
    "bas-tag-cond"     : "🔀 الشروط والتفرعات",
    "bas-tag-loops"    : "🔁 الحلقات",
    "bas-tag-funcs"    : "⚙️ الدوال",
    "bas-tag-lists"    : "📋 القوائم والقواميس",
    "bas-tag-errors"   : "⚠️ معالجة الأخطاء",
    "bas-end-title"    : "🎉 أنهيت درس الأساسيات!",
    "bas-end-body"     : "أتقنت المتغيرات والشروط والحلقات والدوال والقوائم والقواميس ومعالجة الأخطاء.",
    "bas-next"         : "الدرس التالي: برمجة الكائنات ←",

    // ---- kainat.html ----
    "oop-page-title"   : "برمجة الكائنات OOP في بايثون — دليل شامل",
    "oop-hero-title"   : "🧩 برمجة الكائنات في بايثون (OOP)",
    "oop-hero-desc"    : "تعلم كيف تنظم كودك كالمحترفين باستخدام الكلاسات والكائنات.",
    "oop-tag-classes"  : "🏗️ الكلاسات والكائنات",
    "oop-tag-init"     : "🔧 الـ __init__",
    "oop-tag-inh"      : "🧬 الوراثة",
    "oop-tag-poly"     : "🎭 تعدد الأشكال",
    "oop-tag-enc"      : "🔒 التغليف",
    "oop-tag-proj"     : "🚀 مشروع حقيقي",
    "oop-end-title"    : "🎉 أتقنت برمجة الكائنات!",
    "oop-end-body"     : "الآن تعرف الكلاسات و__init__ والوراثة وsuper() وتعدد الأشكال والتغليف.",
    "oop-next"         : "الدرس التالي: تحليل البيانات ←",

    // ---- byanat.html ----
    "dat-page-title"   : "تحليل البيانات ببايثون — دليل شامل",
    "dat-hero-title"   : "📊 تحليل البيانات ببايثون",
    "dat-hero-desc"    : "من الصفر إلى رسم مخططات احترافية وتحليل ملفات CSV حقيقية.",
    "dat-tag-pandas"   : "🐼 pandas",
    "dat-tag-numpy"    : "🔢 numpy",
    "dat-tag-mpl"      : "📈 matplotlib",
    "dat-tag-sns"      : "🌊 seaborn",
    "dat-tag-csv"      : "📂 قراءة CSV",
    "dat-tag-clean"    : "🧹 تنظيف البيانات",
    "dat-tag-proj"     : "🚀 مشروع حقيقي",
    "dat-end-title"    : "🎉 أتقنت تحليل البيانات ببايثون!",
    "dat-end-body"     : "الآن تعرف pandas وnumpy وmatplotlib وseaborn.",
    "dat-back"         : "الدرس التالي: المكتبات القياسية ←",

    // ---- maktaba.html ----
    "lib-page-title"   : "المكتبات القياسية والملفات — بايثون",
    "lib-hero-title"   : "📦 المكتبات القياسية والتعامل مع الملفات",
    "lib-hero-desc"    : "بايثون يأتي ببطارياته الخاصة — مئات المكتبات الجاهزة دون أي تثبيت.",
    "lib-tag-files"    : "📁 الملفات (open/read/write)",
    "lib-tag-os"       : "📂 os — النظام والمجلدات",
    "lib-tag-dt"       : "📅 datetime — التواريخ",
    "lib-tag-rand"     : "🎲 random — العشوائية",
    "lib-tag-math"     : "🧮 math — الرياضيات",
    "lib-tag-json"     : "🗃️ json — البيانات",
    "lib-tag-time"     : "⏱️ time — التوقيت",
    "lib-end-title"    : "🎉 أتقنت المكتبات القياسية!",
    "lib-end-body"     : "الآن تعرف كيف تتعامل مع الملفات وتستخدم os وjson وdatetime وrandom وmath وcollections.",
    "lib-next"         : "الدرس التالي: المفاهيم المتقدمة ←",

    // ---- mutaqaddim.html ----
    "adv-page-title"   : "مفاهيم بايثون المتقدمة — Decorators, Generators, Lambda",
    "adv-hero-title"   : "🧠 مفاهيم بايثون المتقدمة",
    "adv-hero-desc"    : "الأدوات التي تميز المبرمج المحترف — كودك سيصبح أقصر وأسرع وأكثر أناقة.",
    "adv-tag-lambda"   : "⚡ Lambda",
    "adv-tag-args"     : "🎯 *args / **kwargs",
    "adv-tag-dec"      : "🎨 Decorators",
    "adv-tag-gen"      : "⚙️ Generators",
    "adv-tag-comp"     : "📐 Comprehensions",
    "adv-tag-map"      : "🔗 map / filter / reduce",
    "adv-tag-ctx"      : "🗝️ Context Managers",
    "adv-tag-hints"    : "🏷️ Type Hints",
    "adv-end-title"    : "🎉 أتقنت مفاهيم بايثون المتقدمة!",
    "adv-end-body"     : "Lambda و*args/**kwargs وDecorators وGenerators وComprehensions وType Hints — كل هذا الآن في أدواتك.",
    "adv-back"         : "← العودة للبداية",

    // ---- regex.html ----
    "rgx-page-title"   : "التعابير النمطية Regex في بايثون",
    "rgx-hero-title"   : "🔍 التعابير النمطية (Regex) في بايثون",
    "rgx-hero-desc"    : "ابحث عن الأنماط واستخرجها وبدّلها في أي نص — سلاح سري يوفّر لك مئات الأسطر من الكود.",
    "rgx-tag1"         : "🔤 الرموز الأساسية",
    "rgx-tag2"         : "📧 التحقق من الإيميل",
    "rgx-tag3"         : "📱 أرقام الهاتف",
    "rgx-tag4"         : "✂️ استخراج البيانات",
    "rgx-tag5"         : "🔄 البحث والاستبدال",
    "rgx-tag6"         : "🏷️ Groups",
    "rgx-end-title"    : "🎉 أتقنت التعابير النمطية!",
    "rgx-end-body"     : "Regex هو أداة قوية ستستخدمها في كل مشروع حقيقي.",
    "rgx-next"         : "الدرس التالي: APIs و Web Scraping ←",

    // ---- api.html ----
    "api-page-title"   : "APIs و Web Scraping ببايثون",
    "api-hero-title"   : "🌐 APIs و Web Scraping ببايثون",
    "api-hero-desc"    : "اربط برنامجك بالعالم الخارجي — اجلب بيانات الطقس، الأسهم، الأخبار، وأي شيء على الإنترنت.",
    "api-tag1"         : "🔗 HTTP و REST API",
    "api-tag2"         : "📦 مكتبة requests",
    "api-tag3"         : "🗝️ API Keys",
    "api-tag4"         : "🕷️ BeautifulSoup",
    "api-tag5"         : "📊 تحليل JSON",
    "api-tag6"         : "⚡ Async Requests",
    "api-end-title"    : "🎉 أتقنت APIs و Web Scraping!",
    "api-end-body"     : "الآن تعرف كيف تتصل بأي API في العالم وتجلب البيانات وتحللها وتحفظها.",
    "api-back"         : "← العودة للبداية",

    // ---- privacy.html ----
    "prv-page-title"       : "سياسة الخصوصية",
    "prv-title"            : "سياسة الخصوصية",
    "prv-intro-title"      : "مقدمة",
    "prv-intro-text"       : "خصوصيتك مهمة بالنسبة لنا. تهدف سياسة الخصوصية هذه إلى شرح كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا.",
    "prv-collection-title" : "جمع المعلومات",
    "prv-collection-text"  : "نقوم بجمع المعلومات التي تزودنا بها بشكل مباشر عند التسجيل أو الاشتراك في النشرة الإخبارية. كما قد نجمع بعض المعلومات تلقائياً مثل عنوان IP ونوع المتصفح.",
    "prv-usage-title"      : "استخدام المعلومات",
    "prv-usage-text"       : "نستخدم المعلومات لتحسين تجربة المستخدم وتقديم الدعم الفني وإرسال التحديثات. لن نشارك معلوماتك مع أطراف ثالثة إلا بموافقتك.",
    "prv-protection-title" : "حماية المعلومات",
    "prv-protection-text"  : "نتخذ الإجراءات اللازمة لحماية معلوماتك من الوصول غير المصرح به.",
    "prv-cookies-title"    : "ملفات تعريف الارتباط (Cookies)",
    "prv-cookies-text"     : "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك تعطيلها من إعدادات المتصفح.",
    "prv-updates-title"    : "تحديثات سياسة الخصوصية",
    "prv-updates-text"     : "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.",
    "prv-contact-title"    : "الاتصال بنا",
    "prv-contact-text"     : "إذا كان لديك أي أسئلة يرجى التواصل معنا عبر: <a href='mailto:khalil.akram307@gmail.com'>khalil.akram307@gmail.com</a>",

    // ---- terms.html ----
    "trm-page-title"         : "شروط الاستخدام",
    "trm-title"              : "شروط الاستخدام",
    "trm-intro-title"        : "مقدمة",
    "trm-intro-text"         : "باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام هذه.",
    "trm-usage-title"        : "استخدام الموقع",
    "trm-usage-text"         : "يجوز لك استخدام هذا الموقع فقط لأغراض قانونية.",
    "trm-ip-title"           : "الملكية الفكرية",
    "trm-ip-text"            : "جميع المحتويات على هذا الموقع محمية بموجب قوانين حقوق الطبع والنشر.",
    "trm-liability-title"    : "تحديد المسؤولية",
    "trm-liability-text"     : "لن نكون مسؤولين عن أي أضرار تنشأ عن استخدامك للموقع.",
    "trm-modifications-title": "تعديلات على الشروط",
    "trm-modifications-text" : "نحتفظ بالحق في تعديل هذه الشروط في أي وقت.",
    "trm-contact-title"      : "الاتصال بنا",
    "trm-contact-text"       : "إذا كان لديك أي أسئلة يرجى التواصل عبر: <a href='mailto:khalil.akram307@gmail.com'>khalil.akram307@gmail.com</a>"
  },

  en: {
    // ---- Common ----
    "nav-home"    : "Home",
    "nav-about"   : "About",
    "nav-courses" : "Courses",
    "nav-contact" : "Contact",
    "nav-privacy" : "Privacy Policy",
    "nav-terms"   : "Terms of Use",
    "nav-basics"  : "Basics",
    "nav-stdlib"  : "Libraries",
    "nav-advanced": "Advanced",
    "nav-regex"   : "Regex",
    "nav-api"     : "APIs",
    "footer-text"    : "© 2025 Learn Python. All rights reserved.",
    "footer-privacy" : "Privacy Policy",
    "footer-terms"   : "Terms of Use",

    // ---- index.html ----
    "idx-title"            : "Learn Python",
    "idx-home-welcome"     : "Welcome to Learn Python",
    "idx-home-description" : "Here you will find all the resources and courses needed to learn Python from beginner to advanced.",
    "idx-start-learning"   : "Start Learning Now",
    "idx-about-title"      : "About Python",
    "idx-about-description": "Python is a high-level language known for simplicity. Used in software, data analysis, AI, and web development.",
    "idx-about-features"   : "Python features libraries like pandas, numpy, and tensorflow, making it ideal for all skill levels.",
    "idx-courses-title"    : "Courses",
    "idx-course-intro"     : "Introduction to Python",
    "idx-course-intro-desc": "A comprehensive beginner course covering the basics from scratch.",
    "idx-course-oo"        : "Object-Oriented Programming (OOP)",
    "idx-course-oo-desc"   : "Classes, inheritance, polymorphism, and encapsulation.",
    "idx-course-data"      : "Data Analysis with Python",
    "idx-course-data-desc" : "pandas, numpy, matplotlib, and seaborn.",
    "idx-course-lib"       : "Standard Libraries & Files",
    "idx-course-lib-desc"  : "os, json, datetime, random, math, and file handling.",
    "idx-course-adv"       : "Advanced Python Concepts",
    "idx-course-adv-desc"  : "Decorators, Generators, Lambda, *args/**kwargs.",
    "idx-course-regex"     : "Regular Expressions (Regex)",
    "idx-course-regex-desc": "Search, extract, and replace text patterns.",
    "idx-course-api"       : "APIs & Web Scraping",
    "idx-course-api-desc"  : "Connect to the web — requests and BeautifulSoup.",
    "idx-contact-title"       : "Contact Us",
    "idx-contact-description" : "Reach out via social media or send us a message!",
    "idx-form-title"  : "Send Us a Message",
    "idx-form-name"   : "Name:",
    "idx-form-email"  : "Email:",
    "idx-form-message": "Message:",
    "idx-form-submit" : "Submit",

    // ---- New index.html keys ----
    "idx-stat-courses"  : "Comprehensive Courses",
    "idx-stat-lessons"  : "Learning Topics",
    "idx-stat-exercises": "Exercises & Challenges",
    "idx-stat-free"     : "100% Free",
    "idx-features-title": "Why Learn Here?",
    "idx-feat1-title"   : "Real Examples",
    "idx-feat1-desc"    : "Every lesson is built around real projects — not just theory.",
    "idx-feat2-title"   : "Exercises & Challenges",
    "idx-feat2-desc"    : "Interactive exercises and quizzes after every topic.",
    "idx-feat3-title"   : "Copyable Code",
    "idx-feat3-desc"    : "Every code example can be copied with one click and run immediately.",
    "idx-feat4-title"   : "Arabic & English",
    "idx-feat4-desc"    : "The site is fully available in both Arabic and English.",
    "idx-path-title"    : "🗺️ Full Learning Path",
    "idx-path-subtitle" : "Follow this path step by step from beginner to expert",
    "idx-courses-sub"   : "Click any course to start right away",
    "idx-level-beginner": "Beginner",
    "idx-level-mid"     : "Intermediate",
    "idx-level-advanced": "Advanced",
    "idx-level-expert"  : "Expert",
    "idx-dur-1"         : "⏱ ~4 hours",
    "idx-dur-2"         : "⏱ ~3 hours",
    "idx-dur-3"         : "⏱ ~3 hours",
    "idx-dur-4"         : "⏱ ~4 hours",
    "idx-dur-5"         : "⏱ ~5 hours",
    "idx-dur-6"         : "⏱ ~3 hours",
    "idx-dur-7"         : "⏱ ~4 hours",

    // ---- mo9adima.html ----
    "bas-page-title"   : "Introduction to Python — Complete Beginner's Guide",
    "bas-hero-title"   : "🐍 Introduction to Python — From Zero to Basics",
    "bas-hero-desc"    : "A comprehensive step-by-step guide to learning Python with real examples and exercises.",
    "bas-tag-vars"     : "📦 Variables & Data Types",
    "bas-tag-cond"     : "🔀 Conditionals",
    "bas-tag-loops"    : "🔁 Loops",
    "bas-tag-funcs"    : "⚙️ Functions",
    "bas-tag-lists"    : "📋 Lists & Dictionaries",
    "bas-tag-errors"   : "⚠️ Error Handling",
    "bas-end-title"    : "🎉 You Finished the Basics!",
    "bas-end-body"     : "You now know variables, conditionals, loops, functions, lists, dicts, and error handling.",
    "bas-next"         : "Next: Object-Oriented Programming →",

    // ---- kainat.html ----
    "oop-page-title"   : "OOP in Python — Comprehensive Guide",
    "oop-hero-title"   : "🧩 Object-Oriented Programming in Python",
    "oop-hero-desc"    : "Learn how to organize your code like a pro using classes and objects.",
    "oop-tag-classes"  : "🏗️ Classes & Objects",
    "oop-tag-init"     : "🔧 __init__",
    "oop-tag-inh"      : "🧬 Inheritance",
    "oop-tag-poly"     : "🎭 Polymorphism",
    "oop-tag-enc"      : "🔒 Encapsulation",
    "oop-tag-proj"     : "🚀 Real Project",
    "oop-end-title"    : "🎉 You Mastered OOP!",
    "oop-end-body"     : "You now know Classes, __init__, Inheritance, super(), Polymorphism, and Encapsulation.",
    "oop-next"         : "Next: Data Analysis →",

    // ---- byanat.html ----
    "dat-page-title"   : "Data Analysis with Python — Comprehensive Guide",
    "dat-hero-title"   : "📊 Data Analysis with Python",
    "dat-hero-desc"    : "From zero to professional charts and real CSV analysis.",
    "dat-tag-pandas"   : "🐼 pandas",
    "dat-tag-numpy"    : "🔢 numpy",
    "dat-tag-mpl"      : "📈 matplotlib",
    "dat-tag-sns"      : "🌊 seaborn",
    "dat-tag-csv"      : "📂 Reading CSV",
    "dat-tag-clean"    : "🧹 Data Cleaning",
    "dat-tag-proj"     : "🚀 Real Project",
    "dat-end-title"    : "🎉 You Mastered Data Analysis!",
    "dat-end-body"     : "You now know pandas, numpy, matplotlib, and seaborn.",
    "dat-back"         : "Next: Standard Libraries →",

    // ---- maktaba.html ----
    "lib-page-title"   : "Standard Libraries & Files — Python",
    "lib-hero-title"   : "📦 Standard Libraries and File Handling",
    "lib-hero-desc"    : "Python comes with its own batteries — hundreds of ready-made libraries.",
    "lib-tag-files"    : "📁 Files (open/read/write)",
    "lib-tag-os"       : "📂 os — System & Directories",
    "lib-tag-dt"       : "📅 datetime — Dates & Times",
    "lib-tag-rand"     : "🎲 random — Randomness",
    "lib-tag-math"     : "🧮 math — Mathematics",
    "lib-tag-json"     : "🗃️ json — Data",
    "lib-tag-time"     : "⏱️ time — Timing",
    "lib-end-title"    : "🎉 You Mastered the Standard Libraries!",
    "lib-end-body"     : "You now know file handling, os, json, datetime, random, math, and collections.",
    "lib-next"         : "Next: Advanced Concepts →",

    // ---- mutaqaddim.html ----
    "adv-page-title"   : "Advanced Python — Decorators, Generators, Lambda",
    "adv-hero-title"   : "🧠 Advanced Python Concepts",
    "adv-hero-desc"    : "The tools that distinguish the professional developer.",
    "adv-tag-lambda"   : "⚡ Lambda",
    "adv-tag-args"     : "🎯 *args / **kwargs",
    "adv-tag-dec"      : "🎨 Decorators",
    "adv-tag-gen"      : "⚙️ Generators",
    "adv-tag-comp"     : "📐 Comprehensions",
    "adv-tag-map"      : "🔗 map / filter / reduce",
    "adv-tag-ctx"      : "🗝️ Context Managers",
    "adv-tag-hints"    : "🏷️ Type Hints",
    "adv-end-title"    : "🎉 You Mastered Advanced Python!",
    "adv-end-body"     : "Lambda, *args/**kwargs, Decorators, Generators, Comprehensions, Type Hints — all in your toolkit.",
    "adv-back"         : "← Back to Basics",

    // ---- regex.html ----
    "rgx-page-title"   : "Regular Expressions (Regex) in Python",
    "rgx-hero-title"   : "🔍 Regular Expressions (Regex) in Python",
    "rgx-hero-desc"    : "Search, extract, and replace patterns in any text — a secret weapon that replaces hundreds of lines.",
    "rgx-tag1"         : "🔤 Basic Symbols",
    "rgx-tag2"         : "📧 Email Validation",
    "rgx-tag3"         : "📱 Phone Numbers",
    "rgx-tag4"         : "✂️ Data Extraction",
    "rgx-tag5"         : "🔄 Search & Replace",
    "rgx-tag6"         : "🏷️ Groups",
    "rgx-end-title"    : "🎉 You Mastered Regular Expressions!",
    "rgx-end-body"     : "Regex is a powerful tool you will use in every real project.",
    "rgx-next"         : "Next: APIs & Web Scraping →",

    // ---- api.html ----
    "api-page-title"   : "APIs & Web Scraping with Python",
    "api-hero-title"   : "🌐 APIs & Web Scraping with Python",
    "api-hero-desc"    : "Connect your program to the world — fetch weather, stocks, news, and anything on the internet.",
    "api-tag1"         : "🔗 HTTP & REST API",
    "api-tag2"         : "📦 requests library",
    "api-tag3"         : "🗝️ API Keys",
    "api-tag4"         : "🕷️ BeautifulSoup",
    "api-tag5"         : "📊 JSON Parsing",
    "api-tag6"         : "⚡ Async Requests",
    "api-end-title"    : "🎉 You Mastered APIs & Web Scraping!",
    "api-end-body"     : "You can now connect to any API in the world, fetch data, analyze it, and save it.",
    "api-back"         : "← Back to Basics",

    // ---- privacy.html ----
    "prv-page-title"       : "Privacy Policy",
    "prv-title"            : "Privacy Policy",
    "prv-intro-title"      : "Introduction",
    "prv-intro-text"       : "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
    "prv-collection-title" : "Information Collection",
    "prv-collection-text"  : "We collect information you provide directly. We may also collect data automatically such as IP address and browser type.",
    "prv-usage-title"      : "Use of Information",
    "prv-usage-text"       : "We use information to improve user experience and send updates. We do not share your data without consent.",
    "prv-protection-title" : "Information Protection",
    "prv-protection-text"  : "We take measures to protect your data from unauthorized access.",
    "prv-cookies-title"    : "Cookies",
    "prv-cookies-text"     : "We use cookies to improve your experience. You can disable them in browser settings.",
    "prv-updates-title"    : "Policy Updates",
    "prv-updates-text"     : "We may update this policy periodically. Changes will be posted on this page.",
    "prv-contact-title"    : "Contact Us",
    "prv-contact-text"     : "For questions, contact: <a href='mailto:khalil.akram307@gmail.com'>khalil.akram307@gmail.com</a>",

    // ---- terms.html ----
    "trm-page-title"         : "Terms of Use",
    "trm-title"              : "Terms of Use",
    "trm-intro-title"        : "Introduction",
    "trm-intro-text"         : "By using this site you agree to comply with these terms.",
    "trm-usage-title"        : "Use of the Site",
    "trm-usage-text"         : "You may only use this site for lawful purposes.",
    "trm-ip-title"           : "Intellectual Property",
    "trm-ip-text"            : "All content is protected by copyright law. Reproduction without permission is prohibited.",
    "trm-liability-title"    : "Limitation of Liability",
    "trm-liability-text"     : "We are not liable for any damages from your use of the site.",
    "trm-modifications-title": "Modifications",
    "trm-modifications-text" : "We reserve the right to modify these terms at any time.",
    "trm-contact-title"      : "Contact Us",
    "trm-contact-text"       : "For questions, contact: <a href='mailto:khalil.akram307@gmail.com'>khalil.akram307@gmail.com</a>"
  }
};

// ===================================================
// تطبيق الترجمة
// ===================================================
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  // عنوان الصفحة
  const titleEl = document.querySelector('[data-i18n][id="page-title"], title[data-i18n]');
  const metaTitle = document.querySelector('title[data-i18n]');
  if (metaTitle) {
    const key = metaTitle.getAttribute('data-i18n');
    if (t[key]) document.title = t[key];
  }

  localStorage.setItem('preferredLanguage', lang);
}

// ===================================================
// تهيئة
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  const saved  = localStorage.getItem('preferredLanguage') || 'ar';
  const select = document.getElementById('language-select');

  if (select) {
    select.value = saved;
    select.addEventListener('change', function() {
      applyTranslations(this.value);
    });
  }

  applyTranslations(saved);
});
