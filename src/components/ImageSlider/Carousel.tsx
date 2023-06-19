import React from "react";
import ImageSlider from "./ImageSlider";

const images = ["/banner-2.jpg", "/banner-image-5.jpg", "/banner-image-6.jpg"];

const Carousel = () => {
  return <ImageSlider images={images} header={false} />;
};

export default Carousel;
