import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Button from '../component/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import all images from the specialoffer folder
const images = import.meta.glob('../assets/specialoffer/*.{png,jpg,jpeg,svg}');

const specialOffers = [
  {
    title: '50% Off on All Shoes',
    description: 'Get the best deals on all shoes. Limited time offer!',
    buttonLabel: 'Shop Now',
  },
  {
    title: 'Buy One Get One Free',
    description: 'Exclusive offer on selected items. Don’t miss out!',
    buttonLabel: 'Explore',
  },
  {
    title: 'Free Shipping on Orders Over $100',
    description: 'Enjoy free shipping on all orders over $100.',
    buttonLabel: 'Start Shopping',
  },
  {
    title: 'Summer Sale 30% Off',
    description: 'Save big on summer collection. Limited time offer!',
    buttonLabel: 'Shop Now',
  },
  {
    title: 'Winter Clearance',
    description: 'Up to 70% off on winter clearance items.',
    buttonLabel: 'Shop Now',
  },
];

const CustomArrow = ({ className, style, onClick, children }) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer ${className}`}
    style={{ ...style }}
    onClick={onClick}
  >
    {children}
  </div>
);

const SpecialOffers = () => {
  const [offerImages, setOfferImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Object.values(images).map((image) => image());
      const loadedImages = await Promise.all(imagePromises);
      setOfferImages(loadedImages.map((img) => img.default));
    };

    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: (
      <CustomArrow className="right-0">
        <ChevronRight className="w-10 h-10 text-coral-red bg-white rounded-full p-2 shadow-md" />
      </CustomArrow>
    ),
    prevArrow: (
      <CustomArrow className="left-0">
        <ChevronLeft className="w-10 h-10 text-coral-red bg-white rounded-full p-2 shadow-md" />
      </CustomArrow>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="w-3 h-3 mx-1 bg-coral-red rounded-full" />,
  };

  return (
    <section id="special-offers" className="max-container mt-12">
      <div className="flex flex-col justify-start gap-5 text-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Special Offers</span>
        </h2>
        <p className="text-slate-grey font-montserrat max-sm:text-lg">
          Check out our exclusive special offers and save big on your favorite products.
        </p>
      </div>
      <div className="relative mt-16">
        <Slider {...settings}>
          {specialOffers.map((offer, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:border-coral-red bg-orange-200">
                <img
                  src={offerImages[index] || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-4 text-center">
                  <h3 className="font-montserrat text-xl font-semibold">{offer.title}</h3>
                  <p className="text-slate-grey font-montserrat mt-2">{offer.description}</p>
                  <Button label={offer.buttonLabel} className="mt-4" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SpecialOffers;