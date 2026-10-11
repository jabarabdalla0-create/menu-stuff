import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, Coffee, Search, X } from "lucide-react";
import "./styles.css";

const ui = {
  en: {
    language: "Language",
    menu: "Our menu",
    eyebrow: "A little pause, made special",
    title: "special place for\nspecial person.",
    intro:
      "Coffee, cool sips and something sweet — made for the moments you want to keep.",
    explore: "Explore the menu",
    all: "All items",
    search: "Find your favorite…",
    results: "items",
    ask: "Ask us",
    currency: "IQD",
    footer: "Made with love.",
    noResults: "No items match your search.",
    heading: "Find your",
    headingAccent: "favorite.",
    caption: "Something for every craving",
    categories: {
      "hot-drinks": "Hot drinks",
      "cold-drinks": "Cold coffee",
      milkshakes: "Milkshakes",
      "fresh-juice": "Fresh juice",
      signature: "Fruit drinks",
      "special-drinks": "Signature drinks",
      desserts: "Cakes & sweets",
      "ice-cream": "Ice cream",
    },
  },
  ku: {
    language: "زمان",
    menu: "مێنیو",
    eyebrow: "ساتێکی ئارام، ",
    title: "بۆ کەسانی تایبەت\nشوێنێکی تایبەت",
    intro:
      "قاوە، خواردنەوەی سارد و شیرینی — بۆ ئەو ساتانەی دەتەوێت لەبیر نەچن.",
    explore: "مێنیو ببینە",
    all: "هەموو",
    search: "بەدوای دڵخوازەکەتدا بگەڕێ…",
    results: "بەرهەم",
    ask: "پرسیار بکە",
    currency: "د.ع",
    footer: "بە خۆشەویستیەوە ئامادەکراوە، ",
    noResults: "هیچ بەرهەمێک نەدۆزرایەوە.",
    heading: "دڵخوازەکەت",
    headingAccent: "بدۆزەرەوە.",
    caption: "شتێک بۆ هەر ئارەزوویەک",
    categories: {
      "hot-drinks": "خواردنەوەی گەرم",
      "cold-drinks": "قاوەی سارد",
      milkshakes: "میلک شەیک",
      "fresh-juice": "شەربەتی فرێش",
      signature: "خواردنەوەی میوە",
      "special-drinks": "خواردنەوەی تایبەت",
      desserts: "کێک و شیرینی",
      "ice-cream": "ئایسکرێم",
    },
  },
  ar: {
    language: "اللغة",
    menu: "قائمتنا",
    eyebrow: "استراحة صغيرة بطعم مميز",
    title: "لآشخاس مميزين\nمكان خاص",
    intro: "قهوة ومشروبات منعشة وحلوى — للحظات الجميلة التي تستحق أن تبقى.",
    explore: "تصفّح القائمة",
    all: "كل الأصناف",
    search: "ابحث عن المفضل لديك…",
    results: "أصناف",
    ask: "اسألنا",
    currency: "د.ع",
    footer: "محضّر بعناية،",
    noResults: "لا توجد أصناف مطابقة للبحث.",
    heading: "ابحث عن",
    headingAccent: "مفضّلك.",
    caption: "شيء يناسب كل رغبة",
    categories: {
      "hot-drinks": "مشروبات ساخنة",
      "cold-drinks": "قهوة باردة",
      milkshakes: "ميلك شيك",
      "fresh-juice": "عصائر طازجة",
      signature: "مشروبات الفاكهة",
      "special-drinks": "مشروبات مميزة",
      desserts: "كيك وحلويات",
      "ice-cream": "آيس كريم",
    },
  },
};

