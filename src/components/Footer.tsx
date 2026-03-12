"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, ChevronUp } from "lucide-react";
import { images } from "@/config/images";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for newsletter signup would go here
    console.log(&quot;Newsletter signup:", email);
    setEmail("");
    alert("Thanks for subscribing!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-darkSurface text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-accent">Terry&apos;s BBQ</h3>
            <p className="font-body text-gray-400 text-sm leading-relaxed">
              Low & slow since 1998. Authentic Kentucky flavors smoked daily in the heart of Texas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 font-body text-gray-400">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#menu" className="hover:text-accent transition-colors">Our Menu</Link></li>
              <li><Link href="/#story" className="hover:text-accent transition-colors">The Pitmaster</Link></li>
              <li><Link href="/catering" className="hover:text-accent transition-colors">Catering</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-primary">Find Us</h4>
            <ul className="space-y-3 font-body text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+17135550198" className="hover:text-white transition-colors">(713) 555-0198</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@terrysbbq.com" className="hover:text-white transition-colors">info@terrysbbq.com</a>
              </li>
            </ul>
          </div>

          {/* Hours & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-lg mb-4 text-primary">Hours</h4>
              <ul className="space-y-1 font-body text-gray-400 text-sm">
                <li>Tue - Thu: 11am - 9pm</li>
                <li>Fri - Sat: 11am - 10pm</li>
                <li>Sun: 12pm - 8pm</li>
                <li className="text-primary font-bold">Mon: Closed</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg mb-2 text-primary">Join the Posse</h4>
              <form onSubmit={handleNewsletter} className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-darkSurface border border-gray-600 text-white px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors&quot;
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-hover text-white px-4 py-2 text-sm font-bold uppercase transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Terry&apos;s BBQ. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 md:mt-0 flex items-center space-x-1 hover:text-accent transition-colors"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}