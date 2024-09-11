import React from "react";
import "../../../../styles/aboutpage/AboutUsPage.css";
import { useIcon } from "../../../hooks/useIcon";

const AboutStorySection: React.FC = () => {
  const { tablet, iphon, playstore, applestore } = useIcon();

  return (
    <section className="raven-story">
      <div className="raven-content">
        <div className="story-heading">
          <span className="story-tag">RAVEN — THE STORY</span>
          <h2 className="story-title">
            Why we built <span className="highlight">Raven!</span>
          </h2>
          <p className="story-description">
            Here at raven bank, we are built to help you improve your financial
            life, from ease of transfers to, bill payment and more. Here at
            raven bank, we are built to help you improve your financial life,
            from ease of transfers to, bill payment and more.
          </p>
        </div>

        <div className="images-and-buttons">
          <div className="device-image tablet">
            <img src={tablet} alt="Tablet Display" />
            <div className="web-button bottom">
              <button className="web-btn">Get Started with the Web</button>
            </div>
          </div>
          <div>
            <div className="phone-sec">
              <div className="device-image phone">
                <img src={iphon} alt="Phone Display" />
              </div>
              <div className="buttons-container">
                <div className="app-stores web-button">
                  <img src={playstore} alt="Google Play" />
                  <img src={applestore} alt="App Store" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
