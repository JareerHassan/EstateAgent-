import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  getPropertyById,
  getSimilarProperties,
} from "../data/propertiesData";
import "./Properties.css";
import "./PropertyDetails.css";

const detailItems = (property) => [
  ["Property Type", property.type],
  ["Status", property.status],
  ["Bedrooms", property.beds],
  ["Bathrooms", property.baths],
  ["Area", property.area],
  ["Garage", property.garage],
  ["Year Built", property.yearBuilt],
  ["Location", property.location],
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = getPropertyById(id);

  if (!property) {
    return (
      <>
        <Navbar />
        <main>
          <section className="property-not-found">
            <div className="container-sm">
              <span>PROPERTY NOT FOUND</span>
              <h1>This property is no longer available</h1>
              <p>
                The listing you are looking for may have been removed, updated,
                or replaced with a newer opportunity.
              </p>
              <Link to="/properties" className="property-back-btn">
                Back to Properties
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const similarProperties = getSimilarProperties(property.id);

  return (
    <>
      <Navbar />

      <main>
        <section className="property-detail-hero">
          <div className="container">
            <div className="property-detail-hero-wrapper">
              <div className="property-detail-hero-content">
                <span className="property-detail-label">PROPERTY DETAILS</span>
                <h1>{property.title}</h1>
                <p>{property.location}</p>

                <div className="property-hero-meta">
                  <strong>{property.price}</strong>
                  <span>{property.status}</span>
                </div>
              </div>

              <div className="property-quick-card" aria-label="Property quick facts">
                <div>
                  <span>Beds</span>
                  <strong>{property.beds}</strong>
                </div>
                <div>
                  <span>Baths</span>
                  <strong>{property.baths}</strong>
                </div>
                <div>
                  <span>Area</span>
                  <strong>{property.area}</strong>
                </div>
                <div>
                  <span>Type</span>
                  <strong>{property.type}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="property-gallery-section">
          <div className="container">
            <div className="property-gallery">
              <div className="property-gallery-item property-gallery-main">
                <img src={property.gallery[0]} alt={property.title} />
              </div>
              <div className="property-gallery-side">
                {property.gallery.slice(1, 3).map((image, index) => (
                  <div className="property-gallery-item" key={image + index}>
                    <img
                      src={image}
                      alt={`${property.title} gallery ${index + 2}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="property-overview-section">
          <div className="container">
            <div className="property-overview-layout">
              <div className="property-overview-main">
                <div className="property-content-block">
                  <span className="section-kicker">Overview</span>
                  <h2>Property Description</h2>
                  <p>{property.description}</p>
                </div>

                <div className="property-content-block">
                  <span className="section-kicker">Features</span>
                  <h2>Key Features</h2>
                  <ul className="property-features-list">
                    {property.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="property-content-block">
                  <span className="section-kicker">Details</span>
                  <h2>Property Details</h2>
                  <div className="property-details-grid">
                    {detailItems(property).map(([label, value]) => (
                      <div className="property-detail-item" key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="agent-contact-card">
                <div className="agent-card-header">
                  <div className="agent-avatar">
                    {property.agentName
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <h3>{property.agentName}</h3>
                    <p>Real Estate Advisor</p>
                  </div>
                </div>

                <div className="agent-contact-lines">
                  <a href={`tel:${property.agentPhone}`}>{property.agentPhone}</a>
                  <a href={`mailto:${property.agentEmail}`}>
                    {property.agentEmail}
                  </a>
                </div>

                <form
                  className="agent-contact-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input type="text" placeholder="Name" aria-label="Name" />
                  <input type="email" placeholder="Email" aria-label="Email" />
                  <input type="tel" placeholder="Phone" aria-label="Phone" />
                  <textarea
                    placeholder="Message"
                    aria-label="Message"
                    defaultValue={`I am interested in ${property.title}.`}
                  />
                  <button type="submit">Submit Request</button>
                </form>
              </aside>
            </div>
          </div>
        </section>

        <section className="similar-properties-section">
          <div className="container">
            <div className="similar-properties-header">
              <span className="section-kicker">Similar Properties</span>
              <h2>Related Listings You May Like</h2>
            </div>

            <div className="properties-page-grid">
              {similarProperties.map((similarProperty) => (
                <div className="property-card" key={similarProperty.id}>
                  <div className="property-image">
                    <img
                      src={similarProperty.image}
                      alt={similarProperty.title}
                    />
                    <span className="property-tag">{similarProperty.tag}</span>
                  </div>

                  <div className="property-content">
                    <div className="property-price">{similarProperty.price}</div>
                    <h3>{similarProperty.title}</h3>
                    <p>{similarProperty.location}</p>

                    <div className="property-meta">
                      <span>{similarProperty.beds}</span>
                      <span>{similarProperty.baths}</span>
                      <span>{similarProperty.area}</span>
                    </div>

                    <Link
                      to={`/properties/${similarProperty.id}`}
                      className="property-link"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PropertyDetails;
