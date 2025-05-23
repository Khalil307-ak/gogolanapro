// تعريف الترجمات
const translations = {
    en: {
        title: "Object-Oriented Programming in Python",
        "page-title": "Object-Oriented Programming in Python",
        "home": "Home",
        "about": "About",
        "courses": "Courses",
        "contact": "Contact",
        "section-title": "Object-Oriented Programming in Python",
        "intro": "Object-oriented programming is a programming paradigm that uses objects to organize and manipulate data. In Python, object-oriented programming is a powerful way to structure code and make it more flexible and reusable.",
        "concepts": "Key Concepts",
        "classes": "Classes: Templates for creating objects.",
        "objects": "Objects: Instances of classes that contain data and methods.",
        "inheritance": "Inheritance: A feature that allows classes to inherit properties and behaviors from other classes.",
        "polymorphism": "Polymorphism: The ability to use the same name for different things based on context.",
        "example": "Example of Object-Oriented Programming",
        "example-description": "Here is a simple example of using object-oriented programming in Python:",
        "example-code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return \"Animal sound\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\n# Creating an instance of Dog\nmy_dog = Dog(\"Buddy\")\nprint(my_dog.name)  # Output: Buddy\nprint(my_dog.speak())  # Output: Woof!",
        "example-explanation": "In this example, we created an `Animal` class and a `Dog` class that inherits from `Animal`. We then created an instance of the `Dog` class and used it.",
        "footer": "&copy; 2024 Learn Python. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use"
    },
    ar: {
        title: "برمجة الكائنات في بايتون",
        "page-title": "برمجة الكائنات في بايتون",
        "home": "الرئيسية",
        "about": "حول",
        "courses": "الدورات",
        "contact": "اتصل بنا",
        "section-title": "برمجة الكائنات في بايتون",
        "intro": "برمجة الكائنات هي نموذج برمجي يستخدم الكائنات (objects) لتنظيم وتحليل البيانات. في بايتون، تعد البرمجة الكائنية وسيلة قوية لتنظيم الشيفرات وجعلها أكثر مرونة وإعادة استخدام.",
        "concepts": "المفاهيم الأساسية",
        "classes": "الفصول (Classes): هي القوالب التي يتم إنشاء الكائنات بناءً عليها.",
        "objects": "الكائنات (Objects): هي مثيلات للفصول وتحتوي على بيانات وسلوكيات.",
        "inheritance": "الوراثة (Inheritance): هي ميزة تسمح للفصول بترث خصائص وسلوكيات من فصول أخرى.",
        "polymorphism": "تعدد الأشكال (Polymorphism): هو القدرة على استخدام نفس الاسم لأشياء مختلفة بناءً على السياق.",
        "example": "مثال على برمجة الكائنات",
        "example-description": "فيما يلي مثال بسيط يوضح كيفية استخدام البرمجة الكائنية في بايتون:",
        "example-code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return \"Animal sound\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\n# إنشاء كائن من الفصل Dog\nmy_dog = Dog(\"Buddy\")\nprint(my_dog.name)  # إخراج: Buddy\nprint(my_dog.speak())  # إخراج: Woof!",
        "example-explanation": "في هذا المثال، قمنا بإنشاء فصل `Animal` وفصل `Dog` الذي يرث من `Animal`. ثم قمنا بإنشاء كائن من فصل `Dog` واستخدامه.",
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
