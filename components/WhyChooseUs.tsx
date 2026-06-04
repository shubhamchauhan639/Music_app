import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { cn } from "@/utils/lib";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore.",
  },
];

function WhyChooseUs() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-20">
        <StickyScroll content={musicSchoolContent} />
      </div>
    </div>
  );
}

export default WhyChooseUs;