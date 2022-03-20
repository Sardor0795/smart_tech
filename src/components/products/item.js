import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/img/star.svg";
import comment from "../../assets/img/comment.svg";
import fav from "../../assets/img/like.svg";
import compare from "../../assets/img/compare.svg";
import cart from "../../assets/img/cart.svg";
import "./item.scss";
import img from "../../assets/img/product.jpg";

const Item = ({ product }) => {
  return (
    <div className="card">
      <div
        className="card__img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <span className="badge badge-success">Новинка</span>
        <span className="badge badge-danger">Хит продаж</span>
      </div>
      <div className="card__category">Сигвеи</div>
      <Link to="/" className="card__title">
        Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
      </Link>
      <div className="card__review">
        <img src={star} alt="img" />
        <img src={star} alt="img" />
        <img src={star} alt="img" />
        <img src={star} alt="img" />
        <img src={star} alt="img" />
        <span className="card__comments">
          <img alt="img" src={comment} /> (17)
        </span>
      </div>
      <div className="card__row mb-2">
        <div className="card__val">
          <div className="card__oldprice">5400 ₽</div>
          <div className="card__newprice">4990 ₽</div>
          <div className="card__sale">
            <span className="card__percent">20%</span>
            <span className="card__econom">— 1 000 ₽</span>
          </div>
        </div>
        <div className="card__btns">
          <button className="btn little">
            <img alt="img" src={fav} />
          </button>
          <button className="btn little">
            <img alt="img" src={compare} />
          </button>
        </div>
      </div>
      <div className="card__bottom">
        <button className="btn outline">Купить в 1 клик</button>
        <button className="btn">
          <img alt="img" src={cart} />
        </button>
      </div>
    </div>
  );
};

export default Item;
