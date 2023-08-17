import HomeSection from "./(sections)/HomeSection";
import ExperienceSection from "./(sections)/ExperienceSection";
import SkillsSection from "./(sections)/SkillsSection";

export default function Home() {
  return (
    <main className="mt-32">
      <HomeSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}

