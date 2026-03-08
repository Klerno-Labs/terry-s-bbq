import { menuItems } from "@/lib/data";
import { images } from "@/config/images";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Menu",
  description: "Our full menu of slow-smoked meats, homemade sides, and desserts.",
};

export default function MenuPage() {
  // Group items by category
  const meats = menuItems.filter(i => i.category === 'meats');
  
  return (
    <main className="pt-24 min-h-screen bg-neutral-bg">
      {/* Header */}
      <div className="bg-secondary py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 wood-texture"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Menu</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Smoked daily over post oak wood. Served with white bread, pickles, and your choice of sauce.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Meats Section */}
        <section className="mb-20">
          <Reveal>
            <div className="flex items-center justify-between mb-8 border-b-2 border-secondary pb-4">
              <h2 className="text-3xl font-serif text-secondary">From The Pit</h2>
              <span className="text-gray-500 font-marker">By the Half Pound / Platter</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meats.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-full sm:w-48 h-48 flex-shrink-0 relative bg-gray-100 rounded overflow-hidden">
                    <Image
                      src={images[item.image as keyof typeof images].src}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-serif text-secondary">{item.name}</h3>
                      <span className="text-xl font-bold text-primary">${item.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                    <div className="flex gap-2 mb-4">
                      {item.tags?.map(tag => (
                        <span key={tag} className="text-xs font-bold bg-accent/20 text-secondary px-2 py-1 rounded uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="secondary" size="sm" className="w-fit">Add to Order</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sides Section */}
        <section className="mb-20">
          <Reveal>
            <div className="flex items-center justify-between mb-8 border-b-2 border-secondary pb-4">
              <h2 className="text-3xl font-serif text-secondary">Homemade Sides</h2>
              <span className="text-gray-500 font-marker">Made Fresh Daily</span>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mac & Cheese", desc: "Creamy three-cheese blend with a buttery crumb topping.", price: 4 },
              { name: "Collard Greens", desc: "Slow-cooked with smoked turkey leg and vinegar.", price: 4 },
              { name: "Baked Beans", desc: "Sweet and savory beans with bits of brisket.", price: 4 },
              { name: "Potato Salad", desc: "Classic mustard-based potato salad.", price: 3 },
              { name: "Coleslaw", desc: "Creamy, crunchy, and tangy.", price: 3 },
              { name: "Cornbread", desc: "Skillet-baked sweet cornbread with honey butter.", price: 3 },
            ].map((side, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-6 rounded border border-gray-200 hover:border-primary transition-colors flex justify-between items-center group">
                  <div>
                    <h3 className="font-serif text-xl text-secondary group-hover:text-primary transition-colors">{side.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{side.desc}</p>
                  </div>
                  <span className="font-bold text-lg text-primary">${side.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-serif mb-4">Hungry yet?</h3>
          <p className="mb-6 text-gray-300">Skip the line and order ahead for pickup.</p>
          <Button size="lg" className="bg-white text-secondary hover:bg-gray-100" asChild>
            <Link href="/contact">Call To Order</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}