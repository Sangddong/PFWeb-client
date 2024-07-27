"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./NavBar.module.css";

function NavBar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText("hehe74029@gmail.com");
    alert("복사 완");
  };

  return (
    <div className={style.nav}>
      <ul>
        <li
          id="main-logo"
          onClick={() => {
            scrollToSection("main-wrap");
          }}
        >
          Sangddong
        </li>
        <li>
          <p
            onClick={() => {
              scrollToSection("about-me-wrap");
            }}
          >
            About Me
          </p>
          <p
            onClick={() => {
              scrollToSection("my-skills-wrap");
            }}
          >
            My Skills
          </p>
          <p
            onClick={() => {
              scrollToSection("portfolio-wrap");
            }}
          >
            Portfolio
          </p>
          <p
            onClick={() => {
              scrollToSection("my-sites-wrap");
            }}
          >
            My Sites
          </p>
          <p
            onClick={() => {
              scrollToSection("comments-wrap");
            }}
          >
            Comments
          </p>
        </li>
        <li>
          <Image
            src="/img/icons/mail.png"
            alt="mail"
            width={35}
            height={35}
            onClick={copyToClipBoard}
          />
          <Link href={"https://github.com/Sangddong"} target="blank">
            <Image
              src="/img/icons/github-mark-white.png"
              alt="github"
              width={30}
              height={30}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
