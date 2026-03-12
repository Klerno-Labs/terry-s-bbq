"use client";

import { useState } from "react";
import { Metadata } from "next";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Since this is a client component for the form, we define metadata in a separate file usually
// but for Next.js App router, we can export it here if needed, though typically metadata is static.
// We will handle form logic here.

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
    _gotcha: "", // Honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected

    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (err) {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-rye text-5xl text-primary mb-4">Get in Touch</h1>
          <p className="font-roboto text-muted max-w-2xl mx-auto">
            Planning a big event or just craving a rack of ribs? Hit us up.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <section>
              <h2 className="font-oswald text-2xl text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                Catering Inquiries
              </h2>
              <p className="font-roboto text-muted mb-6">
                We cater weddings, corporate events, and backyard parties.
                Minimum order of 20 people for catering services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="text-white font-bold">Phone</p>
                    <a href="tel:5025550198" className="text-muted hover:text-primary transition-colors">
                      (502) 555-0198
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="text-white font-bold">Location</p>
                    <p className="text-muted">
                      4521 Oldham Pkwy<br />
                      Louisville, KY 40222
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="text-white font-bold">Hours</p>
                    <p className="text-muted">
                      Wed - Thu: 11am - 9pm<br />
                      Fri - Sat: 11am - 10pm<br />
                      Sun: 11am - 9pm
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Static Map Image */}
            <section className="relative h-64 w-full rounded-xl overflow-hidden border border-white/10">
               <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop" 
                alt="Map view of Terry's BBQ location"
                className="w-full h-full object-cover"
               />
               <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
               >
                 <span className="bg-white text-background px-4 py-2 rounded font-oswald uppercase font-bold">
                   View on Google Maps
                 </span>
               </a>
            </section>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-10 rounded-xl border border-white/10 shadow-2xl">
            {formState === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-rye text-3xl text-white mb-2">Message Sent!</h3>
                <p className="font-roboto text-muted">
                  Thank you for reaching out. We&apos;ll get back to you within 24
                  hours to discuss your BBQ needs.
                </p>
                <Button 
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "", _gotcha: "" });
                  }}
                  className="mt-8"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(502) 555-0123"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Estimated Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="flex w-full rounded-md border border-gray-700 bg-background px-4 py-3 text-sm text-white placeholder:text-gray-500 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {formState === "error" && (
                  <p className="text-red-500 text-sm font-roboto">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}