import { useEffect } from 'react';
import AOS from 'aos';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
  import { motion } from "framer-motion";

const skills = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'MongoDB',
  'Tailwind CSS', 'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL',
];

const timeline = [
  {
    year: "2024",
    title: "Senior Freelance Developer",
    description: "Working with global clients on scalable web platforms",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    description: "Built enterprise applications and admin dashboards",
    icon: Award,
  },
  {
    year: "2020",
    title: "Started Freelancing",
    description: "Delivered modern websites and business solutions",
    icon: Briefcase,
  },
  {
    year: "2019",
    title: "Computer Science Degree",
    description: "Graduated with focus on software engineering",
    icon: GraduationCap,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <ParallaxSection
        className="pt-32 pb-20 overflow-hidden"
        bgClassName="bg-gradient-to-b from-orange-50 to-white"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              data-aos="fade-up"
            >
              About <span className="text-orange-500">Me</span>
            </h1>

            <p
              className="text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I’m a passionate full-stack developer crafting reliable, scalable,
              and user-focused digital experiences.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* BIO */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            {/* PROFILE CARD */}
            <div data-aos="fade-right">
              <div className="relative max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center shadow-lg">
                  <span className="text-7xl font-heading font-bold text-orange-300">
                    SK
                  </span>
                </div>

                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg px-5 py-3 border border-orange-100">
                  <div className="text-xl font-bold text-orange-500">5+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">
                Full-Stack Developer & Problem Solver
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                I’m SasiKumar, a full-stack developer based in Mettur, Salem.
                I specialize in building modern web applications that balance
                performance, scalability, and great user experience.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With hands-on expertise in React, Node.js, and cloud platforms,
                I help businesses transform ideas into reliable digital products.
                I strongly believe in clean architecture, maintainable code,
                and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-padding bg-orange-50/40">
        <div className="container-custom">
          <SectionHeader
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with"
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="
                  px-4 py-2
                  rounded-full
                  text-sm font-medium
                  bg-white
                  border border-orange-100
                  text-gray-700
                  shadow-sm
                  hover:bg-orange-50
                  transition
                "
                data-aos="fade-up"
                data-aos-delay={index * 40}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}


 <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-16">
          My Journey
        </h2>

        <div className="relative max-w-5xl mx-auto">

          {/* CENTER LINE */}
          <motion.div
            className="
              absolute left-1/2 top-0
              w-[3px] bg-orange-300
              rounded-full
              shadow-[0_0_20px_rgba(249,115,22,0.6)]
            "
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transform: "translateX(-50%)" }}
          />

          {/* ITEMS */}
          <div className="flex flex-col gap-20">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  className={`
                    relative flex items-center
                    ${isLeft ? "justify-start pr-10" : "justify-end pl-10"}
                  `}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -120 : 120,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: isLeft ? -120 : 120,
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                >
                  {/* CONTENT */}
                  <div
                    className={`
                      w-full max-w-md
                      rounded-xl bg-white
                      border border-orange-100
                      shadow-lg
                      p-6
                      ${isLeft ? "text-right" : "text-left"}
                    `}
                  >
                    <div className="text-sm font-semibold text-orange-500 mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* DOT */}
                  <motion.div
                    className="
                      absolute left-1/2
                      w-5 h-5
                      bg-orange-500
                      rounded-full
                      shadow-[0_0_15px_rgba(249,115,22,0.9)]
                      flex items-center justify-center
                    "
                    style={{ transform: "translateX(-50%)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon size={10} className="text-white" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>




    </Layout>
  );
};

export default About;  