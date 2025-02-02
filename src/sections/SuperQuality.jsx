import React, { useEffect, useState } from 'react';

// Dynamically import all images from the superquality folder
const images = import.meta.glob('../assets/superquality/*.{png,jpg,jpeg,svg}');

const SuperQuality = () => {
  const [qualityImages, setQualityImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Object.values(images).map((image) => image());
      const loadedImages = await Promise.all(imagePromises);
      setQualityImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <section id="super-quality" className="max-container mt-12">
      <div className="flex flex-col justify-start gap-5 text-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Super Quality</span> Promise
        </h2>
        <p className="text-slate-grey font-montserrat max-sm:text-lg">
          We are committed to providing the highest quality products to our customers. Our products go through rigorous testing to ensure they meet our high standards.
        </p>
      </div>
      <div className="grid gap-14 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 max-sm:mt-8">
        {qualityImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-2 border-gray-500 rounded-3xl p-4 transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:translate-y-2"
          >
            <img src={image.default} alt={`Quality feature ${index + 1}`} className="w-116 h-156" />
            <p className="mt-4 font-montserrat text-xl">Feature {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuperQuality;