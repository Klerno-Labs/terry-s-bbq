"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/config/images";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | Terry's BBQ",
  description: "Terms of service for Terry's BBQ catering and dining. Understand our policies regarding orders, payments, and services.",
  openGraph: {
    title: "Terms of Service | Terry's BBQ",
    description: "The rules of the table. Read Terry's BBQ terms and conditions.",
    url: "https://terrysbbq.com/terms",
    siteName: "Terry's BBQ",
    images: [
      {
        url: images["hero"].src,
        width: images["hero"].width,
        height: images["hero"].height,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="font-oswald text-[#FFAB00] uppercase tracking-widest text-lg">
            The Rules of the Table
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
          Welcome to <span className="text-[#FFAB00] font-bold">Terry&apos;s BBQ</span>. By visiting our tavern in Kentucky, ordering our mustard-based BBQ catering, or using our website, you agree to comply with and be bound by the following terms and conditions of use.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300">
              Please read these terms and conditions carefully before using Our Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              2. Catering & Orders
            </h2>
            <p className="text-gray-300 mb-4">
              All catering orders are subject to availability. We reserve the right to refuse service or limit quantities at our discretion.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li><strong className="text-white">Deposits:</strong> A 50% non-refundable deposit is required for all catering orders to secure your date.</li>
              <li><strong className="text-white">Cancellations:</strong> Orders must be cancelled at least 72 hours prior to the event for a refund of the deposit balance.</li>
              <li><strong className="text-white">Changes:</strong> Changes to guest count must be made 48 hours before the event. Changes made after this time cannot be guaranteed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              3. Allergies & Dietary Restrictions
            </h2>
            <p className="text-gray-300">
              While we strive to accommodate dietary needs, our kitchen handles common allergens including nuts, soy, dairy, and gluten. We cannot guarantee an environment completely free of allergens. Please inform our staff of any severe allergies.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              4. Intellectual Property
            </h2>
            <p className="text-gray-300">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Terry&apos;s BBQ and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300">
              In no event shall Terry&apos;s BBQ, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              6. Governing Law
            </h2>
            <p className="text-gray-300">
              These Terms shall be governed and construed in accordance with the laws of the State of Kentucky, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="font-rye text-3xl text-[#BF360C] mb-4 border-b border-gray-800 pb-2">
              7. Contact Information
            </h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us:
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