"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./NavBar.module.css";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarRef = useRef(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setSideBar(false);
  };

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText("hehe74029@gmail.com");
    alert("복사되었습니다!");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <li className={style.desktopMenu}>
          <p onClick={() => scrollToSection("about-me-wrap")}>About Me</p>
          <p onClick={() => scrollToSection("my-skills-wrap")}>My Skills</p>
          <p onClick={() => scrollToSection("portfolio-wrap")}>Portfolio</p>
          <p onClick={() => scrollToSection("my-sites-wrap")}>My Sites</p>
          <p onClick={() => scrollToSection("comments-wrap")}>Comments</p>
        </li>
        <li className={style.desktopIcons}>
          <Link href={"mailto: hehe74029@gmail.com"}>
            <Image
              src="/img/icons/mail.png"
              alt="mail"
              width={35}
              height={35}
              onClick={copyToClipBoard}
            />
          </Link>
          <Link href={"https://github.com/Sangddong"} target="blank">
            <Image
              src="/img/icons/github-mark-white.png"
              alt="github"
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li className={style.menuIcon} onClick={() => setSideBar(!sideBar)}>
          <Image
            src="/img/menu.png"
            alt="menu"
            layout="fill"
            objectFit="cover"
            className={style.menuImg}
          />
        </li>
      </ul>
      {sideBar && (
        <div className={style.sideBar} ref={sideBarRef}>
          <div className={style.sideBarMenu}>
            <p onClick={() => scrollToSection("about-me-wrap")}>About Me</p>
            <p onClick={() => scrollToSection("my-skills-wrap")}>My Skills</p>
            <p onClick={() => scrollToSection("portfolio-wrap")}>Portfolio</p>
            <p onClick={() => scrollToSection("my-sites-wrap")}>My Sites</p>
            <p onClick={() => scrollToSection("comments-wrap")}>Comments</p>
          </div>
          <div className={style.sideBarIcons}>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
