"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Thanks for subscribing!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-dark-surface text-gray-300 pt-16 pb-8 relative border-t-4 border-primary">
      {/* Decorative Plank Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBmaWxsPSIjM0UyNzIzIiBmaWxsLW9wYWNpdHk9IjAuNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIweiIvPjwvc3ZnPg==')] opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white tracking-wider">TERRY&apos;S BBQ</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Authentic Kentucky slow-smoked BBQ. We keep the tradition alive with every brisket, rib, and pulled pork sandwich.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-secondary/50 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-secondary/50 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-secondary/50 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-accent transition-colors">Full Menu</Link></li>
              <li><Link href="/catering" className="hover:text-accent transition-colors">Catering Info</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Our Location</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4 border-b border-gray-700 pb-2">Hours</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.hours.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span className="text-gray-400">{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4 border-b border-gray-700 pb-2">Join the Pit Crew</h4>
            <p className="text-xs text-gray-400 mb-4">Get exclusive offers and updates on our specials.</p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <Input 
                id="newsletter-email"
                type="email" 
                placeholder="Your email address" 
                darkMode
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10"
              />
              <Button type="submit" variant="primary" size="sm" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="p-2 bg-secondary/30 rounded-full hover:bg-primary transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}