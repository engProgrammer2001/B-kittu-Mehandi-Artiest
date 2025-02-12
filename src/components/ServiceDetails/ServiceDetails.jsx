import React from "react";
import { useParams, Link } from "react-router-dom";
import Testimonials from "../Testimonials/Testimonials";
import ContactForm from "../Contact/ContactForm";

const ServiceDetails = ({ services }) => {
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));

  // Early return in case service is not found
  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">
          Service not found!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 py-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="lg:col-span-8">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="mt-6">
                <h1 className="text-4xl font-bold text-[#28666E]">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                  {service.shortDescription}
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {service.descriptionSecond}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-orange-400 text-white rounded-full font-semibold">
                    Category: {service.category}
                  </span>
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold">
                    Price Range: {service.priceRange}
                  </span>
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold">
                    Rating: {service.rating} ⭐
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:col-span-4">
              <div className="bg-white shadow-lg rounded-lg p-6 sticky top-16">
                <h2 className="text-2xl font-semibold text-[#ff9a32]">
                  Other Services
                </h2>
                <ul className="mt-6 space-y-4">
                  {services.map((otherService) => (
                    <li key={otherService.id}>
                      <Link
                        to={`/service-details/${otherService.id}`}
                        className={`block p-4 rounded-lg text-gray-800 hover:bg-gray-100 ${
                          otherService.id === service.id
                            ? "bg-gray-200 font-bold"
                            : ""
                        }`}
                      >
                        ✅ {otherService.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="block w-full text-center py-4 mt-4 text-[#ff9a32] font-semibold  bg-[#28666E] rounded-lg hover:bg-[#28666E]/80"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 bg-orange-400 text-white px-4 py-2 rounded-lg">
            <Link>Book Now</Link>
          </div>
        </div>
      </div>

      {/* Testimonial section  */}
      <div>
        <Testimonials />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        {/* Left Section - Contact Form */}
        <div className="lg:w-1/2 w-full px-4 bg-white shadow-md rounded-md">
          <ContactForm />
        </div>

        {/* Right Section - Images */}
        <div className="lg:w-1/2 p-2 w-full grid grid-cols-2 gap-4">
          <img
            src="/assets/service/g94.jpeg"
            alt="Contact 1"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
          <img
            src="/assets/gallery/g100.jpeg"
            alt="Contact 2"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
          <img
            src="/assets/gallery/testi.jpg"
            alt="Contact 3"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
          <img
            src="/assets/about/about1.jpg"
            alt="Contact 4"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
