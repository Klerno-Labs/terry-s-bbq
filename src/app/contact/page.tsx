"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[300px] flex items-center justify-center bg-secondary text-center">
        <div className="relative z-10 px-4">
          <h1 className="font-heading text-5xl text-accent">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl text-secondary mb-6">Come See Us</h2>
              <p className="text-text-muted mb-8">
                We&apos;re located right in the heart of the city. Stop by for lunch or dinner, or give us a call to place a pickup order.
              </p>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Address</h3>
                    <p className="text-text-muted">123 Bourbon Street<br />Louisville, KY 40208</p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Phone</h3>
                    <p className="text-text-muted">(512) 555-0198</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Email</h3>
                    <p className="text-text-muted">hello@terrysbbq.com</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                    <Clock />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Hours</h3>
                    <p className="text-text-muted text-sm">
                      Wed - Thu: 11am - 8pm<br />
                      Fri - Sat: 11am - 9pm<br />
                      Sun: 12pm - 6pm<br />
                      Mon - Tue: Closed
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form Column */}
          <Reveal delay={200}>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="font-heading text-2xl text-secondary mb-6">Send a Message</h2>
              
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
                    Message sent successfully!
                  </div>
                  <p className="text-text-muted">We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      label="First Name" 
                      required 
                      placeholder="John" 
                    />
                    <Input 
                      label="Last Name" 
                      required 
                      placeholder="Doe" 
                    />
                  </div>
                  <Input 
                    label="Email" 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                  />
                  <Input 
                    label="Phone" 
                    type="tel" 
                    placeholder="(512) 555-0198" 
                  />
                  <div className="w-full">
                    <label className="block text-sm font-medium text-text-main mb-1">Message</label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
--- END FILE --;