const products = [
  [
    "lemon-mint",
    "signature",
    3000,
    "lemon-mint-3000iqd",
    "Lemon Mint",
    "لیمۆ و نەعنا",
    "ليمون ونعناع",
  ],
  [
    "lychee",
    "signature",
    3500,
    "lychee-drink-3500iqd",
    "Lychee Drink",
    "خواردنەوەی لیچی",
    "مشروب الليتشي",
  ],
  [
    "mango-drink",
    "signature",
    3500,
    "mango-drink-3500iqd",
    "Mango Drink",
    "خواردنەوەی مانگۆ",
    "مشروب المانجو",
  ],
  [
    "orange-mint",
    "signature",
    3000,
    "orange-mint-3000iqd",
    "Orange Mint",
    "پرتەقاڵ و نەعنا",
    "برتقال ونعناع",
  ],
  [
    "passionfruit",
    "signature",
    3500,
    "passionfruit-drink-3500iqd",
    "Passion Fruit",
    "میوەی پاشن",
    "فاكهة العاطفة",
  ],
  [
    "peach-drink",
    "signature",
    3000,
    "peach-drink-3000iqd",
    "Peach Drink",
    "خواردنەوەی خؤخ",
    "مشروب الخوخ",
  ],
  [
    "pear-drink",
    "signature",
    3000,
    "pear-drink-3000iqd",
    "Pear Drink",
    "خواردنەوەی هەرمێ",
    "مشروب الكمثرى",
  ],
  [
    "pineapple-drink",
    "signature",
    3000,
    "pineapple-drink-3000iqd",
    "Pineapple Drink",
    "خواردنەوەی ئەنەناس",
    "مشروب الأناناس",
  ],
  ["soda", "signature", 1000, "soda-1000iqd", "Soda", "سۆدا", "صودا"],
  [
    "lemon-soda",
    "signature",
    1500,
    "soda-limon-1500iqd",
    "Lemon Soda",
    "سۆدای لیمۆ",
    "صودا بالليمون",
  ],
  ["sprite", "signature", 1000, "sprite-1000iqd", "Sprite", "سپڕایت", "سبرايت"],
  [
    "strawberry-drink",
    "signature",
    3500,
    "strawberry-drink-3500iqd",
    "Strawberry Drink",
    "خواردنەوەی تووتفرەنگی",
    "مشروب الفراولة",
  ],
  [
    "zero-cola",
    "signature",
    1500,
    "zero-cola-1500iqd",
    "Zero Cola",
    "کۆلای بێشەکر",
    "كولا زيرو",
  ],
  [
    "blackberry",
    "signature",
    3000,
    "blackberry-drink-3000iqd",
    "Blackberry Drink",
    "خواردنەوەی بلاک بێری",
    "مشروب التوت الأسود",
  ],
  [
    "blue-maxico",
    "signature",
    3000,
    "blue-maxico-3000iqd",
    "Blue Maxico",
    "بلو ماکسیکۆ",
    "بلو ماكسيكو",
  ],
  [
    "bubble-gum",
    "signature",
    3000,
    "bubble-gum-drink-3000iqd",
    "Bubble Gum Drink",
    "خواردنەوەی تام بنێشت",
    "مشروب العلكة",
  ],
  [
    "coconut-drink",
    "signature",
    3000,
    "coconut-drink-3000iqd",
    "Coconut Drink",
    "خواردنەوەی کۆکۆنات",
    "مشروب جوز الهند",
  ],
  ["cola", "signature", 1000, "cole-1000iqd", "Cola", "کۆلا", "كولا"],
  [
    "costa-maxico",
    "signature",
    4000,
    "costa-maxico-4000iqd",
    "Costa Maxico",
    "کۆستا ماکسیکۆ",
    "كوستا ماكسيكو",
  ],
  ["fanta", "signature", 1000, "fanta-1000iqd", "Fanta", "فانتا", "فانتا"],
  [
    "kiwi-maxico",
    "signature",
    3000,
    "kiwi-maxico-3000iqd",
    "Kiwi Maxico",
    "کیوی ماکسیکۆ",
    "كيوي ماكسيكو",
  ],
  [
    "kunafa-cheese",
    "desserts",
    3000,
    "kunafa-with-chees-3000iqd",
    "Kunafa with Cheese",
    "کونافە بە پەنیر",
    "كنافة بالجبن",
  ],
  [
    "kunafa-cream",
    "desserts",
    3500,
    "kunafa-with-cream-3500iqd",
    "Kunafa with Cream",
    "کونافە بە کرێم خامە",
    "كنافة بالقشطة",
  ],
  [
    "kunafa-nutella",
    "desserts",
    3500,
    "kunafa-with-nutela-3500iqd",
    "Kunafa with Nutella",
    "کونافە بە نوتێلا",
    "كنافة بالنوتيلا",
  ],
  [
    "special-cake",
    "desserts",
    3000,
    "scecial-cake-3000iqd",
    "Special Cake",
    "کێکی تایبەت",
    "كيك مميز",
  ],
  [
    "simple-cake",
    "desserts",
    1000,
    "simple-cake-1000iqd",
    "Simple Cake",
    "کێکی سادە",
    "كيك سادة",
  ],
  [
    "strawberry-cake",
    "desserts",
    3000,
    "strawberry-cake-3000iqd",
    "Strawberry Cake",
    "کێکی شلک",
    "كيك الفراولة",
  ],
  [
    "tres-leches",
    "desserts",
    2500,
    "tralicha-cake-2500iqd",
    "Tres Leches Cake",
    "کێکی ترالیچە",
    "كيك تريس ليتشيس",
  ],
  ["xshxsh", "desserts", 2000, "xshxsh-2000iqd", "Xshxsh", "خشخش", "خشخش"],
  [
    "banana-chocolate-cake",
    "desserts",
    3000,
    "banana-chocolate-cake-3000iqd",
    "Banana Chocolate Cake",
    "کێکی مۆز و چۆکڵێت",
    "كيك الموز والشوكولاتة",
  ],
  [
    "costa-cake",
    "desserts",
    3000,
    "costa-cake-3000iqd",
    "Costa Cake",
    "کێکی کۆستا",
    "كيك كوستا",
  ],
  [
    "despacito-cake",
    "desserts",
    2500,
    "despacito-cake-2500iqd",
    "Despacito Cake",
    "کێکی دێسپاچیتۆ",
    "كيك ديسباسيتو",
  ],
  [
    "banana-milkshake",
    "milkshakes",
    3500,
    "banana-milkshake-3500iqd",
    "Banana Milkshake",
    "میلک شەیکی مۆز",
    "ميلك شيك الموز",
  ],
  [
    "cacao-milkshake",
    "milkshakes",
    3500,
    "cacao-milkshake3500iqd",
    "Cacao Milkshake",
    "میلک شەیکی کاکاو",
    "ميلك شيك الكاكاو",
  ],
  [
    "chocolate-milkshake",
    "milkshakes",
    3500,
    "chocolate-milkshake-3500iqd",
    "Chocolate Milkshake",
    "میلک شەیکی چۆکڵێت",
    "ميلك شيك الشوكولاتة",
  ],
  [
    "costa-milkshake",
    "milkshakes",
    5000,
    "costa-milkshake-5000iqd",
    "Costa Milkshake",
    "میلک شەیکی کۆستا",
    "ميلك شيك كوستا",
  ],
  [
    "nutella-milkshake",
    "milkshakes",
    4000,
    "notella-milkshake-4000iqd",
    "Nutella Milkshake",
    "میلک شەیکی نوتێلا",
    "ميلك شيك نوتيلا",
  ],
  [
    "oreo-milkshake",
    "milkshakes",
    4000,
    "oreo-milkshake-4000iqd",
    "Oreo Milkshake",
    "میلک شەیکی ئۆریۆ",
    "ميلك شيك أوريو",
  ],
  [
    "strawberry-milkshake",
    "milkshakes",
    3500,
    "strawberry-milkshake-3500iqd",
    "Strawberry Milkshake",
    "میلک شەیکی شلک",
    "ميلك شيك الفراولة",
  ],
  [
    "vanilla-milkshake",
    "milkshakes",
    3500,
    "vanilla-milkshake-3500iqd",
    "Vanilla Milkshake",
    "میلک شەیکی ڤانیلا",
    "ميلك شيك الفانيلا",
  ],
  [
    "kids-milkshake",
    "milkshakes",
    3000,
    "babys-milkshake-3000iqd",
    "Kids Milkshake",
    "میلک شەیکی منداڵان",
    "ميلك شيك الأطفال",
  ],
  [
    "lemon-juice",
    "fresh-juice",
    2000,
    "fresh-lemon-juice-2000iqd",
    "Fresh Lemon Juice",
    "شەربەتی لیمۆی تازە",
    "عصير ليمون طازج",
  ],
  [
    "orange-juice",
    "fresh-juice",
    2500,
    "fresh-orange-juice-2500iqd",
    "Fresh Orange Juice",
    "شەربەتی پرتەقاڵی تازە",
    "عصير برتقال طازج",
  ],
  [
    "pomegranate-juice",
    "fresh-juice",
    3000,
    "fresh-pamegranate-juce-3000iqd",
    "Fresh Pomegranate Juice",
    "شەربەتی هەناری تازە",
    "عصير رمان طازج",
  ],
  [
    "pear-juice",
    "fresh-juice",
    2500,
    "fresh-pear-juice-2500iqd",
    "Fresh Pear Juice",
    "شەربەتی هەرمێی تازە",
    "عصير كمثرى طازج",
  ],
  [
    "pineapple-juice",
    "fresh-juice",
    3000,
    "fresh-pineapple-juice-3000iqd",
    "Fresh Pineapple Juice",
    "شەربەتی ئەنەناسی تازە",
    "عصير أناناس طازج",
  ],
  [
    "vip-pineapple-juice",
    "fresh-juice",
    5000,
    "vip-fresh-pineapple-juice-5000iqd",
    "VIP Fresh Pineapple Juice",
    "شەربەتی ئەنەناسی تایبەت",
    "عصير أناناس فاخر",
  ],
  [
    "apple-juice",
    "fresh-juice",
    2500,
    "fresh-apple-juice-2500iqd",
    "Fresh Apple Juice",
    "شەربەتی سێوی تازە",
    "عصير تفاح طازج",
  ],
  [
    "banana-juice",
    "fresh-juice",
    null,
    "fresh-banana-juice",
    "Fresh Banana Juice",
    "شەربەتی مۆزی تازە",
    "عصير موز طازج",
  ],
  [
    "costa-cocktail",
    "fresh-juice",
    3500,
    "fresh-coctail-costa-3500iqd",
    "Fresh Costa Cocktail",
    "کۆکتێلی تازەی کۆستا",
    "كوكتيل كوستا الطازج",
  ],
  [
    "fruit-cocktail",
    "fresh-juice",
    3000,
    "fresh-coctail-juice-3000iqd",
    "Fresh Fruit Cocktail",
    "کۆکتێلی میوەی تازە",
    "كوكتيل فواكه طازج",
  ],
  [
    "grapefruit-juice",
    "fresh-juice",
    2500,
    "fresh-grapefruit-juice-2500iqd",
    "Fresh Grapefruit Juice",
    "شەربەتی سندی تازە",
    "عصير جريب فروت طازج",
  ],
  [
    "hot-chocolate",
    "hot-drinks",
    2000,
    "hot-chocolate-2000iqd",
    "Hot Chocolate",
    "چۆکڵێتی گەرم",
    "شوكولاتة ساخنة",
  ],
  ["latte", "hot-drinks", 2500, "latte-2500iqd", "Latte", "لاتێ", "لاتيه"],
  ["lungo", "hot-drinks", 2000, "lungo-2000iqd", "Lungo", "لۆنگۆ", "لونغو"],
  [
    "menengic-coffee",
    "hot-drinks",
    2500,
    "menegice-coffee-2500iqd",
    "Menengic Coffee",
    "قاوەی مەنێنگیچ",
    "قهوة المنينغيتش",
  ],
  ["mocha", "hot-drinks", 2500, "mocha-2500iqd", "Mocha", "مۆکا", "موكا"],
  [
    "nescafe",
    "hot-drinks",
    2000,
    "nescafe-2000iqd",
    "Nescafe",
    "نێسکافێ",
    "نسكافيه",
  ],
  [
    "ristretto",
    "hot-drinks",
    2000,
    "ristretto-2000iqd",
    "Ristretto",
    "ریسترێتۆ",
    "ريستريتو",
  ],
  ["tea", "hot-drinks", 1000, "tea-1000iqd", "Tea", "چا", "شاي"],
  [
    "turkish-coffee",
    "hot-drinks",
    2000,
    "turkish-coffee-2000iqd",
    "Turkish Coffee",
    "قاوەی تورکی",
    "قهوة تركية",
  ],
  [
    "americano",
    "hot-drinks",
    2000,
    "americano-coffe-2000iqd",
    "Americano",
    "ئەمیریکانۆ",
    "أمريكانو",
  ],
  [
    "arabic-coffee",
    "hot-drinks",
    2000,
    "arabice-coffe-2000iqd",
    "Arabic Coffee",
    "قاوەی عەرەبی",
    "قهوة عربية",
  ],
  ["cacao", "hot-drinks", 2000, "cacao-2000iqd", "Cacao", "کاکاو", "كاكاو"],
  [
    "cappuccino",
    "hot-drinks",
    2500,
    "capochinoo-2500-iqd",
    "Cappuccino",
    "کاپوچینۆ",
    "كابتشينو",
  ],
  [
    "cofe-costa",
    "hot-drinks",
    3000,
    "costa-coffe-3000iqd",
    "Cofe Costa",
    "قاوەی کۆستا",
    "قهوة كوستا",
  ],
  [
    "double-espresso",
    "hot-drinks",
    3000,
    "double-espresso-3000iqd",
    "Double Espresso",
    "ئێسپریسۆی دوو هێندە",
    "إسبريسو مزدوج",
  ],
  [
    "espresso",
    "hot-drinks",
    2000,
    "espresso-2000iqd",
    "Espresso",
    "ئێسپریسۆ",
    "إسبريسو",
  ],
  [
    "flat-white",
    "hot-drinks",
    2500,
    "flat-white-2500iqd",
    "Flat White",
    "فلات وایت",
    "فلات وايت",
  ],
  [
    "green-tea",
    "hot-drinks",
    1000,
    "green-tea-1000iqd",
    "Green Tea",
    "چا سەوز",
    "شاي أخضر",
  ],
  [
    "banana-chocolate",
    "cold-drinks",
    3000,
    "banana-chokolate-3000iqd",
    "Banana Chocolate",
    "مۆز و چۆکڵێت",
    "موز بالشوكولاتة",
  ],
  [
    "costa-latte",
    "cold-drinks",
    3000,
    "costa-latte-3000iqd",
    "Costa Latte",
    "لاتێی کۆستا",
    "لاتيه كوستا",
  ],
  [
    "frappe",
    "cold-drinks",
    2500,
    "frappe-2500iqd",
    "Frappe",
    "فراپێ",
    "فرابيه",
  ],
  [
    "frappe-mocha",
    "cold-drinks",
    3000,
    "frappe-mocha-3000iqd",
    "Mocha Frappe",
    "فراپێی مۆکا",
    "فرابيه موكا",
  ],
  ["freddo", "cold-drinks", 3000, "freddo-3000iqd", "Freddo", "فرێدۆ", "فريدو"],
  [
    "iced-coffee",
    "cold-drinks",
    2500,
    "ice-coffe-2500iqd",
    "Iced Coffee",
    "قاوەی سارد",
    "قهوة مثلجة",
  ],
  [
    "iced-caramel-macchiato",
    "cold-drinks",
    3000,
    "iced-caramel-machiato-3000iqd",
    "Iced Caramel Macchiato",
    "ماکیاتۆی کارامێلی سارد",
    "ماكياتو كراميل مثلج",
  ],
  [
    "iced-chocolate",
    "cold-drinks",
    2500,
    "iced-chokolate-2500iqd",
    "Iced Chocolate",
    "چۆکڵێتی سارد",
    "شوكولاتة مثلجة",
  ],
  ["niz", "cold-drinks", 2500, "niz-2500-iqd", "Niz", "نیز", "نيز"],
  [
    "spanish-latte",
    "cold-drinks",
    3000,
    "spanish-latte-3000iqd",
    "Spanish Latte",
    "لاتێی ئیسپانی",
    "لاتيه إسباني",
  ],
  [
    "affogato",
    "cold-drinks",
    3000,
    "affogato-3000iqd",
    "Affogato",
    "ئافۆگاتۆ",
    "أفوكاتو",
  ],
  [
    "blueberry",
    "special-drinks",
    3500,
    "blueberry-3500iqd",
    "Blueberry",
    "بلوبێری",
    "توت أزرق",
  ],
  [
    "costa-special",
    "special-drinks",
    4000,
    "costa-4000iqd",
    "Costa Special",
    "تایبەتی کۆستا",
    "كوستا المميز",
  ],
  [
    "mojito",
    "special-drinks",
    3500,
    "mojito-3500iqd",
    "Mojito",
    "مۆهیتۆ",
    "موهيتو",
  ],
  [
    "pineapple-breeze",
    "special-drinks",
    3500,
    "pineapple-breeze-3500iqd",
    "Pineapple Breeze",
    "نەسیمی ئەنەناس",
    "نسيم الأناناس",
  ],
  [
    "raspberry",
    "special-drinks",
    3500,
    "raspberry-3500iqd",
    "Raspberry",
    "توتی ڕەش",
    "توت العليق",
  ],
  [
    "blue-hawaii",
    "special-drinks",
    3500,
    "blue-hawaii-3500iqd",
    "Blue Hawaii",
    "بلو هاوایی",
    "بلو هاواي",
  ],
  [
    "mahalabi",
    "ice-cream",
    1500,
    "mahalabi-1500iqd",
    "Mahalabi",
    "مەهەلەبی",
    "مهلبية",
  ],
  [
    "mahalabi-ice-cream",
    "ice-cream",
    2500,
    "mahalabi-ice-cream-2500iqd",
    "Mahalabi & Ice Cream",
    "مەهەلەبی و ئایسکرێم",
    "مهلبية وآيس كريم",
  ],
  [
    "mixed-nuts",
    "ice-cream",
    null,
    "mixed-nutt",
    "Mixed Nuts",
    "تێکەڵەی گوێز",
    "مكسرات مشكلة",
  ],
  [
    "pistachio-ice-cream",
    "ice-cream",
    2500,
    "pistachio-ice-crem-2500iqd",
    "Pistachio Ice Cream",
    "ئایسکرێمی فستق",
    "آيس كريم بالفستق",
  ],
  [
    "cocktail-mahalabi",
    "ice-cream",
    2000,
    "coctail-mahalabi-2000iqd",
    "Mahalabi Cocktail",
    "کۆکتێلی مەهەلەبی",
    "كوكتيل المهلبية",
  ],
  [
    "family-fruit-ice-cream",
    "ice-cream",
    5000,
    "family-fruit-uce-cream-5000iqd",
    "Family Fruit & Ice Cream",
    "میوە و ئایسکرێمی خێزانی",
    "فواكه وآيس كريم عائلي",
  ],
  [
    "fresh-fruit",
    "ice-cream",
    3000,
    "fresh-fruit-3000iqd",
    "Fresh Fruit",
    "میوەی تازە",
    "فواكه طازجة",
  ],
  [
    "fruit-ice-cream",
    "ice-cream",
    3500,
    "fruit-ice-cream-3500iqd",
    "Fruit & Ice Cream",
    "میوە و ئایسکرێم",
    "فواكه وآيس كريم",
  ],
  [
    "ice-cream",
    "ice-cream",
    2000,
    "ice-cream-2000iqd",
    "Ice Cream",
    "ئایسکرێم",
    "آيس كريم",
  ],
  [
    "ice-cream-baklava",
    "ice-cream",
    2500,
    "icecream-with-paqlawa-2500iqd",
    "Ice Cream with Baklava",
    "ئایسکرێم لەگەڵ پاقلاوە",
    "آيس كريم مع البقلاوة",
  ],
].map(([id, category, price, image, en, ku, ar]) => ({
  id,
  category,
  price,
  name: { en, ku, ar },
  image: `/images/${category}/${image}.jpg`,
}));

