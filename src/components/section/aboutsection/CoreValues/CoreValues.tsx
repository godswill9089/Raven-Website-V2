import React from "react";
import "../../../../styles/aboutpage/AboutUsPage.css";

const CoreValues: React.FC = () => {
  return (
    <div className="core-values-section">
      {/* Section Header */}
      <div className="core-values-header">
        <span className="core-values-label">CORE VALUES</span>
        <h2>Values that bind us all as an organization.</h2>
      </div>

      {/* Grid of Values */}
      <div className="core-values-grid">
        <div className="value-card">
          <div className="icon-wrapper">
            <div className="semi-circle">
              <div className="inner-circle">
                <span className="icon-letter">H</span>
              </div>
            </div>
          </div>
          <h3>Honesty</h3>
          <p>
            Yoable is a non-profit organization set on empowering, inspiring.
          </p>
        </div>

        <div className="value-card">
          <div className="icon-wrapper">
            <div className="semi-circle">
              <div className="inner-circle">
                <span className="icon-letter">A</span>
              </div>
            </div>
          </div>
          <h3>Agility</h3>
          <p>
            Yoable is a non-profit organization set on empowering, inspiring.
          </p>
        </div>

        <div className="value-card">
          <div className="icon-wrapper">
            <div className="semi-circle">
              <div className="inner-circle">
                <span className="icon-letter">R</span>
              </div>
            </div>
          </div>
          <h3>Resilience</h3>
          <p>
            Yoable is a non-profit organization set on empowering, inspiring.
          </p>
        </div>

        <div className="value-card">
          <div className="icon-wrapper">
            <div className="semi-circle">
              <div className="inner-circle">
                <span className="icon-letter">D</span>
              </div>
            </div>
          </div>
          <h3>Diligence</h3>
          <p>
            Yoable is a non-profit organization set on empowering, inspiring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
