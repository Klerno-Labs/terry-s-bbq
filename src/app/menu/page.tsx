import { MenuCard } from "@/components/MenuCard";
import { MENU_ITEMS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "View our full menu of smoked meats, homemade sides, and desserts.",
};

export default function MenuPage() {
  return (
    <div className="pt-32 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl text-text-main mb-6">
            The Smokehouse Menu
          </h1>
          <p className="font-body text-xl text-text-muted">
            Everything is slow-smoked daily. We start the fires at 4:00 AM so you don&apos;t have to.
            Served with pickles, onions, and white bread upon request.
          </p>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-4 font-heading">
          <button className="px-6 py-2 bg-secondary text-white rounded-sm border-b-4 border-secondary/50">
            All
          </button>
          <button className="px-6 py-2 bg-transparent text-text-muted hover:bg-white rounded-sm transition-colors">
            Meats
          </button>
          <button className="px-6 py-2 bg-transparent text-text-muted hover:bg-white rounded-sm transition-colors">
            Sides
          </button>
          <button className="px-6 py-2 bg-transparent text-text-muted hover:bg-white rounded-sm transition-colors">
            Drinks
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}