import React from "react";
import Slider from "../components/home/slider";
import CardList from "../components/news/card-list";
import Product from "../components/products/products";
import Promo from "../components/promo";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-12"></div>
          <div className="col-9 col-md-12">
            <Slider />
          </div>
        </div>
      </div>
      <Product />
      <div className="container">
        <div className="row mb-8 mb-sm-0">
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
          <div className="col-6 col-md-12 mb-2">
            <Promo />
          </div>
        </div>
      </div>
      <CardList />
    </>
  );
};

export default Home;
