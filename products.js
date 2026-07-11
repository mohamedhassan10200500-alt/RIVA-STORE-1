const allColors = [
  { name: "أسود", hex: "#000000" },
  { name: "أبيض", hex: "#FFFFFF" },
  { name: "رمادي فاتح", hex: "#D9D9D9" },
  { name: "رمادي غامق", hex: "#555555" },
  { name: "كحلي", hex: "#1B3A6B" },
  { name: "أزرق ملكي", hex: "#4169E1" },
  { name: "أزرق سماوي", hex: "#87CEEB" },
  { name: "تركواز", hex: "#40E0D0" },
  { name: "تيفاني", hex: "#81D8D0" },
  { name: "أخضر طبي", hex: "#4E7D65" },
  { name: "أخضر فاتح", hex: "#90EE90" },
  { name: "أخضر زيتوني", hex: "#556B2F" },
  { name: "مينت", hex: "#98FF98" },
  { name: "بنفسجي", hex: "#8D6A8E" },
  { name: "لافندر", hex: "#C8A2C8" },
  { name: "ليلكي", hex: "#B39DDB" },
  { name: "وردي", hex: "#D6B3BC" },
  { name: "وردي فاتح", hex: "#FFC0CB" },
  { name: "روز", hex: "#E8A0BF" },
  { name: "فوشيا", hex: "#FF1493" },
  { name: "بيج", hex: "#F5F5DC" },
  { name: "أوف وايت", hex: "#FAF9F6" },
  { name: "كاميل", hex: "#C19A6B" },
  { name: "بني", hex: "#8B4513" },
  { name: "أحمر", hex: "#DC143C" },
  { name: "نبيتي", hex: "#800020" },
  { name: "برتقالي", hex: "#FF8C00" },
  { name: "أصفر", hex: "#FFD700" }
];

export const products = [
  {
    id: 1,
    name: "سكراب RIVA الكلاسيكي",
    brand: "RIVA Med",
    category: "women",
    badge: "الأكثر مبيعاً",
    price: 750,
    originalPrice: null,
    rating: 4.9,
    reviews: 218,
    addedDate: 2024,

    colors: allColors,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],

    images: [
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],

    description:
      "سكراب نسائي كلاسيكي فاخر من RIVA. مناسب للمستشفيات والعيادات وطوال اليوم. خامة ناعمة ومريحة جداً حتى في أصعب الورديات.",

    fabric:
      "٩٢% بوليستر / ٨% إسبانديكس — مضاد للبكتيريا، سريع الجفاف، مضاد للتجعد.",

    features: [
      "مرونة ٤ اتجاهات",
      "مضاد للبكتيريا",
      "جيبين جانبيين واسعين",
      "سهل الغسيل والعناية",
      "ألوان ثابتة بعد الغسيل"
    ]
  }
];