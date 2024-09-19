import React from "react";
import CareerHero from "../../components/section/career/carceerherosection/CareerHero";
import CareerJob from "../../components/section/career/carceerherosection/CareerJob";
import CareerTeam from "../../components/section/career/carceerherosection/CareerTeam";
import Navbar from "../../components/navbar/Navbar";
import VibeSection from "../../components/section/career/vibesection/VibeSection";
import PerksSection from "../../components/section/career/perkssection/PerksSection";
import JobList from "../../components/section/career/jobList/JobList";
import Footer from "../../components/footer/Footer";
import AppShowcase from "../../components/section/Home/appshowcase/AppShowcase";

const CareerPage = () => {
  return (
    <>
      <div className="career-wrapper-section">
        <Navbar />
        <div className="career-flx">
          <div>
            <CareerHero />
            <CareerJob />
          </div>
          <CareerTeam />
        </div>
        <VibeSection />
        <PerksSection />
        <JobList />
      </div>
      <AppShowcase />
    </>
  );
};

export default CareerPage;
