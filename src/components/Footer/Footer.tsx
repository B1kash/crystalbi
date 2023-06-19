"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Footer.module.css";
import Icons from "./Icons";

const SocialIcons = ["/whatsapp.png", "/facebook.png", "/instagram.png"];

const PaymentIcons = [
  "/PaytmLogo2.png",
  "/visa.png",
  "/master-card.png",
  "/cod.png",
];

const Footer = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    setName("");
    setEmail("");
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.column1}>
            <div className={styles.subcontainer}>
              <div className={styles.item}>
                <h4 className={styles.heading}>Popular Categories</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Gents</li>
                  <li className={styles.listItem}>Ladies</li>
                  <li className={styles.listItem}>Accessories & Tools</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h4 className={styles.heading}>Popular Services</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Hair Cut</li>
                  <li className={styles.listItem}>Hair Color</li>
                  <li className={styles.listItem}>Hair Treatment</li>
                  <li className={styles.listItem}>Skin Care</li>
                  <li className={styles.listItem}>Skin Treatment</li>
                  <li className={styles.listItem}>Bridal</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h4 className={styles.heading}>Corporate</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>About Us</li>
                  <li className={styles.listItem}>Contact Us</li>
                  <li className={styles.listItem}>Customer Service</li>
                  <li className={styles.listItem}>Blog</li>
                  <li className={styles.listItem}>Terms & Conditions</li>
                  <li className={styles.listItem}>Privacy Policy</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h4 className={styles.heading}>Connect</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Icons icons={SocialIcons} social={true} />
                  </li>
                </ul>
                <br />
                <h4>Payment</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    {" "}
                    <Icons icons={PaymentIcons} social={false} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.newsletter}>
              <p className={styles.formpara}>
                Get special offers to you inbox!
              </p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  className={styles["form-input"]}
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="email"
                  className={styles["form-input"]}
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className={styles.btn_grid}>
                  <p className={styles.terms}>
                    By providing my e-mail addess, I consent marketing
                    communications from instaurasalon.com and its affiliates.
                  </p>
                  <button type="submit" className={styles["form-button"]}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.legal}>
        &copy; 2022 Instura unisex hair and beuty spa salon, Inc. All Rights
        Reserved.
      </div>
    </>
  );
};

export default Footer;
