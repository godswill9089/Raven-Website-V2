import React from "react";
import "../../../styles/appshowcase/AppShowcase.css";
import { useIcon } from "../../hooks/useIcon";
import Footer from "../footer/Footer";

const AppShowcase: React.FC = () => {
  const { iphone1, iphone2, playstore, applestore } = useIcon();

  return (
    <div className="bg-color">
      {/* Left section with slogan and app store buttons */}
      <div className="app-showcase">
        <div className="showcase-left">
          <h3>
            Send, Recieve and Save money with <br />
            zero troubles, anyday!, anytime!
          </h3>
          <p className="showcase-slogan">Bank the Raven Way!</p>
          <div className="app-store-buttons">
            <img
              src={playstore}
              alt="Get it on Google Play"
              className="store-button"
            />
            <img
              src={applestore}
              alt="Download on the App Store"
              className="store-button"
            />
          </div>
        </div>
        {/* Right section with mobile phone images */}
        <div className="showcase-right">
          <img
            src={iphone1}
            alt="App screen 1"
            className="phone-image iphone1"
          />
          <img
            src={iphone2}
            alt="App screen 2"
            className="phone-image iphone2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AppShowcase;
