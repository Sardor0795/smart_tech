import React from "react";
import BreadCrumbs from "../components/breadcrumbs";
import Item from "../components/products/item";
import "../assets/css/fav.scss";

const Seen = () => {
  return (
    <div>
      <div className="container">
        <BreadCrumbs />
        <div className="btitle mb-3">Просмотренные товары</div>
        <div className="row mb-2 justify-content-between">
          <select className="select">
            <option>Все товары</option>
          </select>
          <select className="select">
            <option>Сначала дорогие</option>
          </select>
        </div>
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Seen;
