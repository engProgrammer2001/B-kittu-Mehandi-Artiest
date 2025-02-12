import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import icons for stars

// Import SwiperCore and register the modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Testimonials = () => {
  const testimonials = [
    {
      image: "/assets/HomePage/test1.jpg",
      name: "Neha Kapoor",
      message:
        "The bridal mehndi design was beyond my expectations. The intricate patterns and attention to detail made my special day even more memorable. Highly recommended!",
      service: "Bridal Mehndi Service",
      rating: 5,
    },
    {
      image: "/assets/HomePage/testi2.jpg",
      name: "Simran Verma",
      message:
        "The engagement mehndi designs were so beautiful and unique. The artist was professional and very skilled. My friends and family loved it!",
      service: "Engagement Mehndi Service",
      rating: 4,
    },
    {
      image: "/assets/HomePage/testi3.png",
      name: "Priya Sharma",
      message:
        "We booked mehndi services for my brother’s wedding, and the designs were stunning. The team was punctual and made everyone feel special.",
      service: "Wedding Party Mehndi Service",
      rating: 5,
    },
    {
      image: "/assets/HomePage/test4.png",
      name: "Ankita Reddy",
      message:
        "The mehndi designs for my baby shower were adorable and creative. The artist added a personal touch that made it extra special.",
      service: "Baby Shower Mehndi Service",
      rating: 4,
    },
    {
      image: "/assets/HomePage/test5.png",
      name: "Sneha Patel",
      message:
        "The festival mehndi designs were perfect for the occasion. The artist’s skill and creativity were truly impressive. Will definitely book again!",
      service: "Festival Mehndi Service",
      rating: 5,
    },
    {
      image: "/assets/HomePage/testi6.webp",
      name: "Ananya Mehta",
      message:
        "I wanted a simple yet elegant mehndi design, and the artist delivered exactly what I had in mind. Fantastic service with great results!",
      service: "Simple Mehndi Service",
      rating: 4,
    },
    {
      image: "/assets/HomePage/testi7.avif",
      name: "Ishita Gupta",
      message:
        "The intricate mehndi designs for my housewarming ceremony were fabulous. The artist was patient and ensured everyone was happy with their designs.",
      service: "Housewarming Mehndi Service",
      rating: 5,
    },
    {
      image: "/assets/HomePage/testi8.avif",
      name: "Riya Singh",
      message:
        "I loved the mehndi designs for my anniversary celebration. The team was so friendly, and the designs were intricate and beautiful. Highly satisfied!",
      service: "Anniversary Mehndi Service",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex space-x-1 mb-2">{stars}</div>;
  };

  return (
    <div
      className="testimonial-section py-16 px-6 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/assets/HomePage/testi.jpg')",
      }}
    >
      <h2 className="text-center text-white text-4xl font-bold mb-8 text-shadow">
        What Our Clients Say
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {testimonial.name}
              </h3>
              {renderStars(testimonial.rating)}
              <p className="text-lg text-gray-600 italic mb-4">
                {testimonial.message}
              </p>
              <span className="text-sm text-gray-500">
                Service: {testimonial.service}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
