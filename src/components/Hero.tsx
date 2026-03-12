"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { images } from "@/config/images";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={(images?.hero?.src ?? "/placeholder.jpg")}
          alt={(images?.hero?.alt ?? "")}
          priority={true}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <div className="inline-block bg-primary/20 border border-accent px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
          <span className="font-accent text-accent text-sm tracking-wider uppercase">
            Open Daily at 11am
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-lg leading-tight animate-fade-in-up">
          Low & Slow
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Authentic Kentucky-style smoked meats & house-made mustard sauce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="primary" size="lg" href="/menu">
            Order Pickup
          </Button>
          <Button variant="secondary" size="lg" href="/menu">
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10">
        <ChevronDown className="w-8 h-8 text-accent" aria-hidden="true" />
      </div>
    </section>
  );
}