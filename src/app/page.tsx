import { HeroHome } from "@/components/sections/hero-home";
import { Story } from "@/components/sections/story";
import { FeaturedMenu } from "@/components/sections/featured-menu";
import { CateringCTA } from "@/components/sections/catering-cta";
import { Reviews } from "@/components/sections/reviews";

export const metadata = {
  title: "Home",
  description: "Authentic Kentucky BBQ in Louisville. Low and slow smoked meats with mustard sauce.",
};

export default function HomePage() {
  return (
    <main>
      <HeroHome />
      <Story />
      <FeaturedMenu />
      <CateringCTA />
      <Reviews />
    </main>
  );
}