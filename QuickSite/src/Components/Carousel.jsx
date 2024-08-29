// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import '../Pages/Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div 
      className="carousel-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 3" />
        </div>
      </Slider>
    </motion.div>
  );
};

export default Carousel;
