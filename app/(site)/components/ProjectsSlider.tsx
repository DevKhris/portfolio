/* eslint-disable @next/next/no-img-element */
"use client";
import { MouseEventHandler, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import { ProjectType } from "@/types/project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ProjectProps {
  projects: ProjectType[];
}

export default function ProjectsSlider({
  projects,
}: ProjectProps): ReactElement {
  const settings: Settings = {
    className: "m-6 p-6",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    draggable: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {projects &&
          projects.map((project) => (
            <div className="aspect-w-16 aspect-h-9" key={project._id}>
              <Link href={`/projects/${project.slug}`}>
                <h3 className="bg-gray-900 rounded-lg rounded-b-none -mb-3 py-2 font-bold text-2xl md:text-3xl hover:text-purple-600 duration-200 ease-in-out transition-colors bg-opacity-50 pb-3 ">
                  {project.name}
                </h3>
              </Link>
              <img
                className="border rounded-xl border-transparent w-full z-50 "
                src={project?.coverImage?.image}
                alt={project?.coverImage?.alt}
              />
              <p className="text-sm md:text-md text-zinc-400 mb-2">
                {project.tags}
              </p>
            </div>
          ))}
      </Slider>
    </>
  );
}
