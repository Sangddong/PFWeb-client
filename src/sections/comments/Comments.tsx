import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import style from "./Comments.module.css";
import WriteComment from "./writeComment/WirteComments";

function Comments() {
  return (
    <div id="comments-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>Comments</Title>
          <WriteComment />
        </div>
      </LayoutPage>
    </div>
  );
}

export default Comments;
