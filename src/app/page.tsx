import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import FaqsSection from '@/components/sections/faqs';
import Hero from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import Skills from '@/components/sections/skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <FaqsSection />
      <Experience />
    </main>
  );
}
