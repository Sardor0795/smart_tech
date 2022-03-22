import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import cart from "../../assets/img/cart.svg";
import eye from "../../assets/img/eye.svg";
import like from "../../assets/img/like.svg";
import compare from "../../assets/img/compare.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-6">
            <Link to="/" className="header__logo">
              <img src={logo} alt="img" />
            </Link>
          </div>
          <div className="col-9 col-sm-6 d-flex align-items-center">
            <div className="header__contact">
              <a href="tel:+78126605054">+7 (812) 660-50-54</a>
              <a href="tel:+78126605054">+7 (958) 111-95-03</a>
              <div className="header__worktime">
                Пн-вс: с 10:00 до 21:00
              </div>
            </div>
            <form className="header__search">
              <button>
                <img src={search} alt="img" />
              </button>
              <input placeholder="Поиск" type="text"></input>
            </form>
            <Link to="/seen" className="btn no">
              <img alt="img" src={eye} />
            </Link>
            <Link to="/fav" className="btn no">
              <img alt="img" src={like} />
            </Link>
            <Link to="/compare" className="btn no ">
              <img alt="img" src={compare} />
            </Link>
            <Link to="/cart" className="btn no cart">
              <img alt="img" src={cart} />
            </Link>
            <button className="btn auth">Войти</button>
          </div>
        </div>
      </div>
    </header>
  );
};





export default Header;
