import React from 'react';
import securePaymentIcon from '../assets/icons/secure-payment.png'; // Ensure the path is correct
import moneyBackIcon from '../assets/icons/money-back.png'; // Ensure the path is correct

const services = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048314.png',
    title: 'Free Shipping',
    description: 'Get free shipping on all orders over $50.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    title: '24/7 Support',
    description: 'We offer 24/7 customer support for all your needs.',
  },
  {
    icon: moneyBackIcon, // Updated icon URL for Money Back Guarantee
    title: 'Money Back Guarantee',
    description: '30-day money back guarantee on all purchases.',
  },
  {
    icon: securePaymentIcon, // Updated icon URL for Secure Payment
    title: 'Secure Payment',
    description: 'Your payment information is processed securely.',
  },
];

const Services = () => {
  return (
    <section id="services" className="max-container mt-12">
      <div className="flex flex-col justify-start gap-5 text-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Services</span>
        </h2>
        <p className="text-slate-grey font-montserrat max-sm:text-lg">
          We offer a range of services to ensure you have the best shopping experience.
        </p>
      </div>
      <div className="grid gap-14 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 max-sm:mt-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            <h3 className="font-montserrat text-xl font-semibold">{service.title}</h3>
            <p className="text-center text-slate-grey font-montserrat">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;