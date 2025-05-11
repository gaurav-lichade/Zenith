import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-text py-8 px-8 md:px-20 mt-10 border-t-2 border-secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img src={assets.logo} className="h-24" alt="" />
          <p className="text-sm text-center">
            Zenith delivers a secure, reliable, and seamless shopping experience
            with trusted products and quick customer <br /> support — anytime,
            anywhere.
          </p>
        </div>
        <div className="ms-10">
          <h4 className="font-medium mb-2 text-xl">Quick Links</h4>
          <ul className="text-md space-y-2">
            <li className=" hover:text-gray-400 cursor-pointer">Shop</li>
            <li className=" hover:text-gray-400 cursor-pointer">Men</li>
            <li className=" hover:text-gray-400 cursor-pointer">Women</li>
            <li className=" hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 font-inter">Subscribe</h4>
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded w-full text-text"
          />
          <button className="mt-2 w-full bg-primary text-white py-2 rounded hover:bg-secondary">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        &copy; 2025 Zenith. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
