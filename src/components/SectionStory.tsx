"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import images from "@/config/images";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function SectionStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="story" ref={ref} className="min-h-[700px] flex flex-col md:flex-row relative bg-bg overflow-hidden">
      {/* Text Column */}
      <div className="w-full md:w-[40%] p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-bg z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-accent text-primary text-2xl mb-4 block">The Pitmaster</span>
          <h2 className="font-heading text-4xl md:text-5xl text-textMain mb-6">
            Born in the Smoke,<br/>Raised in Kentucky
          </h2>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="font-body text-textMain text-lg leading-relaxed mb-6">
            My name is Terry Foster. I didn&apos;t learn to BBQ in a culinary school—I learned it at my grandfather&apos;s knee in a dirt-floor shack outside Louisville.
          </p>
          <p className="font-body text-textMain text-lg leading-relaxed mb-8">
            We use a mustard-based sauce because that&apos;s how they did it in the 1800s. We use hickory wood because it gives the best bark. And we never, ever rush the meat. <strong className="text-secondary">If it&apos;s not ready, we don&apos;t serve it.</strong>
          </p>
          <div className="flex items-center space-x-4">
            <Quote className="text-accent w-8 h-8" />
            <span className="font-heading text-xl text-secondary italic">Good food takes time. Great food takes patience.</span>
          </div>
        </motion.div>
      </div>

      {/* Image Column with Western Split Edge */}
      <div className="w-full md:w-[60%] relative h-[400px] md:h-auto ragged-edge">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={images["about"].src}
            alt={images["about"].alt}
            fill
            sizes="60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        </motion.div>
      </div>
    </section>
  );
}