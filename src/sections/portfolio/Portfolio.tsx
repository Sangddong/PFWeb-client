import React from "react";
import PFLayout from "./PFLayout/PFLayout";
import { Homelog, Sweatier } from "./PortfolioList";

function Portfolio() {
  return (
    <div>
      <PFLayout portfolio={Sweatier} />
      <PFLayout portfolio={Homelog} />
    </div>
  );
}

export default Portfolio;
