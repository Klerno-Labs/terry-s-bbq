"use client";

import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { images } from "@/config/images";

export function Reviews() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary mb-4">What Folks Are Saying</h2>
            <div className="flex justify-center items-center space-x-1 text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-text-muted">Rated 5.0 on Google</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <Reveal key={review.id} delay={index * 100}>
              <div className="bg-white p-8 rounded-lg shadow-card border border-gray-100 relative">
                <Quote className="absolute top-6 right-6 text-primary/10 w-10 h-10" />
                <div className="flex space-x-1 text-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-text-main italic mb-6 relative z-10">
                  &ldquo;{review.content}&rdquo;
                </p>
                <div className="flex items-center space-x-3 border-t pt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                     {/* Placeholder avatar if no image provided */}
                    <div className="w-full h-full bg-secondary flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-sm">{review.name}</div>
                    <div className="text-xs text-text-muted">{review.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}