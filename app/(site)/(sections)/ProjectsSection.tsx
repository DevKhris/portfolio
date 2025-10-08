import { ReactElement } from 'react';
import { getProjects } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types/project';
import ProjectsSlider from '../components/ProjectsSlider';

export default async function ProjectsSection(): Promise<ReactElement> {
  const projects: ProjectType[] = await getProjects();

  return (
    <section
      className='flex flex-col items-center justify-between mt-32 text-center align-middle xl:justify-center scroll-mt-32'
      id='projects'
    >
      <div>
        <h2 className='mb-4 text-4xl font-semibold'>
          Featured projects
        </h2>
        <p className='text-zinc-200 max-2-lg text-1xl overflow-clip'>
          Here u can see a showcase of projects and tools i've developed, designed and built
          <br />
           across the time with many clients, to resolve problems and fit different aspects of their business necessities.
        </p>
      </div>
      <div className='container mx-auto'>
        <ProjectsSlider projects={projects}></ProjectsSlider>
      </div>
    </section>
  );
}
