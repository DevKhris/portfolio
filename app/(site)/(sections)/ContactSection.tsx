import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types/profile";
import { ReactElement } from "react";
import getIcon from "@/app/utils/getIcon";
import { BiEnvelope } from "react-icons/bi";

export default async function ContactSection(): Promise<ReactElement> {
  const profile: ProfileType[] = await getProfile();

  return (
    <section
      className="flex flex-col mx-auto justify-center align-middle items-center text-center scroll-mt-36 mt-36 pt-4"
      id="contact"
    >
      <div>
        <h2 className="text-4xl font-semibold mb-4">
          Keep in touch and Contact with me
        </h2>
        {profile &&
          profile?.map((data: ProfileType) => (
            <div key={data._id}>
              <ul className="flex items-center justify-center gap-x-6 mt-10">
                {Object.entries(data.socialLinks).map((item) => {
                  const [key, value] = item;
                  return (
                    <li
                      key={key}
                      className="flex items-center gap-x-3 mb-5 hover:text-yellow-400 dark:hover:text-emerald-400  duration-300 hover:-translate-y-2 ease-linear"
                    >
                      <a href={value} target="_blank" rel="noreferer noopener">
                        {getIcon({ name: key, size: 48 })}
                      </a>
                    </li>
                  );
                })}
                <li className="flex items-center gap-x-3 mb-5 hover:text-yellow-400 dark:hover:text-emerald-400  duration-300 hover:-translate-y-2 ease-linear">
                  <a
                    href={`mailto:${data.email}`}
                    rel="noreferer noopener"
                    target="_blank"
                  >
                    <BiEnvelope size={48} />
                  </a>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}
