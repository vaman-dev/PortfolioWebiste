import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsSnapshot from "@/components/sections/SkillsSnapshot";
import WhatIBuild from "@/components/sections/WhatIBuild";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import DevelopmentPipeline from "@/components/sections/DevelopmentPipeline";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSnapshot />
      <div className="bg-[var(--showcase-bg)]">
        <FeaturedProjects />
        <WhatIBuild />
      </div>
      <div className="bg-slate-50">
        <AboutPreview />
        <DevelopmentPipeline />
      </div>
      <ContactCTA />
    </>
  );
}
