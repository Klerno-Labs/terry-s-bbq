"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import Image from "next/image";

export function CateringCTA() {
  const [formData, setFormData] = useState({
    guests: "",
    date: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation placeholder - normally API call
    console.log("Catering Lead:", formData);
    alert("Thanks for your interest! We'll contact you shortly.");
  };

  return (
    <section className="relative py-24 bg-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl text-accent mb-2">Feeding a Posse?</h2>
            <p className="text-gray-300 text-xl">Bring the smokehouse to your next event.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-accent/30 p-8 md:p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Guest Count"
                type="number"
                placeholder="e.g. 50"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
              />
              <Input
                label="Event Date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent [&::-webkit-calendar-picker-indicator]:invert"
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
              />
              <div className="md:col-span-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full uppercase tracking-wider font-bold"
                  type="submit"
                >
                  Get a Quick Quote
                </Button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}