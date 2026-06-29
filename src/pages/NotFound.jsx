import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="not-found-section">
          <div className="not-found-shape not-found-shape-one"></div>
          <div className="not-found-shape not-found-shape-two"></div>

          <div className="container">
            <div className="not-found-card">
              <span className="not-found-label">PAGE NOT FOUND</span>
              <strong className="not-found-code">404</strong>

              <h1>The Page You're Looking For Doesn't Exist</h1>

              <p>
                The property or page you are trying to access may have been
                moved, removed, or is temporarily unavailable.
              </p>

              <div className="not-found-actions">
                <Link to="/" className="not-found-primary">
                  Back To Home
                </Link>

                <Link to="/properties" className="not-found-secondary">
                  View Properties
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
