import React from "react";
import Image from "next/image";
import { Portfolio } from "../PortfolioList";
import style from "./PFLayout.module.css";
import Link from "next/link";

interface PFLayoutProps {
  portfolio: Portfolio;
}

const PFLayout: React.FC<PFLayoutProps> = ({ portfolio }) => {
  return (
    <div className={style.pfLayoutWrap}>
      <div className={style.pfImage}>
        <Image
          src={portfolio.image}
          alt={`${portfolio.name} image`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={style.pfInfo}>
        <div>{portfolio.name}</div>
        <p>Info</p>
        <div>{portfolio.info}</div>
        <p>Period</p>
        <div>{portfolio.term}</div>
        <p>Team</p>
        <div>{portfolio.team}</div>
        <p>Tech</p>
        <div className={style.techWrap}>
          {portfolio.tech.map((src, index) => (
            <div key={index} className={style.image}>
              <Image
                src={src}
                alt={`tech-image-${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <p>Role</p>
        <div>{portfolio.role}</div>
        <p>Trouble shooting</p>
        <div>{portfolio.troubleShooting}</div>
        <p>Link</p>
        <div className={style.linkWrap}>
          {portfolio.links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={style.image}>
                <Image
                  src={link.src}
                  alt={link.id}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PFLayout;
