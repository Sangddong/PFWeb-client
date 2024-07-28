import React from "react";
import style from "./Title.module.css";

const Title = ({ children }) => {
  return <span className={style.title}>{children}</span>;
};

export default Title;
