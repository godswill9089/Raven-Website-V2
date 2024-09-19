import React from "react";
import { useIcon } from "../../../hooks/useIcon";
import "../../../../styles/securitypage/SecurityPage.css";
import Navbar from "../../../navbar/Navbar";

const SecurityHero = () => {
  const { securityherobanner } = useIcon();
  return (
    <>
      <div className="security-content">
        <Navbar />
        <p className="security-p">SECURITY</p>
        <h1 className="security-head">
          Save, Invest and Spend <br /> with Confidence
        </h1>
        <figure>
          <img src={securityherobanner} alt="" className="security-banner" />
        </figure>
      </div>
    </>
  );
};

export default SecurityHero;
