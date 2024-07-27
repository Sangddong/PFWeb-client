"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div id="nav-wrap">
      <ul className="flex justify-between p-4">
        <li
          className="text-xl font-bold w-[120px] my-auto"
          onClick={() => {
            scrollToSection("main-wrap");
          }}
        >
          Sangddong
        </li>
        <li className="flex gap-8 my-auto">
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
        <li className="flex justify-end gap-4 my-auto w-[120px]">
          <Image
            src="/img/icons/mail.png"
            alt="mail"
            width={30}
            height={30}
            onClick={copyToClipBoard}
          />
          <Link href={"https://github.com/Sangddong"} target="blank">
            <Image
              src="/img/icons/github-mark-white.png"
              alt="github"
              width={25}
              height={25}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
