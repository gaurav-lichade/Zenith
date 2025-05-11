import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Category = () => {
  const { navigate } = useAppContext();

  return (
    <div className="py-12 md:px-20">
      <h2 className="text-3xl font-semibold mb-5 tracking-widest font-inter text-text mt-5">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {categories.map((category, index) => (
          <div
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="bg-primary rounded-xl shadow hover:shadow-lg hover:bg-secondary transition text-center cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-108 transition  w-full h-64 rounded-t-lg mb-4"
              style={{ objectPosition: "top", objectFit: "cover" }}
            />

            <h3 className="text-xl font-inter text-text font-medium pb-3">
              {category.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
