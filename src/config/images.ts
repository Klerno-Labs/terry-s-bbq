// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "menu-brisket")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1920&auto=format&fit=crop",
    alt: "Slow smoked brisket glistening with BBQ sauce",
    width: 1920,
    height: 1080,
  },

  // Alternative hero image (used on inner pages)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1920&auto=format&fit=crop",
    alt: "Vintage rustic BBQ smoker in the fog",
    width: 1920,
    height: 1080,
  },

  // About page or About section on homepage — Terry working the pit
  "about": {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    alt: "Terry checking the ribs in the smoker",
    width: 1200,
    height: 800,
  },

  // Atmosphere/Tavern Interior
  "atmosphere": {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    alt: "Interior of the western tavern with warm lighting and wood tables",
    width: 1600,
    height: 900,
  },

  // Menu Item: Brisket
  "menu-brisket": {
    src: "https://images.unsplash.com/photo-1544025162-d76690b67f11?q=80&w=800&auto=format&fit=crop",
    alt: "Sliced Texas style brisket with smoke ring",
    width: 800,
    height: 600,
  },

  // Menu Item: Ribs
  "menu-ribs": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop",
    alt: "Full rack of pork ribs dry rubbed",
    width: 800,
    height: 600,
  },

  // Menu Item: Pulled Pork
  "menu-pork": {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop",
    alt: "Pulled pork sandwich with coleslaw",
    width: 800,
    height: 600,
  },

  // Catering spread
  "catering": {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    alt: "Full catering spread with meats and sides",
    width: 1200,
    height: 800,
  },

  // Testimonial background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1600&auto=format&fit=crop",
    alt: "Blurred BBQ pit background",
    width: 1600,
    height: 900,
  },
} as const;

export type ImageSlot = keyof typeof images;
export default images;
