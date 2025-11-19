import Image from 'next/image';
import { ReactElement } from 'react';
import { ProfileType } from '@/types/profile';
import { getProfile } from '@/sanity/sanity.query';
import { BiEnvelope, BiFile } from 'react-icons/bi';
import getIcon from '@/app/utils/getIcon';

export default async function AboutSection(): Promise<ReactElement> {
  const profile: ProfileType[] = await getProfile();

  return (
    <section
      className='mx-8 md:align-middle md:px-6 md:h-screen md:-mt-28 md:flex md:flex-row md:items-center xl:justify-center md:justify-between md:mx-16 md:scroll-mt-32 scroll-mt-28'
      id='about'
    >
      {profile &&
        profile?.map((data: ProfileType) => (
          <div className='md:flex' key={data?._id}>
            <div className='absolute items-center space-y-0 align-middle opacity-50 select-none md:absolute invert'>
              <p className='font-semibold text-9xl text-white/20 cursor-vertical text-border-purple-500 text-border-size-8'>
                ABOUT ME
              </p>
              <p className='font-semibold text-9xl text-white/10 cursor-vertical text-border-purple-500 text-border-size-8 '>
                ABOUT ME
              </p>
              <p className='font-semibold text-9xl text-white/5 cursor-vertical text-border-purple-500 text-border-size-8'>
                ABOUT ME
              </p>
            </div>
            <div className='flex-col flex-wrap order-2 md:flex md:order-2'>
              <Image
                className='object-cover bg-transparent bg-top border-none rounded-full aspect-square drop-shadow-lg'
                src={data.profileImage.image}
                width={400}
                height={400}
                quality={90}
                alt={data.profileImage.alt ?? ''}
                blurDataURL='data:iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//dvPQAJdgN6GL8JXgAAAABJRU5ErkJggg=='
                placeholder='blur'
                priority
              />
            </div>
            <div className='z-10 flex flex-col flex-wrap order-1 mt-4 grow md:order-1 md:mt-0'>
              <h1 className='md:text-5xl font-semibold tracking-tight md:leading-[3.7rem] leading-tight md:min-w-[700px] text-gray-300 text-center md:text-left selection:bg-amber-400 selection:text-violet-900 dark:selection:bg-emerald-400 dark:selection:text-gray-900'>
                ABOUT ME
              </h1>
              <h2 className='md:text-3xl font-semibold tracking-tight text-3xl md:leading-[3.7rem] leading-tight md:min-w-[700px] text-center md:text-left selection:bg-amber-400 selection:text-violet-900 dark:selection:bg-emerald-400 dark:selection:text-gray-900'>
                {data.fullName}
              </h2>
              <h3 className='md:text-2xl font-normal tracking-tight text-base md:leading-[3.7rem] leading-tight md:min-w-[700px]  text-center md:text-left text-gray-300 selection:bg-amber-400 selection:text-violet-900 dark:selection:bg-emerald-400 dark:selection:text-gray-900'>
                {data.headline}
              </h3>
              <div className='max-w-lg'>
                <p className='pr-8 text-base break-normal text-zinc-200 overflow-clip selection:bg-amber-400 selection:text-violet-900 dark:selection:bg-emerald-400 dark:selection:text-gray-900 text-md'>
                  {data.shortBio}
                </p>
              </div>
              <hr className='max-w-lg mt-4' />
              <div className='flex justify-center max-w-lg'>
                <a
                  href={`${data.resumeURL}`}
                  target='_blank'
                  className='flex items-center align-middle justify-center gap-x-2 bg-clip-border backdrop-blur border hover:border-amber-400 dark:hover:border-emerald-400  duration-200 mt-4 py-2 text-center font-medium rounded-[2em] hover:bg-amber-400 hover:text-gray-900 dark:hover:bg-emerald-400 text-md w-72 hover:w-full'
                  aria-label='Download my updated resume'
                >
                  <BiFile />
                  <p>Download Resume</p>
                </a>
              </div>
              <ul className='flex items-center justify-center mt-10 md:justify-start gap-x-6'>
                {Object.entries(data.socialLinks).map((item) => {
                  const [key, value] = item;
                  return (
                    <li
                      key={key}
                      className='mb-5 duration-300 ease-linear gap-x-3 hover:text-yellow-400 dark:hover:text-emerald-400 hover:-translate-y-2'
                    >
                      <a
                        href={value}
                        aria-label={`Go to my ${key} profile`}
                        target='_blank'
                        rel='noreferer noopener'
                      >
                        {getIcon({ name: key, size: 26 })}
                      </a>
                    </li>
                  );
                })}
                <li className='mb-4 duration-300 ease-linear gap-x-3 hover:text-yellow-400 dark:hover:text-emerald-400 hover:-translate-y-2'>
                  <a
                    href={`mailto:${data.email}`}
                    rel='noreferer noopener'
                    target='_blank'
                    aria-label='Open email client to send me a mail to my address'
                  >
                    <BiEnvelope size={26} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
    </section>
  );
}
