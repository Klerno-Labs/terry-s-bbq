"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_INFO } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "Our Story" },
    { href: "/catering", label: "Catering" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background-dark/95 backdrop-blur-sm py-2 shadow-header border-b border-white/10"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl md:text-3xl text-accent tracking-wider hover:text-white transition-colors"
          >
            Terry&apos;s BBQ
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-white hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="relative text-white hover:text-accent transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            
            {/* Order Button Desktop */}
            <Link
              href="/menu"
              className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2 font-heading uppercase tracking-wide transition-colors rounded-sm border-b-2 border-primary-dark"
            >
              Order Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Content */}
        <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-secondary text-white p-8 flex flex-col shadow-2xl">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-2xl text-accent hover:text-white transition-colors border-b border-white/10 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <Link
              href="/menu"
              className="block w-full bg-primary text-center text-white py-4 font-heading uppercase tracking-wide rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Pickup
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="block w-full border-2 border-accent text-center text-accent py-3 font-heading uppercase tracking-wide rounded-sm hover:bg-accent hover:text-secondary transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}