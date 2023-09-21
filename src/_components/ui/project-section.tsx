"use client";

import useSectionInView from "@lib/use-section-in-view";
import Title from "../shared/title";
import ProjectCard from "./project-card";

export default function ProjectSection({ props }: { props: BlogPosts[] }) {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projectSection">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-28 gap-2">
          <Title text={"My"} spanText={"Projects"} />
          <ul className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-4 p-8">
            {props.map((prop, index: number) => (
              <ProjectCard key={prop.slug} post={prop} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
