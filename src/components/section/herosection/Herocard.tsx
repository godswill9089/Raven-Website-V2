import React from "react";
import { useIcon } from "../../hooks/useIcon";
import "../../../styles/herosection/HeroSection.css";

const Herocard: React.FC = () => {
  const { oldwoman, twogirls, ravengirl, ravenboy } = useIcon();

  const cards = [
    { id: 1, imgSrc: oldwoman },
    { id: 2, imgSrc: twogirls },
    { id: 3, imgSrc: ravengirl },
    { id: 4, imgSrc: ravenboy },
  ];

  return (
    <div className="card-section">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imgSrc} alt={`Person ${card.id}`} />
        </div>
      ))}
    </div>
  );
};

export default Herocard;
