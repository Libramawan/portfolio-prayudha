import Card from "@components/Card";
import { getSortedPostsData } from "@lib/posts";

export const revalidate = 10;

const Projects = () => {
  const posts = getSortedPostsData();
  return (
    <section className="container flex flex-col items-center justify-center px-2 md:px-5 sm:mx-auto py-4 mb-8 md:mb-20 gap-2">
      <h1 className="text-3xl mb-8 mt-8 md:mt-0 font-medium text-gray-700 dark:text-gray-300">
        Projects
      </h1>
      <ul className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
