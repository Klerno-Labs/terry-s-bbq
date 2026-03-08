"use client";

import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string(), // Honeypot
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const metadata = {
  title: "Contact",
  description: "Find Terry's BBQ in Lexington, KY. Hours, location, and contact info.",
};

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot check
    if (data._gotcha) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-neutral-bg">
      {/* Header Image */}
      <div className="relative h-[300px] mb-12">
        <Image
          src={images["contact"].src}
          alt="Location"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Reveal>
            <h1 className="text-5xl font-serif text-white">Come See Us</h1>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl font-serif text-secondary mb-6">Visit The Pit</h2>
            </Reveal>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-6">
              <Reveal delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">Location</h3>
                    <p className="text-gray-600 mt-1">{siteConfig.contact.address}</p>
                    <p className="text-sm text-primary mt-1 hover:underline cursor-pointer">Get Directions</p>
                  </div>
                </div>
              </Reveal>

              <div className="border-t border-gray-100"></div>

              <Reveal delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">Hours</h3>
                    <div className="text-gray-600 mt-1 space-y-1">
                      {siteConfig.hours.map((item, idx) => (
                        <div key={idx} className="flex justify-between w-64">
                          <span>{item.day}</span>
                          <span>{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="border-t border-gray-100"></div>

              <Reveal delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 mt-1 block hover:text-primary">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="border-t border-gray-100"></div>

              <Reveal delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 mt-1 block hover:text-primary">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Reveal>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-serif text-secondary mb-6">Send a Message</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center animate-fade-up">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                    <Button onClick={() => setIsSuccess(false)} variant="secondary" size="sm" className="mt-4">Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input 
                      label="Full Name" 
                      id="contact-name"
                      placeholder="Terry Foster" 
                      {...register("name")}
                      error={errors.name?.message}
                    />
                    <Input 
                      label="Email Address" 
                      id="contact-email"
                      type="email" 
                      placeholder="terry@example.com" 
                      {...register("email")}
                      error={errors.email?.message}
                    />
                    <Input 
                      label="Phone Number" 
                      id="contact-phone"
                      type="tel" 
                      placeholder="(859) 555-0123" 
                      {...register("phone")}
                      error={errors.phone?.message}
                    />
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5 text-gray-900">Message</label>
                      <textarea 
                        id="contact-message"
                        rows={5}
                        className="w-full flex rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="How can we help you?"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Honeypot */}
                    <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

                    <Button 
                      type="submit" 
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
    </main>
  );
}