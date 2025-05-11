import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      console.log(error);
      setIsSeller(false);
    }
  };

  // fetch user auth status, user data and Cart items
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth", {
        withCredentials: true,
      });
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error) {
      setUser(null);
    }
  };

  // fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Get Cart Item Count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // get Cart Total Amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  // Add Products to Cart
  const addToCart = (itemID) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemID]) {
      cartData[itemID] += 1;
    } else {
      cartData[itemID] = 1;
    }
    setCartItems(cartData);
    toast.success("Added To Cart");
  };

  // Update Cart Item
  const updateCartItem = (itemID, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemID] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  // remove product from cart
  const removeFromCart = (itemID) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemID]) {
      cartData[itemID] -= 1;
      if (cartData[itemID] === 0) {
        delete cartData[itemID];
      }
    }
    toast.success("Removed From Cart");
    setCartItems(cartData);
  };

  useEffect(() => {
    fetchProducts();
    fetchSeller();
    fetchUser();
  }, []);

  // UpdateDatabase Cart Items
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartItems });
        if (!data.success) {
          // toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (user) {
      updateCart();
    }
  }, [cartItems]);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    axios,
    fetchProducts,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
