import { Button } from "@/components/ui/Button";
import { CATERING_PACKAGES } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { images } from "@/config/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering",
  description: "Full-service catering for weddings, corporate events, and parties.",
};

export default function CateringPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <Image
          src={images.gallery[1]?.src || images.hero.src}
          alt="Catering Spread"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Catering Menu</h1>
          <p className="font-body text-xl max-w-2xl mx-auto">
            Let us handle the food so you can handle the party.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-text-main mb-4">
              Packages
            </h2>
            <p className="font-body text-lg text-text-muted">
              Pick a package or build your own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATERING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white p-8 rounded-xl shadow-card border ${
                  pkg.featured ? "border-primary relative transform md:-translate-y-4" : "border-secondary/10"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg font-heading uppercase">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-heading text-2xl text-text-main mb-2">{pkg.name}</h3>
                <p className="font-body text-text-muted mb-4">{pkg.description}</p>
                <div className="text-3xl font-heading text-primary mb-6">{pkg.price}</div>
                <p className="font-accent text-secondary text-sm mb-6">Feeds {pkg.feeds}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-text-main">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="primary" className="w-full" href="/">
                  Select Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl text-text-main mb-4">
                Start Your Order
              </h2>
              <p className="font-body text-lg text-text-muted">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}