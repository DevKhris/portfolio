"use client";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ProjectType } from "@/types/project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectProps {
  projects: ProjectType[];
}

export default function ProjectsSlider({
  projects,
}: ProjectProps): ReactElement {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    useCSS: true,
    autoplay: true,
  };
  return (
    <div className="container items-center">
      <Slider {...settings} className="">
        {projects &&
          projects.map((project) => (
            <div key={project._id} className="rounded-lg">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="mb-1 font-bold text-xl">{project.name}</h3>
                <p className="text-sm text-zinc-400">{project.tags}</p>
                <Image
                  className="border rounded-xl border-zinc-800 text-center items-center"
                  width={1360}
                  height={460}
                  src={project?.coverImage?.image}
                  alt={project?.coverImage?.alt}
                />
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}
