import Image from "next/image";
import { ReactElement } from "react";
import { ProfileType } from "@/types/profile";
import { getProfile } from "@/sanity/sanity.query";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { getIcon } from "@/app/helpers/getIcon";

export default async function AboutSection(): Promise<ReactElement> {
  const profile: ProfileType[] = await getProfile();

  return (
    <section
      className="flex flex-col lg:flex-row items-center  xl:justify-center align-middle justify-between mx-16 px-6 mt-32 scroll-mt-32"
      id="about"
    >
      {profile &&
        profile?.map((data: ProfileType) => (
          <>
            <div key={data?._id}>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] selection:bg-amber-400 selection:text-violet-900">
                {data.fullName}
              </h1>
              <h2 className="text-1xl font-normal tracking-tight sm:text-2xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] text-gray-300 selection:bg-amber-400 selection:text-violet-900">
                {data.headline}
              </h2>
              <p className="text-base text-zinc-200 leading-relaxed overflow-clip text-left  selection:bg-amber-400 selection:text-violet-900">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 mt-10">
                {Object.entries(data.socialLinks).map((item) => {
                  const [key, value] = item;
                  return (
                    <li
                      key={key}
                      className="flex items-center gap-x-3 mb-5 hover:text-yellow-400 duration-300 hover:-translate-y-2 ease-linear"
                    >
                      <a href={value} target="_blank" rel="noreferer noopener">
                        {getIcon(key)}
                      </a>
                    </li>
                  );
                })}
                <li className="flex items-center gap-x-3 mb-5 hover:text-yellow-400 duration-300 hover:-translate-y-2 ease-linear">
                  <a
                    href={`mailto:${data.email}`}
                    rel="noreferer noopener"
                    target="_blank"
                  >
                    <BiEnvelope size={26} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Image
                className="rounded-full object-cover bg-transparent bg-top "
                src={data.profileImage.image}
                width={640}
                height={640}
                quality={90}
                alt={data.profileImage.alt ?? ""}
              />

              <a
                href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                target="_blank"
                className="flex items-center justify-center gap-x-2 bg-clip-border backdrop-blur border hover:border-amber-400  duration-200 mt-8  py-2 text-center font-medium rounded-[2em] hover:text-amber-400 text-md"
              >
                <BiFile />
                <p>Download Resume</p>
              </a>
            </div>
          </>
        ))}
    </section>
  );
}
