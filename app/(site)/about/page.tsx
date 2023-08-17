import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types/profile";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile?.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grids-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:Text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {data.fullName}. I live in {data.location} where I
                  design the future.
                </h1>
                <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                  <PortableText value={data.fullBio}></PortableText>
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-full mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={90}
                    alt={data.profileImage.alt}
                  />
                </div>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
              <p className="text-zinc-400 max-2-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them
              </p>
              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {data.skills?.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}
