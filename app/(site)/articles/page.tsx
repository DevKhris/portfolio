import { getArticles } from "@/sanity/sanity.query";
import { PostType } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

export default async function Articles() {
  const articles: PostType[] = await getArticles();

  return (
    <main className="px-6 mx-auto max-w-7xl md:px-16">
      <section className="grid grid-cols-3 gap-4 sm:grid-cols-2">
        {articles &&
          articles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article._id}
              className="hover:-translate-y-2"
            >
              <div className="bg-white border-transparent shadow-md rounded-xl">
                <Image
                  src={article.image.url}
                  alt={article.image.alt}
                  className="object-cover w-full h-48 mb-4 rounded-t-lg"
                  width={400}
                  height={400}
                />

                <div className="p-4">
                  <h2 className="text-lg font-medium text-zinc-500">
                    {article.headline}
                  </h2>
                  <p className="text-zinc-500">{article.description}</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={article.author.profileImage.url}
                    alt={article.author.fullName}
                    width={48}
                    height={48}
                    className="ml-4 rounded-full "
                  />
                  <div className="p-4">
                    <p className="mb-1 text-zinc-500">
                      By {article.author.fullName}
                    </p>
                    <p className="mb-2 text-zinc-400">
                      {new Date(article.publishedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}
