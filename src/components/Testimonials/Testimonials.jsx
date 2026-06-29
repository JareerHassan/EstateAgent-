import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Buyer",
    text: "The entire buying process felt clear and stress-free. I received honest advice, strong market insight, and support at every step.",
    rating: "5/5",
  },
  {
    name: "David Miller",
    role: "Property Investor",
    text: "Professional, responsive, and very knowledgeable. The guidance helped me make a confident investment decision.",
    rating: "5/5",
  },
  {
    name: "Emily Carter",
    role: "Home Seller",
    text: "My property was presented beautifully and sold faster than expected. The communication and strategy were excellent.",
    rating: "5/5",
  },
  {
    name: "James Wilson",
    role: "Luxury Home Buyer",
    text: "A highly professional experience from start to finish. The guidance, communication, and property recommendations were excellent.",
    rating: "5/5",
  },
  {
    name: "Olivia Brown",
    role: "First-Time Buyer",
    text: "Everything was explained clearly. I felt confident throughout the process and found the perfect property for my needs.",
    rating: "5/5",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="testimonials-left">
            <span className="testimonials-label">Client Stories</span>

            <h2>Trusted By Buyers, Sellers And Property Investors</h2>

            <p>
              Real estate decisions require confidence. These client stories
              highlight the value of clear communication, expert guidance, and
              a professional property experience.
            </p>

            <div className="testimonial-rating-box">
              <h3>4.9</h3>

              <div>
                <span>Average client rating</span>
                <p>Based on verified client feedback</p>
              </div>
            </div>
          </div>

          <div className="testimonials-slider">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={22}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className="testimonial-card">
                    <div className="quote-icon" aria-hidden="true">
                      "
                    </div>

                    <p className="testimonial-text">{item.text}</p>

                    <div className="testimonial-bottom">
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>

                      <div className="stars" aria-label={`${item.rating} rating`}>
                        {item.rating}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
