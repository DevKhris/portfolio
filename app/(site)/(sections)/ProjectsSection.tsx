import { ReactElement } from 'react';
import { getProjects } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types/project';
import ProjectsSlider from '../components/ProjectsSlider';

export default async function ProjectsSection(): Promise<ReactElement> {
  const projects: ProjectType[] = await getProjects();

  return (
    <section
      className='flex flex-col items-center justify-between text-center align-middle xl:justify-center md:scroll-mt-20 scroll-mt-20'
      id='projects'
    >
      <h2 className='my-4 font-semibold leading-tight tracking-tight text-center md:text-5xl'>
        FEATURED PROJECTS
      </h2>

      <p className='text-zinc-200 text-1xl overflow-clip'>
        Here you can see a showcase of projects and tools i&#39;ve developed,
        designed and built
        <br />
        across the time with many clients, to resolve problems and fit different
        aspects of their business necessities.
      </p>

      <div className='container py-4 md:block'>
        <ProjectsSlider projects={projects}></ProjectsSlider>
      </div>
    </section>
  );
}
