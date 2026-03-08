"use client";

import { motion } from "framer-motion";
import SmokeCanvas from "./SmokeCanvas";
import images from "@/config/images";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-darkSurface">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images["hero"].src}
          alt={images["hero"].alt}
          priority
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </div>

      {/* Canvas Smoke Animation */}
      <SmokeCanvas />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-accent text-accent text-xl md:text-2xl block mb-4 drop-shadow-md">
            Est. 1998 • Louisville, KY
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] text-accent leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Low & Slow.<br/>That&apos;s the Only Way.
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We slow smoke everything from chicken to pork over hickory wood. 
          Dipped in our signature mustard BBQ sauce. It&apos;s not just dinner, it&apos;s a tradition.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#order"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold uppercase tracking-wider text-lg transition-colors rounded-sm shadow-lg w-full sm:w-auto"
          >
            Order Pickup
          </a>
          <a
            href="#menu"
            className="border-2 border-white text-white hover:bg-white hover:text-darkSurface px-8 py-4 font-bold uppercase tracking-wider text-lg transition-colors rounded-sm w-full sm:w-auto"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Daily Special Badge (Floating) */}
      <motion.div
        className="absolute top-32 right-4 md:right-10 z-30 bg-accent text-darkSurface p-4 rounded-sm shadow-xl transform rotate-3 hidden md:block border-2 border-white"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <p className="font-accent text-center font-bold text-xl leading-none">
          DAILY<br/>SPECIAL
        </p>
        <p className="font-body font-bold text-center mt-1 text-sm">
          Burnt Ends
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
}