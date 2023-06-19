import React from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const images = [
  { src: "/box_image_1.jpg", alt: "Image 1" },
  { src: "/box_image_2.jpg", alt: "Image 2" },
  { src: "/box_image_3.jpg", alt: "Image 3" },
  { src: "/box_image_4.jpg", alt: "Image 4" },
  { src: "/box_image_5.jpg", alt: "Image 5" },
  { src: "/box_image_6.jpg", alt: "Image 6" },
  { src: "/box_image_7.jpg", alt: "Image 7" },
  { src: "/box_image_8.jpg", alt: "Image 8" },
];

const Gallery = () => {
  return (
    <>
      <h1 className={styles.heading}>OFFER OF THE MONTH</h1>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              objectFit="cover"
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <a className={styles.view}>VIEW ALL</a>
    </>
  );
};

export default Gallery;
