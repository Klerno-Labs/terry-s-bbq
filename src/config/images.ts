// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  // BBQ Smoking Pit, Fire, Embers
  "hero": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1920&auto=format&fit=crop",
    alt: "Close up of brisket smoking in a pit with glowing embers",
    width: 1920,
    height: 1080,
  },

  // Alternative hero image (used on inner pages or as fallback)
  // Platter of BBQ Ribs and Brisket
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1544025162-d76690b67f01?q=80&w=1920&auto=format&fit=crop",
    alt: "Platter of smoked BBQ ribs and brisket slices",
    width: 1920,
    height: 1080,
  },

  // About page or About section on homepage — Pitmaster Terry
  "about": {
    src: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1920&auto=format&fit=crop",
    alt: "Pitmaster checking on the meat in the smoker",
    width: 1920,
    height: 1280,
  },

  // First service card image — Pulled Pork
  "menu-featured": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop",
    alt: "Sliced smoked beef brisket with dark bark",
    width: 800,
    height: 600,
  },

  // Second service card image — Ribs
  "menu-ribs": {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
    alt: "Smoked pork ribs glazed with sauce",
    width: 800,
    height: 600,
  },

  // Third service card image — Chicken
  "menu-chicken": {
    src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
    alt: "Half smoked chicken with crispy skin",
    width: 800,
    height: 600,
  },

  // Gallery image 1 — Banquet Table
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    alt: "Rustic southern banquet table setting",
    width: 800,
    height: 600,
  },

  // Gallery image 2 — Drinks
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    alt: "Mason jar drinks with ice on a wooden table",
    width: 800,
    height: 600,
  },

  // Team member photo — Terry Foster
  "team-1": {
    src: "https://images.unsplash.com/photo-1583394293214-28ez81be0c8a?q=80&w=800&auto=format&fit=crop",
    alt: "Terry Foster standing in front of his smokehouse",
    width: 800,
    height: 800,
  },

  // Gallery image 3 — Sides
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop",
    alt: "Bowl of creamy coleslaw and mac and cheese",
    width: 800,
    height: 600,
  },

  // Call-to-action section background — Exterior of restaurant
  "cta": {
    src: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=1920&auto=format&fit=crop",
    alt: "Exterior of Terry's BBQ wooden shack sign",
    width: 1920,
    height: 600,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop",
    alt: "Interior of a rustic western tavern dining room",
    width: 1920,
    height: 1080,
  },
} as const;

export type ImageSlot = keyof typeof images;