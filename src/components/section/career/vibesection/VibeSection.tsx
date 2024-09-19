import React from "react";
import "../../../../styles/vibesection/VibeSection.css";
import { useIcon } from "../../../hooks/useIcon";

const VibeSection: React.FC = () => {
  const { vibe1, vibe2, viberight1, ravenstyle } = useIcon();

  return (
    <section className="vibe-section">
      {/* Left side with text */}
      <div className="vibe-content">
        <h2>
          Our <span className="highlight">Rhythm</span> and Vibe!
        </h2>
        <p className="subtitle">
          Every workplace and business have their <br /> style of work. this is
          ours...
        </p>
        <div className="vibe-block">
          <div className="vibe-item">
            <div className="icon icon-lightning" />{" "}
            <img src={vibe1} alt="" className="vibe" />
            <h3>We work Fast!</h3>
            <p className="vibe-text">
              We are not big on hierarchical processes as we feel complicated
              processes can kill drive, creativity and innovation <br /> <br />{" "}
              We embrace the chaos that comes with being process-light and we
              prioritize swiftly to keep the balance.
            </p>
          </div>
          <div className="vibe-item">
            <div className="icon icon-controller" />{" "}
            <img src={vibe2} alt="" className="vibe" />
            <h3>We play Hard!</h3>
            <p className="vibe-text">
              The team is fully dependent on each of its members to build a
              great experience <br />
              <br /> Therefore we unwind, have fun and ensure everyone has the
              best experience to deliver their best!
            </p>
          </div>
        </div>
        <img src={ravenstyle} alt="" className="ravenstyle" />
      </div>

      {/* Right side with image */}
      <div className="vibe-imagee">
        <div className="image-maskk">
          <img src={viberight1} alt="Team working" className="image-topp" />
        </div>
      </div>
    </section>
  );
};

export default VibeSection;
