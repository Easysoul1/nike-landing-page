import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import footerLogo from '../assets/images/footer.png'; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-container grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col items-start">
          <img src={footerLogo} alt="Company Logo" className="w-32 mb-4 rounded-xl" />
          <p className="text-gray-400">
            We provide the best quality products to our customers. Our mission is to ensure customer satisfaction with every purchase.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target='_blank' className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="https://x.com/easy_soul1" target='_blank' className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="https://instagram.com" target='_blank' className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="www.linkedin.com/in/adejumo-adedayo" target='_blank' className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">1234 Street Name, City, State, 12345</p>
          <p className="text-gray-400 mt-2">Email: adejumoadedayo350@gmail.com</p>
          <p className="text-gray-400 mt-2">Phone: (234) 7050205835 </p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} NIKE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;