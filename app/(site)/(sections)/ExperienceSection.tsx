import { getExperience } from "@/sanity/sanity.query";
import { ExperienceType } from "@/types/experience";
import ExperienceItem from "../components/ExperienceItem";
import { ReactElement } from "react";

export default async function ExperienceSection(): Promise<ReactElement> {
  const experience: ExperienceType[] = await getExperience();

  return (
    <section
      className="flex flex-col items-center xl:justify-center align-middle justify-between scroll-mt-24 mt-32"
      id="experience"
    >
      <div className="mb-16 pt-16">
        <h2 className="font-semibold text-4xl mb-4 text-center">Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {experience?.reverse().map((data) => (
          <ExperienceItem key={data._id} experience={data}></ExperienceItem>
        ))}
      </div>
    </section>
  );
}