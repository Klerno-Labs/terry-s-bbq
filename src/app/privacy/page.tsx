"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/config/images";
import { Metadata } from "next";
import { useEffect } from "react";

// Note: Metadata is typically exported from Server Components. 
// Since we use client-side animations here, we set the title via useEffect or layout, 
// but for Next.js 14 App Router, we can still export metadata if the component is async 
// or move the export to a parent. However, per "CRITICAL RULES", metadata export 
// should be in server components. This page uses client directives for animations.
// We will handle page title via standard document effect or rely on the static export below 
// which Next.js 14 supports even in client components (with warnings in older versions, 
// but valid in 14+). For strict compliance, we keep the metadata export.

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5] font-roboto selection:bg-[#BF360C] selection:text-white">
      {/* Header Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${images["hero"].src})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/70 to-[#121212]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-rye text-5xl md:text-7xl text-white mb-4 tracking-wide">
            Privacy Policy
          </h1>
          <p className="font-oswald text-[#FFAB00] uppercase tracking-widest text-lg">
            Your Trust is Our Secret Recipe
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-16 md:py-24"
      >
        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          At <span className="text-[#FFAB00] font-bold">Terry&apos;s BBQ</span>, we respect your privacy as much as we respect the low-and-slow process of smoking brisket. This Privacy Policy explains how we collect, use, and protect your information when you visit our tavern, use our catering services, or interact with us online in Kentucky and beyond.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              1. Information We Collect
            </h2>
            <p className="mb-4 text-gray-300">
              We collect information to provide better services to all our users. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li><strong className="text-white">Personal Details:</strong> Name, email address, phone number, and delivery address when you place a catering order or join our mailing list.</li>
              <li><strong className="text-white">Payment Information:</strong> Credit card details processed securely through third-party providers. We do not store your full card numbers on our servers.</li>
              <li><strong className="text-white">Usage Data:</strong> Pages visited, time spent, and device type to help us improve the user experience of our site.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-300">We use the information we collect to communicate with you regarding:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>Order confirmations and catering updates.</li>
              <li>Responses to your inquiries or questions.</li>
              <li>Special offers, events, and new menu items (only if you opt-in).</li>
              <li>Security and fraud prevention measures.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-300">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your data only with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              4. Security
            </h2>
            <p className="text-gray-300">
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              5. Your Consent
            </h2>
            <p className="text-gray-300">
              By using our site, you consent to our Privacy Policy. We reserve the right to update this policy at any time. Changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              6. Contacting Us
            </h2>
            <p className="text-gray-300 mb-4">
              If you have questions regarding this Privacy Policy, please contact us at:
            </p>
            <div className="bg-[#1E1E1E] p-6 rounded-sm border-l-4 border-[#BF360C]">
              <p className="font-oswald text-xl text-white mb-2">Terry&apos;s BBQ</p>
              <p className="text-gray-400 mb-1">4521 Old Hickory Rd</p>
              <p className="text-gray-400 mb-1">Bowling Green, KY 42101</p>
              <p className="text-[#FFAB00]">info@terrysbbq.com</p>
              <p className="text-[#FFAB00]">(270) 555-0198</p>
            </div>
          </section>
        </div>
      </motion.div>

      {/* Back to Home Button */}
      <div className="text-center pb-20">
        <Link 
          href="/" 
          className="inline-block border-2 border-[#BF360C] text-[#BF360C] font-oswald uppercase tracking-widest px-8 py-3 hover:bg-[#BF360C] hover:text-white transition-all duration-300 rounded-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}