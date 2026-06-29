import { Link } from "react-router-dom";
import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="contact-cta-box">
          <div className="cta-content">
            <span className="cta-label">Ready To Move Forward?</span>

            <h2>Let's Find The Right Property For Your Next Chapter</h2>

            <p>
              Whether you are buying, selling, or investing, get professional
              real estate guidance built around your goals.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/contact" className="cta-primary">
              Schedule Consultation
            </Link>

            <Link to="/properties" className="cta-secondary">
              View Properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
