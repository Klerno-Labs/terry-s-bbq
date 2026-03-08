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
  // Homepage hero banner — Low & Slow BBQ Action
  hero: {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop",
    alt: "Smoked brisket being sliced with a beautiful smoke ring",
    width: 2000,
    height: 1333,
  },

  // Alternative hero or background
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop",
    alt: "Grilling ribs over open flame with smoke",
    width: 2000,
    height: 1333,
  },

  // About Section — Terry or the pit
  about: {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000&auto=format&fit=crop",
    alt: "Vintage smoker pit in action at Terry's BBQ",
    width: 2000,
    height: 1500,
  },

  // Menu Item: Brisket
  "menu-brisket": {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
    alt: "Texas style smoked brisket platter",
    width: 1000,
    height: 1000,
  },

  // Menu Item: Ribs
  "menu-ribs": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000&auto=format&fit=crop",
    alt: "Saint Louis style pork ribs dry rubbed",
    width: 1000,
    height: 1000,
  },

  // Menu Item: Pulled Pork
  "menu-pork": {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1000&auto=format&fit=crop",
    alt: "Pulled pork piled high with mustard coleslaw",
    width: 1000,
    height: 1000,
  },

  // Atmosphere / Interior
  interior: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
    alt: "Interior of a rustic western tavern restaurant",
    width: 2000,
    height: 1333,
  },

  // Team / Pitmaster
  team: {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
    alt: "Terry Foster checking the smoker",
    width: 1000,
    height: 1000,
  },

  // Catering Spread
  catering: {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
    alt: "Full catering spread with meats and sides",
    width: 2000,
    height: 1333,
  },
} as const;

export type ImageSlot = keyof typeof images;