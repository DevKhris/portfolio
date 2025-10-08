import { getProfile } from '@/sanity/sanity.query';
import { ProfileType } from '@/types/profile';
import { ReactElement } from 'react';
import getIcon from '@/app/utils/getIcon';
import { BiEnvelope } from 'react-icons/bi';

export default async function ContactSection(): Promise<ReactElement> {
  const profile: ProfileType[] = await getProfile();

  return (
    <section
      className='flex items-center justify-center h-screen text-center align-middle scroll-mt-38'
      id='contact'
    >
      <div className=''>
        <h2 className='mb-4 text-4xl font-semibold'>
          Keep in touch and contact me!
        </h2>
        {profile &&
          profile?.map((data: ProfileType) => (
            <div key={data._id}>
              <ul className='flex items-center justify-center mt-10 gap-x-6'>
                {Object.entries(data.socialLinks).map((item) => {
                  const [key, value] = item;
                  return (
                    <li
                      key={key}
                      className='flex items-center mb-5 duration-300 ease-linear gap-x-3 hover:text-yellow-400 dark:hover:text-emerald-400 hover:-translate-y-2'
                    >
                      <a
                        href={value}
                        aria-label={`Go to my ${key} profile`}
                        target='_blank'
                        rel='noreferer noopener'
                      >
                        {getIcon({ name: key, size: 48 })}
                      </a>
                    </li>
                  );
                })}
                <li className='flex items-center mb-5 duration-300 ease-linear gap-x-3 hover:text-yellow-400 dark:hover:text-emerald-400 hover:-translate-y-2'>
                  <a
                    href={`mailto:${data.email}`}
                    rel='noreferer noopener'
                    target='_blank'
                    aria-label='Open email client to send me a mail to my address'
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
