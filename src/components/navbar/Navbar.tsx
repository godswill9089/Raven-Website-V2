import React from "react";
import "../../styles/navbar/Navbar.css";
// import WebsiteMain from "../../layout/WebsiteMain";
import { NavLink } from "react-router-dom";
import { ROUTENAMES } from "../../routes/RouteNames";
import { useIcon } from "../hooks/useIcon";

const Navbar: React.FC = () => {
  const { logo, dropdown } = useIcon();

  const navLinks = [
    { text: "Personal", route: ROUTENAMES?.WEBSITE_HOME },
    { text: "For Business", route: ROUTENAMES?.WEBSITE_HOME },
    { text: "Company", route: ROUTENAMES?.WEBSITE_HOME },
    { text: "FAQ", route: ROUTENAMES?.WEBSITE_HOME },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="RavenBank Logo" />
      </div>
      <ul className="navbar-menu">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.route} className="link-path">
              {link.text}{" "}
              <img
                src={dropdown}
                alt="Dropdown Icon"
                className="dropdown-icon"
              />
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="signin-getstarted">
        <div>
          <button className="signin">Sign In</button>
        </div>
        <li>
          <button className="get-started-btn">Get Started</button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
