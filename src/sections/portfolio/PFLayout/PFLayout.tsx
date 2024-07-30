import React from "react";
import Image from "next/image";
import { Portfolio } from "../PortfolioList";

interface PFLayoutProps {
  portfolio: Portfolio;
}

const PFLayout: React.FC<PFLayoutProps> = ({ portfolio }) => {
  return (
    <div>
      <div>
        {portfolio.image && (
          <Image
            src={portfolio.image}
            alt={`${portfolio.name} image`}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div>
        <div>{portfolio.name}</div>
        <div>Tech</div>
        <div>
          {portfolio.tech.map((src, index) => (
            <div
              key={index}
              style={{ position: "relative", width: "100px", height: "100px" }}
            >
              <Image
                src={src}
                alt={`tech-image-${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div>{portfolio.role}</div>
        <div>{portfolio.troubleShooting}</div>
        <div>
          {portfolio.links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.src}
                alt={link.id}
                width={30}
                height={30}
                style={{ margin: "0 10px" }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PFLayout;
