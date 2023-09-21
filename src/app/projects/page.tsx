import { getAllPosts } from "@lib/get-posts";
import ProjectList from "@components/ui/project-list";
import Title from "@components/shared/title";

function getProjectList() {
  const posts = getAllPosts();
  return {
    props: posts,
    revalidate: 10,
  };
}

export default function Projects() {
  const projects = getProjectList();
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <div className="flex items-center justify center p-8">
          <Title text={"My"} spanText={"Projects"} />
        </div>
        <ul className="container">
          {projects.props.map((project: BlogPosts, index: number) => (
            <ProjectList key={project.slug} post={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
