"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

interface ImageSliderProps {
  images: string[];
  header: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, header }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  if (header) {
    let classes = `image-slider-header`;
  } else {
    let classes = `image-slider-carousel`;
  }

  const isFirstImage = currentSlide === 0;
  const showPreviousButton = !isFirstImage;

  return (
    <div className={styles["image-slider"]}>
      <div className={styles["slider-container"]}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles["slider-item"]} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <Image
              src={image}
              alt={`Slider ${index}`}
              layout="fill"
              objectFit="cover"
              style={{ objectFit: "cover" }}
            />
            {header && (
              <div className={styles["slider-text"]}>
                <p>Your hair is our </p>
                <p className={styles.canvas}>canvas!</p>
                <button className={styles["appointment-button"]}>
                  Book a Service
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showPreviousButton && (
        <button
          className={`${styles["slider-button"]} ${styles.left}`}
          onClick={goToPreviousSlide}
        >
          <span className={styles.arrow_left}></span>
        </button>
      )}

      <button
        className={`${styles["slider-button"]} ${styles.right}`}
        onClick={goToNextSlide}
      >
        {/* &gt; */}
        <span className={styles.arrow_right}></span>
      </button>

      <div className={styles["slider-dots"]}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
