import React from "react";
import styles from "./ImageBanner.module.css";
import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
}

const ImageBanner = ({ src, alt }: BannerProps) => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <Image src={src} alt={alt} className={styles.image} layout="fill" />
      </div>
    </div>
  );
};

export default ImageBanner;
