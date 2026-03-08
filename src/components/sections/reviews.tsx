"use client";

import { reviews } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  return (
    <section className="py-24 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-marker text-lg uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-secondary mt-2">What Folks Are Saying</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <Reveal key={review.id} delay={idx * 0.1} width="100%">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-secondary/10 h-full flex flex-col relative">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">
                  &ldquo;{review.content}&rdquo;
                </p>
                <div>
                  <p className="font-serif font-bold text-secondary">{review.name}</p>
                  <p className="text-xs text-primary uppercase tracking-wider mt-1">{review.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
          
          {/* Google Review CTA Card */}
          <Reveal delay={0.4} width="100%">
            <div className="bg-secondary text-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center h-full">
              <Star className="w-12 h-12 fill-accent text-accent mb-4" />
              <h3 className="text-xl font-serif mb-2">Love the BBQ?</h3>
              <p className="text-sm text-gray-300 mb-6">Leave us a review on Google and help others find the best smoke in Kentucky.</p>
              <Button variant="primary" size="sm" className="bg-white text-secondary hover:bg-gray-100">
                Write a Review
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}