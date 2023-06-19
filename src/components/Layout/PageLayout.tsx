import React, { ReactNode } from "react";
import styles from "./PageLayout.module.css";
import Navbar from "../Navbar/Navbar";
import SubNavbar from "../Navbar/SubNavbar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar />
        <SubNavbar />
      </header>

      <main className={styles.content}>{children}</main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
