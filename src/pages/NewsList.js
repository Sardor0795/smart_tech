import React from "react";
import BreadCrumbs from "../components/breadcrumbs";
import CardNews from "../components/news/card";

const NewsList = () => {
  let list = [
    {
      title: "Открытие нового магазина",
      text: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
      date: "05 июня 2021",
      img: "https://i.pinimg.com/564x/e9/a3/4d/e9a34d04e99536f30a2e4f452bb82048.jpg",
    },
    {
      title: "Открытие нового магазина",
      text: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
      date: "05 июня 2021",
      img: "https://i.pinimg.com/564x/e9/a3/4d/e9a34d04e99536f30a2e4f452bb82048.jpg",
    },
  ];
  return (
    <div className="container">
      <BreadCrumbs />
      <div className="btitle mb-3">Новости</div>
      <div className="row">
        {list.map((item) => (
          <div className="col-6 col-md-12 mb-2">
            <CardNews news={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
