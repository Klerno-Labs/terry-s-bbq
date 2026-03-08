"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUp, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-accent">Terry&apos;s BBQ</h3>
            <p className="text-sm leading-relaxed">
              Authentic Kentucky slow-smoked BBQ. We slow smoke everything from chicken to pork, served with our signature mustard BBQ sauce.
            </p>
            <div className="flex space-x-4">
              <a 
                href={siteConfig.links.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={siteConfig.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center hover:text-accent transition-colors text-sm">
                    <ChevronRight size={14} className="mr-1" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Wed - Thu:</span>
                <span>11am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>11am - 9pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>12pm - 6pm</span>
              </li>
              <li className="flex justify-between text-primary font-medium">
                <span>Mon - Tue:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">Join the Pit Crew</h4>
            <p className="text-sm mb-4">Get updates on specials and events.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-accent"
                aria-label="Email address for newsletter"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors text-sm uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}