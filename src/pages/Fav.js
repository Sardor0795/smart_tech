import React from "react";
import { NavLink } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs";
import Item from "../components/products/item";

const Fav = () => {
  return (
    <div>
      <div className="container">
        <BreadCrumbs />
        <div className="btitle mb-3">Избранное</div>
        <div className="row">
          <div className="col-3 col-md-12">
            <ul className="menu">
              <li>
                <NavLink to="/">Общие сведения</NavLink>
              </li>
              <li>
                <NavLink to="/">Личные данные</NavLink>
              </li>
              <li>
                <NavLink to="/">История покупок</NavLink>
              </li>
              <li>
                <NavLink to="/">Избранное</NavLink>
              </li>
              <li>
                <NavLink to="/">Сменить пароль</NavLink>
              </li>
              <li>
                <NavLink to="/">Выйти</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-9 col-md-12">
            <div className="d-flex justify-content-between">
              <select className="select">
                <option>Все товары</option>
              </select>
              <select className="select">
                <option>Сначала дорогие</option>
              </select>
            </div>
            <div className="row col3">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;
