import React from "react";
import "../../../styles/terms/Terms.css";
import { useIcon } from "../../hooks/useIcon";

const Terms: React.FC = () => {
  const { termsicon } = useIcon();
  return (
    <div className="terms-conditions-page">
      {/* Main Content */}
      <main className="main-content">
        <span className="policy-tags">T&Cs</span>
        <h1 className="terms-h1">Terms and Conditions</h1>
        <p className="terms-des">
          Kindly read through our Terms and Conditions to get acquainted <br />
          with our culture, rules, and guide.
        </p>
      </main>

      {/* Bottom Icons */}
      <div className="bottom-icons">
        <img src={termsicon} alt="" />
      </div>
    </div>
  );
};

export default Terms;
