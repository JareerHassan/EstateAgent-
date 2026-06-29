import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  interest: "Buying Property",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9+\-\s()]{7,20}$/;

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!phonePattern.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us about your property needs.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setFormData(initialFormData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-wrapper">
              <div className="contact-hero-content">
                <span>CONTACT ESTATEAGENT</span>

                <h1>Let's Talk About Your Next Property Move</h1>

                <p>
                  Have questions about buying, selling, or investing? Send a
                  message and get professional real estate guidance.
                </p>
              </div>

              <div className="contact-hero-card">
                <h3>24h</h3>
                <p>Response time for property consultation requests.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <span className="contact-label">GET IN TOUCH</span>

                <h2>Start Your Property Journey With Expert Support</h2>

                <p>
                  Whether you are looking for your dream home, planning to sell,
                  or exploring investment opportunities, EstateAgent is here to
                  help you move forward with confidence.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-card">
                    <span>Phone</span>
                    <a href="tel:+12345678900">+1 234 567 8900</a>
                  </div>

                  <div className="contact-info-card">
                    <span>Email</span>
                    <a href="mailto:hello@estateagent.com">
                      hello@estateagent.com
                    </a>
                  </div>

                  <div className="contact-info-card">
                    <span>Office</span>
                    <p>123 Luxury Avenue, New York, USA</p>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {isSubmitted && (
                  <div className="form-success" role="status">
                    <strong>Message sent successfully.</strong>
                    <span>
                      Thank you for reaching out. Our advisor will contact you
                      shortly.
                    </span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <span className="form-error" id="contact-name-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <span className="form-error" id="contact-email-error">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "contact-phone-error" : undefined
                      }
                    />
                    {errors.phone && (
                      <span className="form-error" id="contact-phone-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-interest">Interest</label>
                    <select
                      id="contact-interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option>Buying Property</option>
                      <option>Selling Property</option>
                      <option>Investment Advice</option>
                      <option>Property Valuation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your property needs"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                  ></textarea>
                  {errors.message && (
                    <span className="form-error" id="contact-message-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="container">
            <div className="map-box">
              <iframe
                title="EstateAgent Office Location"
                src="https://www.google.com/maps?q=123%20Luxury%20Avenue%20New%20York%20USA&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
