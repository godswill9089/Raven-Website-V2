import React from "react";
// import Terms from "../../components/section/terms/Terms";
import Navbar from "../../components/navbar/Navbar";
import AppShowcase from "../../components/section/Home/appshowcase/AppShowcase";
import Terms from "../../components/section/terms/Terms";
import "../../styles/terms/Terms.css";
import TermsTabs from "../../components/section/terms/TermsTab";

export const TermsPage = () => {
  return (
    <>
      <>
        <div className="terms-wrapper-mains">
          <Navbar />
          <div>
            <div className="terms-hero-sections">
              <Terms />
              <TermsTabs />
            </div>
            <AppShowcase />
          </div>
        </div>
      </>
    </>
  );
};
