import AboutSection from './(sections)/AboutSection';
import ExperienceSection from './(sections)/ExperienceSection';
import SkillsSection from './(sections)/SkillsSection';
import ProjectsSection from './(sections)/ProjectsSection';
import ContactSection from './(sections)/ContactSection';
import { ReactElement } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: process.env.NEXT_PORTFOLIO_NAME,
  description: process.env.NEXT_PORTFOLIO_DESCRIPTION,
  openGraph: {
    images: '',
  },
};

export default function Home(): ReactElement {
  return (
    <main className='md:mt-32 mt-28'>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
