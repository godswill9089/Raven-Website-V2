import React, { useState, useEffect, useRef } from "react";
import "../../styles/navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { ROUTENAMES } from "../../routes/RouteNames";
import { useIcon } from "../hooks/useIcon";

interface DropdownItem {
  header?: string;
  text?: string;
  route: string;
  image?: string;
}

// Define types for nav links
interface NavLinkItem {
  text: string;
  route: string;
  dropdown?: DropdownItem[];
  dropdownType?: "personal" | "business" | "company";
}

const Navbar: React.FC = () => {
  const { logo, dropdown, menu, x, pig, atm, hand } = useIcon();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(null); // Close dropdown if click is outside.
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const navLinks: NavLinkItem[] = [
    {
      text: "Personal",
      route: ROUTENAMES?.WEBSITE_HOME,
      dropdownType: "personal",
      dropdown: [
        {
          header: "Savings",
          text: "Digital Product for retailers and small business onwers",
          route: "/",
          image: pig,
        },
        {
          header: "Virtual and Physical Cards",
          text: "Spend anyday, anytime with the Raven digital card!",
          route: "/",
          image: atm,
        },
        {
          header: "Overdraft — Loans",
          text: "Accept bill payments and purchases with RAVEN POS",
          route: "/",
          image: hand,
        },
      ],
    },
    {
      text: "For Business",
      route: ROUTENAMES?.WEBSITE_HOME,
      dropdownType: "business",
      dropdown: [
        {
          header: "Business Banking",
          text: "Corporate finance product for firms and businesses",
          route: "/",
          image: hand,
        },
        {
          header: "Card Issuing",
          text: "Digital Cards for Businesses",
          route: "/",
          image: hand,
        },
        {
          header: "Raven — Atlas",
          text: "Digital Product for retailers and small business onwers",
          route: "/",
          image: hand,
        },
        {
          header: "Business Loans",
          text: "Loans, grants for businesses.",
          route: "/",
          image: hand,
        },
        {
          header: "Raven — POS",
          text: "Accept bills and purchases with RAVEN POS",
          route: "/",
          image: hand,
        },
        {
          header: "Finalytics",
          text: "Connect all bank apps all in one place.",
          route: "/",
          image: hand,
        },
      ],
    },
    {
      text: "Company",
      route: ROUTENAMES?.WEBSITE_HOME,
      dropdownType: "company",
      dropdown: [
        {
          header: "About Us",
          text: "About Us at Raven Bank",
          route: ROUTENAMES?.WEBSITE_ABOUT,
          image: hand,
        },
        {
          header: "Careers",
          text: "Join the Raven team to make Raven better",
          route: ROUTENAMES?.WEBSITE_CAREER,
          image: hand,
        },
        {
          header: "Support",
          text: "Get in touch with us. we are never far from you!",
          route: "/",
          image: hand,
        },
      ],
    },
    { text: "FAQ", route: ROUTENAMES?.WEBSITE_HOME },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navbarRef}>
        <div className="navbar-logo">
          <NavLink to={ROUTENAMES?.WEBSITE_HOME}>
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
          {navLinks.map((link, index) => (
            <li key={link.text} className="nav-item">
              <div
                onClick={() => handleDropdownToggle(index)}
                className="nav-link-wrapper"
                aria-expanded={openDropdownIndex === index}
              >
                <NavLink to={""} className="link-path">
                  {link.text}
                </NavLink>

                {link.dropdown && (
                  <img
                    src={dropdown}
                    alt="Dropdown Icon"
                    className={`dropdown-icon ${
                      openDropdownIndex === index ? "open2" : ""
                    }`}
                  />
                )}
              </div>

              {link.dropdown && openDropdownIndex === index && (
                <ul className={`dropdown-menu ${link.dropdownType}`}>
                  {link.dropdown.map((sublink) => (
                    <li key={sublink.text} className="dropdown-item">
                      <NavLink to={sublink.route} className="dropdown-link">
                        <img
                          src={sublink.image}
                          alt={sublink.header}
                          className="dropdown-image"
                        />{" "}
                        <div className="dropdown-text-wrapper">
                          <div className="dropdown-header">
                            {sublink.header}
                          </div>
                          <div className="dropdown-text">{sublink.text}</div>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
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
    </>
  );
};

export default Navbar;
