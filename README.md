# Terry's BBQ Website

A custom, production-ready website built for Terry's BBQ, a Kentucky-based smokehouse specializing in slow-smoked meats and mustard BBQ sauce.

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Rye, Oswald, Roboto, Permanent Marker)
- **Icons:** Lucide React
- **Deployment:** Vercel (Optimized)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd terrys-bbq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```text
terrys-bbq/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes (Contact form)
│   │   ├── layout.tsx    # Root layout & metadata
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── navigation/   # Header, Footer
│   │   ├── sections/     # Hero, Menu, Catering, etc.
│   │   └── ui/           # Reusable UI elements (Buttons)
│   ├── config/           # Configuration files
│   │   └── images.ts     # 🖼️ CENTRAL IMAGE MANAGER
│   └── lib/              # Utilities (cn helper)
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json
```

## 🖼️ Image Customization

All images are controlled from a single file: `src/config/images.ts`. You do not need to hunt through components to change photos.

### How to Change Images

1. Open `src/config/images.ts`.
2. Find the slot you want to change (e.g., `"hero"`, `"menu-brisket"`).
3. Replace the `src` URL with your new image link.
4. Update the `alt` text for accessibility.
5. Save the file.

**Important:** Ensure your images are optimized for the web. We recommend using landscape orientation (approx 1200x800) for heroes and square/cropped for menu items.

### Image Slots Reference

| Slot Name | Description |
|-----------|-------------|
| `hero` | Main banner background. |
| `hero-alt` | Alternative background for inner pages. |
| `about` | Photo of Terry or the pit. |
| `atmosphere` | Interior tavern shot. |
| `menu-brisket` | Main menu image for Brisket. |
| `menu-ribs` | Main menu image for Ribs. |
| `menu-pork` | Main menu image for Pulled Pork. |
| `catering` | Catering spread image. |
| `testimonial-bg` | Background for reviews section. |

## 🎨 Brand Customization

### Changing Colors
Edit `tailwind.config.ts`. Look for the `theme.extend.colors` section:
- `primary`: The Burnt Orange (Buttons, accents).
- `secondary`: The Leather Brown (Backgrounds, header).
- `background`: The Charcoal Black.
- `accent`: The Golden Amber.

### Changing Fonts
Fonts are loaded in `src/app/layout.tsx`.
1. Change the import to a different Google Font.
2. Update the `variable` name.
3. Map the variable in `tailwind.config.ts` under `fontFamily`.

## 📧 Contact Form Handling

The contact form is currently set up to log to the console. To make it functional:

1. Create an account with an email provider (Resend, SendGrid, etc.).
2. Add your API key to `.env.local`.
3. Update `src/app/api/contact/route.ts` to send the email using your provider's SDK.

## 📦 Deployment

This project is optimized for Vercel.

1. Push your code to GitHub/GitLab/Bitbucket.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New Project".
4. Import your repository.
5. Vercel will detect Next.js. Click **Deploy**.

For full deployment details, see `DEPLOYMENT_GUIDE.md`.