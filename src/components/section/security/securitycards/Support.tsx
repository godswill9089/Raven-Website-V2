import React from "react";
import "../../../../styles/securitypage/SecurityPage.css";
import { useIcon } from "../../../hooks/useIcon";

const Support: React.FC = () => {
  const { securetease, securephone, secureemail, ravenbird } = useIcon();
  return (
    <div className="support-container">
      <div className="support-left-section">
        <img
          src={securetease} // replace with the path to your mascot image
          alt="Support Mascot"
          className="mascot-image3"
        />
      </div>
      <div className="support-right-section">
        <h2>
          Swift response from the support <br />
          team to resolve any problems you could <br />
          be facing with the Raven platform.
        </h2>
        <ul className="contact-list">
          <li>
            <span className="contact-icon">
              <img src={securephone} alt="" className="contact-" />
            </span>{" "}
            {/* Phone Icon */}
            Call: +2348066701121
          </li>
          <li>
            <span className="contact-icon">
              {" "}
              <img src={secureemail} alt="" className="contact-2" />
            </span>{" "}
            {/* Mail Icon */}
            Mail: support@getraven.com
          </li>
          <li>
            <span className="contact-icon">
              {" "}
              <img src={ravenbird} alt="" className="contact-3" />
            </span>{" "}
            {/* Chat Icon */}
            Talk to the Mascot
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
