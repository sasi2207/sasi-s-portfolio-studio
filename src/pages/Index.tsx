import { useEffect } from 'react';
import AOS from 'aos';
import { Layout } from '@/components/layout/Layout';
<<<<<<< HEAD

import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { CtaSection } from '@/components/home/CtaSection';
import Hero from '@/components/home/Hero';
import TechStackScroller from '@/components/home/TechStack';
=======
import { Hero } from '@/components/home/Hero';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { CtaSection } from '@/components/home/CtaSection';
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe

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
<<<<<<< HEAD
      <Hero/>
      <TechStackScroller
      />
=======
      <Hero />
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
      <ServicesPreview />
      <ProjectsPreview />
      <CtaSection />
    </Layout>
  );
};

export default Index;
