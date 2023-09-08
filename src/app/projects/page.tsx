import ListProject from "@components/ListProject";
import { getSortedPostsData } from "@lib/posts";

export const revalidate = 10;

const Projects = () => {
  const posts = getSortedPostsData();
  return (
    <section className="container flex flex-col items-center justify-center px-2 md:px-5 sm:mx-auto py-4 mb-8 md:mt-8 md:mb-20 gap-2">
      <h1 className="text-3xl mb-8 mt-8 md:mt-0 font-medium text-gray-700 dark:text-gray-300">
        My{" "}
        <span className="text-blue-custom dark:text-indigo-300">Projects</span>
      </h1>
      <ul className="container">
        {posts.map((post) => (
          <ListProject key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
