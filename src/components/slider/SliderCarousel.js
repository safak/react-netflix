import React from "react";
import "./sliderCarousel.scss";
import Slider from "react-slick";
import Card from "../../components/card/Card";

const SliderCarousel = ({ title, name, referance, movies, handleDetail }) => {

  let settings = {
    infinite: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
  };

  return (
    <div>
      <span className="genreTitle" ref={referance}>
        {title}
      </span>
      <Slider {...settings} className="slider">
        {movies &&
          movies.map((movie) => (
            <div onClick={() => handleDetail(movie, name, referance)}>
              <Card movie={movie} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SliderCarousel;
