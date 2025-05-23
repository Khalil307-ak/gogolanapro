// تعريف الترجمات
const translations = {
    en: {
        title: "Data Analysis with Python",
        "page-title": "Data Analysis with Python",
        "home": "Home",
        "about": "About",
        "courses": "Courses",
        "contact": "Contact",
        "section-title": "Data Analysis with Python",
        "intro": "Python is one of the best languages for data analysis. It provides a set of powerful libraries that make the analysis process easy and efficient.",
        "libraries": "Libraries Used",
        "pandas": "Pandas: A powerful library for data manipulation and analysis.",
        "numpy": "NumPy: A library that provides support for multidimensional arrays and mathematical operations.",
        "matplotlib": "Matplotlib: A library for plotting and visualizing data.",
        "seaborn": "Seaborn: A library that provides beautiful and informative statistical graphics.",
        "example": "Example of Data Analysis",
        "example-description": "Here is a simple example of how to use the Pandas library to analyze a dataset:",
        "example-code": "import pandas as pd\n\n# Load the dataset\ndata = pd.read_csv('data.csv')\n\n# Display a summary of the data\nprint(data.head())\n\n# Analyze the data\nprint(data.describe())",
        "example-explanation": "In this example, we load a dataset from a CSV file and display the first 5 rows of it. We then perform some basic analysis on the data.",
        "footer": "&copy; 2024 Learn Python. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use"
    },
    ar: {
        title: "تحليل البيانات ببايتون",
        "page-title": "تحليل البيانات ببايتون",
        "home": "الرئيسية",
        "about": "حول",
        "courses": "الدورات",
        "contact": "اتصل بنا",
        "section-title": "تحليل البيانات ببايتون",
        "intro": "بايثون هي واحدة من أفضل اللغات لتحليل البيانات. توفر مجموعة من المكتبات القوية التي تجعل عملية التحليل سهلة وفعالة.",
        "libraries": "المكتبات المستخدمة",
        "pandas": "Pandas: مكتبة قوية لمعالجة البيانات وتحليلها.",
        "numpy": "NumPy: مكتبة توفر دعمًا لمصفوفات متعددة الأبعاد والعمليات الرياضية.",
        "matplotlib": "Matplotlib: مكتبة للرسم البياني والتصور البياني للبيانات.",
        "seaborn": "Seaborn: مكتبة توفر رسومات بيانية أنيقة ومحسنة لمجموعة من التحليلات.",
        "example": "مثال على تحليل البيانات",
        "example-description": "فيما يلي مثال بسيط لكيفية استخدام مكتبة Pandas لتحليل مجموعة بيانات:",
        "example-code": "import pandas as pd\n\n# تحميل مجموعة البيانات\ndata = pd.read_csv('data.csv')\n\n# عرض نظرة عامة على البيانات\nprint(data.head())\n\n# تحليل البيانات\nprint(data.describe())",
        "example-explanation": "في هذا المثال، نقوم بتحميل مجموعة بيانات من ملف CSV وعرض أول 5 صفوف منها. ثم نقوم بإجراء تحليل أساسي للبيانات.",
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
