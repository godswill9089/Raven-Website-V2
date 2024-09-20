import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import SecurityHero from "../../components/section/security/securityhero/SecurityHero";
import "../../styles/securitypage/SecurityPage.css";
import SecurityCardone from "../../components/section/security/securitycards/SecurityCardone";
import SecurityCardtwo from "../../components/section/security/securitycards/SecurityCardtwo";
import Support from "../../components/section/security/securitycards/Support";
import TestimonialSlider from "../../components/section/Home/testimonals/TestimonialsSlider";
import AppShowcase from "../../components/section/Home/appshowcase/AppShowcase";

const SecurityPage = () => {
  return (
    <>
      <div className="gen-security-wrapper">
        <div className="security-main-wrapper">
          <SecurityHero />
        </div>
        <SecurityCardone />
        <SecurityCardtwo />
        <Support />
        <TestimonialSlider />
        <AppShowcase />
      </div>
    </>
  );
};

export default SecurityPage;
