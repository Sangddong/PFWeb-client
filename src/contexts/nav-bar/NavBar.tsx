"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText("hehe74029@gmail.com");
    alert("복사 완");
  };
  return (
    <div id="nav-wrap">
      <ul className="flex justify-between p-4">
        <li className="text-xl font-bold w-[120px] my-auto">Sangddong</li>
        <li className="flex gap-8 my-auto">
          <p>About Me</p>
          <p>My Skills</p>
          <p>Portfolio</p>
          <p>My Sites</p>
          <p>Comments</p>
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
