import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./slider.scss";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <Splide
        className="slider"
        options={{
          arrows: false,
          autoplay: true,
          type: "loop",
        }}
      >
        <SplideSlide>
          <img src={require("../../assets/img/slider.jpg")} alt="Img 1" />
          <div className="slider__text">
            <div className="slider__title">Apple Watch Series 6</div>
            <div className="slider__info">уже в наличии</div>
            <Link to="/">Подробное</Link>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={require("../../assets/img/slider.jpg")} alt="Img 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={require("../../assets/img/slider.jpg")} alt="Img 1" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
