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
  "hero": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop",
    alt: "Smoked BBQ brisket and ribs on a wooden board",
    width: 2000,
    height: 1333,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop",
    alt: "Sliced Texas BBQ brisket",
    width: 2000,
    height: 1333,
  },

  // About page or About section on homepage — Terry (Pitmaster)
  "about": {
    src: "https://images.unsplash.com/photo-1593335308409-47345824d749?q=80&w=1200&auto=format&fit=crop",
    alt: "Pitmaster checking on the smoker",
    width: 1200,
    height: 800,
  },

  // First service card image — Ribs
  "service-1": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop",
    alt: "St. Louis style BBQ ribs",
    width: 1200,
    height: 800,
  },

  // Second service card image — Pulled Pork
  "service-2": {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
    alt: "Pulled pork sandwich",
    width: 1200,
    height: 800,
  },

  // Third service card image — Wings/Starters
  "service-3": {
    src: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop",
    alt: "Crispy smoked wings",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — Whole Chicken
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1608039829572-f5e87c1845b9?q=80&w=1200&auto=format&fit=crop",
    alt: "Smoked whole chicken",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — Sides (Mac)
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=1200&auto=format&fit=crop",
    alt: "Mac and cheese close up",
    width: 1200,
    height: 800,
  },

  // Team member photo — Terry Foster
  "team-1": {
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop",
    alt: "Terry Foster smiling in apron",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — Interior/Tavern
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior of rustic western tavern",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — Catering Spread
  "cta": {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop",
    alt: "Buffet catering spread",
    width: 2000,
    height: 1333,
  },

  // Testimonials section background or decoration — BBQ Pit
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1558024920-9b2d2da42e3a?q=80&w=2000&auto=format&fit=crop",
    alt: "BBQ smoker pit fire",
    width: 2000,
    height: 1333,
  },
} as const;

export type ImageSlot = keyof typeof images;