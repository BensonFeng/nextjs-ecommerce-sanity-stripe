import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className="products-container">
        {["product1", "product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
