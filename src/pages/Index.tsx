import { Layout } from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import { SolutionFinder } from "@/components/home/SolutionFinder";
import { BillingSoftwareBanner } from "@/components/home/BillingSoftwareBanner";
import TechStackScroller from "@/components/home/TechStack";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import ServicesSection from "@/components/home/ServicesPreview";
import App from "@/components/home/WhyChooseUs";

const Index = () => {
  return (
    <Layout>
      {/* 1. Welcoming Hero with Interactive Solution Preview */}
      <Hero />

      {/* 2. Interactive "What Do You Need Built?" Solution Navigator */}
      <SolutionFinder />

      {/* 3. Live Product Spotlight: Billing Software 1-Month Free Trial & Purchase */}
      <BillingSoftwareBanner />

      {/* 4. Infinite Technology & Quality Marquee */}
      <TechStackScroller />

      {/* 5. Services Section */}
      <ServicesSection />

      {/* 6. Live Client Case Studies & Production Proof */}
      <ProjectsPreview />

      {/* 7. Why Clients Choose TechSasi: 4 Pillars of Trust */}
      <App />

      {/* 8. Transparent 5-Step Journey from Idea to Launch */}
      <ProcessSection />

      {/* 9. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 10. Final Welcoming Conversion Banner */}
      <CtaSection />
    </Layout>
  );
};

export default Index;
