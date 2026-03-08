"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
          isScrolled || pathname !== "/"
            ? "bg-dark-surface/95 backdrop-blur-md shadow-header text-white py-2"
            : "bg-transparent text-white py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-heading text-2xl sm:text-3xl tracking-wider text-accent hover:text-white transition-colors">
              Terry&apos;s BBQ
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-body font-medium">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:text-accent transition-colors",
                    pathname === item.href && "text-accent"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link href="tel:5125550198" className="hidden sm:flex items-center text-sm font-medium hover:text-accent">
                <Phone className="w-4 h-4 mr-2" />
                (512) 555-0198
              </Link>
              <Link href="/menu">
                 <Button variant="primary" size="sm" className="hidden md:inline-flex">
                   Order Now
                 </Button>
              </Link>
              
              {/* Mobile Toggle */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {mobileOpen && <MobileNav close={() => setMobileOpen(false)} />}
    </>
  );
}