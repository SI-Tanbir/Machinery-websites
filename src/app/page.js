import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import USPSection from "@/components/USPSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container m-auto">

  <Navbar></Navbar>
  <HeroSection></HeroSection>
  <USPSection></USPSection>
  <FeaturedProducts></FeaturedProducts>
    
    </div>
  );
}
