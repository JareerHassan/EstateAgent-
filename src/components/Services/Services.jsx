import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Property Buying",
    description:
      "Personal guidance to help clients find homes and investment properties that match their lifestyle, budget, and long-term goals.",
  },
  {
    number: "02",
    title: "Property Selling",
    description:
      "Professional pricing, presentation, and marketing strategy designed to attract qualified buyers and close with confidence.",
  },
  {
    number: "03",
    title: "Market Valuation",
    description:
      "Accurate property value guidance based on location, current demand, market trends, and comparable property insights.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-top">
          <div>
            <span className="services-label">Services</span>

            <h2>
              Real Estate Services Designed For Confident Property Decisions
            </h2>
          </div>

          <p>
            From buying and selling to market valuation and investment guidance,
            every service is built around clarity, trust, and professional
            support.
          </p>
        </div>

        <div className="services-layout">
          <div className="service-featured">
            <span className="featured-number">00</span>

            <h3>Complete Real Estate Advisory</h3>

            <p>
              A premium service experience for clients who need expert support
              through every stage of the property journey, from first
              consultation to final closing.
            </p>

            <div className="featured-list">
              <span>Property Strategy</span>
              <span>Negotiation Support</span>
              <span>Investment Guidance</span>
            </div>

            <Link to="/contact" className="featured-link">
              Start Consultation
            </Link>
          </div>

          <div className="services-cards">
            {services.map((service) => (
              <div className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
