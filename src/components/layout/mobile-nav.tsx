"use client";

import { X, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  close: () => void;
}

export function MobileNav({ close }: MobileNavProps) {
  return (
    <div className="fixed inset-0 z-[60] bg-secondary/98 flex flex-col justify-center items-center space-y-8 md:hidden">
      <button
        onClick={close}
        className="absolute top-6 right-6 p-2 text-accent hover:text-white"
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      <Link href="/" onClick={close} className="font-heading text-4xl text-accent">
        Terry&apos;s BBQ
      </Link>

      <nav className="flex flex-col items-center space-y-6 text-xl font-body font-medium text-center">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={close}
            className="hover:text-accent transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col items-center space-y-4 pt-8">
        <Button variant="primary" size="lg" asChild>
          <Link href="/menu">Order Pickup</Link>
        </Button>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Phone size={16} />
          <span>(512) 555-0198</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <MapPin size={16} />
          <span>Louisville, KY</span>
        </div>
      </div>
    </div>
  );
}