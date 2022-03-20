import React, { useState } from "react";
import home from "../../assets/img/m-home.svg";
import catalog from "../../assets/img/m-catalog.svg";
import search from "../../assets/img/m-search.svg";
import more from "../../assets/img/m-more.svg";
import cart from "../../assets/img/m-cart.svg";
import { NavLink, Link } from "react-router-dom";
import "./index.scss";
import eye from "../../assets/img/eye.svg";
import like_red from "../../assets/img/like_red.svg";
import compare from "../../assets/img/compare.svg";

const Mobile = () => {
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

  const [catalogToggle, setCatalogToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [moreToggle, setMoreToggle] = useState(false);

  return (
    <div className="show-moblie hide">
      <div className="mobile">
        <NavLink to="/" className="mobile__link">
          <img src={home} alt="" />
          Главная
        </NavLink>
        <button
          className="mobile__link"
          onClick={() => {
            setCatalogToggle(!catalogToggle);
            setMoreToggle(false);
            setSearchToggle(false);
          }}
        >
          <img src={catalog} alt="" />
          Каталог
        </button>
        <NavLink to="/cart" className="mobile__link">
          <img src={cart} alt="" />
          Корзина
        </NavLink>
        <button
          className="mobile__link"
          onClick={() => {
            setCatalogToggle(false);
            setMoreToggle(false);
            setSearchToggle(!searchToggle);
          }}
        >
          <img src={search} alt="" />
          Поиск
        </button>
        <button
          className="mobile__link"
          onClick={() => {
            setCatalogToggle(false);
            setMoreToggle(!moreToggle);
            setSearchToggle(false);
          }}
        >
          <img src={more} alt="" />
          Ещё
        </button>
      </div>
      <div className={"modal " + (catalogToggle ? "show" : "")}>
        <div className="modal__box">
          <div className="modal__title mb-2">
            Каталог
            <button
              className="modal__close"
              onClick={() => {
                setCatalogToggle(!catalogToggle);
              }}
            ></button>
          </div>
          <div className="modal__body">
            <ul className="modal__catalog">
              {list.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.link}>
                    <img
                      src={require("../../assets/img/" + item.icon)}
                      alt="img"
                    />
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={"modal " + (searchToggle ? "show" : "")}>
        <div className="modal__box">
          <div className="modal__title mb-2">
            Поиск
            <button
              className="modal__close"
              onClick={() => {
                setSearchToggle(!searchToggle);
              }}
            ></button>
          </div>
          <div className="modal__body">
            <form className="modal__search">
              <input
                type="text"
                placeholder="Введите запрос, например «Smart balance»"
              />
            </form>
          </div>
        </div>
      </div>
      <div className={"modal " + (moreToggle ? "show" : "")}>
        <div className="modal__box">
          <div className="modal__title mb-2">
            Ещё
            <button
              className="modal__close"
              onClick={() => {
                setCatalogToggle(false);
                setSearchToggle(false);
                setMoreToggle(!moreToggle);
              }}
            ></button>
          </div>
          <div className="modal__body">
            <div className="modal__btns">
              <Link to="/" className="btn no">
                <span className="count">13</span>
                <img alt="img" src={eye} />
              </Link>
              <Link to="/" className="btn no">
                <span className="count">13</span>
                <img alt="img" src={like_red} />
              </Link>
              <Link to="/" className="btn no ">
                <span className="count">13</span>
                <img alt="img" src={compare} />
              </Link>
            </div>

            <ul className="modal__more">
              <li>
                <Link to="/">О компании</Link>
              </li>
              <li>
                <Link to="/">Акции</Link>
              </li>
              <li>
                <Link to="/">Рассрочка 0–0-12</Link>
              </li>
              <li>
                <Link to="/">Сервис и ремонт</Link>
              </li>
              <li>
                <Link to="/">Опт/дропшиппинг</Link>
              </li>
              <li>
                <Link to="/">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
