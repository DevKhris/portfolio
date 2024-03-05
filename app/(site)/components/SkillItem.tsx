import { ReactElement } from "react";

export function SkillItem({ skill }: { skill: string }): ReactElement {
  return (
    <div className="flex flex-col justify-center text-center items-center px-2 py-1 duration-300 hover:-translate-y-2 hover:text-amber-300 dark:hover:text-emerald-300 ">
      <i
        className={`devicon-${skill.toLowerCase()}-plain devicon-${skill.toLowerCase()}-original text-[64px] hover:colored`}
      ></i>
      <span className="px-2 md:px-0">{skill}</span>
    </div>
  );
}
