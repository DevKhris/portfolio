import Image from 'next/image';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types/profile';
import { PortableText } from '@portabletext/react';

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <section className='flex items-center justify-center h-screen mx-auto align-middle'>
      {profile &&
        profile?.map((data) => (
          <div
            className='grid lg:grid-cols-2 grids-cols-1 gap-x-6 justify-items-center'
            key={data._id}
          >
            <div className='order-2 lg:order-none'>
              <h1 className='mb-8 text-4xl font-bold lg:Text-5xl lg:leading-tight basis-1/2'>
                You found it.
              </h1>
              <div className='flex flex-col leading-relaxed gap-y-3 text-zinc-400'>
                <PortableText value={data.fullBio}></PortableText>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
