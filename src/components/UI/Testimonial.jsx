import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p className="section__description">
        I rented a car for a city trip with my family and the experience was
        fantastic. The car was clean and comfortable, and the service was
        excellent.
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Mohammad Abdel-Rahman</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        I rented a car for a weekend getaway, and I must say, it was a
        seamless experience. The car was in excellent condition, and the
        whole process was fast and easy.
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Salma Nasser</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Renting a car from this service was the best decision I made for my
        business trip. The car was delivered on time, clean, and in great
        condition.
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Ahmed Al-Mansouri</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        I've been using this car rental service for all my trips, and I'm
        always impressed. The cars are well-maintained, and the staff is
        friendly and professional.
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Mariam Hassan</h6>
          <p className="section__description">Customer</p>
        </div>
      </div>
      
      
    </div>
  </Slider>
);
};
      

export default Testimonial;
