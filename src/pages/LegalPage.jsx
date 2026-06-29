import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PageHeader.css";
import "./LegalPage.css";

const legalContent = {
  "/privacy-policy": {
    label: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "Learn how EstateAgent template pages can present privacy information in a clean, professional, and user-friendly format.",
    updated: "Last updated: June 26, 2026",
    summary: [
      "Clear data collection overview",
      "Contact form and inquiry guidance",
      "Simple user rights section",
    ],
    sections: [
      {
        title: "Information We Collect",
        text: "This template includes example contact and inquiry forms that may request a name, email address, phone number, interest type, and message. In a production website, connect these forms only to services you trust and disclose the exact data you collect.",
      },
      {
        title: "How Information Is Used",
        text: "Submitted details are typically used to respond to property questions, schedule consultations, share listing information, or provide requested real estate guidance. Replace this sample copy with wording that matches your real business workflow.",
      },
      {
        title: "Cookies And Analytics",
        text: "EstateAgent does not include analytics by default. If you add analytics, advertising pixels, maps, or third-party embeds, explain which tools are active and how visitors can manage tracking preferences.",
      },
      {
        title: "Data Protection",
        text: "Use secure hosting, trusted form handling, and appropriate access controls when collecting visitor information. Legal copy should be reviewed for your region before launch.",
      },
      {
        title: "Contact",
        text: "For privacy questions, add your business email, office address, and any required data protection contact information here.",
      },
    ],
  },
  "/terms": {
    label: "Terms And Conditions",
    title: "Terms And Conditions",
    intro:
      "Use this structured terms page as a polished starting point for explaining website usage, property information, and template limitations.",
    updated: "Last updated: June 26, 2026",
    summary: [
      "Website usage guidelines",
      "Property listing disclaimer",
      "Professional template notice",
    ],
    sections: [
      {
        title: "Website Use",
        text: "Visitors may browse listings, review services, and submit inquiries through the website. Content should not be copied, misused, or presented as final legal, financial, or property advice without professional review.",
      },
      {
        title: "Property Information",
        text: "Property prices, availability, features, and descriptions shown in this template are sample content. Replace them with verified listing information before using the website for a live agency or brokerage.",
      },
      {
        title: "Consultation Requests",
        text: "Submitting a contact form does not create a binding client relationship or guarantee property availability. Add your own response timelines, service terms, and agency requirements before publishing.",
      },
      {
        title: "Third-Party Services",
        text: "Maps, analytics, CRM integrations, email services, and payment tools may have their own terms. Include details for any external service you connect to this template.",
      },
      {
        title: "Template Disclaimer",
        text: "EstateAgent is a front-end React template. The sample legal pages are provided for presentation purposes and should be replaced with policies prepared for your business and jurisdiction.",
      },
    ],
  },
};

const LegalPage = () => {
  const { pathname } = useLocation();

  const content = useMemo(
    () => legalContent[pathname] ?? legalContent["/privacy-policy"],
    [pathname],
  );

  return (
    <>
      <Navbar />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-header-content">
              <span>{content.label}</span>
              <h1>{content.title}</h1>
              <p>{content.intro}</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="container">
            <div className="legal-layout">
              <aside className="legal-sidebar" aria-label="Legal page summary">
                <span className="legal-updated">{content.updated}</span>
                <h2>Page Summary</h2>
                <div className="legal-summary-list">
                  {content.summary.map((item) => (
                    <div className="legal-summary-item" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="legal-content">
                <div className="legal-intro-card">
                  <span>Important Notice</span>
                  <p>
                    This page is designed as professional template content. For
                    live websites, replace the sample copy with legal text
                    reviewed for your company, location, and services.
                  </p>
                </div>

                <div className="legal-document">
                  {content.sections.map((section, index) => (
                    <article className="legal-block" key={section.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LegalPage;
