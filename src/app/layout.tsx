import type { Metadata } from "next";
import { Rye, Oswald, Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { images } from "@/config/images";

const rye = Rye({ weight: "400", subsets: ["latin"], variable: "--font-rye", display: "swap" });
const oswald = Oswald({ weight: ["300", "500", "700"], subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto", display: "swap" });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-marker", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://terrysbbq.com"),
  title: {
    default: "Terry's BBQ | Low, Slow, & Southern",
    template: "%s | Terry's BBQ"
  },
  description: "Kentucky's finest slow-smoked BBQ. Based out of the bluegrass state, we serve everything in our signature mustard BBQ sauce. Visit our old western tavern today.",
  openGraph: {
    title: "Terry's BBQ | Low, Slow, & Southern",
    description: "Experience the best slow-smoked meats in Kentucky. Our old western tavern serves up authentic flavor with a mustard twist.",
    images: [
      {
        url: (images?.hero?.src ?? "/placeholder.jpg"),
        width: (images?.hero?.width ?? 400),
        height: (images?.hero?.height ?? 400),
        alt: (images?.hero?.alt ?? ""),
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rye.variable} ${oswald.variable} ${roboto.variable} ${marker.variable}`}>
      <body className="bg-background text-text font-body antialiased selection:bg-primary selection:text-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Terry's BBQ",
              "image": (images?.hero?.src ?? "/placeholder.jpg"),
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4521 Westheimer Rd",
                "addressLocality": "Louisville",
                "addressRegion": "KY",
                "postalCode": "40207",
                "addressCountry": "US"
              },
              "priceRange": "$$",
              "telephone": "(502) 555-0198",
              "servesCuisine": "Barbecue",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "11:00",
                  "closes": "21:00"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}