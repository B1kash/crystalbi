import React from "react";
import styles from "./Brand.module.css";
import Image from "next/image";

interface Brand {
  id: string;
  name: string;
  icon: string;
}

const Brand = () => {
  const brands: Brand[] = [
    {
      id: "1",
      name: "Brand 1",
      icon: "/brandlogo1.png",
    },
    {
      id: "2",
      name: "Brand 2",
      icon: "/brandlogo2.png",
    },
    {
      id: "3",
      name: "Brand 3",
      icon: "/brandlogo3.png",
    },
    {
      id: "4",
      name: "Brand 4",
      icon: "/brandlogo4.png",
    },
    {
      id: "5",
      name: "Brand 5",
      icon: "/brandlogo5.png",
    },
  ];
  return (
    <div className={styles["brand-container"]}>
      <h1 className={styles.heading}>OUR PARTNER BRANDS</h1>
      <div className={styles.brandGrid}>
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className={`${styles.brandItem} ${
              index > 2 ? styles.secondRow : ""
            }`}
          >
            <Image
              src={brand.icon}
              alt={brand.name}
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
