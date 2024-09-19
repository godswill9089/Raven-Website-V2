import React from "react";
import "../../../../styles/perksection/PerksSection.css";
import { useIcon } from "../../../hooks/useIcon";

const PerksSection: React.FC = () => {
  const { perk1, perk2, perk3, perk4, perk5 } = useIcon();
  return (
    <section className="perks-section">
      {/* Title Section */}
      <div className="perks-header">
        <div className="perks-label">PERKS AND RIGHTS</div>
        <h2>
          Perks of Joining the <br />
          Team at Raven
        </h2>
      </div>

      {/* Perks Grid */}
      <div className="perks-grid">
        <div className="perk-text">
          <div className="icon-wrapper">
            <div className="outer-semicircle">
              <div className="inner-semicircle">
                <span className="icon-text">
                  <img src={perk1} alt="" />
                </span>
              </div>
            </div>
          </div>
          <p>
            Competitive Salaries <br />
            and Bonuses
          </p>
        </div>
        <div className="perk-text">
          <div className="icon-wrapper">
            <div className="outer-semicircle">
              <div className="inner-semicircle">
                <span className="icon-text">
                  <img src={perk2} alt="" />
                </span>
              </div>
            </div>
          </div>
          <p>
            Competitive Salaries <br />
            and Bonuses
          </p>
        </div>
        <div className="perk-text">
          <div className="icon-wrapper">
            <div className="outer-semicircle">
              <div className="inner-semicircle">
                <span className="icon-text">
                  <img src={perk3} alt="" />
                </span>
              </div>
            </div>
          </div>
          <p>
            Competitive Salaries <br />
            and Bonuses
          </p>
        </div>
        <div className="perk-text">
          <div className="icon-wrapper">
            <div className="outer-semicircle">
              <div className="inner-semicircle">
                <span className="icon-text">
                  <img src={perk4} alt="" />
                </span>
              </div>
            </div>
          </div>
          <p>
            Competitive Salaries <br />
            and Bonuses
          </p>
        </div>
        <div className="perk-text">
          <div className="icon-wrapper">
            <div className="outer-semicircle">
              <div className="inner-semicircle">
                <span className="icon-text">
                  <img src={perk5} alt="" />
                </span>
              </div>
            </div>
          </div>
          <p>
            Competitive Salaries <br />
            and Bonuses
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
