/* eslint-disable @next/next/no-img-element */
'use client';
import { ReactElement } from 'react';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import { ProjectType } from '@/types/project';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProjectProps {
  projects: ProjectType[];
}

export default function ProjectsSlider({
  projects,
}: ProjectProps): ReactElement {
  const settings: Settings = {
    dots: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    draggable: true,
    adaptiveHeight: true,
    waitForAnimate: true,
    centerMode: true,
  };
  return (
    <>
      <Slider {...settings}>
        {projects &&
          projects.map((project) => (
            <div key={project._id} className=''>
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.name} project`}
              >
                <div className='flex flex-col flex-wrap flex-grow'>
                  <div className='z-10 group'>
                    <div className='absolute w-full py-2 space-y-2 transition-all duration-500 ease-in-out bg-gray-900 rounded-b-none group-hover:bg-opacity-50 rounded-xl bg-opacity-20 '>
                      <h3 className='text-2xl font-semibold md:text-3xl group-hover:text-amber-300 dark:group-hover:text-emerald-400 '>
                        {project.name}
                      </h3>
                      <p className='text-sm md:text-md text-zinc-200'>
                        {project.tags}
                      </p>
                    </div>
                    <picture className='flex-1 rounded-xl'>
                      <img
                        className='w-full h-auto rounded-xl'
                        src={project?.coverImage?.image}
                        alt={project?.coverImage?.alt}
                      />
                    </picture>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </>
  );
}
