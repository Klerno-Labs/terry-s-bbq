# Changelog

All notable changes to the Terry's BBQ website will be documented in this file.

## [1.0.0] - 2023-10-27

### Added
- **Initial Release**
- **Homepage** with immersive Hero section featuring "Low, Slow, & Southern" branding.
- **Navigation** with sticky header and mobile-responsive hamburger menu.
- **Featured Menu ("The Meat Locker")** section showcasing Brisket, Ribs, and Pulled Pork.
- **About Section** ("Atmosphere") with parallax background and history.
- **Catering Form** with step-by-step validation (Date, Guests, Contact Info).
- **Testimonials** section with "Polaroid" style card layout.
- **Footer** including address, hours, map link placeholder, and social icons.
- **Image Configuration System** (`src/config/images.ts`) for easy photo management.
- **SEO Optimization**: Metadata, OpenGraph tags, and LocalBusiness JSON-LD schema.
- **Responsive Design**: Fully mobile-optimized (320px to 2560px).
- **Accessibility**: Semantic HTML, ARIA labels, focus states, and keyboard navigation.

### Technical Details
- Built with Next.js 14 App Router.
- Styled with Tailwind CSS using custom "Western Tavern" design tokens.
- Typography: Rye (Display), Oswald (Headings), Roboto (Body), Permanent Marker (Accents).
- No placeholder content—fully populated with realistic business copy.

### Known Limitations
- Contact form currently logs to console; email integration requires API keys.
- Maps are static links; Google Maps API key integration required for interactive maps.