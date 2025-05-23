const translations = {
    ar: {
        "terms-title": "شروط الاستخدام",
        "home": "الرئيسية",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الاستخدام",
        "intro-title": "مقدمة",
        "intro-text": "باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، فيرجى عدم استخدام الموقع.",
        "usage-title": "استخدام الموقع",
        "usage-text": "يجوز لك استخدام هذا الموقع فقط لأغراض قانونية ووفقًا لشروط الاستخدام هذه. يُمنع استخدام الموقع بأي طريقة تنتهك أي قانون أو لائحة محلية أو دولية.",
        "ip-title": "الملكية الفكرية",
        "ip-text": "جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والصور والشعارات، محمية بموجب قوانين حقوق الطبع والنشر والعلامات التجارية. يُمنع إعادة إنتاج أو توزيع أي جزء من الموقع بدون إذن خطي مسبق من المالك.",
        "liability-title": "تحديد المسؤولية",
        "liability-text": "لن نكون مسؤولين عن أي أضرار تنشأ عن استخدامك للموقع. يتم توفير المحتوى \"كما هو\" وبدون أي ضمانات.",
        "modifications-title": "تعديلات على الشروط",
        "modifications-text": "نحتفظ بالحق في تعديل شروط الاستخدام هذه في أي وقت. سيتم نشر التعديلات على هذه الصفحة، ويُعتبر استمرارك في استخدام الموقع بعد نشر التعديلات موافقة منك على هذه التعديلات.",
        "contact-title": "الاتصال بنا",
        "contact-text": "إذا كان لديك أي أسئلة حول شروط الاستخدام، يرجى الاتصال بنا عبر البريد الإلكتروني التالي: <a href=\"mailto:gogolanapro@zohomail.com\">gogolanapro@zohomail.com</a>"
    },
    en: {
        "terms-title": "Terms of Use",
        "home": "Home",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "intro-title": "Introduction",
        "intro-text": "By using this site, you agree to comply with these terms of use. If you do not agree to these terms, please do not use the site.",
        "usage-title": "Use of the Site",
        "usage-text": "You may use this site only for lawful purposes and in accordance with these terms of use. Use of the site in any way that violates any local or international law or regulation is prohibited.",
        "ip-title": "Intellectual Property",
        "ip-text": "All content on this site, including text, graphics, images, and logos, is protected by copyright and trademark laws. Reproduction or distribution of any part of the site without prior written permission from the owner is prohibited.",
        "liability-title": "Limitation of Liability",
        "liability-text": "We will not be liable for any damages arising from your use of the site. The content is provided \"as is\" without any warranties.",
        "modifications-title": "Modifications to Terms",
        "modifications-text": "We reserve the right to modify these terms of use at any time. Changes will be posted on this page, and your continued use of the site after such changes constitutes your acceptance of the new terms.",
        "contact-title": "Contact Us",
        "contact-text": "If you have any questions about the terms of use, please contact us via email at: <a href=\"mailto:gogolanapro@zohomail.com\">gogolanapro@zohomail.com</a>"
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
