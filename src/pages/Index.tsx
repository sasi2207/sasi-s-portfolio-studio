import { Layout } from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import { SolutionFinder } from "@/components/home/SolutionFinder";
import TechStackScroller from "@/components/home/TechStack";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Welcoming Hero with Interactive Solution Preview */}
      <Hero />

      {/* 2. Interactive "What Do You Need Built?" Solution Navigator */}
      <SolutionFinder />

      {/* 3. Infinite Technology & Quality Marquee */}
      <TechStackScroller />

      {/* 4. Complete Services & Technical Disciplines */}
      <ServicesPreview />

      {/* 5. Live Client Case Studies & Production Proof */}
      <ProjectsPreview />

      {/* 6. Why Clients Choose TechSasi: 4 Pillars of Trust */}
      <WhyChooseUs />

      {/* 7. Transparent 5-Step Journey from Idea to Launch */}
      <ProcessSection />

      {/* 8. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 9. Final Welcoming Conversion Banner */}
      <CtaSection />
    </Layout>
  );
};

export default Index;
