import React from "react";
import styles from "./SubNavbar.module.css";

const SubNavbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["navbar-items"]}>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Bridal</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Book an Appointment</a>
        </li>
      </ul>
      <div className="navbar-items"></div>
    </nav>
  );
};

export default SubNavbar;
