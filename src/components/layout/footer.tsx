import Link from "next/link";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-background text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <h3 className="font-rye text-3xl text-primary">Terry&apos;s BBQ</h3>
          <p className="font-roboto text-muted leading-relaxed">
            Low, slow, and strictly Southern. We&apos;ve been serving the finest
            mustard-based BBQ in Kentucky since 1985. Step into the tavern and
            taste tradition.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="text-muted hover:text-primary transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="text-muted hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              className="text-muted hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-oswald text-xl uppercase tracking-wider mb-6 text-white">
            Quick Links
          </h4>
          <ul className="space-y-4 font-roboto text-muted">
            <li>
              <Link href="/menu" className="hover:text-primary transition-colors">
                Our Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Catering & Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-oswald text-xl uppercase tracking-wider mb-6 text-white">
            Visit Us
          </h4>
          <ul className="space-y-6 font-roboto text-muted">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>
                4521 Oldham Pkwy
                <br />
                Louisville, KY 40222
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:5025550198" className="hover:text-primary transition-colors">
                (502) 555-0198
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p>Wed - Thu: 11am - 9pm</p>
                <p>Fri - Sat: 11am - 10pm</p>
                <p>Sun: 11am - 9pm</p>
                <p className="text-primary">Mon - Tue: Closed</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter / Map Placeholder */}
        <div>
          <h4 className="font-oswald text-xl uppercase tracking-wider mb-6 text-white">
            Find Us
          </h4>
          <div className="bg-surface h-48 w-full rounded-lg overflow-hidden relative group">
            {/* Static Map Image Placeholder */}
             <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop" 
              alt="Map location of Terry's BBQ in Louisville"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <Link 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-primary text-white px-4 py-2 rounded font-oswald uppercase text-sm hover:bg-primary-dark transition-colors"
               >
                 Open in Maps
               </Link>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-roboto text-muted">
        <p>&copy; {new Date().getFullYear()} Terry&apos;s BBQ. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}