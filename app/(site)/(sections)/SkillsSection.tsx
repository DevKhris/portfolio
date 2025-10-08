import { getSkills } from '@/sanity/sanity.query';
import { SkillType } from '@/types/skills';
import { ReactElement } from 'react';
import { Reorder } from 'framer-motion';
import { SkillItem } from '../components/SkillItem';

export default async function SkillsSection(): Promise<ReactElement> {
  const skills: SkillType[] = await getSkills();

  return (
    <section
      className='flex flex-col items-center justify-between md:h-screen text-center align-middle xl:justify-center md:scroll-mt-8 scroll-mt-[74px]'
      id='skills'
    >
      <h2 className='my-4 font-semibold leading-tight tracking-tight text-center md:text-5xl'>
        SKILLS
      </h2>

      <p className='text-zinc-200 text-1xl md:text-2xl'>
        I&apos;ve spent few years learning and working on my skills and
        knowledge. here are some of them
      </p>

      <div className='flex flex-wrap'>
        {skills &&
          skills?.map((data) => (
            <div
              key={data._id}
              className='grid items-center justify-between grid-flow-row grid-cols-3 gap-5 mt-8 align-middle md:grid-cols-5 lg:grid-cols-7'
            >
              {data.skills?.map((skill, id) => (
                <SkillItem key={id} skill={skill}></SkillItem>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
