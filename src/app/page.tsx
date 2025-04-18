import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LogoCarousel from "@/components/LogoCarousel";
import Packages from "@/components/Packages";
import Questions from "@/components/Questions";
import Review from "@/components/Review";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <LogoCarousel />
      <Packages />
      <Questions />
      <Review />
    </>
  );
}