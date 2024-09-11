import React from "react";
import "../../../../styles/cardsection/CardSection.css";
import { useIcon } from "../../../hooks/useIcon";

const CardSection = () => {
  const { bank, data, secured, save } = useIcon();

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h2 className="feature-title ">
          Super Fast
          <br />
          Money Transfers
        </h2>
        <p>
          Send money in seconds, not hours or days. <br /> And it's just a few
          clicks away.
        </p>
        <img
          src={bank}
          alt="Super Fast Money Transfers"
          className="feature-image bank"
        />
      </div>
      <div className="grid-item">
        <h2 className="feature-title">
          All-round
          <br />
          Financial Data
        </h2>
        <p>
          Financial insights help you make informed decisions,
          <br /> benchmark goals, analyze your finances.
        </p>
        <img
          src={data}
          alt="All-round Financial Data"
          className="feature-image data"
        />
      </div>
      <div className="grid-item">
        <h2 className="feature-title">Top Notch Security</h2>
        <p>
          Send money in seconds, not hours or days. <br />
          And it's just a few clicks away.
        </p>
        <img
          src={secured}
          alt="Top Notch Security"
          className="feature-image secured"
        />
      </div>
      <div className="grid-item">
        <h2 className="feature-title">Sweet Interest Rates</h2>
        <p>
          Our accounts offer interest rates that are <br />
          among the highest in our industry.
        </p>
        <img
          src={save}
          alt="Sweet Interest Rates"
          className="feature-image  save"
        />
      </div>
    </div>
  );
};

export default CardSection;
