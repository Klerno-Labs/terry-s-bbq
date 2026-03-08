import { Metadata } from "next";
import { Star } from "lucide-react";
import { images } from "@/config/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full menu of smoked meats, homemade sides, and desserts.",
};

const menuItems = {
  meats: [
    {
      name: "Texas Brisket",
      desc: "Certified Angus Beef, smoked 14 hours over hickory. Served with pickles and white bread.",
      price: "Market Price",
      badge: "Sold by the half pound",
      image: images["menu-brisket"].src,
    },
    {
      name: "St. Louis Ribs",
      desc: "Pork spare ribs, dry rubbed and smoked. Served with mustard sauce on the side.",
      price: "$24 / Half Rack",
      image: images["menu-ribs"].src,
    },
    {
      name: "Pulled Pork",
      desc: "Boston butt, slow smoked and hand-pulled. Tossed in our signature gold sauce.",
      price: "$16 / Plate",
      image: images["menu-pork"].src,
    },
    {
      name: "Smoked Chicken",
      desc: "Half chicken smoked to perfection with a paprika citrus rub.",
      price: "$14",
    },
  ],
  sides: [
    { name: "Mustard Slaw", desc: "Creamy, tangy, and slightly sweet.", price: "$4" },
    { name: "Mac & Cheese", desc: "Three-cheese blend with a breadcrumb crust.", price: "$5" },
    { name: "Baked Beans", desc: "Simmered with brisket burnt ends.", price: "$4" },
    { name: "Potato Salad", desc: "Traditional southern style mustard base.", price: "$4" },
    { name: "Fried Okra", desc: "Fresh, hand-battered and fried golden.", price: "$5" },
    { name: "Cornbread", desc: "Sweet skillet cornbread with honey butter.", price: "$3" },
  ],
};

export default function MenuPage() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-rye text-5xl md:text-6xl text-primary mb-4">
            The Pit Menu
          </h1>
          <p className="font-roboto text-muted max-w-2xl mx-auto">
            Honest food, cooked slow. If it&apos;s not on the smoker, it&apos;s not
            on your plate.
          </p>
        </div>

        {/* Meats Section */}
        <section className="mb-24">
          <h2 className="font-oswald text-3xl text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
            From the Smoker
          </h2>
          <div className="grid gap-8">
            {menuItems.meats.map((item, i) => (
              <div
                key={i}
                className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors"
              >
                {item.image && (
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-oswald text-2xl text-white uppercase">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="bg-accent text-background text-xs font-marker px-2 py-0.5 rounded-full uppercase">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-roboto text-muted">{item.desc}</p>
                  </div>
                  <div className="text-right min-w-[120px]">
                    <p className="font-oswald text-xl text-primary">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sides Section */}
        <section>
          <h2 className="font-oswald text-3xl text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
            Homestyle Sides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.sides.map((item, i) => (
              <div
                key={i}
                className="bg-surface/50 p-6 rounded-lg border border-white/5 hover:bg-surface transition-colors flex justify-between items-center"
              >
                <div>
                  <h3 className="font-oswald text-xl text-white uppercase mb-1">
                    {item.name}
                  </h3>
                  <p className="font-roboto text-sm text-muted">{item.desc}</p>
                </div>
                <span className="font-roboto text-accent font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Footer CTA */}
        <div className="mt-24 text-center bg-secondary p-12 rounded-2xl border border-white/10">
          <Star className="w-8 h-8 text-accent fill-current mx-auto mb-4" />
          <h3 className="font-rye text-3xl text-white mb-4">
            Hungry yet?
          </h3>
          <p className="font-roboto text-muted mb-8 max-w-lg mx-auto">
            We cook until we sell out. Call ahead to place your order for pickup
            or stop by the tavern.
          </p>
          <Button size="lg" asChild>
            <a href="tel:5025550198">Call To Order</a>
          </Button>
        </div>
      </div>
    </main>
  );
}