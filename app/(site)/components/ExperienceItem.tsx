import Image from 'next/image';
import { ReactElement } from 'react';

interface ExperienceProps {
  url: string;
  logo: string;
  name: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

export default function ExperienceItem({
  url,
  logo,
  name,
  title,
  startDate,
  endDate,
  description,
}: ExperienceProps): ReactElement {
  return (
    <div className='flex items-start md:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:md:left-7 before:left-6 before:w-[1px] before:h-[calc(100%-50px)] before:bg-gray-100'>
      <a
        href={url ?? '#'}
        className='min-w-[48px] min-h-[48px] md:min-h-[60px] md:min-w-[60px] mt-2 md:mt-0 rounded-md overflow-clip relative'
      >
        <Image src={logo} className='object-cover' alt={`${name} logo`} fill />
      </a>
      <div className='flex flex-col items-start'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p>{title}</p>
        <small className='mt-2 text-sm tracking-widest uppercase text-zinc-300'>
          {startDate.toString()} - {endDate?.toString() ?? ' Currently'}
        </small>
        <p className='p-1 my-3 text-base text-zinc-200 overflow-clip md:p-0 '>
          {description}
        </p>
      </div>
    </div>
  );
}
