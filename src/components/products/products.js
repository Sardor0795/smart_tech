import React from "react";
import { Link } from "react-router-dom";
import right from "../../assets/img/right.svg";
import Item from "./item";

const Product = ({ title, link, products }) => {
  return (
    <div className="products">
      <div className="container">
        <div className="d-flex mb-4 align-items-center">
          <div className="btitle">Новинки</div>
          <Link to="/" className="products__more">
            Все товары <img alt="img" src={right} />
          </Link>
        </div>
        <div className="d-flex">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
      </div>
    </div>
  );
};

export default Product;
