import React from "react";
import Hero from "../components/Hero/Hero";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Bridal Mehndi",
      description: "Intricate designs for brides on their special day.",
      image: "assets/service/bridal-mehandi.jpeg",
    },
    {
      title: "Festival Mehndi",
      description:
        "Beautiful designs for festivals like Karva Chauth, Eid, and Diwali.",
      image: "assets/service/engement.jpeg",
    },
    {
      title: "Dulha-Dulhan Mehndi",
      description: "Stylish Mehndi for family gatherings and special events.",
      image: "assets/service/dulha.jpeg",
    },
    {
      title: "Normal Mehandi",
      description: "Tailored Mehndi designs to suit your preferences.",
      image: "assets/service/normal4.jpg",
    },
  ];

  const handleOnClick = () => {
    navigate("/services");
  };

  return (
    <div>
      <div>
        <Hero />
      </div>
      {/* about section  */}
      <div>
        <div className="bg-[#28666E] my-8 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 ">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center text-[#ff8100] lg:text-left mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="">
              Welcome to Bkittu Mehandi Artist, where art meets tradition! With
              over 20 years of experience 🎖, we take pride in being one of the
              most trusted and renowned Mehandi designers in Delhi. Mehandi is
              not just a temporary design; it is a tradition that has been
              cherished for centuries. It represents joy, love, and blessings,
              especially for brides and grooms starting their beautiful journey
              together.
            </p>
            <p className="mt-2">
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
              src="assets/HomePage/about2.jpeg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-[550px]"
            />
          </div>
        </div>
      </div>
      {/* services section  */}
      <div>
        <div className="py-10 px-5 md:px-20">
          <h2 className="text-4xl font-bold text-center text-[#ff8100] mb-10">
            Our Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                onClick={handleOnClick}
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 text-center transform transition-all hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Image Section */}
                <div className="mb-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
                {/* Title and Description */}
                <h3 className="text-2xl font-semibold mb-2 text-green-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial section  */}
      <div>
        <Testimonials />
      </div>
      {/* gallery section */}
      <div>
        <Gallery />
      </div>
      {/* Why Choose Us Section */}
      <div className="relative mt-8 py-24 px-8">
        {/* Background Image with 50% opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url(assets/HomePage/me2.jpg)",
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-center text-3xl font-bold text-white mb-1">
            Why Choose Us
          </h2>
          <p className="text-center text-lg font-bold mb-8 text-white px-16">We are committed to delivering excellence in every aspect of our services. We take pride in our attention to detail, professionalism, and commitment to customer satisfaction.</p>
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
      {/* contact form here  */}
      <div className="flex flex-col md:flex-row items-center justify-center p-4 md:px-20 bg-gray-100">
        {/* Left Section: Form */}
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
        {/* Right Section: Image */}
        <div className="md:w-1/2 w-full p-4 flex items-center justify-center">
          <img
            src="assets/HomePage/bridal.webp"
            alt="Contact"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
