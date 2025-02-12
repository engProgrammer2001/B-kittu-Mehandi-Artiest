import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    {
      title: "Experience",
      value: "20+ Years",
      color: "bg-gradient-to-r from-blue-500 to-blue-300",
    },
    {
      title: "Happy Customers",
      value: "1,300+",
      color: "bg-gradient-to-r from-green-500 to-green-300",
    },
    {
      title: "Branches",
      value: "3+",
      color: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    },
    {
      title: "Completed Projects",
      value: "21,000+",
      color: "bg-gradient-to-r from-red-500 to-red-300",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-[#ff9a32] h-[40vh]">
        <img
          src="/assets/about/about1.jpg"
          alt="about Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-[#ff9a32] hover:text-[#28666E]">
              Home
            </Link>
            <span className="text-[#ff9a32]">/</span>
            <Link
              to="/b-kittu-mehandi-artiest-about"
              className="text-gray-300 hover:text-[#28666E]"
            >
              About
            </Link>
          </nav>
          <h1 className="text-6xl font-bold mt-4">ABOUT US</h1>
        </div>
      </div>

      {/* About Section */}
      <div>
        <div className="bg-[#28666E] my-8 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 ">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center p-4 text-[#ff8100] lg:text-left mb-6 lg:mb-0">
            <h2 className="text-5xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Welcome to Bkittu Mehandi Artist, where art meets tradition! With
              over 20 years of experience 🎖, we take pride in being one of the
              most trusted and renowned Mehandi designers in Delhi. Mehandi is
              not just a temporary design; it is a tradition that has been
              cherished for centuries. It represents joy, love, and blessings,
              especially for brides and grooms starting their beautiful journey
              together.
            </p>
            <p className="mt-2 text-lg">
              At Bkittu Mehandi Artist, we believe every design tells a story.
              Whether you prefer timeless traditional patterns or modern,
              creative designs, our skilled artists are here to craft a unique
              masterpiece that perfectly reflects your personality and style.
              From simple and elegant motifs to intricate and elaborate designs,
              we cater to every occasion, be it weddings, festivals, or special
              celebrations.
            </p>
            <div className="m-4 bg-gray-200 p-4 rounded-lg text-center">
              <Link to={"/contact"}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <img
              src="assets/about/about3.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* our works section, show happy customers, branches, experience year, completed projects */}
      <div
        className="relative bg-fixed bg-cover bg-center text-white py-16 px-6"
        style={{ backgroundImage: "url('assets/about/about2.jpg')" }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} flex flex-col items-center justify-center p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-xl md:text-4xl font-semibold mb-4">
                  {stat.title}
                </h3>
                <p className="text-2xl md:text-5xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-[#ff9a32] mb-8">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white text-lg leading-relaxed">
                At B-Kittu Mehandi Artist, our mission is to bring your special
                moments to life through intricate, beautiful, and personalized
                mehandi designs. We are dedicated to ensuring each client
                experiences the finest artistry and exceptional service, leaving
                a lasting impression of joy and beauty.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white text-lg leading-relaxed">
                Our vision is to be recognized as a leading mehandi artist
                brand, known for creativity, elegance, and excellence. We aim to
                inspire trust and admiration in every client, enriching their
                celebrations with the timeless art of mehandi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
