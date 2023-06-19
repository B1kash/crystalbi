import React from "react";
import styles from "./SubNavbar.module.css";
import Link from "next/link";

type NavItem = {
  label: string;
  route: string;
};

type NavbarProps = {
  navItems: NavItem[];
};

const SubNavbar:React.FC<NavbarProps> = ({ navItems })  => {
  return (
    <>
       <nav className={styles.nav}>
       <ul className={styles["navbar-items"]}>
       {navItems.map((item) => (
        <li key={item.label}>
          <a className={styles.navlink} href={item.route}>{item.label}</a>
        </li>
      ))}
       </ul>
     
    </nav>
    </>
    // <nav className={styles.nav}>
    //   <ul className={styles["navbar-items"]}>
    //     <li>
    //       <a href="#">Services</a>
    //     </li>
    //     <li>
    //       <a href="#">Bridal</a>
    //     </li>
    //     <li>
    //       <a href="#">Gallery</a>
    //     </li>
    //     <li>
    //       <a href="#">Shop</a>
    //     </li>
    //     <li>
    //       <a href="#">About Us</a>
    //     </li>
    //     <li>
    //       <a href="#">Book an Appointment</a>
    //     </li>
    //   </ul>
    //   <div className="navbar-items"></div>
    // </nav>
  );
};

export default SubNavbar;
