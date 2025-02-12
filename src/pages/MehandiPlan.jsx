import React from "react";
import { Link } from "react-router-dom";

const MehandiPlan = () => {
  return (
    <div>
      <div>
        {/* Hero Section */}
        <div className="relative bg-zinc-800 text-[#ff9a32] h-[40vh]">
          <img
            src="/assets/plan/plan.png"
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
                to="/contact"
                className="text-gray-300 hover:text-[#28666E]"
              >
                Mehandi Plan
              </Link>
            </nav>
            <h1 className="text-6xl font-bold mt-4">CHOOSE YOU PLAN</h1>
          </div>
        </div>
      </div>

      {/* This is the Mehadi Plan section */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#ff9a32] animate-fade-in-down">
              Choose Your Mehadi Plans
            </h2>
            <p className="text-black mt-4 text-lg animate-fade-in-up">
              Discover our tailored plans for every special occasion.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Plan Card */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="p-6 animate-fade-in">
                <h3 className="text-2xl font-semibold text-blue-800">
                  Basic Plan
                </h3>
                <p className="text-gray-600 mt-3">
                  Perfect for small gatherings and budget-friendly events.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> Simple
                    Mehadi Design
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> 2
                    Artists
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> 4
                    Hours Duration
                  </li>
                </ul>

                <button className="mt-6 w-full bg-[#ff9a32] text-white py-2 px-4 rounded-lg hover:bg-[#ff9a32] focus:ring-4 focus:ring-blue-300 transition-all duration-300">
                  Select Plan
                </button>
              </div>
            </div>

            {/* Repeat for other plans */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="p-6 animate-fade-in">
                <h3 className="text-2xl font-semibold text-[#ff9a32]">
                  Standard Plan
                </h3>
                <p className="text-gray-600 mt-3">
                  A balanced package for medium-sized events and gatherings.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span>{" "}
                    Intricate Mehadi Design
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> 4
                    Artists
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> 6
                    Hours Duration
                  </li>
                </ul>
                <button className="mt-6 w-full bg-[#ff9a32] text-white py-2 px-4 rounded-lg hover:bg-[#ff9a32] focus:ring-4 focus:ring-blue-300 transition-all duration-300">
                  Select Plan
                </button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="p-6 animate-fade-in">
                <h3 className="text-2xl font-semibold text-green-500">
                  Premium Plan
                </h3>
                <p className="text-gray-600 mt-3">
                  For grand events with exclusive designs.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> Custom
                    Mehadi Designs
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> 8
                    Artists
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="mr-3 text-green-500">&#10003;</span> Full
                    Day Service
                  </li>
                </ul>
                <button className="mt-6 w-full bg-[#ff9a32] text-white py-2 px-4 rounded-lg hover:bg-[#ff9a32] focus:ring-4 focus:ring-blue-300 transition-all duration-300">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative mt-8 py-16 px-8">
        {/* Background Image with 50% opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/henna-artist-applying-designs-brides-hands-closeup_1258-289310.jpg?t=st=1732696858~exp=1732700458~hmac=4b682b02e38d0233a42db2a12dbd7b59e6e73a7afdcf6ebcba98bfd224e53bda&w=1800)",
          }}
        ></div>

        <div className="relative z-10">
          <h2 className="text-center text-3xl font-bold text-white mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://img.freepik.com/free-photo/closeup-hands-pretty-hindu-bride-with-henna-tattoo_8353-8931.jpg?t=st=1732697086~exp=1732700686~hmac=86226e9e199772d4a2819b4a882f2255739b39d2e3f51210b0e293778a65292f&w=1800"
                alt="Top Quality Mehandi"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Top Quality Designs
              </h3>
              <p className="text-gray-600 mt-2">
                We create beautiful and detailed mehandi designs. Our designs
                will make your special day even more memorable and unique. Every
                design is crafted with care to suit your style and needs.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="/assets/HomePage/whychoose1.jpg"
                alt="Experienced Artists"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Experienced Artists
              </h3>
              <p className="text-gray-600 mt-2">
                Our team of mehandi artists has years of experience. They are
                skilled and creative, making sure you get the best designs. You
                can trust us to provide high-quality work for any occasion.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="/assets/HomePage/whychoose3.jpg"
                alt="Excellent Service"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Excellent Service
              </h3>
              <p className="text-gray-600 mt-2">
                We are committed to providing excellent customer service. Our
                goal is to make sure you have a smooth and enjoyable experience
                from start to finish. We ensure timely and friendly service for
                all events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-center text-[#ff9a32] mb-6 lg:text-left">
              Select Your Plan
            </h2>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>

              {/* Plan Selection */}
              <div>
                <label
                  htmlFor="plan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Choose Your Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  required
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                >
                  <option value="basic">Basic Plan</option>
                  <option value="standard">Standard Plan</option>
                  <option value="premium">Premium Plan</option>
                  <option value="other">Other Plan</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#ff9a32] text-white font-semibold rounded-md shadow-md hover:bg-[#ff9a32] focus:outline-none focus:ring-2 focus:ring-[#ff9a32] focus:ring-opacity-50"
                >
                  Send Details
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Images */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="assets/HomePage/test1.jpg"
                alt="Plan 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="assets/HomePage/testi.jpg"
                alt="Plan 2"
                className="rounded-lg shadow-lg"
              />
              <img
                src="assets/HomePage/whychooose.jpg"
                alt="Plan 3"
                className="rounded-lg shadow-lg"
              />
              <img
                src="assets/HomePage/whychoose1.jpg"
                alt="Plan 4"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MehandiPlan;
