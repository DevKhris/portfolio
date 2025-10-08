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
      className='flex flex-col items-center justify-between align-middle xl:justify-center scroll-mt-24 mt-28'
      id='experience'
    >
      <div className='pt-16 mb-16'>
        <h2 className='mb-4 text-4xl font-semibold text-center'>Experience</h2>
      </div>

      <div className='flex flex-col m-4 md:gap-y-12 md:m-0'>
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
