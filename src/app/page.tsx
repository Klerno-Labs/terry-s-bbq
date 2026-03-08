import HeroSection from "@/components/sections/hero";
import MeatLocker from "@/components/sections/meat-locker";
import Atmosphere from "@/components/sections/atmosphere";
import Testimonials from "@/components/sections/testimonials";
import CateringForm from "@/components/sections/catering-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Kentucky's finest slow-smoked BBQ. Visit Terry's BBQ today.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MeatLocker />
      <Atmosphere />
      <Testimonials />
      <section id="catering" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">Catering & Events</h2>
            <p className="font-subheading text-muted uppercase tracking-widest text-sm">Bring the Smoke to You</p>
          </div>
          <CateringForm />
        </div>
      </section>
    </>
  );
}