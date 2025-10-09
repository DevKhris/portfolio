import { ReactElement } from 'react';

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps): ReactElement {
  return (
    <footer className='relative bottom-0 left-0 z-50 w-full md:fixed'>
      <div className='flex flex-col items-center justify-center py-4 mx-auto md:flex-row md:justify-between md:mx-4 text-zinc-400'>
        <small className='duration-200'>
          All rights reserved &copy; {new Date().getFullYear()} DevKhris
        </small>

        <small className='duration-200 hover:text-white'>
          <a
            href='https://github.com/DevKhris'
            target='_blank'
            rel='noreferrer noopener'
          >
            Developed by
            <span className='text-amber-300 dark:text-teal-300 hover:text-amber-500 dark:hover:text-emerald-400 '>
              {' ' + name}
            </span>
          </a>
        </small>
      </div>
    </footer>
  );
}
