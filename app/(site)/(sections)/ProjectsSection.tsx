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
        <p className="text-zinc-200 max-2-lg text-1xl overflow-clip">
          I have built many different projects across the time with many clients{" "}
          <br />
          to fit different aspects of their business necessities.
        </p>
      </div>
      <div className="mt-16">
        <ProjectsSlider projects={projects}></ProjectsSlider>
      </div>
    </section>
  );
}
