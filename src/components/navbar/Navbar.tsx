import React, { useState } from "react";
import "../../styles/navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { ROUTENAMES } from "../../routes/RouteNames";
import { useIcon } from "../hooks/useIcon";

const Navbar: React.FC = () => {
  const { logo, dropdown, menu, x } = useIcon();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { text: "Personal", route: ROUTENAMES?.WEBSITE_HOME },
    { text: "For Business", route: ROUTENAMES?.WEBSITE_HOME },
    { text: "Company", route: ROUTENAMES?.WEBSITE_HOME },
    { text: "FAQ", route: ROUTENAMES?.WEBSITE_HOME },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="RavenBank Logo" />
        </NavLink>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <span>
            <img src={x} alt="Close Menu" className="close" />
          </span>
        ) : (
          <span>
            <img src={menu} alt="Open Menu" className="toggle" />
          </span>
        )}
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.text}>
            <NavLink to={link.route} className="link-path">
              {link.text}
            </NavLink>
            <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
          </li>
        ))}
      </ul>
      <div className="signin-getstarted">
        <div>
          <button className="signin">Sign In</button>
        </div>
        <div>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
