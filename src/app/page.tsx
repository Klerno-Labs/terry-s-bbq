import { HeroHome } from "@/components/sections/hero-home";
import { Story } from "@/components/sections/story";
import { FeaturedMenu } from "@/components/sections/featured-menu";
import { CateringCTA } from "@/components/sections/catering-cta";
import { Reviews } from "@/components/sections/reviews";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <Story />
      <FeaturedMenu />
      <CateringCTA />
      <Reviews />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Taste the Tradition?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Stop by 121 Manchester St in Lexington or place an order online for pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/menu">Order Online</Link>
            </Button>
            <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white/10" asChild>
              <a href={`tel:${siteConfig.contact.phone}`}>
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}