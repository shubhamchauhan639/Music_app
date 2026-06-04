import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Fotter";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/instuctures";
import MovingCard from "@/components/MovingCard";
import UpcomingWebinars from "@/components/UpcomingWebinar";

import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
      <div  className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

  <HeroSection/>
  <FeatureCourses/>
  <WhyChooseUs/>
  <MovingCard/>
  <UpcomingWebinars/>
  <Instructors/>  
  <Footer/>


</div>

  );
}
