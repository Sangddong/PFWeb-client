import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import style from "./Main.module.css";

function Main() {
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
      </LayoutPage>
    </div>
  );
}

export default Main;
