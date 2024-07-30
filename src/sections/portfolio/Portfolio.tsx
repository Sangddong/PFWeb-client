import React from "react";
import PFLayout from "./PFLayout/PFLayout";
import { Homelog, Sweatier } from "./PortfolioList";
import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import style from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div id="portfolio-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>Portfolio</Title>
          <PFLayout portfolio={Sweatier} />
          <PFLayout portfolio={Homelog} />
        </div>
      </LayoutPage>
    </div>
  );
}

export default Portfolio;
