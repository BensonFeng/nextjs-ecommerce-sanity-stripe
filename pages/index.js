import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>speaker of many variations passages</p>
      </div>
      <div className="products-container">
        {["product1", "product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
