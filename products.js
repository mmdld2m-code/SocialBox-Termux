// ===== PRODUCTS DATA =====
const products = [
  // ===== بخور (فئة royal) =====
  { 
    id: 1, 
    name: 'بخور عدني', 
    category: 'royal', 
    price: 3500, 
    oldPrice: null,
    emoji: '💍', 
    desc: 'بخور عدني أصيل برائحة شرقية فاخرة، مثالي للمناسبات والأعراس اليمنية.',
    image: 'https://i.postimg.cc/FKkDZHfP/460880-ab6a521be5.jpg'
  },
  { 
    id: 2, 
    name: 'بخور عرايسي', 
    category: 'royal', 
    price: 4500, 
    oldPrice: null,
    emoji: '👑', 
    desc: 'بخور عرايسي فاخر برائحة العود والعنبر، يضفي لمسة ملكية على منزلك.',
    image: 'https://i.postimg.cc/4xd8Y5s9/tnzyl-(4).jpg'
  },
  { 
    id: 3, 
    name: 'بخور عوده', 
    category: 'royal', 
    price: 6500, 
    oldPrice: 8500,
    emoji: '🪔', 
    desc: 'بخور عوده طبيعي من أجود أنواع العود، رائحة زكية تدوم طويلاً.',
    image: 'https://i.postimg.cc/6p3H80th/tnzyl-(5).jpg'
  },
  { 
    id: 4, 
    name: 'بخور عدني عرائسي', 
    category: 'royal', 
    price: 5500, 
    oldPrice: null,
    emoji: '💒', 
    desc: 'بخور عدني عرائسي برائحة مميزة، مصمم خصيصاً للأعراس والمناسبات السعيدة.',
    image: 'https://i.postimg.cc/NjzdmHjP/mtjr-mtkhss-balbkhwr-alʿdny-alʿraysy-bʿtwr-shrqyt-qwyt-wthabtt-bkhwr-aqras-mnthwr-ksr-mkhl-1.jpg'
  },
  { 
    id: 5, 
    name: 'بخور أقراص منثور', 
    category: 'royal', 
    price: 4000, 
    oldPrice: null,
    emoji: '🕯️', 
    desc: 'بخور أقراص منثور برائحة شرقية قوية وثابتة، يدوم طويلاً في المنزل.',
    image: 'https://i.postimg.cc/R0JXRZ3g/mtjr-mtkhss-balbkhwr-alʿdny-alʿraysy-bʿtwr-shrqyt-qwyt-wthabtt-bkhwr-aqras-mnthwr-ksr-mkhl-2.jpg'
  },
  { 
    id: 6, 
    name: 'بخور كسر مخلط', 
    category: 'royal', 
    price: 3000, 
    oldPrice: null,
    emoji: '🧪', 
    desc: 'بخور كسر مخلط من أجود أنواع البخور العدني، رائحة مميزة وفريدة.',
    image: 'https://i.postimg.cc/NjMNK4BZ/mtjr-mtkhss-balbkhwr-alʿdny-alʿraysy-bʿtwr-shrqyt-qwyt-wthabtt-bkhwr-aqras-mnthwr-ksr-mkhlt(.jpg'
  },

  // ===== عطور رجالية (فئة men) =====
  { 
    id: 7, 
    name: 'عطر المسعودي الفاخر', 
    category: 'men', 
    price: 12000, 
    oldPrice: 15000,
    emoji: '🏺', 
    desc: 'عطر المسعودي الفاخر، مزيج ساحر من العود والعنبر والمسك، يمنحك شخصية قوية وجذابة.',
    image: 'https://i.postimg.cc/XJp3xFfT/1782776984808.jpg'
  },
  { 
    id: 8, 
    name: 'عطر ملكي', 
    category: 'men', 
    price: 9000, 
    oldPrice: 11000,
    emoji: '👔', 
    desc: 'عطر ملكي فاخر برائحة الخشب العتيق والزهور النادرة، يعكس هيبة الأناقة.',
    image: 'https://i.postimg.cc/3RVhqR1V/1782776989265.jpg'
  },
  { 
    id: 9, 
    name: 'عطر ماركا', 
    category: 'men', 
    price: 6000, 
    oldPrice: null,
    emoji: '🇫🇷', 
    desc: 'عطر ماركا عالمي برائحة فرنسية أصيلة، مناسب لرجل الأعمال العصري.',
    image: 'https://i.postimg.cc/76d4R6XH/1782777027760.jpg'
  },
  { 
    id: 10, 
    name: 'عطر خام', 
    category: 'men', 
    price: 4000, 
    oldPrice: null,
    emoji: '🫙', 
    desc: 'عطر خام طبيعي من أجود المواد العطرية، نقي ومركز يدوم طويلاً.',
    image: 'https://i.postimg.cc/ydkBn9mP/1782777178801.jpg'
  },
  { 
    id: 11, 
    name: 'خلطة المسعودي الخام', 
    category: 'men', 
    price: 9000, 
    oldPrice: 12000,
    emoji: '⚗️', 
    desc: 'خلطة المسعودي الخام، تركيزة سرية من أندر العطور الشرقية، حصرية لعشاق التميز.',
    image: 'https://i.postimg.cc/PxPhKZWm/1782777213293.jpg'
  },
  { 
    id: 12, 
    name: 'عطر خلطة الخمرة الخام', 
    category: 'men', 
    price: 4000, 
    oldPrice: 5000,
    emoji: '🌹', 
    desc: 'خلطة الخمرة الخام برائحة العنبر والزهور، عطر دافئ وجذاب للمناسبات.',
    image: 'https://i.postimg.cc/Y9hk8g6Y/1782777218189.jpg'
  },
  { 
    id: 13, 
    name: 'عطر المسك الأسود', 
    category: 'men', 
    price: 6000, 
    oldPrice: null,
    emoji: '🖤', 
    desc: 'عطر المسك الأسود الفاخر، مزيج من أندر أنواع المسك والعود الهندي.',
    image: 'https://i.postimg.cc/5tPbwpCq/1782777321570.jpg'
  },
  { 
    id: 14, 
    name: 'دهن العود الملكي', 
    category: 'men', 
    price: 12000, 
    oldPrice: 14000,
    emoji: '🧴', 
    desc: 'دهن العود الملكي من أجود أنواع العود الكمبودي، فخامة لا تضاهى.',
    image: 'https://i.postimg.cc/6QHtdzvC/1782777444885.jpg'
  },
  { 
    id: 15, 
    name: 'عطر العنبر الفاخر', 
    category: 'men', 
    price: 4000, 
    oldPrice: null,
    emoji: '💎', 
    desc: 'عطر العنبر الفاخر مستخرج من أجود أنواع العنبر الطبيعي، ثبات ممتاز.',
    image: 'https://i.postimg.cc/438szw97/1782777463575.jpg'
  },
  { 
    id: 16, 
    name: 'عطر الليل الساحر', 
    category: 'men', 
    price: 3000, 
    oldPrice: null,
    emoji: '🌙', 
    desc: 'عطر الليل الساحر برائحة غامضة تجمع بين الخشب العتيق والمسك الأبيض.',
    image: 'https://i.postimg.cc/Bvh4xNK9/1782777606530.jpg'
  },
  { 
    id: 17, 
    name: 'عطر خشبي شرقي', 
    category: 'men', 
    price: 3000, 
    oldPrice: null,
    emoji: '🪵', 
    desc: 'عطر خشبي دافئ بنكهات البخور الشرقية، يعكس أصالة العطور العربية الكلاسيكية.',
    image: 'https://i.postimg.cc/ZqYJBX0w/1782778876773.jpg'
  },

  // ===== عطور نسائية (فئة women) =====
  { 
    id: 18, 
    name: 'عطر الياسمين البنفسجي', 
    category: 'women', 
    price: 6000, 
    oldPrice: null,
    emoji: '🌸', 
    desc: 'مزيج ساحر من الياسمين والبنفسج، عطر يوحي بالرومانسية والأنوثة الرقيقة.',
    image: 'https://i.postimg.cc/TP2TLBp3/1782778880461.png'
  },
  { 
    id: 19, 
    name: 'عطر الزهور الفاخرة', 
    category: 'women', 
    price: 4000, 
    oldPrice: null,
    emoji: '💐', 
    desc: 'باقة من أرقى الزهور العالمية في عطر واحد مبهج، مناسب لجميع المناسبات.',
    image: 'https://i.postimg.cc/k5M76LB7/1782778896147.png'
  },
  { 
    id: 20, 
    name: 'عطر الفل اليمني', 
    category: 'women', 
    price: 3000, 
    oldPrice: null,
    emoji: '🌼', 
    desc: 'عطر يمني أصيل مستخلص من زهرة الفل الشامي، يحمل عبق التراث اليمني الأصيل.',
    image: 'https://i.postimg.cc/6pf9QB6y/1782778929130.png'
  },
  { 
    id: 21, 
    name: 'عطر الورد البلدي', 
    category: 'women', 
    price: 4000, 
    oldPrice: null,
    emoji: '🌹', 
    desc: 'عطر نسائي رقيق مستخلص من أجود أنواع الورد اليمني البلدي، نضارة وأناقة لا مثيل لهما.',
    image: 'https://i.postimg.cc/9QhmVD25/1782778943851.png'
  },
  { 
    id: 22, 
    name: 'عطر العنبر الملكي', 
    category: 'women', 
    price: 6000, 
    oldPrice: 7500,
    emoji: '👑', 
    desc: 'عطر نسائي ملكي بخلطة العنبر والزهور النادرة، يمنحك هيبة وأناقة في كل مناسبة.',
    image: 'https://i.postimg.cc/vBmCbsDM/1782778998756.png'
  },

  // ===== روائح (فئة fragrances) =====
  { 
    id: 23, 
    name: 'بخور عدني (يومي)', 
    category: 'fragrances', 
    price: 2500, 
    oldPrice: null,
    emoji: '🕯️', 
    desc: 'بخور عدني عادي مناسب للاستخدام اليومي، يعطر المكان برائحة لطيفة وزكية.',
    image: 'https://i.postimg.cc/TPkfrQDp/Chat-GPT-Image-30-ywnyw-2026-03-17-32-s.png'
  },
  { 
    id: 24, 
    name: 'رائحة المسك الأبيض', 
    category: 'fragrances', 
    price: 3500, 
    oldPrice: null,
    emoji: '🦡', 
    desc: 'رائحة المسك الأبيض النقية، عطر زيتي خام مثالي للخلطات العطرية.',
    image: 'https://i.postimg.cc/1tfPM6GB/images-(10).jpg'
  },
  { 
    id: 25, 
    name: 'عطر زيتي خام', 
    category: 'fragrances', 
    price: 4500, 
    oldPrice: 5500,
    emoji: '🫙', 
    desc: 'عطر زيتي خام 50 مل من أجود المواد الطبيعية، يدوم طويلاً ويناسب كل الأوقات.',
    image: 'https://i.postimg.cc/xCcYgHvx/images-(2).jpg'
  },
  { 
    id: 26, 
    name: 'بخور عنبر', 
    category: 'fragrances', 
    price: 3000, 
    oldPrice: null,
    emoji: '✨', 
    desc: 'بخور عنبر فاخر برائحة دافئة، يعطر المنزل بروحانية وهدوء.',
    image: 'https://i.postimg.cc/85jDwWRy/images-(7).jpg'
  },
  { 
    id: 27, 
    name: 'رائحة خشب العود', 
    category: 'fragrances', 
    price: 5000, 
    oldPrice: 6500,
    emoji: '🌿', 
    desc: 'رائحة خشب العود الطبيعية، مستوحاة من أجود أنواع العود الهندي.',
    image: 'https://i.postimg.cc/wv7HFJX0/images-(9).jpg'
  },
  { 
    id: 28, 
    name: 'عطر المسك الأبيض', 
    category: 'fragrances', 
    price: 3500, 
    oldPrice: null,
    emoji: '🤍', 
    desc: 'عطر المسك الأبيض النقي، رائحة هادئة ومنعشة تناسب جميع الأوقات.',
    image: 'https://i.postimg.cc/XJp3xFfg/tnzyl-(2).jpg'
  },
  { 
    id: 29, 
    name: 'رائحة العنبر الملكي', 
    category: 'fragrances', 
    price: 4500, 
    oldPrice: null,
    emoji: '👸', 
    desc: 'رائحة العنبر الملكي الفاخرة، مستوحاة من عبق الملوك والمناسبات الرسمية.',
    image: 'https://i.postimg.cc/gJnd4RVy/tnzyl-(3).jpg'
  }
];

const categoryNames = {
  all: 'جميع المنتجات',
  men: 'عطور رجالية',
  women: 'عطور نسائية',
  bakhoor: 'بخور العوده',
  royal: 'بخور الملكي',
  fragrances: 'رائحات'
};

const categoryClass = {
  men: 'cat-men',
  women: 'cat-women',
  bakhoor: 'cat-bakhoor',
  royal: 'cat-royal',
  fragrances: 'cat-fragrances'
};