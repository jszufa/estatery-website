import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.css"; // opcjonalnie do własnego stylowania

const CardCarousel = ({ cardsData }) => {
  const [initialSlide, setInitialSlide] = useState(1);

  const settings = {
    initialSlide: 1,
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 792,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="card-carousel-wrapper">
      <Slider {...settings}>
        {cardsData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            price={data.price}
            address={data.address}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
