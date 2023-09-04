import Card from "@components/Card";
import { getSortedPostsData } from "@lib/posts";

const Projects = () => {
  const posts = getSortedPostsData();
  return (
    <section className="container flex flex-col items-center justify-center px-2 md:px-5 sm:mx-auto py-4 mb-8 md:mb-20  gap-2">
      <h1 className="text-3xl mb-8 font-medium text-gray-700">Projects</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
