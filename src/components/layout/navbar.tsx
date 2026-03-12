"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-neutral-dark-surface/95 backdrop-blur-md border-secondary shadow-md py-2"
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "text-2xl md:text-3xl font-serif tracking-wider transition-colors",
              scrolled ? "text-primary" : "text-white group-hover:text-accent"
            )}>
              TERRY&apos;S BBQ
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: &quot;/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/catering", label: "Catering" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors relative py-2",
                  pathname === link.href
                    ? "text-accent font-bold"
                    : scrolled
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-200 hover:text-accent"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/menu">
              <Button variant="primary" size="sm" className="hidden md:flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </Button>
            </Link>
            
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-white hover:text-accent transition-colors&quot;
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}