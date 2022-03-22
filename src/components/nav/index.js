import React, { useState } from "react";
import navcat from "../../assets/img/menu.svg";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Nav = () => {
  const list = [
    {
      icon: "cat1.svg",
      title: "Гироскутеры",
      link: "",
    },
    {
      icon: "cat2.svg",
      title: "Электросамокаты",
      link: "",
    },
    {
      icon: "cat1.svg",
      title: "Гироскутеры",
      link: "",
    },
    {
      icon: "cat2.svg",
      title: "Электросамокаты",
      link: "",
    },
    {
      icon: "cat1.svg",
      title: "Гироскутеры",
      link: "",
    },
    {
      icon: "cat2.svg",
      title: "Электросамокаты",
      link: "",
    },
  ];

  const [catToggle, setCatToggle] = useState(false);
  return (
    <div className="nav">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button
              className="nav__cat"
              onClick={() => {
                setCatToggle(!catToggle);
              }}
            >
              <img src={navcat} alt="img" /> Каталог товаров
            </button>
          </div>
          <div className="col-9 d-flex">
            <ul className="nav__menu">
              <li>
                <NavLink to="/about">О компании</NavLink>
                <NavLink to="/promo">Акции</NavLink>
                <NavLink to="/credit">Рассрочка 0|0|18</NavLink>
                <NavLink to="/">Сервис и гарантия</NavLink>
                <NavLink to="/">Опт/дропшиппинг</NavLink>
                <NavLink to="/contact">Контакты</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <ul className={`nav__list ${catToggle ? "show" : ""}`}>
          {list.map((item, index) => (
            <li key={index}>
              <NavLink to="/category">
                <img src={require("../../assets/img/" + item.icon)} alt="img" />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
