import React from "react";
import style from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <div className={style.title}>
      <p>{children}</p>
    </div>
  );
};

export default Title;
