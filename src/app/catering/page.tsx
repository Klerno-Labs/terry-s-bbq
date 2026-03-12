"use client";

import { motion } from "framer-motion";
import images from "@/config/images";
import Image from "next/image";
import Link from "href";

// This page needs "use client" for the FAQ accordion state if we implemented it, 
// but for structure we'll keep it mostly static or use state for form.
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function CateringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = [
    {
      name: &quot;The Crew",
      size: "Feeds 10-15",
      price: "$199",
      features: ["5 lbs Meat Choice", "2 Large Sides", "Buns & Sauce", "Paper Goods"],
      recommended: false
    },
    {
      name: "The Party",
      size: "Feeds 25-30",
      price: "$349",
      features: ["10 lbs Meat Choice", "4 Large Sides", "Buns & Sauce", "Paper Goods", "Serving Utensils"],
      recommended: true
    },
    {
      name: "The Feast",
      size: "Feeds 50+",
      price: "$599",
      features: ["20 lbs Meat Choice", "6 Large Sides", "Buns & Sauce", "Paper Goods", "On-site Pickup/Setup"],
      recommended: false
    }
  ];

  const faqs = [
    { q: "How far in advance should I book?", a: "For large events (50+), we recommend 2 weeks notice. For smaller packages, 3-4 days is usually fine." },
    { q: "Do you offer on-site smoking?", a: "Yes! We can bring our mobile smoker to your location for an authentic experience." },
    { q: "Is the sauce mustard based?", a: "Yes, our signature sauce is a tangy gold mustard sauce. We also have a spicy red sauce available on request." }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-darkSurface">
        <div className="absolute inset-0">
            <Image 
              src={images["service-1"].src}
              alt="Catering Spread"
              fill
              className="object-cover opacity-50"
            />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-6xl text-accent mb-4">Catering Menu</h1>
          <p className="font-body text-xl max-w-2xl mx-auto">
            We bring the smoke to you. From corporate lunches to wedding rehearsals.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-textMain mb-4">Choose Your Package</h2>
            <p className="font-body text-textMuted">All packages come with our signature white bread and pickles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-xl p-8 border-2 shadow-lg flex flex-col relative ${
                  pkg.recommended ? "border-primary transform md:-translate-y-4" : "border-transparent"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl text-textMain mb-2">{pkg.name}</h3>
                <div className="font-accent text-primary text-lg mb-4">{pkg.size}</div>
                <div className="text-4xl font-bold text-textMain mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 font-body">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-darkSurface hover:bg-secondary text-white font-bold uppercase py-3 rounded-sm transition-colors">
                  Book This Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-textMain text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left&quot;
                >
                  <span className="font-bold text-textMain font-heading text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="p-6 text-textMuted font-body leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}