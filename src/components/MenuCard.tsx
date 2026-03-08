"use client";

import Image from "next/image";
import { images, type ImageSlot } from "@/config/images";
import { Heart } from "lucide-react";
import { useState } from "react";

interface MenuCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: ImageSlot;
    isFeatured?: boolean;
    tag?: string;
  };
}

export function MenuCard({ item }: MenuCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="group bg-surface border border-secondary/10 border-b-4 border-b-secondary/10 hover:border-b-primary hover:shadow-hover transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images[item.image].src}
          alt={images[item.image].alt}
          width={images[item.image].width}
          height={images[item.image].height}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        {item.tag && (
          <div className="absolute top-4 right-4 bg-accent text-secondary font-accent text-sm px-3 py-1 rotate-3 shadow-sm z-10">
            {item.tag}
          </div>
        )}

        {/* Heart Button */}
        <button
          className="absolute top-4 left-4 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
          onClick={() => setIsFavorited(!isFavorited)}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorited ? "fill-primary text-primary" : "text-gray-400"
            }`}
          />
        </button>

        {/* Smoke Overlay on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-2xl text-text-main group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="font-heading text-xl text-primary font-bold">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="font-body text-text-muted mb-6 flex-grow leading-relaxed">
          {item.description}
        </p>
        
        <button className="w-full bg-secondary/5 hover:bg-primary text-text-main hover:text-white py-3 font-heading uppercase tracking-wide text-sm rounded-sm transition-colors border border-secondary/10 hover:border-primary">
          Add to Plate
        </button>
      </div>
    </div>
  );
}