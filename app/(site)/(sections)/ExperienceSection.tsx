import { getExperience } from "@/sanity/sanity.query";
import { ExperienceType } from "@/types/experience";
import ExperienceItem from "../components/ExperienceItem";
import { ReactElement } from "react";

export default async function ExperienceSection(): Promise<ReactElement> {
  const experience: ExperienceType[] = await getExperience();

  return (
    <section
      className="flex flex-col items-center xl:justify-center align-middle justify-between scroll-mt-24 mt-28"
      id="experience"
    >
      <div className="mb-16 pt-16">
        <h2 className="font-semibold text-4xl mb-4 text-center">Experience</h2>
      </div>

      <div className="flex flex-col md:gap-y-12 m-4 md:m-0">
        {experience?.reverse().map((experience) => (
          <ExperienceItem
            key={experience._id}
            url={experience.url}
            logo={experience.logo}
            name={experience.name}
            title={experience.title}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
          ></ExperienceItem>
        ))}
      </div>
    </section>
  );
}
