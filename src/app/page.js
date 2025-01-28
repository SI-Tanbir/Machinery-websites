
'use client'

import BlogHighlights from "@/components/BlogHighlights";
import Certificates from "@/components/Certificates";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IndustriesWeSupport from "@/components/IndustriesWeSupport";
import Navbar from "@/components/Navbar";
import OurCustomers from "@/components/OurCustomers";
import StrategicPartners from "@/components/StrategicPartners";
import Testimonials from "@/components/Testimonials";
import USPSection from "@/components/USPSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container m-auto">

  <Navbar></Navbar>
  <HeroSection></HeroSection>
  <USPSection></USPSection>
  <FeaturedProducts></FeaturedProducts>
  <IndustriesWeSupport></IndustriesWeSupport>

    <OurCustomers></OurCustomers>

    <StrategicPartners></StrategicPartners>

    <Certificates></Certificates>

    <Testimonials></Testimonials>
    <BlogHighlights></BlogHighlights>
   <Footer></Footer>
    </div>
  );
}
