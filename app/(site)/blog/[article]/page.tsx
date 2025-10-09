import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getArticle } from '@/sanity/sanity.query';
import type { PostType } from '@/types/post';
import { PortableText } from '@portabletext/react';

dayjs.extend(relativeTime);

type ArticleProps = {
  params: Promise<{
    article: string;
  }>;
};

export async function generateMetadata({ params }: ArticleProps) {
  const { article } = await params;
  const post: PostType = await getArticle(article);

  return {
    title: `${post.metadata?.metatitle} | DevKhris`,
    description: post.metadata?.metadescription,
    openGraph: {
      images: post?.image.url,
      title: post.metadata?.metatitle,
      description: post.metadata?.metadescription,
    },
  };
}

export default async function Article({ params }: ArticleProps) {
  const { article } = await params;
  const post: PostType = await getArticle(article);

  return (
    <section className='flex flex-row flex-wrap flex-grow px-4 m-4 mx-auto md:justify-evenly md:flex-row sm:px-6 lg:px-8'>
      <Image
        width={300}
        height={300}
        src={post?.image.url}
        alt={post?.image.alt ?? ''}
        className='object-cover object-center w-full m-4 rounded-b-none shadow-sm rounded-xl h-52'
      />
      <div className='flex flex-col-reverse mb-4'>
        <div className='flex flex-row my-5'>
          <Image
            width={48}
            height={48}
            src={post.author.profileImage.url}
            alt={post.author.fullName}
            className='w-10 h-10 mx-4 my-2 rounded-full'
          />
          <div>
            <p className='mb-1 text-gray-200'>By {post.author.fullName}</p>
            <p className='mb-2 text-gray-400'>
              {dayjs(post.publishedDate).fromNow()}
            </p>
          </div>
        </div>
        <div className='m-4'>
          <h1 className='mb-2 text-4xl font-bold'>{post.headline}</h1>
          {/* <p className='mb-5 text-zinc-400'>{article.description}</p> */}
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
}
