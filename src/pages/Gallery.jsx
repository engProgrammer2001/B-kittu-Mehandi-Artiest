import React, { useState } from "react";

const Gallery = () => {
  const images = [

    "/assets/gallery/feet113.avif",
    "/assets/about/about2.jpg",
    "/assets/gallery/g81.jpeg",
    "/assets/gallery/g86.jpeg",
    "/assets/gallery/g95.jpeg",
    "/assets/gallery/g96.jpeg",
    "/assets/gallery/g99.jpeg",
    "/assets/gallery/g100.jpeg",
    "/assets/gallery/3d-mehandi.jpeg",
    "/assets/gallery/engament2.jpeg",
    "/assets/gallery/engement1.jpeg",
    "/assets/gallery/testi8.avif",
    "/assets/gallery/testi7.avif",
    "/assets/gallery/testi6.webp",
    "/assets/gallery/m11.jpeg",
    "/assets/service/bridal-mehandi.jpeg",
    "/assets/service/dulha.jpeg",
    "/assets/service/normal4.jpg",
    "/assets/sliderImage/slider4.jpg",
    "/assets/service/engement.jpeg",
    "/assets/sliderImage/slider1.jpg",
    "/assets/about/about3.jpg",

  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-5xl text-[#ff9a32] font-bold text-center mb-4">
          Gallery
        </h2>
        <p className="font-semibold text-center text-[#28666E]">
          Welcome to our gallery
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-screen object-contain rounded-lg"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevImage}
                className="text-white text-4xl hover:text-gray-400"
              >
                &lt;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextImage}
                className="text-white text-4xl hover:text-gray-400"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
