import React from 'react';

const Subscriber = () => {
  return (
    <section id="contact-us" className="max-container mt-12 p-6 bg-gray-100 rounded-lg w-full">
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Subscribe to our <span className="text-coral-red">Newsletter</span>
        </h2>
        <p className="text-slate-grey font-montserrat max-sm:text-lg">
          Stay updated with our latest news, products, and exclusive offers.
        </p>
        <form className="w-full max-w-md mt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            
            <input
              type="name"
              placeholder="Enter your name"
              className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-coral-red "
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-coral-red"
              required
            />
            <button
              type="submit"
              className="p-3 bg-coral-red text-white font-semibold rounded-lg hover:bg-coral-red-dark transition-all duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscriber;