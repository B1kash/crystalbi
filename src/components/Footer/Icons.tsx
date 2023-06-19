import React from "react";
import Image from "next/image";
import styles from "./Icons.module.css";

interface IconGridProps {
  icons: string[];
  social: boolean;
}

const Icons: React.FC<IconGridProps> = ({ icons, social }) => {
 
  return (
    <div
      className={`${styles.grid} ${social ? styles.gridSocial : styles.grid}`}
    >
      {icons.map((icon, index) => (
        <div className={styles.icon} key={index}>
          <Image src={icon} alt={`Icon ${index + 1}`} width={30} height={30} />
        </div>
      ))}
    </div>
  );
};

export default Icons;
