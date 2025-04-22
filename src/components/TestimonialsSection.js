import TestimonialCarousel from "./TestimonialCarousel";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <header>
          <h2>Testimonials</h2>
          <p>
            See what our property managers, landlords, and tenants have to say
          </p>
        </header>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

export default TestimonialsSection;
