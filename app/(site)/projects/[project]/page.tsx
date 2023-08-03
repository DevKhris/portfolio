import Image from "next/image";
import { Metadata } from "next";
import { getProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types/project";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getProject(slug);

  return (
    <main className="max-w-6xl px-8 mx-auto lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="mb-4 text-3xl font-bold lg:text-5xl lg:leading-tight">
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border-transparent rounded-md px-4 py-2"
          >
            View
          </a>
        </div>

        <Image
          className="border rounded-xl border-zinc-800"
          width={900}
          height={460}
          src={project?.coverImage?.image}
          alt={project?.coverImage?.alt}
        />

        <div className="flex flex-col mt-8 leading-7 gap-y-6 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}
