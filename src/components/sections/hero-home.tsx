"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroHome() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image (Simulating Video) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2000&auto=format&fit=crop"
          alt="Smoked BBQ Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-radial" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <Reveal>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-tight mb-4 text-accent drop-shadow-lg">
            Low & Slow
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto text-gray-100">
            Authentic Kentucky slow-smoked meats served in our famous mustard BBQ sauce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" asChild>
              <a href="/menu">Order Pickup</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/menu">View Full Menu</a>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 cursor-pointer" onClick={scrollToNext}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
}