import AboutSection from "./(sections)/AboutSection";
import ExperienceSection from "./(sections)/ExperienceSection";
import SkillsSection from "./(sections)/SkillsSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import ContactSection from "./(sections)/ContactSection";
import { ReactElement } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Hernandez",
  description: "A personal software developer portfolio",
  openGraph: {
    images: "",
  },
};

export default function Home(): ReactElement {
  return (
    <main className="mt-32">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
