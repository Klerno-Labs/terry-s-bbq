// Business Contact Info
export const BUSINESS_INFO = {
  name: "Terry's BBQ",
  phone: "(512) 555-0198",
  email: "hello@terrysbbq.com",
  address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  hours: {
    weekdays: "Mon - Sat: 11:00 AM - 9:00 PM",
    sunday: "Sunday: 12:00 PM - 8:00 PM",
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
};

// Menu Data
export const MENU_ITEMS = [
  {
    id: 1,
    name: "The Pitmaster's Brisket",
    description: "Prime Angus brisket, smoked 14 hours over oak wood. Served with pickles and white bread.",
    price: 24.99,
    image: "menu-featured",
    isFeatured: true,
    tag: "House Favorite",
  },
  {
    id: 2,
    name: "St. Louis Ribs",
    description: "Half rack of pork ribs, dry-rubbed and finished with our signature mustard glaze.",
    price: 22.99,
    image: "menu-ribs",
    isFeatured: false,
  },
  {
    id: 3,
    name: "Smoked Half Chicken",
    description: "Juicy half chicken smoked to perfection, crispy skin and tender meat.",
    price: 16.99,
    image: "menu-chicken",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Pulled Pork Sandwich",
    description: "Slow-smoked pork shoulder, piled high on a brioche bun with coleslaw.",
    price: 14.99,
    image: "menu-ribs", // Reusing for demo
    isFeatured: false,
  },
  {
    id: 5,
    name: "Two Meat Plate",
    description: "Choose any two meats and two sides. The best way to sample our smokehouse.",
    price: 26.99,
    image: "menu-featured", // Reusing for demo
    isFeatured: true,
    tag: "Best Value",
  },
  {
    id: 6,
    name: "Loaded Potato Salad",
    description: "Creamy potato salad loaded with bacon, cheddar, and chives.",
    price: 4.99,
    image: "gallery-3",
    isFeatured: false,
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria L.",
    role: "Local Regular",
    text: "Hands down the best brisket in Texas. The mustard sauce is something else entirely. Worth the drive from Austin!",
    rating: 5,
  },
  {
    id: 2,
    name: "James T.",
    role: "Catering Client",
    text: "Terry's handled our company picnic for 200 people. Seamless service, incredible food. The ribs disappeared in minutes.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah K.",
    role: "Food Blogger",
    text: "The atmosphere feels like a true old Western tavern. I love the dark wood and the smell of hickory when you walk in.",
    rating: 5,
  },
];

// Catering Packages
export const CATERING_PACKAGES = [
  {
    id: 1,
    name: "The Crew",
    description: "Perfect for small office lunches or family gatherings.",
    price: "$150",
    feeds: "10-12 People",
    includes: ["Choice of 1 Meat", "2 Sides", "Buns & Sauce", "Paper Goods"],
  },
  {
    id: 2,
    name: "The Party",
    description: "Our most popular package for birthdays and reunions.",
    price: "$350",
    feeds: "25-30 People",
    includes: ["Choice of 2 Meats", "3 Sides", "Buns & Sauce", "Paper Goods"],
    featured: true,
  },
  {
    id: 3,
    name: "The Feast",
    description: "The full spread. Nothing says hospitality like this.",
    price: "$650",
    feeds: "50-60 People",
    includes: ["Choice of 3 Meats", "4 Sides", "Buns & Sauce", "Paper Goods", "Dessert"],
  },
];