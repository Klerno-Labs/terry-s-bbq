import type { Metadata } from "next";
import { Rye, Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terrysbbq.com"),
  title: {
    default: "Terry's BBQ | Authentic Low & Slow Kentucky BBQ",
    template: "%s | Terry's BBQ"
  },
  description: "Authentic Kentucky BBQ. Slow smoked chicken, pork, and brisket in our signature mustard sauce. Order pickup or catering for your next posse gathering.",
  openGraph: {
    title: "Terry's BBQ | Authentic Low & Slow Kentucky BBQ",
    description: "Slow smoked meats, mustard sauce, and good times. Order online now.",
    url: "https://terrysbbq.com",
    siteName: "Terry's BBQ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558030006-4506719b1765?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${rye.variable} ${roboto.variable} ${permanentMarker.variable} antialiased`}>
        <Navbar />
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
              "image": "https://images.unsplash.com/photo-1558030006-4506719b1765?q=80&w=2070&auto=format&fit=crop",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4521 Westheimer Rd",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77027",
                "addressCountry": "US"
              },
              "priceRange": "$$",
              "telephone": "(713) 555-0198",
              "servesCuisine": "BBQ, Kentucky Style, Southern",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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