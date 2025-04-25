import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa";
import "./Hero.css"; 

const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setSlider] = useState(0);

  const handleSelect = (i) => {
    setSlider(i);
  };

  return (
    <div className="position-relative mt-5 container-fluid">
      <Carousel
        activeIndex={slider}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={3000}
      >
        {imgData.map((item, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 rounded mx-auto carousel-img"
              src={item.url}
              alt={`Slide ${i + 1}`}
            />
            <div className="overlay"></div>
            <Carousel.Caption className="">
              <h3 className="fw-bold text-center">
                Welcome to the world of Tasty & Fresh Food
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="position-absolute top-50 start-0 end-0 d-flex justify-content-between align-items-center">
        <FaChevronLeft
          size={30}
          className="cursor-pointer text-white side-icon"
          onClick={() =>
            setSlider(slider === 0 ? imgData.length - 1 : slider - 1)
          }
        />
        <FaAngleRight
          size={35}
          className="cursor-pointer text-white angle-icon"
          onClick={() =>
            setSlider(slider === imgData.length - 1 ? 0 : slider + 1)
          }
        />
      </div>
    </div>
  );
};

export default Hero;
