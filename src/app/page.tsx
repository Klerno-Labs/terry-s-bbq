import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            className="object-cover animate-slow-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-up">
          <h1 className="font-rye text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Low, Slow, <br />
            <span className="text-primary">Southern.</span>
          </h1>
          <p className="font-oswald text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto tracking-wide">
            Serving the finest mustard-based BBQ in Kentucky since 1985.
            Step into our tavern and taste tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request Catering</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/menu">
                View Menu <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* Social Proof / Marquee */}
      <section className="py-8 bg-secondary border-y border-white/5 overflow-hidden">
        <div className="flex gap-12 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="font-oswald text-lg uppercase tracking-widest text-white flex items-center gap-2">
            <Star className="w-5 h-5 fill-accent text-accent" /> Voted Best Ribs
          </p>
          <span className="w-1 h-1 bg-gray-500 rounded-full" />
          <p className="font-oswald text-lg uppercase tracking-widest text-white">
            Featured in Kentucky Monthly
          </p>
          <span className="w-1 h-1 bg-gray-500 rounded-full" />
          <p className="font-oswald text-lg uppercase tracking-widest text-white flex items-center gap-2">
            <Star className="w-5 h-5 fill-accent text-accent" /> Top 10 BBQ
          </p>
        </div>
      </section>

      {/* The Meat Locker (Featured Menu) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-rye text-4xl md:text-5xl text-primary mb-4">
              The Meat Locker
            </h2>
            <p className="font-roboto text-muted max-w-2xl mx-auto">
              We don&apos;t cut corners. We smoke meat over hickory and oak for
              up to 16 hours. Here are the heavy hitters.
            </p>
          </div>

          <div className="space-y-24">
            {/* Item 1: Brisket */}
            <div className="grid md:grid-cols-2 gap-8 items-center group">
              <div className="relative h-[400px] overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={images["menu-brisket"].src}
                  alt={images["menu-brisket"].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-accent text-background font-marker text-lg px-3 py-1 transform -rotate-6">
                  Pitmaster&apos;s Pick
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-oswald text-3xl uppercase text-white">
                    Kentucky Brisket
                  </h3>
                  <span className="font-oswald text-2xl text-primary">$/lb</span>
                </div>
                <p className="font-roboto text-muted leading-relaxed">
                  Certified Angus Beef smoked for 14 hours. Served moist with a
                  heavy bark or lean. Comes with our signature mustard sauce and
                  white bread.
                </p>
                <Button variant="secondary" asChild className="w-full md:w-auto">
                  <Link href="/menu#brisket">Add to Order</Link>
                </Button>
              </div>
            </div>

            {/* Item 2: Ribs (Reverse Layout) */}
            <div className="grid md:grid-cols-2 gap-8 items-center group">
              <div className="order-2 md:order-1 space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-oswald text-3xl uppercase text-white">
                    St. Louis Ribs
                  </h3>
                  <span className="font-oswald text-2xl text-primary">$24</span>
                </div>
                <p className="font-roboto text-muted leading-relaxed">
                  Classic pork spare ribs trimmed St. Louis style. Dry rubbed
                  with our secret spice blend and smoked until they fall off the
                  bone.
                </p>
                <Button variant="secondary" asChild className="w-full md:w-auto">
                  <Link href="/menu#ribs">Add to Order</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={images["menu-ribs"].src}
                  alt={images["menu-ribs"].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Item 3: Pulled Pork */}
            <div className="grid md:grid-cols-2 gap-8 items-center group">
              <div className="relative h-[400px] overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={images["menu-pork"].src}
                  alt={images["menu-pork"].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-primary text-white font-marker text-lg px-3 py-1 transform -rotate-6">
                  House Favorite
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-oswald text-3xl uppercase text-white">
                    Pulled Pork
                  </h3>
                  <span className="font-oswald text-2xl text-primary">$16</span>
                </div>
                <p className="font-roboto text-muted leading-relaxed">
                  Boston butt smoked low and slow. Hand-pulled and tossed in
                  our tangy gold mustard sauce. Served with homemade slaw.
                </p>
                <Button variant="secondary" asChild className="w-full md:w-auto">
                  <Link href="/menu#pork">Add to Order</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere / About Split */}
      <section className="py-24 bg-secondary relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={images.interior.src}
            alt={images.interior.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-surface p-8 md:p-12 rounded-lg border-l-4 border-primary shadow-2xl">
              <h2 className="font-rye text-4xl text-white mb-6">
                A Story of Smoke
              </h2>
              <p className="font-roboto text-muted mb-4 leading-relaxed">
                In 1985, Terry Foster converted an old stable off Oldham Parkway
                into Louisville&apos;s best-kept secret. We haven&apos;t changed
                the recipe, and we certainly haven&apos;t rushed the process.
              </p>
              <p className="font-roboto text-muted mb-8 leading-relaxed">
                We believe that good things take time. That&apos;s why every
                piece of meat that leaves our pit has been kissed by hickory
                smoke for no less than 12 hours. Pull up a chair, grab a cold
                one, and stay a while.
              </p>
              <Button asChild>
                <Link href="/about">Read Our History</Link>
              </Button>
            </div>
            <div className="hidden md:block h-full min-h-[500px] relative rounded-lg overflow-hidden">
               <Image
                src={images.team.src}
                alt={images.team.alt}
                fill
                className="object-cover sepia-[.5] hover:sepia-0 transition-all duration-700"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Masonry) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-rye text-4xl text-center text-primary mb-16">
            The Hall of Fame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-[#f0f0f0] p-6 pb-8 rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl text-gray-800">
              <div className="flex gap-1 mb-4 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-marker text-lg leading-snug mb-4">
                "The mustard sauce is a religious experience. I drove 2 hours
                just to get a slab of ribs and it was worth every mile."
              </p>
              <p className="font-oswald text-sm uppercase text-gray-600 font-bold">
                — Billy R.
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-[#f0f0f0] p-6 pb-8 -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl text-gray-800 mt-8">
              <div className="flex gap-1 mb-4 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-marker text-lg leading-snug mb-4">
                "Terry&apos;s catering saved our wedding. Guests are STILL talking
                about the brisket 6 months later."
              </p>
              <p className="font-oswald text-sm uppercase text-gray-600 font-bold">
                — Sarah M.
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-[#f0f0f0] p-6 pb-8 rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl text-gray-800">
              <div className="flex gap-1 mb-4 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-marker text-lg leading-snug mb-4">
                "Real southern atmosphere. The pulled pork sandwich is messy,
                big, and absolutely delicious."
              </p>
              <p className="font-oswald text-sm uppercase text-gray-600 font-bold">
                — James T.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering CTA Section */}
      <section id="catering" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.catering.src}
            alt={images.catering.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <UtensilsCrossed className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-rye text-4xl md:text-5xl text-white mb-6">
            Feed Your Crew
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            From tailgates to weddings, we bring the pit to you. Full-service
            catering with all the fixins&apos;.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}