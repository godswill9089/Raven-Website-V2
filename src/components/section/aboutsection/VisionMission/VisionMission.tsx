import React from "react";
import "../../../../styles/visionMission./VisionMission.css";

const VisionMission: React.FC = () => {
  return (
    <section className="vision-mission">
      {/* Our Vision Section */}
      <div className="vision-section">
        <h1 className="title">Our Vision</h1>
        <p className="description">
          Access full-range Banking Services from
          <br />
          The comfort of your home..
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mission-section">
        <h1 className="title">Our Mission</h1>
        <p className="description">
          Access full-range Banking Services from
          <br />
          The comfort of your home..
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
