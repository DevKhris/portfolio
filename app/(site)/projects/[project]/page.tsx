import Image from 'next/image';
import { Metadata } from 'next';
import { getProject } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types/project';
import { PortableText } from '@portabletext/react';

type ProjectProps = {
  params: Promise<{
    project: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { project } = await params;
  const projectItem: ProjectType = await getProject(project);

  return {
    title: `${projectItem?.name} | Project`,
    description: projectItem?.tags,
    openGraph: {
      images: projectItem?.coverImage?.image,
      title: projectItem?.name,
      description: projectItem?.tags,
    },
  };
}

export default async function Project({ params }: ProjectProps) {
  const { project } = await params;
  const projectItem: ProjectType = await getProject(project);

  return (
    <section
      className='flex flex-col flex-wrap grow justify-evenly md:flex-row scroll-mt-32'
      key={projectItem._id}
    >
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <div className='flex flex-row flex-wrap items-center justify-between mb-4 align-middle'>
            <h1 className='text-3xl font-bold uppercase md:text-5xl md:leading-tight'>
              {projectItem.name}
            </h1>
            {projectItem.projectUrl !== null ? (
              <a
                href={projectItem.projectUrl}
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
            src={projectItem?.coverImage?.image}
            alt={projectItem?.coverImage?.alt}
          />
        </div>
      </div>

      <div className='flex justify-center mt-16'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-5xl md:leading-tight'>
            Crafted with
          </h2>
          <div className='grid grid-flow-dense md:grid-cols-6'>
            {projectItem.skills?.map((skill, id) => (
              <i
                key={'skill_' + id}
                className={`duration-300 hover:-translate-y-2 hover:text-amber-300 dark:hover:text-emerald-300 m-[.35rem] 
                    devicon-${skill.toLowerCase()}-plain devicon-${skill.toLowerCase()}-original text-[64px] hover:colored hover:animate-pulse`}
              ></i>
            ))}
          </div>
          <div className='m-4'>
            <h2 className='mt-6 text-3xl font-bold lg:text-4xl lg:leading-tight'>
              About the project
            </h2>
            {/* <PortableText value={projectItem.description} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
