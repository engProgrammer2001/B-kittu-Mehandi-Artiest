import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials/Testimonials";

const services = [
  {
    id: 1,
    image: "/assets/service/m2.jpeg",
    title: "Bridal Mehandi",
    shortDescription: "Intricate designs for brides.",
    description:
      "Detailed bridal mehandi designs with traditional and modern patterns.",
  },
  {
    id: 2,
    image: "/assets/service/g93.jpeg",
    title: "Party Mehandi",
    shortDescription: "Perfect for parties and events.",
    description:
      "Stylish and simple mehandi designs for parties and celebrations.",
  },
  {
    id: 3,
    image: "/assets/service/g94.jpeg",
    title: "Festive Mehandi",
    shortDescription: "Celebrate with festive designs.",
    description:
      "Beautiful mehandi for festive occasions like Karva Chauth and Eid.",
  },
  {
    id: 4,
    image: "/assets/service/Corporate Event Mehandi.webp",
    title: "Corporate Event Mehandi",
    shortDescription: "Professional designs for events.",
    description: "Elegant mehandi designs for corporate and formal events.",
  },
  {
    id: 5,
    image: "/assets/service/Minimalist Mehandi.jpg",
    title: "Minimalist Mehandi",
    shortDescription: "Simple yet beautiful.",
    description:
      "Minimalist and modern mehandi designs for those who prefer simplicity.",
  },
  {
    id: 6,
    image: "/assets/service/service4.jpg",
    title: "Traditional Mehandi",
    shortDescription: "Rich in culture and heritage.",
    description: "Traditional Indian mehandi designs for special occasions.",
  },
  {
    id: 7,
    image: "/assets/service/baby8.webp",
    title: "Baby Shower Mehandi",
    shortDescription: "Celebrate motherhood.",
    description: "Special mehandi designs for baby shower celebrations.",
  },
  {
    id: 8,
    image: "/assets/service/Customized Mehandi.webp",
    title: "Customized Mehandi",
    shortDescription: "Tailored to your preferences.",
    description: "Get a customized design according to your choice and event.",
  },
];
const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/service-details/${id}`);
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-[#ff9a32] h-[40vh]">
        <img
          src="/assets/service/Minimalist Mehandi.jpg"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-[#ff9a32] hover:text-[#28666E]">
              Home
            </Link>
            <span className="text-[#ff9a32]">/</span>
            <Link to="/services" className="text-gray-300 hover:text-[#28666E]">
              Services
            </Link>
          </nav>
          <h1 className="text-6xl font-bold mt-4">OUR SERVICES</h1>
        </div>
      </div>

      <div className="p-6 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleServiceClick(service.id)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimonial section  */}
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Services;
