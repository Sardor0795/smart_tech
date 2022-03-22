import React from "react";
import "./index.scss";

const Feedback = ({ title }) => {
  const sendFeed = (event) => {
    event.preventDefault();
    let form = document.forms.feed;
    let data = {};
    let formData = new FormData(form);
    formData.forEach((value, name) => {
      data[name] = value;
    });
    form.reset();
    console.log(data);
  };

  return (
    <div className="feed">
      <div className="btitle">{title}</div>
      <form
        className="feed__form"
        name="feed"
        onSubmit={(event) => {
          sendFeed(event);
        }}
      >
        <div className="row">
          <div className="col-3 col-md-6 col-sm-12">
            <label>
              Имя
              <input type="text" placeholder="Введите имя" name="name" />
            </label>
            <label>
              Телефон
              <input
                type="text"
                placeholder="Введите номер телефон"
                name="phone"
              />
            </label>
          </div>
          <div className="col-5 col-md-6 col-sm-12">
            <label>
              Сообщение
              <textarea
                placeholder="Введите сообщение"
                name="text"
                className="feed__text"
              ></textarea>
            </label>
          </div>
          <div className="col-4 col-md-12 col-sm-12">
            </div>
          <div className="col-3 sm-order-2 col-md-6 col-sm-12">
            <button type="submit" className="feed__submit">
              Отправить
            </button>
          </div>
          <div className="col-5 sm-order-1 col-md-6 col-sm-12">
            <div className="filtr__radio">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                Отправляя данную форму вы соглашаетесь с политикой
                конфиденциальности
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
