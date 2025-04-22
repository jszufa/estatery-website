import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";

const avatars = [avatar1, avatar2, avatar3];

const testimonials = [
  {
    text: "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
    name: "Mira Culos",
    role: "Renter",
  },
  {
    text: "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
    name: "Mark Brown",
    role: "Renter",
  },
  {
    text: "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
    name: "Jake White",
    role: "Renter",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <img src={avatars[i]} alt={`Avatar ${i}`} className="custom-dot" />
      );
    },
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((item, index) => (
        <div key={index} className="testimonial-slide">
          <p className="testimonial-text">“{item.text}”</p>
          <p className="testimonial-name">
            {item.name}, <span className="testimonial-role">{item.role}</span>
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
