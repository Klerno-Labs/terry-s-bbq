import type { Metadata } from "next";
import { Rye, Oswald, Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const rye = Rye({ weight: "400", subsets: ["latin"], variable: "--font-rye" });
const oswald = Oswald({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terrysbbq.com"),
  title: {
    default: "Terry's BBQ | Low & Slow Southern BBQ",
    template: "%s | Terry's BBQ",
  },
  description:
    "Experience authentic Kentucky slow-smoked BBQ at Terry's. Famous for our mustard-based sauce, brisket, and ribs. Dine-in or order catering for your next event.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "bg-background text-text font-roboto antialiased",
          rye.variable,
          oswald.variable,
          roboto.variable,
          marker.variable
        )}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}