import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselCard = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src="https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1060&t=st=1671373578~exp=1671374178~hmac=b29ea1441fc45475c48fbba3a5b76b2fb66d5b7dac426a531b378d69863b1951" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1060&t=st=1671373578~exp=1671374178~hmac=b29ea1441fc45475c48fbba3a5b76b2fb66d5b7dac426a531b378d69863b1951" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1060&t=st=1671373578~exp=1671374178~hmac=b29ea1441fc45475c48fbba3a5b76b2fb66d5b7dac426a531b378d69863b1951" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