function App() {
  const [lang, setLang] = useState("en");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const t = ui[lang];
  const filtered = useMemo(
    () =>
      products.filter(
        (item) =>
          (category === "all" || item.category === category) &&
          item.name[lang].toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [category, query, lang],
  );
  const formatPrice = (price) =>
    price == null
      ? t.ask
      : `${price.toLocaleString(lang === "ar" ? "ar-IQ" : "en-US")} ${t.currency}`;

  return (
    <div className={`app lang-${lang}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="topbar wrap">
        <a className="brand" href="#top" aria-label="Cofe Costa home">
          <span className="brand-mark">
            <Coffee size={21} strokeWidth={1.7} />
          </span>
          <span className="brand-copy">
            <strong>Coffe Costa</strong>
            <small>COFFEE · JUICE · SWEETS</small>
          </span>
        </a>
        <nav className="top-actions" aria-label={t.language}>
          <span className="language-label">{t.language}</span>
          <div className="language-switch" role="group" aria-label={t.language}>
            {[
              ["en", "EN"],
              ["ku", "کوردی"],
              ["ar", "عربي"],
            ].map(([code, label]) => (
              <button
                key={code}
                className={lang === code ? "selected" : ""}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> {t.eyebrow}
            </div>
            <h1>
              {t.title.split("\n").map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h1>
            <p>{t.intro}</p>
            <a className="primary-button" href="#menu">
              {t.explore}
              <ArrowDown size={17} />
            </a>
            <div className="hero-note">
              <span className="note-stars">✳ ✳ ✳</span>
              <span>
                COFFE COSTA <i>·</i> EST. WITH LOVE
              </span>
            </div>
          </div>
          <div className="hero-art" aria-label="Featured drinks and desserts">
            <div className="art-glow" />
            <div className="hero-photo photo-one">
              <img
                src="/images/special-drinks/mojito-3500iqd.jpg"
                alt="Fresh mojito"
              />
            </div>
            <div className="hero-photo photo-two">
              <img
                src="/images/desserts/kunafa-with-cream-3500iqd.jpg"
                alt="Kunafa with cream"
              />
            </div>
            <div className="hero-photo photo-three">
              <img
                src="/images/hot-drinks/costa-coffe-3000iqd.jpg"
                alt="Cofe Costa coffee"
              />
            </div>
            <div className="art-stamp">
              <span>
                GOOD
                <br />
                MOOD
              </span>
              <b>☼</b>
            </div>
            <div className="art-caption">
              <span>01 — 08</span>
              <strong>{t.caption}</strong>
            </div>
          </div>
          <div className="hero-index">
            01 <span /> 08
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span /> {t.menu}
                </div>
                <h2>
                  {t.heading} <em>{t.headingAccent}</em>
                </h2>
              </div>
              <div className="menu-count">
                {filtered.length.toString().padStart(2, "0")}{" "}
                <span>{t.results}</span>
              </div>
            </div>
            <div className="menu-tools">
              <div className="category-list">
                <button
                  className={`category-chip ${category === "all" ? "active" : ""}`}
                  onClick={() => setCategory("all")}
                >
                  {t.all}
                  <span>{products.length}</span>
                </button>
                {Object.entries(t.categories).map(([key, label]) => (
                  <button
                    key={key}
                    className={`category-chip ${category === key ? "active" : ""}`}
                    onClick={() => setCategory(key)}
                  >
                    {label}
                    <span>
                      {products.filter((x) => x.category === key).length}
                    </span>
                  </button>
                ))}
              </div>
              <label className="search-box">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.search}
                />
                {query && (
                  <button
                    aria-label="Clear search"
                    onClick={() => setQuery("")}
                  >
                    <X size={16} />
                  </button>
                )}
              </label>
            </div>
            {filtered.length ? (
              <div className="product-grid">
                {filtered.map((item, index) => (
                  <article
                    className="product-card"
                    key={item.id}
                    style={{ "--delay": `${Math.min(index % 8, 7) * 35}ms` }}
                  >
                    <div className="product-image">
                      <img
                        src={item.image}
                        alt={item.name[lang]}
                        loading="lazy"
                      />
                      <span className="image-index">
                        {String(products.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                      <span className="image-arrow">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <div className="product-info">
                      <h3>{item.name[lang]}</h3>
                      <span className="price">{formatPrice(item.price)}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">{t.noResults}</div>
            )}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">
              <Coffee size={19} />
            </span>
            <strong>Coffe Costa</strong>
          </a>
          <p>{t.footer}</p>
          <span className="footer-spark">✳</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
