import Image from "next/image";
import { images } from "@/config/images";

export default function Atmosphere() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={images.atmosphere.src}
          alt={images.atmosphere.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl md:text-6xl text-white mb-6">
            A Story of <span className="text-primary">Smoke</span>
          </h2>
          <div className="w-24 h-2 bg-accent mb-8" />
          
          <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Terry&apos;s BBQ isn't just a restaurant; it's a time capsule. Built from reclaimed barn wood in the heart of Kentucky, our tavern was designed to feel like the old western halls where cattle drivers rested their heads.
          </p>
          <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            We believe BBQ is an act of patience. Our pits have been running since 1985, infusing every cut of chicken, pork, and beef with that deep, hickory flavor you can&apos;t fake. Whether you're here for a plate of ribs or a cold bourbon, you're family.
          </p>

          <div className="flex items-center gap-4">
             <div className="text-center">
                <span className="block font-heading text-4xl text-primary">1985</span>
                <span className="font-subheading text-sm uppercase tracking-widest text-muted">Established</span>
             </div>
             <div className="h-12 w-px bg-gray-600"></div>
             <div className="text-center">
                <span className="block font-heading text-4xl text-primary">100%</span>
                <span className="font-subheading text-sm uppercase tracking-widest text-muted">Wood Fired</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}