import { getAllPosts } from "@lib/get-posts";
import SectionTracker from "@components/ui/section-tracker";
import HeroSection from "@components/ui/hero-section";
import AboutSection from "@components/ui/about-section";
import ExpSection from "@components/ui/exp-section";
import ProjectSection from "@components/ui/project-section";

function getAllProjects() {
  const allProjects: BlogPosts[] = getAllPosts();
  return {
    props: allProjects,
    revalidate: 10,
  };
}

export default async function Home() {
  const projects = getAllProjects();

  return (
    <main>
      <SectionTracker />
      <HeroSection />
      <div className="bg-navy-custom">
        <AboutSection />
      </div>
      <ExpSection />
      <ProjectSection props={projects.props} />
    </main>
  );
}
