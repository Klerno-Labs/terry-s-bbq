"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Atmosphere", href: "#about" },
    { name: "Catering", href: "#catering" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-secondary/95 backdrop-blur-sm shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-heading text-2xl md:text-3xl text-white tracking-wider hover:text-primary transition-colors">
            TERRY<span className="text-primary">'</span>S
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-subheading text-gray-300 hover:text-primary uppercase tracking-widest text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" onClick={() => document.getElementById('catering')?.scrollIntoView({ behavior: 'smooth' })}>
              Order Catering
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu&quot;
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-secondary/95 backdrop-blur-md flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-primary&quot;
              aria-label="Close menu"
            >
              <X className="w-10 h-10" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 items-center text-center h-full justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl text-white hover:text-primary transition-colors&quot;
              >
                {link.name}
              </a>
            ))}
             <div className="mt-8">
               <Button size="lg" onClick={() => {
                 document.getElementById('catering')?.scrollIntoView({ behavior: 'smooth' });
                 setMobileMenuOpen(false);
               }}>
                 Order Catering
               </Button>
             </div>
          </nav>
        </div>
      )}
    </>
  );
}