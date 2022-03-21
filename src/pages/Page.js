import React from "react";
import { Route, Routes } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs";
import "../assets/css/news.scss";
import About from "../components/page/about";
import Contact from "../components/page/cantact";

const Page = () => {
  return (
    <div className="page">
      <div className="container">
        <BreadCrumbs />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Page;
