"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CateringForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(&quot;idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "Catering Inquiry" }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 bg-surface border border-accent/30 rounded-sm">
        <div className="text-accent text-6xl mb-4">✓</div>
        <h3 className="font-heading text-3xl text-white mb-2">Request Received!</h3>
        <p className="font-body text-muted">We&apos;ll be in touch within 24 hours to discuss your event.</p>
        <Button onClick={() => setStatus(&quot;idle")} className="mt-6">Send Another</Button>
      </div>
    );
  }

  return (
    <form id="catering" onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 md:p-12 border border-white/5 rounded-sm max-w-4xl mx-auto shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block font-subheading text-white uppercase tracking-wider mb-2">Name</label>
          <input
            required
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-background border-b-2 border-gray-600 text-white p-4 focus:border-primary focus:outline-none transition-colors font-body&quot;
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-subheading text-white uppercase tracking-wider mb-2">Email</label>
          <input
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-background border-b-2 border-gray-600 text-white p-4 focus:border-primary focus:outline-none transition-colors font-body&quot;
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className="block font-subheading text-white uppercase tracking-wider mb-2">Phone</label>
          <input
            required
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-background border-b-2 border-gray-600 text-white p-4 focus:border-primary focus:outline-none transition-colors font-body&quot;
            placeholder="(502) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="date" className="block font-subheading text-white uppercase tracking-wider mb-2">Event Date</label>
          <input
            required
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-background border-b-2 border-gray-600 text-white p-4 focus:border-primary focus:outline-none transition-colors font-body [color-scheme:dark]&quot;
          />
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="block font-subheading text-white uppercase tracking-wider mb-2">Expected Guests</label>
        <select
          required
          id="guests"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          className="w-full bg-background border-b-2 border-gray-600 text-white p-4 focus:border-primary focus:outline-none transition-colors font-body appearance-none cursor-pointer&quot;
        >
          <option value="" disabled>Select number of guests</option>
          <option value="10-25">10 - 25 Guests</option>
          <option value="25-50">25 - 50 Guests</option>
          <option value="50-100">50 - 100 Guests</option>
          <option value="100+">100+ Guests</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-subheading text-white uppercase tracking-wider mb-2">Additional Details</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-background border-b-2 border-gray-600 text-white p-4 focus:border-primary focus:outline-none transition-colors font-body&quot;
          placeholder="Tell us about your event, dietary restrictions, or specific meat preferences..."
        ></textarea>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full md:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit Catering Request"}
        </Button>
        {status === "error" && (
          <p className="text-red-500 mt-4 text-sm font-body">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}