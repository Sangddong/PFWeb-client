"use client";
import React, { useState } from "react";
import { Portfolio } from "../PortfolioList";
import style from "./PFSlider.module.css";
import PFLayout from "../PFLayout/PFLayout";
import Image from "next/image";

interface SliderProps {
  portfolios: Portfolio[];
}

const PFSlider: React.FC<SliderProps> = ({ portfolios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideClick = (direction: "prev" | "next", scroll?: true) => {
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

  return (
    <div className={style.slider}>
      <Image
        src="/img/prev.png"
        alt="prev"
        width={40}
        height={40}
        onClick={() => handleSlideClick("prev")}
        className={style.btn}
      />
      <PFLayout portfolio={currentPortfolio} />
      <Image
        src="/img/next.png"
        alt="prev"
        width={40}
        height={40}
        onClick={() => handleSlideClick("next")}
        className={style.btn}
      />
    </div>
  );
};

export default PFSlider;
