import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getArticles } from '@/sanity/sanity.query';
import type { PostType } from '@/types/post';

dayjs.extend(relativeTime);

export default async function Articles() {
  const articles: PostType[] = await getArticles();

  return (
    <section className='flex flex-row flex-wrap flex-grow md:justify-evenly md:flex-row scroll-mt-32'>
      <div className='flex flex-row justify-center w-full mb-8'>
        <h1 className='text-5xl leading-tight uppercase'>Devlog</h1>
      </div>
      <div className='flex flex-col items-center px-24 alignalign-middle'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {articles &&
            articles.map((article) => (
              <Link
                href={`/blog/${article.slug}`}
                key={article._id}
                className='transition-all duration-500 hover:scale-105 '
              >
                <div className='border-transparent shadow-2xl bg-stone-900 rounded-xl group'>
                  <Image
                    src={article.image?.url}
                    alt={article.image?.alt ?? ''}
                    className='object-cover w-full h-48 mb-4 rounded-t-lg'
                    width={400}
                    height={400}
                  />

                  <div className='px-4'>
                    <h2 className='text-xl font-medium text-zinc-100 group-hover:text-amber-300'>
                      {article.headline}
                    </h2>
                    <p className='text-zinc-200'>{article.description}</p>
                  </div>
                  <div className='flex items-center'>
                    <Image
                      src={article.author.profileImage?.url}
                      alt={article.author.fullName}
                      width={48}
                      height={48}
                      className='ml-4 rounded-full '
                    />
                    <div className='p-4'>
                      <p className='mb-1 text-zinc-400'>
                        By {article.author.fullName}
                      </p>
                      <p className='mb-2 text-zinc-500'>
                        {dayjs(article.publishedDate).fromNow()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
