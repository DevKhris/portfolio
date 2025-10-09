import Image from 'next/image';
import { Metadata } from 'next';
import { getProject } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types/project';
import { PortableText } from '@portabletext/react';

type ProjectProps = {
  params: {
    project: string;
  };
};

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getProject(slug);

  return {
    title: `${project?.name} | Project`,
    description: project?.tags,
    openGraph: {
      images: project?.coverImage?.image,
      title: project?.name,
      description: project?.tags,
    },
  };
}

export default async function Project({ params }: ProjectProps) {
  const project: ProjectType = await getProject(params?.project);

  return (
    <section
      className='flex flex-col flex-wrap flex-grow mt-[90px] justify-evenly md:flex-row scroll-mt-32 max-h-full'
      key={project._id}
    >
      <div className='flex flex-col mt-16'>
        <div className='flex flex-col'>
          <div className='flex flex-row flex-wrap items-center justify-between mb-4 align-middle'>
            <h1 className='text-3xl font-bold uppercase lg:text-5xl lg:leading-tight'>
              {project.name}
            </h1>
            {project.projectUrl !== null ? (
              <a
                href={project.projectUrl}
                rel='noreferrer noopener'
                target='_blank'
                className='px-4 py-2 text-gray-900 uppercase transition-all ease-in rounded-md 0duration-500 bg-amber-300 hover:bg-amber-500 dark:bg-emerald-300 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 animate-pulse'
              >
                View Project
              </a>
            ) : null}
          </div>
        </div>

        <div className='flex flex-row items-center justify-center'>
          <Image
            className='object-fill rounded-xl aspect-video'
            width={1080}
            height={720}
            src={project?.coverImage?.image}
            alt={project?.coverImage?.alt}
          />
        </div>
      </div>

      <div className='flex justify-center mt-16'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-5xl md:leading-tight'>
            Crafted with
          </h2>
          <div className='grid grid-flow-dense md:grid-cols-6'>
            {console.log(project) ?? null}
            {project.skills?.map((skill, id) => (
              <i
                key={'skill_' + id}
                className={`duration-300 hover:-translate-y-2 hover:text-amber-300 dark:hover:text-emerald-300 m-[.35rem] 
                    devicon-${skill.toLowerCase()}-plain devicon-${skill.toLowerCase()}-original text-[64px] hover:colored hover:animate-pulse`}
              ></i>
            ))}
          </div>
          <h2 className='mt-6 text-3xl font-bold lg:text-4xl lg:leading-tight'>
            About the project
          </h2>
          {/* <PortableText value={project.description} /> */}
        </div>
      </div>
    </section>
  );
}
