import React from "react";
import "../../../../styles/business/Business.css";
import { useIcon } from "../../../hooks/useIcon";

const Business = () => {
  const { business } = useIcon();
  return (
    <div className="hero-section">
      {" "}
      <div className="text-container">
        {" "}
        <div className="tagline">FOR BUSINESSES</div>{" "}
        <h1>
          Get verified accounts for your{" "}
          <span className="highlight">Business</span>
        </h1>{" "}
        <p>
          Get verified corporate accounts and have the ability to pay with raven
          anytime, anyday!.
        </p>{" "}
        <div className="buttons">
          {" "}
          <button className="primary-button">
            Create Business Account
          </button>{" "}
          <button className="secondary-button">
            Learn More <span className="arrow">→</span>
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="image-container">
        {" "}
        <img
          src={business}
          alt="Dashboard Screenshot"
          className="dashboard-image"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default Business;
