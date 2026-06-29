import { Link } from "react-router-dom";
import "./FeaturedProperties.css";
import { propertiesData } from "../../data/propertiesData";

const properties = propertiesData.slice(0, 3);

const FeaturedProperties = () => {
  return (
    <section className="featured-properties" id="properties">
      <div className="container">
        <div className="properties-header">
          <div>
            <span className="properties-label">FEATURED PROPERTIES</span>

            <h2>
              Handpicked Properties For Modern Living
            </h2>
          </div>

          <p>
            Explore selected premium listings designed for buyers looking for
            comfort, location, lifestyle, and long-term value.
          </p>
        </div>

        <div className="properties-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="property-image">
                <img src={property.image} alt={property.title} />

                <span className="property-tag">{property.tag}</span>
              </div>

              <div className="property-content">
                <div className="property-price">{property.price}</div>

                <h3>{property.title}</h3>

                <p>{property.location}</p>

                <div className="property-meta">
                  <span>{property.beds}</span>
                  <span>{property.baths}</span>
                  <span>{property.area}</span>
                </div>

                <Link
                  to={`/properties/${property.id}`}
                  className="property-link"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="properties-bottom">
          <Link to="/properties" className="view-all-btn">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
