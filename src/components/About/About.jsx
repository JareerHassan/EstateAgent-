import { Link } from "react-router-dom";
import "./About.css";
import aboutImg from "../../assets/images/hero-image.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image-wrap">
            <img src={aboutImg} alt="Real estate advisor meeting a client" />

            <div className="about-exp">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>

          <div className="about-content">
            <span className="about-label">About Me</span>

            <h2>Helping Clients Buy, Sell And Invest In The Right Property.</h2>

            <p className="about-text">
              I work closely with buyers, sellers, and investors to make
              property decisions easier, clearer, and more profitable. My goal
              is to provide honest guidance, strong market insight, and a smooth
              real estate experience from first meeting to final closing.
            </p>

            <div className="about-list">
              <p>Property buying and selling consultation</p>
              <p>Market valuation and investment advice</p>
              <p>Personalized support from search to closing</p>
            </div>

            <div className="about-actions">
              <Link to="/contact" className="primary-btn">
                Schedule Consultation
              </Link>

              <div>
                <strong>Michael Carter</strong>
                <span>Real Estate Advisor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
