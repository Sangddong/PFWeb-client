import React from "react";
import card from "./Card.module.css";

interface CardProps {
  miniTitle?: string;
  children: React.ReactNode;
}

const Card = ({ miniTitle, children }: CardProps) => {
  return (
    <div className={card.cardWrap}>
      {miniTitle && (
        <div className={card.miniTitle}>
          <p>{miniTitle}</p>
        </div>
      )}
      <div className={card.content}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
