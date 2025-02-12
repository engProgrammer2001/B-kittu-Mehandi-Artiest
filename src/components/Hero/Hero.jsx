import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-cube";
import "./Hero.css"; // Add custom styles here

const Hero = () => {
  return (
    <div className="w-full h-[30vh] lg:[90vh] md:h-[80vh] sm:h-[30vh] overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect="cube"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCube, Pagination, Navigation]}
        className="w-full h-full custom-swiper"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        <SwiperSlide>
          <img
            src="assets/sliderImage/slider4.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/service/Minimalist Mehandi.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/sliderImage/slider3.jpeg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/sliderImage/slider1.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
