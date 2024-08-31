import React from "react";
import "../../../styles/footer/Footer.css";
import { useIcon } from "../../hooks/useIcon";

const Footer: React.FC = () => {
  const { link1, link2, link3, qr } = useIcon();

  return (
    <>
      <div className="footer-line">
        <footer className="footer">
          <div className="footer-section">
            <h3>PERSONAL</h3>
            <ul>
              <li>Savings</li>
              <li>Raven Cards</li>
              <li>Overdrafts</li>
              <li>Finalytics</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FOR BUSINESSES</h3>
            <ul>
              <li>Business Banking</li>
              <li>Card Issuing</li>
              <li>Business Loans</li>
              <li>RavenPOS</li>
              <li>Atlas</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>HELP</h3>
            <ul>
              <li>FAQ</li>
              <li>Support</li>
              <li>Talk to our Mascot</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-qr-social">
            <div className="qr-code">
              {/* Placeholder for QR Code */}
              <img src={qr} alt="QR Code" />
            </div>
            <div className="social-icons">
              {/* Placeholder for Social Media Icons */}
              <a href="/">
                <img src={link1} alt="QR Code" />
              </a>
              <a href="/">
                <img src={link2} alt="QR Code" />
              </a>
              <a href="/">
                <img src={link3} alt="QR Code" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
