import Image from "next/image";

import Offers from "@/components/Offers/Offers";
import HeaderCarousel from "@/components/ImageSlider/HeaderCarousel";
import Carousel from "@/components/ImageSlider/Carousel";
import Gallery from "@/components/gallery/Gallery";
import Brand from "@/components/Brands/Brand";
import Navbar from "@/components/Navbar/Navbar";
import SubNavbar from "@/components/Navbar/SubNavbar";
import Footer from "@/components/Footer/Footer";
import PageLayout from "@/components/Layout/PageLayout";

export default function Home() {

  const navItems = [
    { label: 'Services', route: '#' },
    { label: 'Bridal', route: '#' },
    { label: 'Gallery', route: '#' },
    { label: 'Shop', route: '#' },
    { label: 'About US', route: '#' },
    { label: 'Book An Appointment', route: '#' },
  ];

  return (
    <>
      <PageLayout navItems={navItems}>
        <HeaderCarousel />
        <Offers />
        <Carousel />
        <Gallery />
        <Brand />
      </PageLayout>
    </>
  );
}
