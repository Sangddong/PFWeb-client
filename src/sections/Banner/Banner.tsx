"use client";
import React, { useEffect, useState } from "react";
import style from "./Banner.module.css";
import Image from "next/image";
import { getTodayView, getTotalView } from "@/api/view/view.api";
import { getTotalComment } from "@/api/comments/comments.api";
import { cancelLike, getLikes, like } from "@/api/likes/likes.api";

function Banner() {
  const [todayView, setTodayView] = useState(0);
  const [totalView, setTotalView] = useState(0);
  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //조회수
      const todayViewResult = await getTodayView();
      const totalViewResult = await getTotalView();
      setTodayView(todayViewResult.data.todayView);
      setTotalView(totalViewResult.data.totalView);

      //댓글
      const totalComments = await getTotalComment();
      setComments(totalComments);

      //좋아요
      const totalLoved = await getLikes();
      setLiked(totalLoved.data.likes);
    };

    fetchData();
  }, []);

  const toggleLike = async () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      await like();
      const totalLoved = await getLikes();
      setLiked(totalLoved.data.likes);
    } else {
      await cancelLike();
      const totalLoved = await getLikes();
      setLiked(totalLoved.data.likes);
    }
  };

  return (
    <div className={style.banner}>
      <ul>
        <li>{todayView}</li>
        <li>today</li>
      </ul>
      <ul>
        <li>{totalView}</li>
        <li>total</li>
      </ul>
      <div className={style.neon} onClick={() => toggleLike()}>
        <Image
          src={isLiked ? "/img/heart.png" : "/img/heart-blank.png"}
          alt="heart"
          width={60}
          height={60}
        />
      </div>
      <ul>
        <li>{liked}</li>
        <li>likes</li>
      </ul>
      <ul>
        <li>{comments}</li>
        <li>comments</li>
      </ul>
    </div>
  );
}

export default Banner;
