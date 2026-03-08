"use client";

import { menuItems } from "@/lib/data";
import { images } from "@/config/images";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FeaturedMenu() {
  return (
    <section id="featured-menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-marker text-lg uppercase tracking-wider">From the Pit</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-secondary mt-2 mb-4">House Favorites</h2>
            <p className="text-gray-600 text-lg">Our most popular cuts, smoked daily until they melt in your mouth.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1} width="100%">
              <div className="group bg-white border border-gray-200 hover:border-primary/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={images[item.image as keyof typeof images]?.src || images["menu-1"].src}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-4 right-4 bg-accent text-secondary font-marker text-xs px-2 py-1 rounded transform rotate-2 shadow-sm">
                      {item.tags[0]}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-secondary">{item.name}</h3>
                    <span className="text-xl font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <Button variant="secondary" size="sm" className="w-full" asChild>
                    <Link href="/menu">View Full Menu</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}