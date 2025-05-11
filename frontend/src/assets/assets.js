import logo from "./logo.png";
import whiteLogo from "./logo_white.png";
import heroImage from "./hero-image.jpg";
import heroImage2 from "./hero-image2.jpg";
import profileIcon from "./profile.png";
import BannerImage from "./MainBanner.jpg";
import kidCat from "./kidCat.jpeg";
import menCat from "./menCat.jpeg";
import womenCat from "./womenCat.jpeg";
import CasualCat from "./casualCat.jpeg";
import oldMoney from "./oldMoneyTrend.jpeg";
import baggy from "./baggyTrend.jpeg";
import checked from "./checkedTrend.jpeg";
import tradional from "./traditionalTrend.jpeg";
import hm_image_1 from "./h&m_image_1.jpg";
import hm_image_2 from "./h&m_image_2.jpg";
import hm_image_3 from "./h&m_image_3.jpg";
import hm_image_4 from "./h&m_image_4.jpg";
import cartIcon from "./cart_icon.svg";
import addAddress from "./add_address_image.png";
import orders from "./orders.svg";
import productList from "./productList.svg";
import addProduct from "./addProduct.svg";
import uploadArea from "./upload_area.png";
import boxIcon from "./box_icon.png";

export const assets = {
  logo,
  whiteLogo,
  heroImage,
  heroImage2,
  profileIcon,
  BannerImage,
  kidCat,
  menCat,
  womenCat,
  CasualCat,
  oldMoney,
  baggy,
  checked,
  tradional,
  hm_image_1,
  hm_image_2,
  hm_image_3,
  hm_image_4,
  cartIcon,
  addAddress,
  orders,
  productList,
  addProduct,
  uploadArea,
  boxIcon,
};

export const categories = [
  {
    text: "Men's Wear",
    path: "men",
    image: menCat,
  },
  {
    text: "Women's Wear",
    path: "women",
    image: womenCat,
  },
  {
    text: "Kids's Wear",
    path: "kids",
    image: kidCat,
  },
  {
    text: "Casual",
    path: "casual",
    image: CasualCat,
  },
];

export const trends = [
  {
    text: "Old Money",
    path: "oldmoney",
    image: oldMoney,
  },
  {
    text: "Baggy",
    path: "baggy",
    image: baggy,
  },
  {
    text: "Checked",
    path: "checked",
    image: checked,
  },
  {
    text: "Traditional",
    path: "traditional",
    image: tradional,
  },
];

export const dummyProducts = [
  {
    _id: "001",
    name: "H&M Casual Shirt",
    category: "Men",
    brand: "H&M",
    offerPrice: 25,
    price: 40,
    image: [hm_image_1, hm_image_2, hm_image_3, hm_image_4],
    description: [
      "A stylish and comfortable casual shirt from H&M.",
      "Perfect for everyday wear.",
      "Made from high-quality cotton fabric.",
    ],
    inStock: true,
  },
  {
    _id: "001",
    name: "H&M Casual Shirt",
    category: "Men",
    brand: "H&M",
    offerPrice: 25,
    price: 40,
    image: [hm_image_1, hm_image_2, hm_image_3, hm_image_4],
    description: [
      "A stylish and comfortable casual shirt from H&M.",
      "Perfect for everyday wear.",
      "Made from high-quality cotton fabric.",
    ],
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
