import { Hero } from "@/components/Hero";
import { MenuCard } from "@/components/MenuCard";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { MENU_ITEMS, TESTIMONIALS } from "@/lib/data";
import { images } from "@/config/images";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Terry's BBQ. Authentic Kentucky-style BBQ in Houston.",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Story Section - Western Split */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Column */}
            <div className="w-full md:w-1/2 z-10">
              <span className="font-accent text-primary text-lg mb-2 block">Since 1998</span>
              <h2 className="font-heading text-4xl md:text-5xl text-text-main mb-6">
                The Pitmaster&apos;s Legacy
              </h2>
              <p className="font-body text-lg text-text-muted mb-6 leading-relaxed">
                Terry Foster started smoking meats in his backyard in Kentucky with nothing but a 
                homemade offset smoker and a dream. Thirty years later, we&apos;re bringing that same 
                low-and-slow philosophy to Texas.
              </p>
              <p className="font-body text-lg text-text-muted mb-8 leading-relaxed">
                We only use prime oak wood and dry-rub our meats for 24 hours before they ever see 
                the heat. It&apos;s not fast food. It&apos;s good food.
              </p>
              <Link href="/about">
                <Button variant="secondary" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Read Our Story
                </Button>
              </Link>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 relative h-[500px]">
              <div className="absolute inset-0 bg-secondary -z-10 md:-translate-x-8 md:translate-y-8" />
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover w-full h-full shadow-xl relative z-0 border-4 border-white"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-text-main mb-4">
              Smokehouse Favorites
            </h2>
            <p className="font-body text-lg text-text-muted">
              Grab a napkin. You&apos;re gonna need it. Here&apos;s what our regulars line up for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.slice(0, 3).map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="primary" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Catering CTA - Dark */}
      <section className="py-16 md:py-24 bg-background-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <span className="font-accent text-accent text-xl mb-2 block">Feeding a Posse?</span>
              <h2 className="font-heading text-4xl md:text-6xl mb-6">
                Let Terry Smoke for You
              </h2>
              <p className="font-body text-xl text-gray-300 mb-8 leading-relaxed">
                From corporate lunches to wedding receptions, we bring the smokehouse to you. 
                Full-service catering with delivery, setup, and cleanup options.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-body text-lg">
                  <div className="w-6 h-6 rounded-full bg-accent text-background-dark flex items-center justify-center text-xs font-bold">✓</div>
                  Custom menus for any size group
                </li>
                <li className="flex items-center gap-3 font-body text-lg">
                  <div className="w-6 h-6 rounded-full bg-accent text-background-dark flex items-center justify-center text-xs font-bold">✓</div>
                  Professional service staff available
                </li>
                <li className="flex items-center gap-3 font-body text-lg">
                  <div className="w-6 h-6 rounded-full bg-accent text-background-dark flex items-center justify-center text-xs font-bold">✓</div>
                  All equipment included
                </li>
              </ul>

              <Link href="/catering">
                <Button variant="primary" size="lg" className="bg-accent text-background-dark hover:bg-white hover:text-secondary border-b-accent-dark/20">
                  Get a Quote
                </Button>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-secondary p-8 rounded-sm border border-white/10 shadow-2xl">
                <h3 className="font-heading text-2xl text-accent mb-6">Quick Inquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center text-text-main mb-16">
            What Folks Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-lg shadow-card border border-secondary/5 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-text-muted mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-heading text-text-main font-bold">{review.name}</p>
                  <p className="font-accent text-primary text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-heading text-xl mb-2">Visit Us</h4>
              <p className="font-body text-gray-300">4521 Westheimer Rd<br />Houston, TX 77027</p>
            </div>
            <div className="p-4">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-heading text-xl mb-2">Hours</h4>
              <p className="font-body text-gray-300">Mon-Sat: 11am - 9pm<br />Sun: 12pm - 8pm</p>
            </div>
            <div className="p-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 text-secondary font-bold">
                T
              </div>
              <h4 className="font-heading text-xl mb-2">Call Ahead</h4>
              <p className="font-body text-gray-300">(512) 555-0198<br />We sell out early!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}