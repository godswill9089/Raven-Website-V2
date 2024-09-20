import React from "react";
import { useIcon } from "../../../hooks/useIcon";

const SecurityCardtwo: React.FC = () => {
  const { secureb } = useIcon();

  return (
    <div className="container">
      <div className="left-section">
        <img src={secureb} alt="Mascot Bird" className="mascot-image" />
      </div>
      <div className="right-section">
        <h1>
          Transact and save securely with our multiple anti-fraud security
          measures.
        </h1>
        <ul>
          <li>2 Factor Authentication</li>
          <li>Highly Encrypted User & Finance Data</li>
          <li>Secured Transaction Medium</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityCardtwo;
