'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ children,slideref }) => {
  
  const settings = {
    dots: false, 
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
    
  
  };

  

  return (
    <Slider ref={slideref} {...settings}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
