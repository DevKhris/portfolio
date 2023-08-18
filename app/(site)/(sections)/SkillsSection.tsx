import { getSkills } from "@/sanity/sanity.query";
import { SkillType } from "@/types/skills";
import { ReactElement } from "react";

export default async function SkillsSection(): Promise<ReactElement> {
  const skills: SkillType[] = await getSkills();

  return (
    <section
      className="flex flex-col items-center xl:justify-center align-middle justify-between scroll-mt-32 mt-32"
      id="skills"
    >
      <h2 className="font-semibold text-4xl mb-4">Skills</h2>

      <p className="text-zinc-200 max-2-lg text-1xl">
        I&apos;ve spent few years learning and working on my skills and
        knowledge. here are some of them
      </p>

      {skills &&
        skills?.map((data) => (
          <div
            key={data._id}
            className="grid grid-cols-7 grid-flow-row items-center align-middle justify-between gap-5 mt-8"
          >
            {data.skills?.map((skill, id) => (
              <div
                key={id}
                className="flex flex-col justify-center text-center items-center px-2 py-1"
              >
                <i
                  className={`devicon-${skill.toLowerCase()}-plain devicon-${skill.toLowerCase()}-original text-[64px] hover:colored`}
                ></i>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        ))}
    </section>
  );
}
