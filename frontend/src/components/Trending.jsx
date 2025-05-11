import React from "react";
import { trends } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Trending = () => {
  const { navigate } = useAppContext();

  return (
    <div className="bg-primary text-text py-8 px-8 md:px-20 rounded-xl my-4">
      <h2 className="text-3xl font-semibold mb-10 tracking-widest font-inter">
        Trending Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {trends.map((trend, index) => (
          <div
            onClick={() => {
              navigate(`/products/${trend.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="bg-secondary p-2 rounded-xl hover:shadow-lg transition text-center"
          >
            {/* Updated image path */}
            <img
              src={trend.image}
              alt={trend.text}
              className="w-full h-56 object-cover rounded mb-3"
              style={{ objectPosition: "top" }}
            />
            <h4 className="font-bold font-poppins">{trend.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
