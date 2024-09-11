import React from "react";
import { useIcon } from "../../../hooks/useIcon";
import "../../../../styles/linkacount/LinkAccount.css";

const LinkAccout = () => {
  const { linkimg } = useIcon();

  return (
    <div className="link-section-container-wrapper-items">
      <div className="link-section-wrapper">
        <div className="link-content-wrapper">
          <h1>
            All Your Other Accounts In <br />
            One Bank, All Services <br /> Under One Roof.
          </h1>
          <div className="link-p">
            <p>
              We help you to manage your entire personal finance from <br />
              one place. Just sign up,connect all your bank accounts, <br />
              and start managing everything from a single dashboard.
            </p>
            <button>Link your Accounts</button>
          </div>
        </div>
        <figure className="img-link">
          <img src={linkimg} alt="" className="link-img"></img>
        </figure>
      </div>
    </div>
  );
};

export default LinkAccout;
