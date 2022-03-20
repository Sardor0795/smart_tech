import React from "react";
import { Link } from "react-router-dom";
import right from "../../assets/img/right.svg";

const CardNews = ({ news }) => {
  return (
    <div className={"newsbox " + (news.img ? "img" : "")}>
      <div
        className="newsbox__img"
        style={{
          backgroundImage: `url('${news.img}')`,
        }}
      ></div>
      <div className="newsbox__item">
        <Link to="/" className="newsbox__title">
          {news.title}
        </Link>
        <div className="newsbox__text">{news.text}</div>
        <div className="d-flex justify-content-between align-items-center newsbox__bottom">
          <Link to="/" className="products__more">
            Подробнее <img alt="img" src={right} />
          </Link>
          <div className="newsbox__date">{news.date}</div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
