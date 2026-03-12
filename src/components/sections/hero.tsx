"use client";

import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={(images?.hero?.src ?? "/placeholder.jpg")}
          alt={(images?.hero?.alt ?? "")}
          fill
          priority
          className="object-cover animate-slow-zoom"
          sizes="100vw"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-up">
        <h2 className="font-subheading text-accent uppercase tracking-[0.2em] mb-4 text-lg md:text-xl">
          Louisville, KY
        </h2>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg">
          Low, Slow, & Southern
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          We slow smoke everything from chicken to pork. Served with our signature mustard BBQ sauce in an old western tavern atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={() => document.getElementById('catering')?.scrollIntoView({ behavior: 'smooth' })}>
            Request Catering
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-8 h-8" />
      </div>
    </section>
  );
}