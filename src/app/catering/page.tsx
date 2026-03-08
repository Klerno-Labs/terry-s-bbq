"use client";

import { cateringPackages } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px] flex items-center justify-center bg-secondary text-center">
        <div className="relative z-10 px-4">
          <h1 className="font-heading text-5xl text-accent mb-4">Catering</h1>
          <p className="text-white text-xl max-w-2xl mx-auto">
            Let us handle the food so you can handle the party.
          </p>
          <div className="mt-8 flex justify-center gap-4">
             <Button variant="primary" asChild><Link href="/contact">Contact Us</Link></Button>
             <Button variant="secondary" asChild><a href="#" download>Download Menu PDF</a></Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-4">Party Packages</h2>
            <p className="text-text-muted">
              Choose a package or build your own custom spread. All packages include plates, napkins, and serving utensils.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cateringPackages.map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 100}>
              <div className="bg-white p-8 rounded-lg shadow-card border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-heading text-2xl text-secondary mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-4">${pkg.price}</div>
                <p className="text-sm text-text-muted mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="w-full">
                  Select Package
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ Section */}
        <Reveal>
          <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "How far in advance should I book?", a: "We recommend booking at least 2 weeks in advance for large events, but we can sometimes accommodate last-minute requests." },
              { q: "Do you provide serving staff?", a: "Packages are drop-off style. We can add servers for an additional fee if needed." },
              { q: "Is there a deposit?", a: "Yes, a 50% deposit is required to secure your date." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-bold text-lg text-secondary mb-2">{item.q}</h3>
                <p className="text-text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
--- END FILE --;