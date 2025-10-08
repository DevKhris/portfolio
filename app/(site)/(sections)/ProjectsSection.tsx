import { ReactElement } from 'react';
import { getProjects } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types/project';
import ProjectsSlider from '../components/ProjectsSlider';

export default async function ProjectsSection(): Promise<ReactElement> {
  const projects: ProjectType[] = await getProjects();

  return (
    <section
      className='flex flex-col items-center justify-between text-center align-middle mt-28 xl:justify-center scroll-mt-28'
      id='projects'
    >
      <div className='flex flex-col'>
        <h2 className='my-4 text-4xl font-semibold'>FEATURED PROJECTS</h2>
        <p className='text-zinc-200 max-2-lg text-1xl overflow-clip'>
          Here u can see a showcase of projects and tools i&#39;ve developed,
          designed and built
          <br />
          across the time with many clients, to resolve problems and fit
          different aspects of their business necessities.
        </p>
      </div>
      <div className='container py-4 my-4 slider-container md:py-8 md:my-8'>
        <ProjectsSlider projects={projects}></ProjectsSlider>
      </div>
    </section>
  );
}
