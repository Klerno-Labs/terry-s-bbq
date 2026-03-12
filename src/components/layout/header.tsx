"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Catering", href: "/#catering" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-secondary/95 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-rye text-3xl text-white tracking-wider">
            Terry&apos;s <span className="text-primary">BBQ</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-oswald uppercase tracking-wide text-sm transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <Button size="sm">Catering</Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu&quot;
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-secondary/95 backdrop-blur-lg transform transition-transform duration-300 md:hidden flex flex-col pt-24 px-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu&quot;
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-rye text-3xl text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto mb-12 flex flex-col gap-4 items-center">
          <Link href="tel:5025550198" className="flex items-center gap-2 text-accent">
            <Phone className="w-5 h-5" />
            <span className="font-roboto text-lg">(502) 555-0198</span>
          </Link>
          <Button size="lg" className="w-full max-w-xs">
            Order Catering
          </Button>
        </div>
      </div>
    </>
  );
}