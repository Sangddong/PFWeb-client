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
    const handleClickOutside = (e) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={sideBar ? style.sideBar : style.nav} ref={sideBarRef}>
      <ul className={sideBar ? style.sideBarWrap : style.navWrap}>
        <li
          onClick={() => {
            scrollToSection("main-wrap");
          }}
        >
          Sangddong
        </li>
        <li className={sideBar ? style.sidebarMenu : style.navMenu}>
          <p onClick={() => scrollToSection("about-me-wrap")}>About Me</p>
          <p onClick={() => scrollToSection("my-skills-wrap")}>My Skills</p>
          <p onClick={() => scrollToSection("portfolio-wrap")}>Portfolio</p>
          <p onClick={() => scrollToSection("my-sites-wrap")}>My Sites</p>
          <p onClick={() => scrollToSection("comments-wrap")}>Comments</p>
        </li>
        <li className={sideBar ? style.sideBarIcons : style.navIcons}>
          <Link href={"mailto: hehe74029@gmail.com"}>
            <Image
              src="/img/icons/mail.png"
              alt="mail"
              width={30}
              height={30}
              onClick={copyToClipBoard}
            />
          </Link>
          <Link href={"https://github.com/Sangddong"} target="blank">
            <Image
              src="/img/icons/github-mark-white.png"
              alt="github"
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li
          className={sideBar ? style.navButton : style.sideBarButton}
          onClick={() => setSideBar(!sideBar)}
        >
          <Image src="/img/menu.png" alt="menu" width={4} height={20} />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
