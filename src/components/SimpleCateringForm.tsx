"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SimpleCateringForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    date: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(&quot;idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("success");
    setFormData({ name: "", email: "", guests: "", date: "" });
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="bg-white p-6 md:p-8 border-l-4 border-accent shadow-xl max-w-md mx-auto">
      <h3 className="font-heading text-2xl text-textMain mb-2">Feeding a Posse?</h3>
      <p className="font-body text-sm text-gray-600 mb-6">Get a quick quote for your event.</p>

      {status === "success" ? (
        <div className="text-center py-8 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800 font-bold">Request Received!</p>
          <p className="text-green-700 text-sm">We&apos;ll contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-bg border-b-2 border-textMuted/30 p-2 focus:outline-none focus:border-primary transition-colors text-textMain&quot;
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-bg border-b-2 border-textMuted/30 p-2 focus:outline-none focus:border-primary transition-colors text-textMain&quot;
            />
          </div>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Guests"
              required
              min="10"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="w-1/2 bg-bg border-b-2 border-textMuted/30 p-2 focus:outline-none focus:border-primary transition-colors text-textMain&quot;
            />
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-1/2 bg-bg border-b-2 border-textMuted/30 p-2 focus:outline-none focus:border-primary transition-colors text-textMain&quot;
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "w-full bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-wide py-3 transition-colors rounded-sm",
              status === "loading" && "opacity-70 cursor-not-allowed"
            )}
          >
            {status === "loading" ? "Sending..." : "Get Quote"}
          </button>
        </form>
      )}
    </div>
  );
}