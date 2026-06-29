import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="EstateAgent home">
              <img src={logo} alt="EstateAgent" className="logo-img" />
            </Link>

            <p>
              A modern real estate portfolio template designed for agents,
              brokers, and property consultants who want a premium online
              presence.
            </p>

            <div className="footer-socials" aria-label="Social links">
              <a href="https://facebook.com" aria-label="Facebook">
                Fb
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                In
              </a>
              <a href="https://x.com" aria-label="X">
                X
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <Link to="/properties">Properties</Link>
            <a href="/#testimonials">Testimonials</a>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <a href="/#services">Property Buying</a>
            <a href="/#services">Property Selling</a>
            <a href="/#services">Market Valuation</a>
            <Link to="/contact">Investment Advice</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>123 Luxury Avenue, New York, USA</p>
            <a href="mailto:hello@estateagent.com">hello@estateagent.com</a>
            <a href="tel:+12345678900">+1 234 567 8900</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 EstateAgent. All rights reserved.</p>

          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms And Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
