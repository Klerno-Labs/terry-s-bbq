import type { Metadata } from "next";
import { Rye, Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const rye = Rye({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-rye",
  display: "swap",
});

const roboto = Roboto({ 
  weight: ["300", "400", "500", "700"], 
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rye.variable} ${roboto.variable} ${marker.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": siteConfig.name,
              "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Bourbon Street",
                "addressLocality": "Louisville",
                "addressRegion": "KY",
                "postalCode": "40208",
                "addressCountry": "US"
              },
              "url": siteConfig.url,
              "telephone": siteConfig.contact.phone,
              "servesCuisine": "BBQ, American, Southern",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "11:00",
                  "closes": "21:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}