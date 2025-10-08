import { getExperience } from '@/sanity/sanity.query';
import { ExperienceType } from '@/types/experience';
import ExperienceItem from '../components/ExperienceItem';
import { ReactElement } from 'react';

export default async function ExperienceSection(): Promise<ReactElement> {
  const experience: ExperienceType[] = (await getExperience()).sort(
    (a: ExperienceType, b: ExperienceType) =>
      new Date(b?.startDate).getTime() - new Date(a?.startDate).getTime()
  );

  return (
    <section
      className='flex flex-col items-center justify-between text-left align-middle xl:justify-center md:scroll-mt-20 scroll-mt-20'
      id='experience'
    >
      <div className='z-10 pt-4 pb-4 align-middle'>
        <h2 className='my-4 font-semibold leading-tight tracking-tight text-center md:text-5xl'>
          EXPERIENCE
        </h2>
      </div>
      <div className='z-10 flex flex-col m-4 md:gap-y-12 md:m-0'>
        {experience?.map((experience) => (
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
