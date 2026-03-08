# Terry's BBQ Website Handoff

Welcome to your new website! We've built a custom, "Down Home Southern" digital experience for Terry's BBQ. This guide explains how to manage and update the site.

## What Was Built

1.  **Homepage**: A stunning, smoke-filled introduction to your restaurant with easy access to your menu and catering info.
2.  **The Meat Locker (Menu)**: A showcase of your top meats (Brisket, Ribs, Pulled Pork) with descriptions and pricing.
3.  **Atmosphere Section**: Tells the story of your history and the "Old Western Tavern" vibe.
4.  **Catering System**: A professional inquiry form that sends customer requests directly to you.
5.  **Responsive Design**: Looks amazing on phones, tablets, and desktop computers.

## 🔧 How to Change Images

We made this incredibly easy. You don't need to be a coder to swap photos. All images are controlled in **ONE FILE**.

1.  Go to your project files.
2.  Open the folder `src` and then `config`.
3.  Open the file named `images.ts`.
4.  You will see a list of slots. For example:
    ```typescript
    "hero": {
      src: "https://images.unsplash.com/photo-...",
      alt: "Slow smoked brisket...",
      ...
    }
    ```
5.  **To swap an image:**
    *   Replace the URL inside the `src: "..."` quotes with a link to your new photo.
    *   Update the `alt: "..."` text to describe the new photo (this helps Google).
6.  Save the file. The website updates automatically.

**Where do I get image links?**
You can upload photos to a service like Cloudinary, or use a direct link from a hosted file. Ideally, your photos should be high quality (at least 1200 pixels wide).

## 🎨 Changing Colors or Fonts

If you want to tweak the branding (e.g., make the orange a bit darker), this requires a developer to edit the `tailwind.config.ts` file.

## 📝 Updating Text

To change the text on the pages (like phone numbers, addresses, or descriptions):

1.  **Homepage Text**: Go to `src/app/page.tsx` (but most text is inside components).
2.  **Menu Items**: Open `src/components/sections/meat-locker.tsx`. You will see the names and prices listed clearly there.
3.  **Footer/Hours**: Open `src/components/navigation/footer.tsx`.

## 📧 Making the Contact Form Work

Right now, the contact form saves requests internally. To receive emails:

1.  You (or your developer) need to set up an email service (like Resend or SendGrid).
2.  Get an API Key from that service.
3.  Update the file `src/app/api/contact/route.ts` to use that API key.

## 📱 Hosting & Maintenance

The site is currently hosted (or ready to host) on Vercel.
*   **Uptime**: It is very fast and reliable.
*   **Backups**: Since the code is stored in Git, you always have a backup of the site's design.
*   **Updates**: You can push new text or photos anytime, and the site updates in seconds.

## Need Help?

If you need structural changes (new pages, complex features) or get stuck with the configuration, please reach out to the Pegrio support team.

Enjoy the new site!