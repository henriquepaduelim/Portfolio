import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsGrid featuredOnly />
      <ContactSection />
    </>
  );
}
