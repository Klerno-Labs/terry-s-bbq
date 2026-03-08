"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { useState } from "react";

export function CateringCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to an API
  };

  return (
    <section className="py-24 bg-neutral-dark-surface relative text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 wood-texture"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <span className="text-accent font-marker text-lg uppercase tracking-wider">Events & Parties</span>
              <h2 className="text-4xl lg:text-5xl font-serif mt-2 mb-6">Feeding a Posse?</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                From backyard reunions to corporate events, we bring the smokehouse to you. Our catering packages feature all your favorites—brisket, ribs, pulled pork, and all the fixings—ready to serve.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <span className="font-serif font-bold">1</span>
                  </div>
                  <p className="text-lg">Choose your package</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <span className="font-serif font-bold">2</span>
                  </div>
                  <p className="text-lg">We smoke it fresh</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <span className="font-serif font-bold">3</span>
                  </div>
                  <p className="text-lg">Delivered hot & ready to eat</p>
                </div>
              </div>
              <Button variant="primary" size="lg" asChild>
                <a href="/catering">View Catering Packages</a>
              </Button>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2 bg-secondary/50 p-8 rounded-lg border border-secondary backdrop-blur-sm">
            <Reveal delay={0.2}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">Request Received!</h3>
                  <p className="text-gray-300">We'll contact you shortly to discuss your event.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif mb-6">Get a Quick Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        label="Name" 
                        id="quote-name"
                        type="text" 
                        placeholder="John Doe" 
                        required 
                        darkMode 
                      />
                      <Input 
                        label="Phone" 
                        id="quote-phone"
                        type="tel" 
                        placeholder="(859) 555-0123" 
                        required 
                        darkMode 
                      />
                    </div>
                    <Input 
                      label="Email" 
                      id="quote-email"
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      darkMode 
                    />
                    <Input 
                      label="Guest Count" 
                      id="quote-guests"
                      type="number" 
                      placeholder="50" 
                      required 
                      darkMode 
                    />
                    <div>
                      <label htmlFor="quote-msg" className="block text-sm font-medium mb-1.5 text-gray-100">Details</label>
                      <textarea 
                        id="quote-msg"
                        rows={3}
                        className="w-full flex h-11 rounded-md border border-gray-600 bg-secondary/30 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Request Quote
                    </Button>
                  </form>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}