import { ImageSlot } from "@/config/images";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "meats" | "sides";
  image: ImageSlot;
  tags?: string[];
  isFeatured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "brisket",
    name: "Texas Style Brisket",
    description: "Prime brisket slow smoked for 14 hours over post oak wood. Served with our signature mustard sauce.",
    price: 22,
    category: "meats",
    image: "hero-alt",
    tags: ["House Fave", "Gluten Free"],
    isFeatured: true,
  },
  {
    id: "ribs",
    name: "St. Louis Ribs",
    description: "Half rack of pork ribs dry rubbed and smoked until fall-off-the-bone tender.",
    price: 24,
    category: "meats",
    image: "service-1",
  },
  {
    id: "pulled-pork",
    name: "Pulled Pork Shoulder",
    description: "Slow roasted and hand-pulled. Mixed with a hint of vinegar sauce.",
    price: 16,
    category: "meats",
    image: "service-2",
  },
  {
    id: "wings",
    name: "Smoked Wings",
    description: "Jumbo wings smoked then crispy fried. Tossed in your choice of dry rub or mild sauce.",
    price: 14,
    category: "starters",
    image: "gallery-1",
  },
  {
    id: "mac",
    name: "Three Cheese Mac",
    description: "Creamy four-cheese blend topped with bacon breadcrumbs.",
    price: 6,
    category: "sides",
    image: "gallery-2",
  },
  {
    id: "slaw",
    name: "Mustard Slaw",
    description: "Crisp cabbage and carrots in our house-made mustard vinaigrette.",
    price: 4,
    category: "sides",
    image: "gallery-3",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Maria L.",
    role: "Local Foodie",
    content: "Hands down the best brisket in Kentucky. The mustard sauce is a game changer—I've never tasted anything like it. The atmosphere feels like a true old western tavern.",
    rating: 5,
  },
  {
    id: 2,
    name: "James T.",
    role: "Event Planner",
    content: "We hired Terry's for our company catering and it was a massive hit. The 'Feeding a Posse' package was perfect. Professional service and incredible food.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah B.",
    role: "Regular Customer",
    content: "You can taste the time and effort put into every bite. The ribs are tender and smoky, just how BBQ should be. Don't skip the mac and cheese!",
    rating: 5,
  },
];

export const cateringPackages = [
  {
    id: "crew",
    name: "The Crew",
    description: "Perfect for small gatherings and office lunches.",
    price: "150",
    features: [
      "1lb Pulled Pork",
      "1 Quart Slaw",
      "1 Quart Mac & Cheese",
      "12 Buns & Sauce",
    ],
  },
  {
    id: "party",
    name: "The Party",
    description: "Our most popular choice for family reunions.",
    price: "300",
    features: [
      "2lb Brisket & 2lb Ribs",
      "2 Quarts Slaw",
      "2 Quarts Beans",
      "24 Buns & Sauce",
    ],
  },
  {
    id: "feast",
    name: "The Feast",
    description: "The full spread for the biggest appetites.",
    price: "500",
    features: [
      "4lb Mixed Meats (Brisket, Ribs, Pork)",
      "Sides for 30 People",
      "Pickles, Onions & Bread",
      "Dessert Included",
    ],
  },
];