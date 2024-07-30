import React from "react";
import { portfolios } from "./PortfolioList";
import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import style from "./Portfolio.module.css";
import PFSlider from "./PFSlider/PFSlider";
import PFLayout from "./PFLayout/PFLayout";

function Portfolio() {
  return (
    <div id="portfolio-wrap">
      <div className={style.inner}>
        <Title>Portfolio</Title>
        <PFSlider portfolios={portfolios} />
      </div>
    </div>
  );
}

export default Portfolio;
