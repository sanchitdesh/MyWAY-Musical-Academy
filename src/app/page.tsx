import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import HoverEffects from "@/components/HoverEffects";
import InfiniteMoveCards from "@/components/InfiniteMoveCards";
import Instructors from "@/components/Instructors";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteMoveCards />
      <HoverEffects />
      <Instructors />
    </main>
  );
}
