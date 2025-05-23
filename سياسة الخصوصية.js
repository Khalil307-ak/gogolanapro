const translations = {
    ar: {
        "terms-title": "شروط الاستخدام",
        "privacy-title": "سياسة الخصوصية",
        "home": "الرئيسية",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الاستخدام",
        "intro-title": "مقدمة",
        "intro-text": "خصوصيتك مهمة بالنسبة لنا. تهدف سياسة الخصوصية هذه إلى شرح كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا.",
        "info-collection-title": "جمع المعلومات",
        "info-collection-text": "نقوم بجمع المعلومات التي تزودنا بها بشكل مباشر، مثل المعلومات التي تقدمها عند التسجيل في موقعنا أو الاشتراك في النشرة الإخبارية. كما قد نقوم بجمع بعض المعلومات بشكل تلقائي عند استخدامك لموقعنا، مثل عنوان IP ونوع المتصفح والصفحات التي تزورها.",
        "info-usage-title": "استخدام المعلومات",
        "info-usage-text": "نستخدم المعلومات التي نجمعها لتحسين تجربة المستخدم، وتقديم الدعم الفني، وإرسال التحديثات والإعلانات الترويجية. لن نشارك معلوماتك الشخصية مع أطراف ثالثة إلا بموافقتك أو حسبما يقتضيه القانون.",
        "info-protection-title": "حماية المعلومات",
        "info-protection-text": "نحن نتخذ الإجراءات اللازمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف. ومع ذلك، لا يمكن ضمان أمان البيانات بنسبة 100% على الإنترنت.",
        "cookies-title": "ملفات تعريف الارتباط (Cookies)",
        "cookies-text": "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، ولكن قد يؤثر ذلك على قدرتك على استخدام بعض الميزات على موقعنا.",
        "policy-updates-title": "تحديثات سياسة الخصوصية",
        "policy-updates-text": "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، ونشجعك على مراجعة سياسة الخصوصية بانتظام للبقاء على اطلاع على كيفية حماية معلوماتك.",
        "contact-title": "الاتصال بنا",
        "contact-text": "إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى الاتصال بنا عبر البريد الإلكتروني التالي: <a href=\"mailto:gogolanapro@zohomail.com\">gogolanapro@zohomail.com</a>"
    },
    en: {
        "terms-title": "Terms of Use",
        "privacy-title": "Privacy Policy",
        "home": "Home",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "intro-title": "Introduction",
        "intro-text": "Your privacy is important to us. This privacy policy aims to explain how we collect, use, and protect your personal information when you use our website.",
        "info-collection-title": "Information Collection",
        "info-collection-text": "We collect information you provide directly, such as when you register on our site or subscribe to our newsletter. We may also collect some information automatically when you use our site, such as IP address, browser type, and pages visited.",
        "info-usage-title": "Use of Information",
        "info-usage-text": "We use the information we collect to improve user experience, provide technical support, and send updates and promotional materials. We will not share your personal information with third parties without your consent or as required by law.",
        "info-protection-title": "Information Protection",
        "info-protection-text": "We take necessary measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, data security cannot be guaranteed 100% on the internet.",
        "cookies-title": "Cookies",
        "cookies-text": "We use cookies to enhance your experience on our site. You can disable cookies through your browser settings, but this may affect your ability to use some features on our site.",
        "policy-updates-title": "Privacy Policy Updates",
        "policy-updates-text": "We may update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review the privacy policy regularly to stay informed about how we protect your information.",
        "contact-title": "Contact Us",
        "contact-text": "If you have any questions or concerns about the privacy policy, please contact us via email at: <a href=\"mailto:gogolanapro@zohomail.com\">gogolanapro@zohomail.com</a>"
    }
};

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLang = this.value;
    document.documentElement.lang = selectedLang;
    applyTranslations(selectedLang);
});

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        element.innerHTML = translations[lang][translationKey];
    });
}

// Apply default language
applyTranslations('ar');
