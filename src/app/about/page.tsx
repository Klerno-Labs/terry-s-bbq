import { images } from "@/config/images";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Terry Foster and the history of Terry's BBQ.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={images.team[1]?.src || images.about.src}
          alt="Terry Foster"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl mb-4">The Pitmaster</h1>
          <p className="font-heading text-accent text-xl">Terry Foster</p>
        </div>
      </div>

      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl text-text-main mb-8">
            Born in Kentucky, Smoked in Texas
          </h2>
          
          <div className="prose prose-lg text-text-muted font-body space-y-6">
            <p>
              I was born in the heart of Kentucky, where BBQ isn&apos;t just food—it&apos;s a religion. 
              My grandfather taught me how to tend a fire before I could ride a bike. 
              He used to say, &ldquo;Son, you can&apos;t rush nature. You can&apos;t rush smoke.&rdquo;
            </p>
            
            <p>
              After serving in the military, I settled down in Houston. I missed the taste of home 
              so much that I built my first smoker out of an old oil tank in the backyard. 
              The neighbors started lining up on Sundays, and well, things just got out of hand.
            </p>
            
            <p>
              We&apos;ve been here on Westheimer since 1998. We&apos;ve expanded, we&apos;ve won some awards, 
              and we&apos;ve seen generations of families grow up eating our brisket. 
              But one thing hasn&apos;t changed: we still light the wood with real fire every single morning at 4 AM.
            </p>
          </div>

          <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-accent">
            <p className="font-heading text-xl text-text-main italic">
              &ldquo;Good food takes time. Good people are worth waiting for. Good BBQ? That&apos;s a miracle.&rdquo;
            </p>
            <p className="font-accent text-primary mt-4">— Terry Foster</p>
          </div>
        </div>
      </section>
    </div>
  );
}