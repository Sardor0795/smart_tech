import React from "react";
import Feedback from "../feedback";

const Optom = () => {
  return (
    <>
      <div className="container">
        <div className="btitle mb-3">Оптом</div>
        <div className="row">
          <div className="col-9 col-md-12">
            <p>
              Наш интернет-магазин специализируется на продаже различных моделей
              электротранспорта:
            </p>

            <ul className="circle">
              <li>гироскутеров</li>
              <li>мини-сигвеев </li>
              <li>моноколёс</li>
              <li>электросамокатов</li>
            </ul>
            <p>
              Мы продаём гироскутеры как в розницу, так и оптом, по специальным
              ценам. Приглашаем к сотрудничеству оптовых покупателей!{" "}
            </p>

            <p>
              Вы хотите купить гироскутер в Москве оптом? Познакомьтесь с нашими
              оптовыми ценами, и вы убедитесь: наше предложение действительно
              выгодное. С нами сотрудничают десятки партнёров в Москве и
              регионах, закупая гироскутеры оптом: цена намного ниже розничной,
              что позволяет получать хороший доход от бизнеса.
            </p>
            <p>
              Продавая гироскутеры оптом в Москве, мы готовы организовать
              доставку любых моделей и в регионы России. Сотрудничайте с нами –
              это выгодно!{" "}
            </p>
            <p>Самые выгодные цены - от 5000 руб.!</p>
          </div>
        </div>
        <Feedback title='Заполните форму и мы свяжемся с вами'/>
      </div>
    </>
  );
};

export default Optom;
