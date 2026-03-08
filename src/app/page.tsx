"use client";

import HeroHome from "@/components/HeroHome";
import SectionStory from "@/components/SectionStory";
import MenuCard from "@/components/MenuCard";
import SimpleCateringForm from "@/components/SimpleCateringForm";
import images from "@/config/images";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const metadata = {
  title: "Home",
  description: "Authentic Kentucky BBQ. Low and slow.",
};

export default function Home() {
  const featuredItems = [
    {
      name: "Texas Style Brisket",
      description: "Prime beef smoked for 14 hours over hickory. Moist, tender, with a perfect smoke ring. Served with pickles and white bread.",
      price: "$18 / lb",
      imageSrc: images["gallery-2"].src,
      imageAlt: images["gallery-2"].alt,
      isFeatured: true,
      tag: "House Favorite"
    },
    {
      name: "St. Louis Ribs",
      description: "Dry rubbed with our secret spice blend, then glazed with mustard sauce. Fall-off-the-bone tender.",
      price: "$22 / half rack",
      imageSrc: images["gallery-1"].src,
      imageAlt: images["gallery-1"].alt,
      tag: "Spicy"
    },
    {
      name: "Pulled Pork Shoulder",
      description: "Slow smoked for 12 hours. Chopped or pulled. The foundation of any good BBQ plate.",
      price: "$14 / lb",
      imageSrc: images["menu-pork"].src,
      imageAlt: images["menu-pork"].alt,
    }
  ];

  const reviews = [
    { name: "Maria L.", text: "The mustard sauce is unlike anything I've ever had. Brought me right back to my grandmother's kitchen.", rating: 5 },
    { name: "James T.", text: "Brisket was perfection. No knife needed. Best BBQ in Houston, hands down.", rating: 5 },
    { name: "Sarah J.", text: "We used Terry for our wedding catering. The guests are still talking about the ribs 3 months later.", rating: 5 },
  ];

  return (
    <>
      <HeroHome />

      <main>
        {/* Featured Menu Section */}
        <section id="menu" className="py-24 bg-bg bg-texture-paper relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="font-accent text-primary text-xl block mb-2">From The Pit</span>
              <h2 className="font-heading text-4xl md:text-5xl text-textMain">Daily Smokehouse Specials</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuCard {...item} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="inline-block border-b-2 border-textMain text-textMain font-bold hover:border-primary hover:text-primary transition-colors pb-1">
                View Full Menu
              </a>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <SectionStory />

        {/* Catering CTA Section */}
        <section id="order" className="py-24 bg-darkSurface relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image 
              src={images["cta"].src} 
              alt={images["cta"].alt}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 text-white">
                <span className="font-accent text-accent text-2xl block mb-2">Catering & Events</span>
                <h2 className="font-heading text-4xl md:text-5xl mb-6">Feeding a Posse?</h2>
                <p className="font-body text-lg text-gray-300 mb-8 leading-relaxed">
                  From backyard barn burners to weddings, we bring the smoke to you. 
                  We offer full-service catering with customizable menus featuring all your favorites.
                </p>
                <ul className="space-y-3 font-body text-gray-300 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">✓</span> Custom smoke packages for any size group
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">✓</span> On-site smoking service available
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">✓</span> All sides, sauces, and serving ware included
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 w-full">
                <SimpleCateringForm />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-bg bg-texture-paper overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
             <h2 className="font-heading text-4xl text-textMain">What Folks Are Saying</h2>
          </div>

          <div className="relative">
            <div className="flex gap-6 animate-scroll w-max">
              {/* Duplicate for infinite scroll effect */}
              {[...reviews, ...reviews, ...reviews].map((review, i) => (
                <div key={i} className="w-[350px] md:w-[400px] bg-white p-8 rounded-xl shadow-sm border border-textMain/5 flex-shrink-0">
                  <div className="flex text-accent mb-4">
                    {[...Array(review.rating)].map((_, starI) => (
                      <Star key={starI} className="fill-current w-4 h-4" />
                    ))}
                  </div>
                  <p className="font-body text-textMain italic mb-6">"{review.text}"</p>
                  <p className="font-heading text-secondary font-bold">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}