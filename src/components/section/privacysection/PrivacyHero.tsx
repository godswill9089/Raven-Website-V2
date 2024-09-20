import React from "react";
import "../../../styles/privacypage/PrivacyPage.css";
import { useIcon } from "../../hooks/useIcon";

const PrivacyHero: React.FC = () => {
  const { privcy } = useIcon();
  return (
    <div className="privacy-policy-page">
      {/* Main Content */}
      <main className="main-contents">
        <span className="policy-tag">PRIVACY POLICY</span>
        <h1>Privacy Policy</h1>
        <p className="pri-hero">
          Kindly read through our Terms and Conditions to get
          <br /> acquainted with our culture, rules, and guides.
        </p>
      </main>

      {/* Bottom Icons */}
      <div className="bottom-icons">
        <img src={privcy} alt=""></img>
      </div>
    </div>
  );
};

export default PrivacyHero;
