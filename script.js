// تعريف الترجمات
const translations = {
    en: {
        title: "Learn Python",
        "site-title": "Learn Python",
        "home": "Home",
        "about": "About",
        "courses": "Courses",
        "contact": "Contact",
        "home-welcome": "Welcome to Learn Python",
        "home-description": "Here you will find all the resources and courses needed to learn Python from beginner to advanced.",
        "about-title": "About Python",
        "about-description": "Python is a high-level programming language known for its simplicity and readability. It is widely used in software development, data analysis, artificial intelligence, and web development.",
        "about-features": "Python features powerful and easy-to-use libraries, making it ideal for both beginners and professionals.",
        "courses-title": "Courses",
        "course-intro": "Introduction to Python",
        "course-intro-desc": "A comprehensive course for beginners covering the basics and how to get started with Python.",
        "course-oo": "Object-Oriented Programming in Python",
        "course-oo-desc": "An advanced course covering object-oriented programming and how to use it in Python.",
        "course-data": "Data Analysis with Python",
        "course-data-desc": "A specialized course covering how to use Python for data analysis and statistical analysis.",
        "contact-title": "Contact Us",
        "contact-description": "You can reach out to us via the following social media channels:",
        "developer": "Developer Info",
        "developer-name": "Developer Name: Khalil Akram",
        "developer-age": "Developer Age: 14 years",
        "developer-country": "Country: Morocco",
        "developer-city": "City: Marrakech",
        "footer": "&copy; 2024 Learn Python. All rights reserved."
    },
    ar: {
        title: "تعلم لغة بايتون",
        "site-title": "تعلم لغة بايتون",
        "home": "الرئيسية",
        "about": "حول",
        "courses": "الدورات",
        "contact": "اتصل بنا",
        "home-welcome": "مرحبا بكم في موقع تعلم لغة بايتون",
        "home-description": "هنا ستجد كل الموارد والدورات اللازمة لتعلم لغة بايتون من البداية إلى الاحتراف.",
        "about-title": "حول بايتون",
        "about-description": "بايتون هي لغة برمجة عالية المستوى، مشهورة بسهولتها وبساطتها. تستخدم على نطاق واسع في تطوير البرمجيات، تحليل البيانات، الذكاء الاصطناعي، وتطوير الويب.",
        "about-features": "تتميز بايتون بمكتبات قوية وسهلة الاستخدام مما يجعلها مثالية للمبتدئين والمحترفين على حد سواء.",
        "courses-title": "الدورات",
        "course-intro": "مقدمة إلى بايتون",
        "course-intro-desc": "دورة شاملة للمبتدئين، تغطي الأساسيات وكيفية البدء مع بايتون.",
        "course-oo": "برمجة الكائنات في بايتون",
        "course-oo-desc": "دورة متقدمة تغطي البرمجة الكائنية وكيفية استخدامها في بايتون.",
        "course-data": "تحليل البيانات ببايتون",
        "course-data-desc": "دورة متخصصة تغطي كيفية استخدام بايتون في تحليل البيانات وإجراء التحليلات الإحصائية.",
        "contact-title": "اتصل بنا",
        "contact-description": "يمكنك التواصل معنا عبر وسائل التواصل الاجتماعي التالية:",
        "developer": "معلومات المطور",
        "developer-name": "اسم المطور: خليل اكرام",
        "developer-age": "عمر المطور: 14 سنة",
        "developer-country": "الدولة: المغرب",
        "developer-city": "المدينة: مراكش",
        "footer": "&copy; 2024 تعلم لغة بايتون. جميع الحقوق محفوظة."
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