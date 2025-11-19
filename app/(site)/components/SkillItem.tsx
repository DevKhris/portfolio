import { ReactElement } from 'react';

export function SkillItem({ skill }: { skill: string }): ReactElement {
  const iconNamePlain = `devicon-${skill.toLowerCase()}-plain`;
  const iconNameOriginal = `devicon-${skill.toLowerCase()}-original`;

  return (
    <div className='flex flex-col flex-wrap items-center justify-center grow shrink text-center align-middle duration-300 hover:-translate-y-2 hover:text-amber-300 dark:hover:text-emerald-300'>
      <i
        className={`${iconNamePlain} ${iconNameOriginal} text-[64px] hover:colored`}
      ></i>
      <span className='px-2 md:px-0'>{skill}</span>
    </div>
  );
}
