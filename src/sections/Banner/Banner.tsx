"use client";
import React, { useState } from "react";
import style from "./Banner.module.css";
import Image from "next/image";

function Banner() {
  // ♥♡
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className={style.banner}>
      <ul>
        <li>today value</li>
        <li>today</li>
      </ul>
      <ul>
        <li>total value</li>
        <li>total</li>
      </ul>
      <div
        className={style.neon}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        <Image
          src={isLiked ? "/img/heart.png" : "/img/heart-blank.png"}
          alt="heart"
          width={60}
          height={60}
        />
      </div>
      <ul>
        <li>likes value</li>
        <li>likes</li>
      </ul>
      <ul>
        <li>comments value</li>
        <li>comments</li>
      </ul>
    </div>
  );
}

export default Banner;
