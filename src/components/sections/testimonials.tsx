import Image from "next/image";
import { images } from "@/config/images";

const testimonials = [
  {
    name: "Maria L.",
    role: "Local Regular",
    text: "I've been coming here since I was a kid. The mustard sauce is unlike anything else in Kentucky—it's got that tang that just wakes up your palate.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Catering Client",
    text: "Terry handled our wedding rehearsal dinner for 150 people. The brisket was gone in 20 minutes. Professional, delicious, and authentic.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Food Critic",
    text: "The atmosphere alone is worth the visit, but the food? The ribs fall off the bone and the bark on the brisket is absolutely perfect.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-primary mb-4">The Hall of Fame</h2>
          <p className="font-subheading text-muted uppercase tracking-widest text-sm">What Folks Are Saying</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-background p-8 border-l-4 border-accent shadow-lg hover:-translate-y-2 transition-transform duration-300 relative"
              style={{ transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(t.rating)].map((_, k) => (
                  <span key={k}>★</span>
                ))}
              </div>
              <p className="font-marker text-xl text-gray-400 mb-6 italic">"{t.text}"</p>
              <div className="font-subheading text-white uppercase text-sm">
                {t.name} <span className="text-muted block text-xs normal-case not-italic mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}