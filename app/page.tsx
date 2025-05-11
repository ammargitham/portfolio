import ExperienceSection from './_components/exp-section';
import Footer from './_components/footer';
import HeroSection from './_components/hero-section';
import ProjectsSection from './_components/projects-section';
import SkillsSection from './_components/skills-section';

import { ThemeModeToggle } from '@/components/theme-mode-toggle';

export default function Home() {
  return (
    <>
      <header className="absolute top-4 right-4">
        <ThemeModeToggle />
      </header>
      <main className="bg-background text-foreground min-h-screen w-full px-6 py-10 transition-colors duration-500 lg:mx-auto lg:w-5xl">
        <div className="space-y-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Projects Section */}
          <ProjectsSection />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
