import HeroSection from "@/components/sections/HeroSection";
import MetricsStrip from "@/components/sections/MetricsStrip";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <HeroSection />
      <MetricsStrip />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
