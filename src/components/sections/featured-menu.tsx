import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { images } from "@/config/images";
import Link from "next/link";

export function FeaturedMenu() {
  // Filter for featured items (or just top 3 for this section)
  const featuredItems = menuItems.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary mb-4">Pitmaster Favorites</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A taste of what we do best. Served low and slow, just the way you like it.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="group bg-white border border-secondary/20 border-b-4 hover:shadow-hover transition-all duration-300 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={images[item.image].src}
                    alt={images[item.image].alt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-4 right-4 bg-accent text-secondary font-accent text-sm px-2 py-1 rotate-3 z-10">
                      {item.tags[0]}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-2xl text-secondary">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">${item.price}</span>
                  </div>
                  <p className="text-text-muted mb-6 flex-grow">{item.description}</p>
                  <Link href="/menu" className="w-full">
                    <Button variant="secondary" className="w-full text-center justify-center">
                      Add to Order
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" asChild>
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
--- END FILE --;