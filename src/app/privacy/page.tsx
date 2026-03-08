export const metadata = {
  title: "Privacy Policy",
  description: "Terry's BBQ Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-bg">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm">
        <h1 className="font-heading text-4xl text-textMain mb-6">Privacy Policy</h1>
        <p className="font-body text-gray-600 mb-4">
          Effective Date: {new Date().toLocaleDateString()}
        </p>
        <p className="font-body text-gray-600 mb-4">
          At Terry&apos;s BBQ, we value your privacy. This policy outlines how we collect, use, and protect your information.
        </p>
        <h2 className="font-heading text-2xl text-textMain mt-6 mb-2">Information We Collect</h2>
        <p className="font-body text-gray-600 mb-4">
          We collect information you provide directly to us when you place an order, join our newsletter, or contact us. This may include name, email, phone number, and payment information.
        </p>
        <h2 className="font-heading text-2xl text-textMain mt-6 mb-2">How We Use Your Information</h2>
        <p className="font-body text-gray-600 mb-4">
          We use your information to process orders, send updates about your order, and communicate promotional offers (with your consent).
        </p>
        <h2 className="font-heading text-2xl text-textMain mt-6 mb-2">Security</h2>
        <p className="font-body text-gray-600 mb-4">
          We implement reasonable security measures to protect your personal information.
        </p>
        <h2 className="font-heading text-2xl text-textMain mt-6 mb-2">Contact Us</h2>
        <p className="font-body text-gray-600">
          If you have questions about this policy, please contact us at info@terrysbbq.com.
        </p>
      </div>
    </div>
  );
}