"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import Header from "@/components/Header";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Swiper from "@/components/Swiper";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <ParallaxProvider>
      <Header />
      <Banner />
      <About />
      <Works />
      <Services />
      <Swiper />
      <Blog />
    </ParallaxProvider>
  );
}
