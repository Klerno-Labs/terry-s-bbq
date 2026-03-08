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
  // Homepage hero banner — Smoking meat pit with fire
  "hero": {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&h=800&fit=crop",
    alt: "Smoked brisket and ribs in a pit smoker with glowing embers",
    width: 1200,
    height: 800,
  },

  // About / Story section — Pitmaster Terry
  "about": {
    src: "https://images.unsplash.com/photo-1553247407-23251ce81f59?q=80&w=1200&h=800&fit=crop",
    alt: "Pitmaster checking on the slow smoked meat",
    width: 1200,
    height: 800,
  },

  // Menu Item 1 — Brisket
  "menu-1": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&h=600&fit=crop",
    alt: "Slices of juicy Texas style brisket",
    width: 800,
    height: 600,
  },

  // Menu Item 2 — Ribs
  "menu-2": {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&h=600&fit=crop",
    alt: "Half rack of barbecue ribs dry rubbed",
    width: 800,
    height: 600,
  },

  // Menu Item 3 — Pulled Pork
  "menu-3": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&h=600&fit=crop",
    alt: "Pulled pork sandwich with coleslaw",
    width: 800,
    height: 600,
  },

  // Catering Hero — Banquet table
  "catering": {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&h=800&fit=crop",
    alt: "Rustic southern banquet table setup",
    width: 1200,
    height: 800,
  },

  // Testimonials Background — BBQ restaurant interior
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&h=800&fit=crop",
    alt: "Interior of a rustic BBQ restaurant",
    width: 1200,
    height: 800,
  },

  // Contact Page — Restaurant exterior
  "contact": {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&h=800&fit=crop",
    alt: "Exterior of Terry's BBQ wooden building",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;