import getFormattedDate from "../../../../lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, image_link, contentHtml } = await getPostData(postId);
  const projectDate = getFormattedDate(date);

  return (
    <main className="min-h-screen flex flex-col justify-center relative overflow-hidden py-8 lg:py-12">
      <div className="absolute inset-0 blur-sm bg-gradient-to-t from-rose-100 to-teal-100 dark:bg-gradient-to-tl dark:from-amber-200 dark:via-violet-600 dark:to-sky-900"></div>
      <div className="relative w-full bg-white dark:bg-slate-800 rounded shadow-xl px-6 py-12 shadow-slate-700/10 md:max-w-3xl sm:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div className="flex flex-row justify-center">
          <div className="prose prose-xl prose-slate dark:prose-invert">
            <h2 className="mb-2">{title}</h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {projectDate}
            </p>

            <Image src={image_link} alt="" width={200} height={200} />
            <article>
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <div className="flex justify-center mb-4">
                <Link
                  className="bg-indigo-500 hover:bg-indigo-600 py-2 px-6 item-center justify-center rounded"
                  href="/"
                >
                  <span className="inline-flex text-white">Go to Home</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
