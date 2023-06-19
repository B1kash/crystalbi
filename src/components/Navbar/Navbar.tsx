"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    setSelectedItem(pathname);
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" onClick={() => setSelectedItem("/")}>
          <Image src="/logo.png" height={40} width={140} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link
          className={`${styles.links} ${
            selectedItem === "/contact-us" ? styles["nav-item-selected"] : ""
          }`}
          href="/contact-us"
        >
          Contact
        </Link>
        <Link className={styles.links} href="#">
          Sign In
        </Link>
        <Link className={styles.links} href="#">
          Location
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
