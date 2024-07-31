"use client";
import React, { useEffect } from "react";
import style from "./Modal.module.css";
interface ModalProps {
  title?: string;
  setModal: () => void;
  children?: React.ReactNode;
}

const Modal = ({ title, setModal, children }: ModalProps) => {
  const preventOffModal = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div id="모달 외부" onClick={setModal} className={style.background}>
      <div id="모달" onClick={preventOffModal}>
        <span>{title}</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
