import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-300/30 rounded outline-none text-gray-300 focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const { axios, user, navigate } = useAppContext();

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, []);

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-300">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                placeholder="Firts Name"
                type="text"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipCode"
                type="number"
                placeholder="Zipcode"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="text"
              placeholder="Phone"
            />

            <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-secondary transition cursor-pointer uppercase">
              Save Address
            </button>
          </form>
        </div>
        <div className="">
          <img
            className="md:mr-16 mb-16 p-2 md:mt-0 w-[30vw] border-4 border-primary rounded-3xl"
            style={{
              boxShadow:
                "-35px -5px 150px #8024b5, 0px 0px  #8024b5, 0px 0px  #8024b5, 0px 0px  #8024b5",
            }}
            src={assets.addAddress}
            alt="add address"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
