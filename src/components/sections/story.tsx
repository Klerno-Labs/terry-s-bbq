"use client";

import { images } from "@/config/images";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-neutral-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <Reveal>
              <span className="text-primary font-marker text-lg uppercase tracking-wider">The Pitmaster</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-secondary">
                Born in the Bluegrass, Smoked to Perfection
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Terry Foster didn&apos;t just open a restaurant; he continued a legacy. Growing up in the heart of Kentucky, he learned that good barbecue isn&apos;t rushed. It&apos;s patience, respect for the meat, and the right kind of fire.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We start with premium locally sourced meats, apply our secret dry rub, and smoke them low and slow for up to 16 hours. But what truly sets us apart is our signature Gold Dust Mustard Sauce—a tangy, slightly sweet tribute to our Kentucky roots that pairs perfectly with everything.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="pt-4">
                <img 
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f354/32.png" 
                  alt="Signature" 
                  className="h-12 opacity-70 invert sepia hue-rotate-180" 
                  style={{filter: "invert(20%) sepia(50%) hue-rotate(320deg)"}}
                />
                <p className="font-serif italic text-secondary text-xl mt-2">Terry Foster</p>
              </div>
            </Reveal>
          </div>

          {/* Image Column with Parallax */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px]">
            <Reveal delay={0.3}>
              <div className="relative w-full h-full rounded-tl-[100px] rounded-br-xl overflow-hidden shadow-2xl border-4 border-secondary/10 group">
                <motion.div style={{ y }} className="relative w-full h-full">
                  <Image
                    src={images["about"].src}
                    alt={images["about"].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </motion.div>
              </div>
            </Reveal>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}