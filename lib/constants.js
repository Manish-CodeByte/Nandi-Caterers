export const BRAND = {
  name: "Nandi Caterers",
  tagline: "Premium Catering For Every Occasion",
  location: "Mangalore & Surroundings",
  primaryPhone: "7338488083",
  primaryPhoneFormatted: "+91 73384 88083",
  secondaryPhone: "9663952353",
  secondaryPhoneFormatted: "+91 96639 52353",
  email: "nandicaterers21@gamil.com",
  instagram: "@nandi_caterers",
  instagramUrl: "https://instagram.com/nandi_caterers",
};

export const getWhatsAppUrl = (message = "Hi Nandi Caterers, I would like to enquire about catering for my event.") => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/917338488083?text=${encoded}`;
};

export const WHATSAPP_MESSAGES = {
  hero: "Hi Nandi Caterers, I would like to enquire about catering for my event.",
  navbar: "Hi Nandi Caterers, tell me more about your catering options.",
  menu: "Hi Nandi Caterers, I would like to discuss a customized menu for my event.",
  mobileBar: "Hi Nandi Caterers, I'm interested in your catering services.",
  cta: "Hi Nandi Caterers, I would like to enquire about catering for my event.",
  contact: "Hi Nandi Caterers, I would like to enquire about catering for my event.",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Menu", href: "#menu" },
  { name: "Occasions", href: "#occasions" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const HIGHLIGHTS = [
  {
    number: "01",
    title: "Authentic Flavours",
    description: "Centuries-honoured traditional coastal Karnataka & Indian recipes prepared with freshly ground spices and uncompromised authenticity.",
  },
  {
    number: "02",
    title: "Thoughtful Presentation",
    description: "Artfully curated banquet displays, elegant warm chafing stations, and impeccable traditional plantain leaf setups for grand celebrations.",
  },
  {
    number: "03",
    title: "Warm Hospitality",
    description: "Rooted in traditional Indian hospitality, our attentive service brigade ensures every single guest feels pampered and revered.",
  },
];

export const OCCASIONS = [
  {
    id: 1,
    title: "Weddings",
    subtitle: "Grand Royal Banquets",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Luxurious Indian wedding feast setting",
  },
  {
    id: 2,
    title: "Engagements",
    subtitle: "Intimate Celebrations",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    alt: "Festive celebration table setting",
  },
  {
    id: 3,
    title: "Housewarming",
    subtitle: "Griha Pravesha Feasts",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional celebration culinary spread",
  },
  {
    id: 4,
    title: "Birthday Celebrations",
    subtitle: "Milestone Gatherings",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    alt: "Vibrant celebratory banquet",
  },
  {
    id: 5,
    title: "Corporate Events",
    subtitle: "Executive Galas & Luncheons",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    alt: "Executive corporate dinner event",
  },
  {
    id: 6,
    title: "Family Gatherings",
    subtitle: "Cherished Reunions",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    alt: "Family celebration dining table",
  },
  {
    id: 7,
    title: "Religious Functions",
    subtitle: "Pure Traditional Prasadam",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80",
    alt: "Sacred festive Indian culinary feast",
  },
  {
    id: 8,
    title: "Special Events",
    subtitle: "Custom Bespoke Occasions",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury banquet celebration",
  },
];

export const MENU_CATEGORIES = [
  {
    category: "VEGETARIAN",
    dishes: [
      "Paneer Tikka",
      "Paneer Butter Masala",
      "Vegetable Biryani",
      "Mixed Vegetable Curry",
    ],
  },
  {
    category: "NON-VEGETARIAN",
    dishes: [
      "Chicken Biryani",
      "Tandoori Chicken",
      "Butter Chicken",
      "Mutton Curry",
    ],
  },
  {
    category: "SOUTH INDIAN",
    dishes: [
      "Idli & Sambar",
      "Dosa Varieties",
      "Uttapam",
      "South Indian Rice",
    ],
  },
  {
    category: "NORTH INDIAN",
    dishes: [
      "Naan & Roti",
      "Garlic Naan",
      "Tandoori Specialties",
      "Mughlai Cuisine",
    ],
  },
  {
    category: "DESSERTS",
    dishes: [
      "Gulab Jamun",
      "Payasam",
      "Kheer",
      "Sweet Selection",
    ],
  },
  {
    category: "BEVERAGES",
    dishes: [
      "Masala Chai",
      "Fruit Juices",
      "Lassi",
      "Traditional Beverages",
    ],
  },
];

export const WHY_NANDI_REASONS = [
  {
    number: "01",
    title: "Authentic Taste",
    description: "Recipes crafted with genuine flavours and traditional methods.",
  },
  {
    number: "02",
    title: "Freshly Prepared",
    description: "Everything prepared fresh for your specific event.",
  },
  {
    number: "03",
    title: "Elegant Presentation",
    description: "Beautiful plating and serving presentation that impresses.",
  },
  {
    number: "04",
    title: "Reliable Service",
    description: "Professional team dedicated to seamless execution.",
  },
  {
    number: "05",
    title: "Customised Menus",
    description: "Tailored menus for your specific needs and preferences.",
  },
  {
    number: "06",
    title: "Experienced Team",
    description: "Years of expertise in high-end catering and celebrations.",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Royal Wedding Biryani Spread",
    category: "Signature Dishes",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    alt: "Aromatic long-grain basmati saffron biryani with royal spices & accompaniments",
  },
  {
    id: 2,
    title: "Mangalorean Ghee Roast & Neer Dosa",
    category: "Coastal Delicacies",
    image: "/images/gallery/coastal-ghee-roast.png",
    alt: "Traditional Mangalorean Chicken Ghee Roast served with delicate Neer Dosa on plantain leaf",
  },
  {
    id: 3,
    title: "Grand Wedding Buffet Setup",
    category: "Banquet Display",
    image: "/images/gallery/buffet-setup.png",
    alt: "Gourmet banquet buffet setup and hot chafing stations",
  },
  {
    id: 4,
    title: "Warm Chafing & Live Counters",
    category: "Live Stations",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Live counter gourmet food presentation",
  },
  {
    id: 5,
    title: "Tandoori Specialties & Starters",
    category: "Appetizers",
    image: "/images/gallery/tandoori-starters.png",
    alt: "Freshly prepared tandoori chicken and kebab starters",
  },
  {
    id: 6,
    title: "Royal Dessert & Payasam Counter",
    category: "Sweets & Desserts",
    image: "/images/gallery/royal-desserts.png",
    alt: "Traditional royal payasam and sweet desserts in kulhads",
  },
  {
    id: 7,
    title: "Traditional South Indian Feast",
    category: "Heritage Dining",
    image: "/images/gallery/heritage-dining.jpg",
    alt: "Traditional Shahi Meetha Paan and heritage celebratory feast delicacies",
  },
  {
    id: 8,
    title: "Celebratory Table Elegance",
    category: "Atmosphere",
    image: "/images/gallery/table-elegance.jpg",
    alt: "Elegant celebratory banquet dining table and hospitality",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Nandi Caterers made our wedding reception unforgettable. The food was exceptional, and the team's professionalism made everything seamless. Highly recommended!",
    author: "Priya & Arjun",
    eventType: "Wedding (December 2024)",
    stars: 5,
  },
  {
    id: 2,
    quote: "Our corporate event was a huge success thanks to Nandi's thoughtful menu and impeccable service. Highly recommended!",
    author: "Karthik Kumar",
    eventType: "Corporate Event (November 2024)",
    stars: 5,
  },
  {
    id: 3,
    quote: "The presentation and authentic flavors impressed all our guests. Nandi Caterers truly understands fine dining and celebration.",
    author: "Sneha Sharma",
    eventType: "Birthday Celebration (October 2024)",
    stars: 5,
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Event",
    description: "Reach out via WhatsApp or phone call with your celebration date, venue, and estimated guest count.",
  },
  {
    number: "02",
    title: "Discuss Your Menu",
    description: "We customize a tailored menu honoring your culinary preferences, dietary needs, and signature traditions.",
  },
  {
    number: "03",
    title: "We Prepare & Perfect",
    description: "Our veteran chefs source the freshest local ingredients and prepare every dish fresh on the day of your event.",
  },
  {
    number: "04",
    title: "Enjoy Your Celebration",
    description: "Relax and celebrate with your guests while our courteous hospitality team delivers an unforgettable banquet.",
  },
];
