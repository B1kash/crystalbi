import React, { ReactNode } from "react";
import styles from "./PageLayout.module.css";
import Navbar from "../Navbar/Navbar";
import SubNavbar from "../Navbar/SubNavbar";
import Footer from "../Footer/Footer";


type NavItem = {
  label: string;
  route: string;
};

interface LayoutProps {
  children: ReactNode;
  navItems: NavItem[];
}

const PageLayout = ({ children, navItems }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar />
        <SubNavbar navItems={navItems} />
      </header>

      <main className={styles.content}>{children}</main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
