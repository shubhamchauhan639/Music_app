import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
// import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
      <div  className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

  <HeroSection/>
  <FeatureCourses/>
  <WhyChooseUs/>
  <MovingCard/>
  {/* <GridBackgroundDemo/> */}

</div>

  );
}
