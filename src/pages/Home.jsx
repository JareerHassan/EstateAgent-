import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProperties />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Home;