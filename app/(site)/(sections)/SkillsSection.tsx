import { getSkills } from "@/sanity/sanity.query";
import { SkillType } from "@/types/skills";
import { ReactElement } from "react";
import { Reorder } from "framer-motion";
import { SkillItem } from "../components/SkillItem";

export default async function SkillsSection(): Promise<ReactElement> {
  const skills: SkillType[] = await getSkills();

  return (
    <section
      className="flex flex-col items-center text-center xl:justify-center align-middle justify-between scroll-mt-32 mt-32"
      id="skills"
    >
      <h2 className="font-semibold text-4xl mb-4">Skills</h2>

      <p className="text-zinc-200 max-2-lg text-1xl md:Text-2xl">
        I&apos;ve spent few years learning and working on my skills and
        knowledge. here are some of them
      </p>

      {skills &&
        skills?.map((data) => (
          <div
            key={data._id}
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-flow-row items-center align-middle justify-between gap-5 mt-8"
          >
            {data.skills?.map((skill, id) => (
              <SkillItem key={id} skill={skill}></SkillItem>
            ))}
          </div>
        ))}
    </section>
  );
}
