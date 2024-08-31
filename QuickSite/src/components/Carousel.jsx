
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css'; 

import Store from '../assets/Store.png';
import tech from '../assets/tech.png';
import blog from '../assets/blog.png';
import resturant from '../assets/resturant.png';
import fashion from '../assets/fashion.png';
import portfolio from '../assets/portfolio.png';
import business from '../assets/business.png';
import fitness from '../assets/fitness.png';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={Store} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={tech} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={blog} alt="Slide 3" />
        </div>
        <div className="carousel-slide">
          <img src={resturant} alt="Slide 4" />
        </div>
        <div className="carousel-slide">
          <img src={fashion} alt="Slide 5" />
        </div>
        <div className="carousel-slide">
          <img src={portfolio} alt="Slide 6" />
        </div>
        <div className="carousel-slide">
          <img src={business} alt="Slide 7" />
        </div>
        <div className="carousel-slide">
          <img src={fitness} alt="Slide 8" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
