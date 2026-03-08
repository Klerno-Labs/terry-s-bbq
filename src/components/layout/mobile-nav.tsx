"use client";

import { X, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-3/4 max-w-sm bg-neutral-bg z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl flex flex-col wood-texture",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 bg-secondary text-white border-b-4 border-primary">
          <span className="font-serif text-xl tracking-wide">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
          {[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Our Menu" },
            { href: "/catering", label: "Catering & Events" },
            { href: "/contact", label: "Location & Hours" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-2xl font-serif text-secondary hover:text-primary transition-colors border-b border-secondary/10 pb-2"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 bg-secondary text-gray-200 space-y-4">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
            <span className="leading-snug">{siteConfig.contact.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
            <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-5 h-5 text-accent flex-shrink-0" />
            <span>Open daily at 11am</span>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}