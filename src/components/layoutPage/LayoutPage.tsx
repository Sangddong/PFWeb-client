import React from "react";
import style from "./LayoutPage.module.css";

const LayoutPage = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.innerLayout}>{children}</div>
    </div>
  );
};

export default LayoutPage;
