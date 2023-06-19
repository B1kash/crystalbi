import React from "react";
import Styles from "./Offers.module.css";
import OfferCard from "./OfferCard";

const dummyData = [
  {
    id: 1,
    imageSrc: "/Photo_1.png",
    serviceName: "Gents Haircut Styles",
    discount: "20% off",
  },
  {
    id: 2,
    imageSrc: "/Photo_2.png",
    serviceName: "Ladies Haircut Style",
    discount: "15% off",
  },
  {
    id: 3,
    imageSrc: "/Photo_3.png",
    serviceName: "Spa Service",
    discount: "25% off",
  },
  {
    id: 4,
    imageSrc: "/Photo_4.png",
    serviceName: "Child Haircut Style",
    discount: "30% off",
  },
];

const Offers = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>OFFER OF THE MONTH</h1>

      <div className={Styles.offer_cards}>
        {dummyData.map((item) => (
          <div className={Styles.offer_card} key={item.id}>
            <OfferCard
              imageSrc={item.imageSrc}
              serviceName={item.serviceName}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
