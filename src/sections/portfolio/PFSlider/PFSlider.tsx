"use client";
import React, { useState } from "react";
import { Portfolio } from "../PortfolioList";
import style from "./PFSlider.module.css";
import PFLayout from "../PFLayout/PFLayout";

interface SliderProps {
  portfolios: Portfolio[];
}

const PFSlider: React.FC<SliderProps> = ({ portfolios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideClick = (direction: "prev" | "next") => {
    setCurrentIndex((prevIndex) =>
      direction === "prev"
        ? prevIndex === 0
          ? portfolios.length - 1
          : prevIndex - 1
        : prevIndex === portfolios.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const currentPortfolio = portfolios[currentIndex];
  const prevPortfolio =
    portfolios[(currentIndex - 1 + portfolios.length) % portfolios.length];
  const nextPortfolio = portfolios[(currentIndex + 1) % portfolios.length];

  return (
    <div className={style.slider}>
      <div
        className={`${style.slide} ${style.prevSlide}`}
        onClick={() => handleSlideClick("prev")}
      >
        <PFLayout portfolio={prevPortfolio} />
      </div>
      <div className={`${style.slide} ${style.currentSlide}`}>
        <PFLayout portfolio={currentPortfolio} />
      </div>
      <div
        className={`${style.slide} ${style.nextSlide}`}
        onClick={() => handleSlideClick("next")}
      >
        <PFLayout portfolio={nextPortfolio} />
      </div>
    </div>
  );
};

export default PFSlider;
