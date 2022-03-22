import React from "react";
import CreditImg from "../../assets/img/credit.jpg";
import "./page.scss";

const Credit = () => {
  return (
    <div>
      <div className="container">
        <div className="btitle mb-3">Рассрочка 0|0|18</div>
        <div className="row">
          <div className="col-9 col-md-12">
            <img src={CreditImg} alt="" />
            <h5>Как работает рассрочка</h5>
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
            <div className="credit">
              <form className="credit__form">
                <h5>Оформить РАССРОЧКУ</h5>
                <label>
                  Имя
                  <input type="text" />
                </label>
                <label>
                  Номер телефона
                  <input type="text" />
                </label>
                <button type="submit">Отправить</button>
              </form>
              <div className="credit__info">
                <h5>
                  Мобильное приложение <br /> «Совкомбанк – Халва»
                </h5>
                <p>
                  Мобильный банковский офис, который всегда с вами:
                  <ul className="circle">
                    <li>контроль вашей карты «Халва» </li>
                    <li>наиболее востребованные банковские функции</li>
                    <li>круглосуточный чат с поддержкой</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
