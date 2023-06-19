import styles from "./OfferCard.module.css";

import Image from "next/image";

interface OfferCardProps {
  imageSrc: string;
  serviceName: string;
  discount: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  imageSrc,
  serviceName,
  discount,
}) => {
  return (
    <div className={styles.offerCard}>
      <div className={styles.offerCardImage}>
        <Image
          src={imageSrc}
          alt={serviceName}
          width={280}
          height={280}
          objectFit="cover"
        />
      </div>
      <p className={styles.serviceName}>{serviceName}</p>
      <div className={styles.discountTag}>{discount}</div>
    </div>
  );
};

export default OfferCard;
