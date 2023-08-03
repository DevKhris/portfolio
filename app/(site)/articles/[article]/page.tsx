import { getArticle } from "@/sanity/sanity.query";
import { PostType } from "@/types/post";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    article: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.article;
  const article: PostType = await getArticle(slug);

  return {
    title: `${article.metadata.metatitle} | DevKhris`,
    description: article.metadata.metadescription,
    openGraph: {
      images: article.image.url,
      title: article.metadata.metatitle,
      description: article.metadata.metadescription,
    },
  };
}

export default async function Article({ params }: Props) {
  const slug = params.article;
  const article: PostType = await getArticle(slug);

  return (
    <main className="max-w-6xl px-4 m-4 mx-auto  sm:px-6 lg:px-8">
      <Image
        width={300}
        height={300}
        src={article.image.url}
        alt={article.image.alt}
        className="object-cover object-center w-full h-52 mb-4 rounded-lg"
      />
      <section className="flex flex-col-reverse items-center mb-4">
        <div className="flex flex-row my-5">
          <Image
            width={48}
            height={48}
            src={article.author.profileImage.url}
            alt={article.author.fullName}
            className="w-10 h-10 mx-4 my-2 rounded-full"
          />
          <div>
            <p className="mb-1 text-gray-500">By {article.author.fullName}</p>
            <p className="mb-2 text-gray-500">
              {new Date(article.publishedDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-3xl text-center font-bold mb-2">
            {article.headline}
          </h1>
          <p className="text-zinc-500 mb-4">{article.description}</p>
          <PortableText value={article.body} />
        </div>
      </section>
    </main>
  );
}
