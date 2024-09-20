import React from "react";
import PrivacyHero from "../../components/section/privacysection/PrivacyHero";
import Navbar from "../../components/navbar/Navbar";
import "../../styles/privacypage/PrivacyPage.css";
import PrivacyTabs from "../../components/section/privacysection/PrivacyTabs";
import AppShowcase from "../../components/section/Home/appshowcase/AppShowcase";

const PrivacyPage = () => {
  return (
    <>
      <div className="privacy-wrapper-main">
        <Navbar />
        <div>
          <div className="privacy-hero-section">
            <PrivacyHero />
            <PrivacyTabs />
          </div>
          <AppShowcase />
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
