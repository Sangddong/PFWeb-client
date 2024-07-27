import React from "react";
import Image from "next/image";

function NavBar() {
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
          <Image src="/img/icons/mail.png" alt="mail" width={30} height={30} />
          <Image
            src="/img/icons/github-mark-white.png"
            alt="github"
            width={25}
            height={25}
          />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
