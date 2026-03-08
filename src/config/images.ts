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
  // Homepage hero banner — the first image visitors see — BBQ Smokehouse
  "hero": {
    src: "https://images.unsplash.com/photo-1558030006-4506719b1765?q=80&w=2070&auto=format&fit=crop",
    alt: "Slow smoked brisket in a rustic smokehouse",
    width: 2070,
    height: 1380,
  },

  // Alternative hero image (used on inner pages or as fallback) — BBQ Grill
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop",
    alt: "Grilling meats over open flame",
    width: 2000,
    height: 1333,
  },

  // About page or About section on homepage — Pitmaster Terry
  "about": {
    src: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop",
    alt: "Pitmaster checking the smoker",
    width: 1974,
    height: 2961,
  },

  // First service card image — Catering Platter
  "service-1": {
    src: "https://images.unsplash.com/photo-1544025162-d76690b67f11?q=80&w=2069&auto=format&fit=crop",
    alt: "Delicious BBQ catering platter",
    width: 2069,
    height: 1380,
  },

  // Second service card image — Outdoor Event
  "service-2": {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    alt: "Outdoor BBQ event setup",
    width: 2070,
    height: 1380,
  },

  // Third service card image — Private Party
  "service-3": {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop",
    alt: "Private party banquet table",
    width: 2070,
    height: 1380,
  },

  // Gallery image 1 — Ribs
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop",
    alt: "Pile of sticky BBQ ribs",
    width: 2070,
    height: 1380,
  },

  // Gallery image 2 — Brisket
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2070&auto=format&fit=crop",
    alt: "Sliced beef brisket",
    width: 2070,
    height: 1380,
  },

  // Team member photo — Terry
  "team-1": {
    src: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop",
    alt: "Terry Foster Pitmaster",
    width: 1974,
    height: 2961,
  },

  // Gallery image 3 — Pulled Pork
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Pulled pork sandwich",
    width: 2070,
    height: 1380,
  },

  // Call-to-action section background — Fire/Embers
  "cta": {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2069&auto=format&fit=crop",
    alt: "Glowing embers and fire",
    width: 2069,
    height: 1380,
  },

  // Testimonials section background or decoration — Interior
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
    alt: "Rustic interior of Terry's BBQ",
    width: 2070,
    height: 1380,
  },

  // Menu Item: Smoked Chicken
  "menu-chicken": {
    src: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2070&auto=format&fit=crop",
    alt: "Half smoked chicken with sauce",
    width: 2070,
    height: 1380,
  },

  // Menu Item: Pork Shoulder
  "menu-pork": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop",
    alt: "Pulled pork shoulder",
    width: 2000,
    height: 1333,
  }
} as const;

export type ImageSlot = keyof typeof images;