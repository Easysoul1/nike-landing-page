import React from 'react';

const customerReviews = [
  {
    image: '/path/to/customer1.jpg',
    name: 'Ariella Dorsey',
    rating: 5,
    review: 'Great product! Highly recommend.',
  },
  {
    image: '/path/to/customer2.jpg',
    name: 'Brock Christensen',
    rating: 4,
    review: 'Good quality, but a bit expensive.',
  },
  {
    image: '/path/to/customer3.jpg',
    name: 'Isaac Whitaker',
    rating: 5,
    review: 'Excellent service and fast delivery.',
  },
  {
    image: '/path/to/customer4.jpg',
    name: 'Lila Thompson',
    rating: 4,
    review: 'Very comfortable and stylish shoes.',
  },
  {
    image: '/path/to/customer5.jpg',
    name: 'Ethan Brown',
    rating: 5,
    review: 'Amazing quality and great customer support.',
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
          <div key={index} className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:border-coral-red">
            <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="font-montserrat text-xl font-semibold">{review.name}</h3>
            <div className="flex items-center mt-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.465 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-center text-slate-grey font-montserrat mt-4">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;