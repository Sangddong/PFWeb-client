"use client";
import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import style from "./Main.module.css";
import Banner from "../Banner/Banner";
import Image from "next/image";

function Main() {
  const scrollToSection = () => {
    const section = document.getElementById("about-me-wrap");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="main-wrap">
      <LayoutPage>
        <ul className={style.main}>
          <li>
            <div className={style.welcome}>Welcome to My</div>
            <div className={style.welcome}>
              <span>Portfolio</span>
              <span>Website</span>
            </div>
          </li>
          <li id="3d"></li>
        </ul>
        <Banner />
        <div className={style.explore}>
          <span onClick={() => scrollToSection()}>explore</span>
          <div onClick={() => scrollToSection()} className={style.pointer}>
            <Image
              src="/img/pointer.png"
              alt="pointer"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default Main;
