import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";

export default function MeatLocker() {
  const menuItems = [
    {
      name: "Texas Style Brisket",
      desc: "13-hour smoked prime brisket. Dry rubbed with our secret spice blend, featuring a perfect smoke ring and bark.",
      price: "18",
      image: images["menu-brisket"],
      badge: "Pitmaster's Pick"
    },
    {
      name: "St. Louis Ribs",
      desc: "Half rack of pork ribs, slow smoked for 6 hours over hickory wood. Finished on the grill with a glaze of mustard sauce.",
      price: "22",
      image: images["menu-ribs"],
      badge: "Best Seller"
    },
    {
      name: "Pulled Pork Shoulder",
      desc: "Whole hog shoulder smoked overnight. Hand-pulled and tossed lightly in our vinegar-mustard base.",
      price: "16",
      image: images["menu-pork"],
      badge: null
    }
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">The Meat Locker</h2>
          <p className="font-subheading text-muted uppercase tracking-widest text-sm">Featured Specialties</p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-sm border border-surface">
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-accent text-background font-accent text-sm px-3 py-1 transform -rotate-6 z-10">
                    {item.badge}
                  </span>
                )}
                <div className="relative aspect-video md:aspect-square overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Smoke overlay effect on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-baseline justify-between border-b border-gray-800 pb-2">
                  <h3 className="font-heading text-3xl md:text-4xl text-white">{item.name}</h3>
                  <span className="font-subheading text-accent text-2xl">${item.price}</span>
                </div>
                <p className="font-body text-muted leading-relaxed text-lg">
                  {item.desc}
                </p>
                <Button variant="ghost" className="px-0 mt-2 text-primary hover:text-primary-hover">
                  Add to Catering Inquiry &rarr;
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}