import React from 'react';

// Import images
import customer1 from '../assets/customer/customer1.jpg';
import customer2 from '../assets/customer/customer2.jpg';
import customer3 from '../assets/customer/customer3.jpg';
import customer4 from '../assets/customer/customer4.jpg';
import customer5 from '../assets/customer/customer5.jpg';

const customerReviews = [
  {
    image: customer1,
    name: 'John Doe',
    rating: 5,
    review: 'Great product! Highly recommend.',
  },
  {
    image: customer2,
    name: 'Jane Smith',
    rating: 4,
    review: 'Very comfortable and stylish.',
  },
  {
    image: customer3,
    name: 'Sam Wilson',
    rating: 5,
    review: 'Excellent quality and fast shipping.',
  },
  {
    image: customer4, 
    name: 'Adejumo Adedayo',
    rating: 5,
    review: 'I love the product. It fits perfectly.',
  },
  {
    image: customer5,
    name: 'Alice Johnson',
    rating: 4,
    review: 'Great customer service!',
  },
];

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container mt-12">
      <div className="flex flex-col justify-start gap-5 text-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Customer Reviews</span>
        </h2>
        <p className="text-slate-grey font-montserrat max-sm:text-lg">
          Hear what our customers have to say about our products and services.
        </p>
      </div>
      <div className="grid gap-14 mt-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 max-sm:mt-8">
        {customerReviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:border-coral-red"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="font-montserrat text-xl font-semibold">
              {review.name}
            </h3>
            <div className="flex items-center mt-2">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="text-slate-grey font-montserrat mt-2">
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;