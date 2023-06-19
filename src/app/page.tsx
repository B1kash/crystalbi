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
  return (
    <>
      <PageLayout>
        <HeaderCarousel />
        <Offers />
        <Carousel />
        <Gallery />
        <Brand />
      </PageLayout>
    </>
  );
}
