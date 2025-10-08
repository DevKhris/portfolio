import Image from 'next/image';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types/profile';
import { PortableText } from '@portabletext/react';

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className='max-w-3xl px-6 mx-auto lg:max-w-7xl md:px-16'>
      {profile &&
        profile?.map((data) => (
          <div key={data._id}>
            <section className='grid lg:grid-cols-2 grids-cols-1 gap-x-6 justify-items-center'>
              <div className='order-2 lg:order-none'>
                <h1 className='mb-8 text-4xl font-bold lg:Text-5xl lg:leading-tight basis-1/2'>
                  I&apos;m {data.fullName}. I live in {data.location} where I
                  design the future.
                </h1>
                <div className='flex flex-col leading-relaxed gap-y-3 text-zinc-400'>
                  <PortableText value={data.fullBio}></PortableText>
                </div>
              </div>

              <div className='flex flex-col order-none mb-12 lg:justify-self-center justify-self-start gap-y-8 lg:order-1'>
                <div>
                  <Image
                    className='rounded-full mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]'
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={90}
                    alt={data.profileImage.alt}
                  />
                </div>
              </div>
            </section>
          </div>
        ))}
    </main>
  );
}
