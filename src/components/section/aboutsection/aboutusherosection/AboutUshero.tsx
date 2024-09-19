import React from "react";
import Navbar from "../../../navbar/Navbar";
import "../../../../styles/aboutpage/AboutUsPage.css";
import { useIcon } from "../../../hooks/useIcon";
import AboutStorySection from "../aboutstorysection/AboutStorySection";
import CoreValues from "../CoreValues/CoreValues";
import VisionMission from "../VisionMission/VisionMission";
import ProgramsEvents from "../programsEvents/ProgramsEvents";
import AppShowcase from "../../Home/appshowcase/AppShowcase";

const AboutUshero: React.FC = () => {
  const { aboutherobanner, partner1, partner2, partner3, partner4 } = useIcon();
  return (
    <>
      <div className="wrapper-about">
        {/* Navbar */}
        <div className="nav-place">
          <Navbar />
        </div>
        <div className="top-wrapper-about">
          <div className="">
            {/* Main Section */}
            <section className="main-section">
              <div className="main-content">
                <span className="badge">ABOUT US</span>
                <h1>
                  We are <span className="highlight">Young, Swift</span>, and
                  just Right for you!
                </h1>
                <p>
                  Here at Raven Bank, we are built to help you improve your
                  financial life from ease of transfer to payment of bills and
                  more...
                </p>
              </div>
              <div className="video-container">
                <img
                  src={aboutherobanner}
                  alt="Raven Team"
                  className="video-thumbnail"
                />
                {/* <div className="play-button">
              <a href="/">
                <img src="/assets/play-icon.png" alt="Play Button" />
              </a>
            </div> */}
              </div>
            </section>
          </div>
          {/* Partners Section */}
          <section className="partners-section">
            <p>BACKED BY THE BIG BOYS IN THE INDUSTRY</p>
            <div className="partners-logos">
              <img src={partner1} alt="Forbes" />
              <img src={partner2} alt="Google" />
              <img src={partner3} alt="Atlassian" />
              <img src={partner4} alt="Microsoft" />
            </div>
          </section>
          <AboutStorySection />
          <CoreValues />
          <VisionMission />
          <ProgramsEvents />
          <AppShowcase />
        </div>
      </div>
    </>
  );
};

export default AboutUshero;
