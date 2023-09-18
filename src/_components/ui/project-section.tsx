import Title from "../shared/title";
import ProjectCard from "./project-card";

export default function projectSection({ props }: { props: BlogPosts[] }) {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center py-24 gap-2">
        <Title text={"My"} spanText={"Projects"} />

        <ul className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-4 p-8">
          {props.map((prop) => (
            <ProjectCard key={prop.slug} post={prop} />
          ))}
        </ul>
      </div>
    </section>
  );
}
