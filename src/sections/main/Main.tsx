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
            <p>
              Hi, I’m Sanghee Park.
              <br />
              I am a full-stack web developer based on Node.js.
              <br />
              Let&apos;s create wonderful websites together!
              <br />
              Thank you for visiting, and please hit the like button below!
            </p>
          </li>
          <li id="3d"></li>
        </ul>
        <Banner />
        <div className={style.explore} onClick={() => scrollToSection}>
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
