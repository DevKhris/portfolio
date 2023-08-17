import { ReactElement } from "react";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types/project";
import ProjectsSlider from "../components/ProjectsSlider";

export default async function ProjectsSection(): Promise<ReactElement> {
  const projects: ProjectType[] = await getProjects();

  return (
    <section
      className="flex flex-col items-center xl:justify-center align-middle justify-between scroll-mt-32 mt-32 text-center"
      id="projects"
    >
      <div>
        <h2 className="text-4xl font-semibold mb-4">
          Featured projects I&apos;ve built over the years
        </h2>
        <p className="text-zinc-400 max-2-lg overflow-clip">
          {/* I&apos;ve worked on tons of little projects over the years <br /> but
          these are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest <br />{" "}
          Check out the code and contribute if you have ideas for how it can be
          improved. */}
        </p>
      </div>
      <div className="mt-16">
        <ProjectsSlider projects={projects}></ProjectsSlider>
      </div>
    </section>
  );
}
