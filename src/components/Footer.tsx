import Link from "next/link";
import { Facebook, Instagram, Youtube, ChevronUp, MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-heading text-3xl text-accent tracking-wider">
              Terry&apos;s BBQ
            </h3>
            <p className="font-body text-text-muted leading-relaxed">
              Low & slow since 1998. We serve honest, wood-smoked BBQ with a side of Southern hospitality.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 font-body text-text-muted">
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-accent transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4 border-b border-white/10 pb-2">
              Hours
            </h4>
            <div className="font-body text-text-muted space-y-2">
              <p>{BUSINESS_INFO.hours.weekdays}</p>
              <p>{BUSINESS_INFO.hours.sunday}</p>
              <p className="text-primary font-accent text-sm mt-2">We sell out early!</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4 border-b border-white/10 pb-2">
              Find Us
            </h4>
            <ul className="space-y-4 font-body text-text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-text-muted">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-sm text-text-muted">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1 hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              Top <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}