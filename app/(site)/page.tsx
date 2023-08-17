import HomeSection from "./(sections)/HomeSection";
import ExperienceSection from "./(sections)/ExperienceSection";
import SkillsSection from "./(sections)/SkillsSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import ContactSection from "./(sections)/ContactSection";

export default function Home() {
  return (
    <main className="mt-32">
      <HomeSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

