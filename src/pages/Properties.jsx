import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { propertiesData } from "../data/propertiesData";
import "./Properties.css";

const Properties = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const filterProperties = () => {
    let filtered = propertiesData.filter((property) => {
      const matchLocation =
        location.trim() === "" ||
        property.location.toLowerCase().includes(location.toLowerCase()) ||
        property.title.toLowerCase().includes(location.toLowerCase());

      const matchType =
        propertyType === "All Types" || property.type === propertyType;

      let matchPrice = true;

      if (priceRange === "$300k - $600k") {
        matchPrice = property.priceValue >= 300000 && property.priceValue <= 600000;
      } else if (priceRange === "$600k - $1M") {
        matchPrice = property.priceValue >= 600000 && property.priceValue <= 1000000;
      } else if (priceRange === "$1M+") {
        matchPrice = property.priceValue >= 1000000;
      }

      return matchLocation && matchType && matchPrice;
    });

    setFilteredProperties(filtered);
  };

  const resetFilters = () => {
    setLocation("");
    setPropertyType("All Types");
    setPriceRange("Any Price");
    setFilteredProperties(propertiesData);
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="properties-page-hero">
          <div className="container">
            <div className="properties-hero-wrapper">
              <div className="properties-page-content">
                <span>PROPERTY LISTINGS</span>

                <h1>
                  Discover Homes That Match Your Lifestyle
                </h1>

                <p>
                  Browse premium villas, apartments, and family homes selected
                  for comfort, location, and long-term property value.
                </p>
              </div>

              <div className="properties-hero-card">
                <h3>50+</h3>
                <p>Active premium listings available for buyers and investors.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="properties-listing">
          <div className="container">
            <div className="property-filter-box">
              <div className="filter-field">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Search by city, area or property"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="filter-field">
                <label>Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Family Home</option>
                </select>
              </div>

              <div className="filter-field">
                <label>Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option>Any Price</option>
                  <option>$300k - $600k</option>
                  <option>$600k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>

              <div className="filter-actions">
                <button className="filter-btn" onClick={filterProperties}>
                  Search
                </button>

                <button className="reset-btn" onClick={resetFilters}>
                  Reset
                </button>
              </div>
            </div>

            <div className="listing-top">
              <h2>Available Properties</h2>
              <p>{filteredProperties.length} properties found</p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="properties-page-grid">
                {filteredProperties.map((property) => (
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
            ) : (
              <div className="no-results">
                <h3>No properties found</h3>
                <p>Try changing your location, property type, or price range.</p>
                <button onClick={resetFilters}>Reset Filters</button>
              </div>
            )}

            {filteredProperties.length > 0 && (
              <div className="properties-pagination">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Properties;
