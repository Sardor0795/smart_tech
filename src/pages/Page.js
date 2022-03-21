import React from "react";
import { NavLink } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs";
import "../assets/css/news.scss";

const Page = () => {
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
      icon: "catmore.svg",
      title: "и многое другое",
      link: "",
    },
  ];
  return (
    <div className="page">
      <div className="container">
        <BreadCrumbs />
        <div className="btitle mb-3">О нас</div>
        <div className="row">
          <div className="col-9 col-md-12">
            <p>
              Официальный представитель производителей эксклюзивного
              электротранспорта и Смарт-Техники, Созданная в 2015 году компания
              Смарт-Техника стала одним из первых дистрибьютеров персонального
              электротранспорта в России и уже более трёх лет является
              официальным представителем таких производителей эксклюзивного
              электронного транспорта, как Yamato, <b>SmartONE</b>,{" "}
              <b>HALTEN</b> и <b>Kugoo</b>
            </p>
            <h5>Постоянно растущая и развивающаяся Компания</h5>
            <p>
              На сегодняшней день Компания Смарт-Техника обладает собственным
              розничным магазинами в г. Санкт-Петербурге, официальными
              представительствами в различных районах г. СПб и Ленобласти, сетью
              складов в Петербурге, Москве и других крупных городах России.
              Мы постоянно растём и развиваемся. Доставка наших товаров
              осуществляется во все регионы Страны!
            </p>
            <h5>Самый большой выбор персонального электротранспорта</h5>
            <p>
              Расширение ассортимента происходит стабильно раз в полгода,
              и вы всегда найдёте у нас самые эксклюзивные модели электронного
              транспорта нового поколения!
            </p>
          </div>
        </div>
      </div>
      <div className="page__category">
        <div className="container">
          <h5 className="mb-3">Всегда в наличии большой выбор:</h5>
          <div className="page__row">
            {list.map((item, index) => (
              <NavLink to={item.link} key={index}>
                <img src={require("../assets/img/" + item.icon)} alt="img" />
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
