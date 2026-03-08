# Deployment Guide

This guide walks you through deploying the Terry's BBQ website to Vercel.

## Prerequisites

1. A [Vercel Account](https://vercel.com/signup).
2. Your code pushed to a Git provider (GitHub, GitLab, or Bitbucket).

## Step 1: Prepare Environment Variables

While the site works out of the box, you may want to add environment variables for the contact form later. For now, the standard build does not require any, but it's good practice.

Create a `.env` file locally (or add them in the Vercel dashboard later):
```bash
# Add your email provider API key here in the future
# NEXT_PUBLIC_EMAIL_SERVICE_API_KEY=your_key_here
```

## Step 2: Connect to Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** -> **"Project"**.
3. Vercel will ask to import your Git repository. Find the `terrys-bbq` repo and click **Import**.

## Step 3: Configure Project

Vercel will auto-detect that this is a Next.js project.

- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)

Click **Advanced** to verify settings if needed, but defaults are usually perfect for Next.js.

## Step 4: Deploy

1. Click the **Deploy** button.
2. Vercel will take about 1-2 minutes to build the site.
3. Once finished, you will see a "Congratulations" message with a live URL (e.g., `https://terrys-bbq-abc123.vercel.app`).

## Step 5: Domain Setup

1. In the Vercel project dashboard, go to the **Settings** tab.
2. Click **Domains**.
3. Enter your domain (e.g., `terrysbbq.com`).
4. Follow the instructions provided by Vercel to update your DNS records (usually adding an A record or CNAME).

## Post-Deploy Checklist

- [ ] **SSL**: Vercel automatically provisions SSL certificates. Check for the lock icon in the browser.
- [ ] **Images**: Verify all photos load correctly.
- [ ] **Forms**: Test the catering form submission (check console logs initially).
- [ ] **Mobile**: Open the site on a phone to test the mobile menu and sticky buttons.
- [ ] **Analytics**: Set up Google Analytics if required (add ID to `src/app/layout.tsx`).