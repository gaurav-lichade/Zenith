import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex sticky top-0 z-50 justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-1 text-text bg-background transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-16" src={assets.logo} alt="Logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kids</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.cartIcon} alt="cart" className="w-8 opacity-80" />
          <button className="absolute -top-1 -right-2 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-secondary transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profileIcon} alt="profileImage" className="w-10" />
            <ul className="hidden group-hover:block absolute top-10 right-0 text-black bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("UserProfile")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Profile
              </li>
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                MyOrder
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="flex
      items-center gap-6 sm:hidden"
      >
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.cartIcon} alt="cart" className="w-6 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className=""
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-primary/50 shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink
            className="border-b-3 border-transparent hover:border-b-3 hover:border-primary"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="border-b-3 border-transparent hover:border-b-3 hover:border-primary"
            to="/products"
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            className="border-b-3 border-transparent hover:border-b-3 hover:border-primary"
            to="/men"
            onClick={() => setOpen(false)}
          >
            Men
          </NavLink>
          <NavLink
            className="border-b-3 border-transparent hover:border-b-3 hover:border-primary"
            to="/women"
            onClick={() => setOpen(false)}
          >
            Women
          </NavLink>
          <NavLink
            className="border-b-3 border-transparent hover:border-b-3 hover:border-primary"
            to="/kids"
            onClick={() => setOpen(false)}
          >
            Kids
          </NavLink>
          {user && (
            <NavLink
              className="border-b-3 border-transparent hover:border-b-3 hover:border-primary"
              to="/myorder"
              onClick={() => setOpen(false)}
            >
              My Order
            </NavLink>
          )}

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
