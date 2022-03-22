import React from "react";
import { Route, Routes } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs";
import "../assets/css/news.scss";
import About from "../components/page/about";
import Contact from "../components/page/cantact";
import Credit from "../components/page/credit";
import Optom from "../components/page/optom";

const Page = () => {
  return (
    <div className="page">
      <div className="container">
        <BreadCrumbs />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/optom" element={<Optom />} />
      </Routes>
    </div>
  );
};

export default Page;
