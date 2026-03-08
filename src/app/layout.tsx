import type { Metadata } from "next";
import { Rye, Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { rye, roboto, permanentMarker } from "@/lib/fonts";

const ryeFont = Rye({ weight: "400", subsets: ["latin"], variable: "--font-rye", display: "swap" });
const robotoFont = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-roboto", display: "swap" });
const markerFont = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-marker", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://terrysbbq.com"),
  title: {
    default: "Terry's BBQ | Low & Slow Kentucky Style BBQ",
    template: "%s | Terry's BBQ",
  },
  description: "Authentic Kentucky-style BBQ in Houston. Slow smoked brisket, ribs, and famous mustard sauce. Order pickup or catering for your next event.",
  openGraph: {
    title: "Terry's BBQ",
    description: "Authentic Kentucky-style BBQ in Houston. Low & slow.",
    url: "https://terrysbbq.com",
    siteName: "Terry's BBQ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1920&auto=format&fit=crop",
        width: 1920,
        height: 1080,
        alt: "Terry's BBQ Brisket",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ryeFont.variable} ${robotoFont.variable} ${markerFont.variable}`}>
      <body className="font-body bg-background text-text-main antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}