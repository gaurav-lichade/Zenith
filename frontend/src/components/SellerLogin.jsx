import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/seller/login", {
        email,
        password,
      });
      if (data.success) {
        setIsSeller(true);
        // localStorage.setItem("seller", JSON.stringify(data.seller));
        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-300"
      >
        <div
          className="flex flex-col gap-7 m-auto items-start p-8 py-12 min-w-80 sm:min-w-80 bg-black
         rounded-lg shadow-xl border border-gray-500"
        >
          <p className="text-2xl font-medium m-auto text-primary">
            Seller
            <span className="text-gray-300"> Login</span>
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Your Email"
              className="border border-gray-500 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter Your Password"
              className="border border-gray-500 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <button className="bg-primary hover:bg-secondary text-white w-full py-2 rounded-md cursor-pointer">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
