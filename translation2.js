// تعريف الترجمات
const translations = {
    en: {
        title: "Basics and Getting Started with Python",
        "page-title": "Basics and Getting Started with Python",
        "home": "Home",
        "about": "About",
        "courses": "Courses",
        "contact": "Contact",
        "section-title": "Basics and Getting Started with Python",
        "intro": "Python is a powerful and easy-to-learn programming language. It is used in a wide range of applications from web development to data analysis and machine learning. In this guide, we will cover the basics and explore how to get started with Python.",
        "installation": "Installing Python",
        "installation-desc": "To get started with Python, you first need to install the Python environment on your machine. You can download the latest version from the official Python website and install it. After installation, you can check the installed version by running the `python --version` command in the command prompt.",
        "first-steps": "First Steps",
        "writing-code": "Writing Your First Program: Open a text editor and write the following code: <code>print(\"Hello, World!\")</code> then save the file with a `.py` extension, such as `hello.py`, and run it by executing the `python hello.py` command.",
        "basic-syntax": "Understanding Basic Syntax: Learn how to use variables, loops, and conditionals in Python. You can read the official documentation and educational resources to improve your skills.",
        "resources": "Educational Resources",
        "resources-desc": "There are many online educational resources for learning Python. You can find free and paid courses, books, and online forums for assistance. Start with free resources and then progress to more advanced content as needed.",
        "footer": "&copy; 2024 Learn Python. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use"
    },
    ar: {
        title: "الأساسيات وكيفية البدء مع بايثون",
        "page-title": "الأساسيات وكيفية البدء مع بايثون",
        "home": "الرئيسية",
        "about": "حول",
        "courses": "الدورات",
        "contact": "اتصل بنا",
        "section-title": "الأساسيات وكيفية البدء مع بايثون",
        "intro": "بايثون هي لغة برمجة قوية وسهلة التعلم. تُستخدم في مجموعة متنوعة من التطبيقات بدءًا من تطوير الويب إلى تحليل البيانات وتعلم الآلة. في هذا الدليل، سنتناول الأساسيات ونستعرض كيفية البدء مع بايثون.",
        "installation": "تثبيت بايثون",
        "installation-desc": "للبدء في استخدام بايثون، يجب أولاً تثبيت بيئة بايثون على جهازك. يمكنك تحميل أحدث نسخة من موقع بايثون الرسمي وتثبيتها. بعد التثبيت، يمكنك التحقق من النسخة المثبتة عبر تنفيذ الأمر `python --version` في موجه الأوامر.",
        "first-steps": "خطوات البداية الأولى",
        "writing-code": "كتابة أول برنامج: افتح محرر نصوص واكتب الكود التالي: <code>print(\"Hello, World!\")</code> ثم احفظ الملف بامتداد `.py`، مثل `hello.py`، وقم بتشغيله عبر تنفيذ الأمر `python hello.py`.",
        "basic-syntax": "فهم بناء الجملة الأساسي: تعلم كيفية استخدام المتغيرات، الحلقات، والشروط في بايثون. يمكنك قراءة الوثائق الرسمية والمصادر التعليمية لتحسين مهاراتك.",
        "resources": "موارد تعليمية",
        "resources-desc": "هناك العديد من الموارد التعليمية عبر الإنترنت لتعلم بايثون. يمكنك العثور على دورات مجانية ومدفوعة، كتب، ومنتديات مساعدة على الإنترنت. ابدأ بالموارد المجانية ثم تقدم إلى المحتوى الأكثر تقدمًا حسب احتياجاتك.",
        "footer": "&copy; 2024 تعلم لغة بايتون. جميع الحقوق محفوظة.",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الاستخدام"
    }
};

// وظيفة تغيير اللغة
document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[lang][key] || key;
    });
});

// تغيير اللغة إلى الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const lang = document.getElementById('language-select').value;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[lang][key] || key;
    });
});
