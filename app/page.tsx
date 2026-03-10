import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <BrandsCarousel />
      <ContactCTASection />
      <Footer />
    </>
  );
}
