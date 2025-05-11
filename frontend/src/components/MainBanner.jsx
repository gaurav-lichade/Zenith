import React from "react";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div
      className="relative h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${assets.BannerImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-6 font-inter text-white">
          Discover <span className="text-secondary">Your</span> Style
        </h1>
        <p className="text-lg mb-6 font-inter text-accent">
          Shop the latest trends for Men, Women, and Kids. <br /> Premium
          quality clothing at unbeatable prices.
        </p>
        {/* <button className="px-6 py-3 bg-[#E0C097] text-white rounded-xl hover:bg-[#cdb082] transition">
          Shop Now
        </button> */}
      </div>
    </div>
  );
};

export default MainBanner;
