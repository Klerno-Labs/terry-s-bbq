"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#story" },
    { name: "Catering", href: "/catering" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-darkSurface text-white py-2 shadow-lg border-secondary/30"
          : "bg-transparent text-white py-4 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-heading text-2xl tracking-wider text-accent hover:text-white transition-colors"
        >
          TERRY&apos;S BBQ
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-body font-medium hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link 
            href="#order" 
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 font-bold uppercase tracking-wide transition-colors rounded-sm shadow-md"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            aria-label="View cart"
            className="text-white hover:text-accent transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className="text-white hover:text-accent transition-colors"
          >
            {isMobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-secondary/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-8",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-heading text-3xl text-white hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="#order" 
          className="bg-primary text-white px-8 py-3 font-heading text-xl rounded-sm"
        >
          Order Pickup
        </Link>
      </div>
    </header>
  );
}