import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import SecurityHero from "../../components/section/security/securityhero/SecurityHero";
import "../../styles/securitypage/SecurityPage.css";
import SecurityCardone from "../../components/section/security/securitycards/SecurityCardone";

const SecurityPage = () => {
  return (
    <>
      <div className="gen-security-wrapper">
        <div className="security-main-wrapper">
          <SecurityHero />
        </div>
        <SecurityCardone />
      </div>
    </>
  );
};

export default SecurityPage;
