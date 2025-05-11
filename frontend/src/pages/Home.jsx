import React from "react";
import MainBanner from "../components/MainBanner";
import Category from "../components/Category";
import Trending from "../components/Trending";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <Category />
      <Trending />
    </>
  );
};

export default HomePage;
