"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/config/images";

export function HeroHome() {
  const scrollToMenu = () => {
    document.getElementById("featured-menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images["hero"].src}
          alt={images["hero"].alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#F5F1E8]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Reveal>
          <span className="inline-block py-1 px-3 border border-accent/50 rounded-full text-accent text-sm font-marker tracking-widest mb-6 uppercase">
            Est. 1998 • Lexington, KY
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 text-shadow-lg leading-tight">
            Low & <span className="text-accent">Slow</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-gray-200">
            Authentic Kentucky barbecue smoked over post oak wood. Famous for our Gold Dust Mustard Sauce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToMenu}>
              View Full Menu
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/catering">Catering Info</Link>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <button onClick={scrollToMenu} aria-label="Scroll to content">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}