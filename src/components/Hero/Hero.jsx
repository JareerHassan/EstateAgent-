import "./Hero.css";
import agent from "../../assets/images/hero-image.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">

          {/* Content */}
          <div className="hero-content">

            <span className="hero-subtitle">
              TRUSTED REAL ESTATE ADVISOR
            </span>

            <h1>
              Find Your Dream
              Property With
              Confidence
            </h1>

            <p>
              Helping clients buy, sell and invest in premium
              properties with expert guidance, local market
              knowledge, and exceptional service.
            </p>

            <div className="hero-buttons">

              <Link to="/properties" className="primary-btn">
                Explore Properties
              </Link>

              <Link to="/contact" className="secondary-btn">
                Contact Me
              </Link>

            </div>
          </div>

          {/* Image */}
          <div className="hero-image">
            <img src={agent} alt="Real Estate Agent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
