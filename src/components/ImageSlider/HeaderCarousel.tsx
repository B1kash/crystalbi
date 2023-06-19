import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  "/banner-1.jpg",
  "/banner-2.jpg",
  "/banner-image-5.jpg",
  "/banner-image-6.jpg"
];

const HeaderCarousel = () => {
  return <ImageSlider images={images} header={true} />;
};

export default HeaderCarousel;
