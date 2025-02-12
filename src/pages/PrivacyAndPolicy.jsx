import React from "react";
import { Link } from "react-router-dom";

const PrivacyAndPolicy = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-[#ff9a32] h-[40vh]">
        <img
          src="/assets/HomePage/testi.jpg"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-[#ff9a32] hover:text-[#28666E]">
              Home
            </Link>
            <span className="text-[#ff9a32]">/</span>
            <Link
              to="/privacy-policy"
              className="text-gray-300 hover:text-[#28666E]"
            >
              Privacy and Policy
            </Link>
          </nav>
          <h1 className="text-6xl font-bold mt-4">PRIVACY AND POLICY</h1>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-6 md:p-10 lg:p-16">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Privacy and Policy
          </h1>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Introduction
            </h2>
            <p className="text-gray-600">
              Welcome to B-Kitttu Mehndi Artist! We value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and protect your data.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Information Collection
            </h2>
            <p className="text-gray-600">
              We may collect personal information such as your name, contact
              details, and booking preferences to provide our services
              effectively.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Usage of Information
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>To process bookings and inquiries.</li>
              <li>To provide updates and promotional offers.</li>
              <li>To enhance the user experience on our website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Data Security
            </h2>
            <p className="text-gray-600">
              We implement strict security measures to protect your personal
              information. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600">
              For any questions regarding our Privacy Policy, please contact us
              at{" "}
              <span className="text-blue-600 underline">
                bkitttu@support.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyAndPolicy;
