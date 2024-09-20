import React from "react";
import "../../../../styles/securitypage/SecurityPage.css";
import { useIcon } from "../../../hooks/useIcon";

const SecurityCardone: React.FC = () => {
  const { poweredbyimg, secured } = useIcon();
  return (
    <>
      <div className="card-secure">
        <div className="card-content-secure">
          {/* Left side with the bird and safe image */}
          <div className="image-container-secure">
            <img
              src={secured}
              alt="Security bird illustration"
              className="bird-image-secure"
            />
          </div>
          {/* Right side with the text */}
          <div className="text-content-secure">
            <h1>
              Your money is safeguarded <br />
              with the most secured of <br />
              financial institutions
            </h1>
            {/* Logos section */}
            <div className="logo-secure">
              <img
                src={poweredbyimg}
                alt="NDIC Logo"
                className="logo-image-secure"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityCardone;
