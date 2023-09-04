import Image from "next/image";
import { Metadata } from "next";
import { getProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types/project";
import { PortableText } from "@portabletext/react";

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
  const slug = params.project;
  const project: ProjectType = await getProject(slug);

  return (
    <main className="mt-32 ">
      <section className="flex flex-col justify-around mt-32 lg:flex-row scroll-mt-32 ">
        <div className="flex flex-col ">
          <div className="flex flex-row flex-wrap items-center justify-around m-5 ">
            <h1 className="text-3xl font-bold lg:text-5xl lg:leading-tight">
              {project.name}
            </h1>
            <a
              href={project.projectUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="px-4 py-2 text-gray-900 transition-all ease-in rounded-md 0duration-500 bg-amber-300 hover:bg-amber-500 dark:bg-emerald-300 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 animate-pulse"
            >
              View Project
            </a>
          </div>

          <div className="flex flex-row items-center justify-center">
            <Image
              className=" hover:bg-gray-900 rounded-xl aspect-auto"
              width={720}
              height={360}
              src={project?.coverImage?.image}
              alt={project?.coverImage?.alt}
            />
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col items-center">
            <h2 className="m-5 text-3xl font-bold lg:text-5xl lg:leading-tight">
              Technologies used
            </h2>
            <div className="grid justify-center grid-cols-4 lg:grid-cols-5">
              {project.skills?.map((skill, id) => (
                <i
                  key={id}
                  className={`duration-300 hover:-translate-y-2 hover:text-amber-300 dark:hover:text-emerald-300 m-[.35rem] 
                    devicon-${skill.toLowerCase()}-plain devicon-${skill.toLowerCase()}-original text-[64px] hover:colored hover:animate-pulse`}
                ></i>
              ))}
            </div>
            <h2 className="my-6 text-3xl font-bold lg:text-4xl lg:leading-tight">
              Description
            </h2>
            <PortableText value={project.description} />
          </div>
        </div>
      </section>
    </main>
  );
}
