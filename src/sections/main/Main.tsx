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
              <span>Protfolio</span>
              <span>Website</span>
            </div>
          </li>
          <li id="3d"></li>
        </ul>
        <Banner />
        <div className={style.explore} onClick={() => scrollToSection()}>
          <span>explore</span>
          <div className={style.pointer}>
            <Image
              src="/img/pointer.png"
              alt="pointer"
              width={15}
              height={15}
            />
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default Main;
