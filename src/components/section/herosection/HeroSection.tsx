import React from "react";
import "../../../styles/herosection/HeroSection.css";
import Herocard from "./Herocard";
import MetricsSection from "./MetricsSection";

const HeroSection = () => {
  return (
    <div className="hero-container-wrapper">
      <div className="hero-container-contents">
        <div className="hero-container-dec">
          <div className="hero-texts">
            <h1>
              Digital Banking For <br />{" "}
              <span className="RAVEN-ORANGE">Africans.</span>
            </h1>
            <p>
              Enjoy banking with us, your interest is <br /> our only interest!
            </p>
          </div>
        </div>
        <Herocard />
        <MetricsSection />
      </div>
    </div>
  );
};

export default HeroSection;
