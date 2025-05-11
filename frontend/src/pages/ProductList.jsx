import React from "react";

const Product = [
  {
    image:
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1669850858863-6fe7bf233483?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632226390535-2f02c1a93541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1663577270633-cd8ff58940b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyZW5keSUyMG1lbiUyMG91dGZpdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://i.pinimg.com/236x/8e/58/de/8e58de6f719f4813210163b1b6c650ca.jpg",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOytii2yRil8jhisKOmmK4sXfPGBY2g68w7MBlWUUBFINGiCqruM9gbbvobXxxAsAAuVg&usqp=CAU",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7u8CDGrMCb_tVBChlEZju2tWuE3dH6D13D6WOT5ZU_2mUs86GSsFHndvZoLfql47_-o&usqp=CAUhttps://i.pinimg.com/170x/2b/65/a8/2b65a87933db5893870d823cac0f5edd.jpg",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/maroon-t-shirt-with-blue-jeans-bewakoof-blog-2-1604989073.jpg",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17357388/2023/1/13/bc163292-c398-4477-b731-7794d1a58abb1673583656025-The-Indian-Garage-Co-Men-Shirts-6141673583655491-1.jpg",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
  {
    image:
      "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dwae8de98f/images/feeds/UC135308.jpg",
    price: "1299",
    name: "Men's Sneakers",
    description: "Comfortable sneakers perfect for daily wear.",
  },
];

const ProductList = () => {
  return (
    <>
      <div className="product-list flex flex-wrap justify-center gap-16 px-4 py-10 mb-20 bg-[#0b0b0b] rounded-lg">
        {Product.map((item, index) => (
          <div
            className="product-card w-56 flex flex-col gap-1 shadow shadow-[#515151] rounded-md"
            key={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="product-image h-64 w-72 object-cover rounded-sm"
            />
            <h3 className="product-name font-bold text-text">{item.name}</h3>
            <p className="product-description tracking-tight leading-none text-sm font-medium text-[#9a9a9a]">
              {item.description}
            </p>
            <p className="product-price text-primary font-bold font-[Poppins]">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
