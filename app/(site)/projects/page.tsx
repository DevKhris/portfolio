import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types/project";

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="px-6 mx-auto max-w-7xl md:px-16">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base leading-relaxed text-zin-400">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 mb-12 xl:grid-cols-3 md:grid-cols-2">
        {projects &&
          projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-lg ease-in-out"
            >
              <Image
                src={project?.logo}
                alt={project.name}
                height={60}
                width={60}
              ></Image>
              <div>
                <h2 className="mb-1 font-semibold">{project.name}</h2>
                <div className="text-sm text-zinc-400">{project.tags}</div>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}
