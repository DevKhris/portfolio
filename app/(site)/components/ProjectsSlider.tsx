/* eslint-disable @next/next/no-img-element */
'use client';
import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { ProjectType } from '@/types/project';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

interface ProjectProps {
  projects: ProjectType[];
}

export default function ProjectsSlider({
  projects,
}: ProjectProps): ReactElement {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      axis: 'x',
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
      }),
      Fade(),
    ]
  );

  const renderContent = () => {
    return projects?.map((project: ProjectType) => {
      const { _id, slug, name, tags, coverImage }: ProjectType = project;

      return (
        <div className='embla__slide' key={_id}>
          <Link href={`/projects/${slug}`} aria-label={`View ${name} project`}>
            <div className='group'>
              <div className='relative w-full'>
                <div className='absolute z-10 w-full py-2 space-y-2 transition-all duration-500 ease-in-out rounded-b-none bg-gray-900/20 group-hover:bg-gray-900/50 rounded-xl '>
                  <h3 className='text-2xl font-semibold md:text-3xl group-hover:text-amber-300 dark:group-hover:text-emerald-400 '>
                    {name}
                  </h3>
                  <p className='py-3 text-sm md:text-md text-zinc-200'>
                    {tags}
                  </p>
                </div>
                <img
                  className='w-full rounded-xl'
                  src={coverImage?.image}
                  alt={coverImage?.alt}
                />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>{renderContent()}</div>
      </div>
    </div>
  );
}
