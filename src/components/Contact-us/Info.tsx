import React from "react";
import styles from "./Info.module.css";
import TagElement from "./TagElement";
import ContactForm from "./ContactForm";
import Image from "next/image";

interface dayInfo {
  day: string;
  time: string;
}

const Info = () => {
  const data: dayInfo[] = [
    { day: "Mon", time: "10:00 AM - 9:00 PM" },
    { day: "Tue", time: "10:00 AM - 9:00 PM" },
    { day: "Wed", time: "10:00 AM - 9:00 PM" },
    { day: "Thu", time: "10:00 AM - 9:00 PM" },
    { day: "Fri", time: "10:00 AM - 9:00 PM" },
    { day: "Sat", time: "10:00 AM - 9:00 PM" },
    { day: "Sun", time: "10:00 AM - 9:00 PM" },
  ];

  return (
    <div className={styles.info_container}>
      <div className={styles.inner_container}>
        <div className={styles.column1}>
          <div className={styles.container}>
            <div className={`${styles.column} ${styles.leftColumn}`}>
              <div className={styles.title}>Address</div>
              <p className={styles.para}>1st Floor, Lakhimandir Complex</p>
              <p className={styles.para}>Beltola Tiniali</p>
              <p className={styles.para}>Guwahati, Assam 781028</p>
              <p className={styles.para}>India</p>
              <br />
              <br />
              <div className={styles.title}>Call</div>
              <p className={styles.para}>06003981831</p>
              <br />
              <br />
              <br />
              <br />
              <div className={styles.socialIcons}>
                <a href="https://example.com" className={styles.icon}>
                  <Image
                    src={"/facebook.png"}
                    alt={"alt"}
                    height={20}
                    width={20}
                  />
                  <p className={styles.social_link}>facebook_link</p>
                </a>
              </div>
              <div className={styles.socialIcons}>
                <a href="https://example.com" className={styles.icon}>
                  <Image
                    src={"/instagram.png"}
                    alt={"alt"}
                    height={20}
                    width={20}
                  />
                  <p className={styles.social_link}>instagram_link</p>
                </a>
              </div>
            </div>

            <div className={`${styles.column} ${styles.rightColumn}`}>
              <div className={styles.title}>Business Hours</div>
              <div className={styles.businessHours}>
                {data.map((item, index) => (
                  <TagElement key={index} day={item.day} time={item.time} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.title}>Send Query</div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Info;
