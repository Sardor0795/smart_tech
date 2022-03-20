import React from "react";
import CardNews from "./card";
import { Link } from "react-router-dom";
import right from "../../assets/img/right.svg";
import "./index.scss";

const CardList = () => {
  let list = [
    {
      title: "Открытие нового магазина",
      text: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
      date: "05 июня 2021",
    },
    {
      title: "Открытие нового магазина",
      text: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
      date: "05 июня 2021",
    },
  ];

  return (
    <div>
      <div className="products">
        <div className="container">
          <div className="d-flex mb-4 align-items-center">
            <div className="btitle">Новинки</div>
            <Link to="/news" className="products__more">
              Читать все <img alt="img" src={right} />
            </Link>
          </div>
          <div className="row">
            {list.map((item) => (
              <div className="col-6 col-md-12 mb-2">
                <CardNews news={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
