import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the history of Terry's BBQ and our low & slow tradition.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[500px] rounded-xl overflow-hidden border border-white/10">
             <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              className="object-cover sepia hover:sepia-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h1 className="font-rye text-5xl md:text-6xl text-primary mb-6">
              Since 1985
            </h1>
            <div className="w-24 h-1 bg-accent mb-8" />
            <p className="font-roboto text-lg text-muted leading-relaxed mb-6">
              Terry Foster wasn&apos;t a chef. He was a man who liked fire, meat,
              and feeding his neighbors. What started as a backyard pit in the
              rolling hills of Kentucky has turned into a Louisville legend.
            </p>
            <p className="font-roboto text-lg text-muted leading-relaxed">
              We don&apos;t use gas, and we don&apos;t use shortcuts. We use
              hickory wood, oak, and time. Lots of time.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <section className="bg-secondary py-24 rounded-2xl mb-24">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
            <h2 className="font-rye text-4xl text-white mb-6">
              The Mustard Way
            </h2>
            <p className="font-roboto text-xl text-gray-300 leading-relaxed">
              In Kentucky, we respect the pig. That&apos;s why our signature sauce
              is a gold mustard base—tangy, sharp, and the perfect companion to
              fatty pork and smoky brisket. We don&apos;t drown the meat in
              sugary ketchup; we let the smoke speak for itself.
            </p>
          </div>
        </section>

        {/* The Team */}
        <section>
          <h2 className="font-oswald text-3xl text-white uppercase tracking-widest mb-12 text-center">
            The Pit Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6 border border-white/10 mx-auto max-w-sm">
                <Image
                  src={(images as Record<string, string[]>).team ?? [].src}
                  alt="Terry Foster"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <h3 className="font-rye text-2xl text-white">Terry Foster</h3>
              <p className="font-oswald text-accent uppercase tracking-wide mb-2">
                Founder & Pitmaster
              </p>
              <p className="font-roboto text-muted text-sm">
                The man with the plan. Still waking up at 4 AM to stoke the fire.
              </p>
            </div>

            {/* Placeholder Team Member 2 */}
            <div className="text-center opacity-75">
              <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6 border border-white/10 mx-auto max-w-sm bg-surface flex items-center justify-center">
                 <span className="font-rye text-4xl text-muted">Jr.</span>
              </div>
              <h3 className="font-rye text-2xl text-white">Terry Foster Jr.</h3>
              <p className="font-oswald text-accent uppercase tracking-wide mb-2">
                General Manager
              </p>
              <p className="font-roboto text-muted text-sm">
                Keeping the legacy alive and the beers cold.
              </p>
            </div>

            {/* Placeholder Team Member 3 */}
            <div className="text-center opacity-75">
               <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6 border border-white/10 mx-auto max-w-sm bg-surface flex items-center justify-center">
                 <span className="font-rye text-4xl text-muted">Chef</span>
              </div>
              <h3 className="font-rye text-2xl text-white">Big Mike</h3>
              <p className="font-oswald text-accent uppercase tracking-wide mb-2">
                Sous Pitmaster
              </p>
              <p className="font-roboto text-muted text-sm">
                The muscle behind the brisket trimming.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}