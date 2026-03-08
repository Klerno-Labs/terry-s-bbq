"use client";

import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import Image from "next/image";
import { Signature } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="relative bg-background py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Text Column */}
          <div className="w-full md:w-2/5 pr-0 md:pr-12 z-10 relative">
            <Reveal>
              <span className="font-accent text-primary text-lg mb-2 block">The Pitmaster</span>
              <h2 className="font-heading text-4xl text-secondary mb-6 leading-tight">
                Born in the Bluegrass, Smoked to Perfection
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed font-body text-lg">
                <p>
                  I started Terry&apos;s BBQ with a simple pit and a whole lot of patience. Growing up in Kentucky, I learned that good things take time. You can&apos;t rush perfection, and you sure can&apos;t rush true BBQ.
                </p>
                <p>
                  We use post-oak wood and a mustard-based vinegar sauce that&apos;s been in my family for three generations. Whether it&apos;s our 14-hour brisket or our fall-off-the-bone ribs, everything that comes out of our kitchen is made the hard way—the right way.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-secondary">
                 <div className="border-b-2 border-accent w-16 mb-2"></div>
                 <div className="font-heading text-xl italic">Terry Foster</div>
              </div>
            </Reveal>
          </div>

          {/* Image Column - Ragged Edge */}
          <div className="w-full md:w-3/5 h-[500px] md:h-[600px] relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-gray-200 transform md:translate-x-4 md:translate-y-4 z-0" />
            <div className="relative h-full w-full z-10 shadow-hover">
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                fill
                className="object-cover"
              />
              {/* Ragged Edge Effect via CSS Clip Path */}
              <div className="absolute inset-0 bg-background z-20 clip-path-polygon opacity-0 md:opacity-100 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}