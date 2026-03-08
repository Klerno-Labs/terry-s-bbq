"use client";

import { packages } from "@/lib/data";
import { images } from "@/config/images";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function CateringPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much notice do you need for catering?",
      a: "For large events (50+ people), we recommend at least 2 weeks notice. For smaller orders, 48-72 hours is usually sufficient."
    },
    {
      q: "Do you provide serving staff?",
      a: "Our 'Feast' package includes full service setup and staffing. For the Crew and Party packages, we deliver the food ready to serve in disposable foil pans."
    },
    {
      q: "What is included in the delivery?",
      a: "We deliver everything hot and ready to eat. All packages include necessary paper goods (napkins, plates, forks)."
    },
    {
      q: "Can I customize the menu?",
      a: "Absolutely! We can adjust the meat ratios or swap sides based on your group's preferences. Just let us know when you book."
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-neutral-bg">
      {/* Header */}
      <div className="relative h-[400px] flex items-center justify-center">
        <Image
          src={images["catering"].src}
          alt={images["catering"].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Catering & Events</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Authentic smokehouse flavor for your wedding, corporate event, or family reunion.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Packages */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-secondary mb-4">Catering Packages</h2>
            <p className="text-gray-600">Choose a package or build your own.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <Reveal key={pkg.id} delay={idx * 0.1} width="100%">
              <div className={`relative bg-white rounded-lg p-8 border-2 flex flex-col h-full ${pkg.featured ? 'border-primary shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'}`}>
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif text-secondary mb-2">{pkg.name}</h3>
                <p className="text-gray-500 mb-6">{pkg.feeds}</p>
                <div className="text-4xl font-bold text-primary mb-6">${pkg.price}</div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant={pkg.featured ? "primary" : "secondary"} size="lg" className="w-full">
                  Select Package
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-secondary text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded border border-gray-200 overflow-hidden">
                  <button 
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-serif text-lg text-secondary">{faq.q}</span>
                    {faqOpen === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                  </button>
                  {faqOpen === idx && (
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed animate-fade-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}