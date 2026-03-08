"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  isFeatured?: boolean;
  tag?: string;
}

export default function MenuCard({ name, description, price, imageSrc, imageAlt, isFeatured, tag }: MenuCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <motion.div
      className={cn(
        "bg-white border border-textMain/10 group overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 relative",
        isFeatured ? "border-b-4 border-b-primary" : "border-b-2 border-b-transparent"
      )}
      whileHover={{ y: -5 }}
    >
      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorited(!isFavorited)}
        aria-label="Add to favorites"
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
      >
        <Heart
          className={cn(
            "w-5 h-5 transition-all",
            isFavorited ? "fill-primary text-primary scale-110" : "text-gray-400"
          )}
        />
      </button>

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-accent text-darkSurface font-accent text-sm px-2 py-1 rotate-[-2deg] shadow-sm">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-2xl text-textMain group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="font-bold text-primary text-lg">{price}</span>
        </div>
        <p className="font-body text-gray-600 leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <button className="w-full border-2 border-primary text-primary font-bold uppercase py-2 text-sm tracking-wider hover:bg-primary hover:text-white transition-colors rounded-sm">
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}