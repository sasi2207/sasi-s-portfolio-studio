import { useEffect } from 'react';
import AOS from 'aos';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { CtaSection } from '@/components/home/CtaSection';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CtaSection />
    </Layout>
  );
};

export default Index;
