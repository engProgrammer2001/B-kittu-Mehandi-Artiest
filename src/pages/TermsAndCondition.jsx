import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  const terms = [
    "All bookings require a deposit to confirm the appointment, which is non-refundable.",
    "Clients must notify cancellations at least 48 hours in advance. Failure to do so may result in a cancellation fee.",
    "Services are subject to availability. Prior appointments are mandatory.",
    "Prices are subject to change without notice and may vary based on the design complexity.",
    "Clients must disclose any allergies or skin sensitivities before the application. The artist is not liable for reactions.",
    "Complex designs may require extra time and cost. Any changes to the design on-site may incur additional charges.",
    "Travel fees apply for services rendered outside the city limits.",
    "Only approved henna cones are used to ensure safety and quality.",
    "Aftercare instructions will be provided. The artist is not responsible for the longevity of the design if instructions are not followed.",
    "The artist reserves the right to take photos of the work for portfolio and promotional purposes unless the client objects in writing.",
  ];

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
              to="/terms-and-conditions"
              className="text-gray-300 hover:text-[#28666E]"
            >
              Terms and Conditions
            </Link>
          </nav>
          <h1 className="text-6xl font-bold mt-4">TERMS AND CONDITIONS</h1>
        </div>
      </div>
      <div className="bg-gray-100 my-8 text-gray-800 p-6 sm:p-8 lg:p-12 max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-green-600">
          Terms and Conditions
        </h1>
        <ul className="list-decimal space-y-4 text-justify ">
          {terms.map((term, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded shadow-sm hover:shadow-md transition"
            >
              {term}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TermsAndCondition;
