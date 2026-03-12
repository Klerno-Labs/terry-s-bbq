"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: &quot;",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState(&quot;");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent reject for bots

    setIsSubmitting(true);
    setError(null);

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError(&quot;Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-green-800 mb-2">Message Sent!</h3>
        <p className="font-body text-green-700">Thank you for contacting Terry&apos;s BBQ. We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="_gotcha"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden&quot;
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="font-heading text-sm text-text-main uppercase tracking-wide">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
            className={cn(
              "w-full bg-background border-b-2 border-secondary/20 text-text-main p-3",
              "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-t-sm"
            )}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-heading text-sm text-text-main uppercase tracking-wide">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={100}
            className={cn(
              "w-full bg-background border-b-2 border-secondary/20 text-text-main p-3",
              "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-t-sm"
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="font-heading text-sm text-text-main uppercase tracking-wide">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={20}
          className={cn(
            "w-full bg-background border-b-2 border-secondary/20 text-text-main p-3",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-t-sm"
          )}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="font-heading text-sm text-text-main uppercase tracking-wide">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          maxLength={500}
          className={cn(
            "w-full bg-background border-b-2 border-secondary/20 text-text-main p-3",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-t-sm resize-none"
          )}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? &quot;Sending..." : "Send Message"}
      </Button>
    </form>
  );
}