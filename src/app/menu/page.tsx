"use client";

import { useState } from "react";
import { menuItems } from "@/lib/data";
import { images } from "@/config/images";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "starters" | "meats" | "sides">("all");

  const categories = [
    { id: "all" as const, label: "Full Menu" },
    { id: "meats" as const, label: "From the Pit" },
    { id: "sides" as const, label: "Sides" },
    { id: "starters" as const, label: "Starters" },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Interior */}
      <div className="relative h-[400px] flex items-center justify-center bg-secondary text-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={images["service-1"].src}
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="font-heading text-5xl text-accent mb-4">The Menu</h1>
          <p className="text-white text-xl max-w-2xl mx-auto">
            Everything is smoked low and slow over post-oak wood.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-white"
                  : "bg-white text-secondary border border-secondary hover:border-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Reveal key={item.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-card group hover:shadow-hover transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={images[item.image].src}
                    alt={images[item.image].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isFeatured && (
                    <div className="absolute top-2 left-2 bg-accent text-secondary text-xs font-bold px-2 py-1 uppercase">
                      Best Seller
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl text-secondary">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">${item.price}</span>
                  </div>
                  <p className="text-text-muted text-sm mb-4">{item.description}</p>
                  <Button variant="secondary" className="w-full text-sm">
                    Add to Order
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}