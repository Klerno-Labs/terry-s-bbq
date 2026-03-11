import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-white">TERRY<span className="text-primary">'</span>S</h3>
            <p className="font-body text-muted text-sm leading-relaxed">
              Low & Slow since 1985. We serve the finest slow-smoked BBQ in Kentucky with our signature mustard sauce.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-subheading text-white uppercase tracking-widest mb-4">Visit Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary w-5 h-5 mt-1 shrink-0" />
              <p className="font-body text-muted text-sm">
                4521 Westheimer Rd<br />
                Louisville, KY 40207
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary w-5 h-5 shrink-0" />
              <a href="tel:5025550198" className="font-body text-white hover:text-primary text-sm">
                (502) 555-0198
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-primary w-5 h-5 mt-1 shrink-0" />
              <div className="font-body text-muted text-sm">
                <p>Wed - Sat: 11:00 AM - 9:00 PM</p>
                <p>Sun: 11:00 AM - 3:00 PM</p>
                <p>Mon - Tue: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-subheading text-white uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="font-body text-muted hover:text-white text-sm transition-colors">Our Menu</a></li>
              <li><a href="#about" className="font-body text-muted hover:text-white text-sm transition-colors">Our Story</a></li>
              <li><a href="#catering" className="font-body text-muted hover:text-white text-sm transition-colors">Catering</a></li>
              <li><a href="#" className="font-body text-muted hover:text-white text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="space-y-4">
            <h4 className="font-subheading text-white uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="font-body text-muted text-xs mt-4">
              &copy; {new Date().getFullYear()} Terry&apos;s BBQ. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-muted hover:text-white">Privacy Policy</a>
              <a href="#" className="text-muted hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}