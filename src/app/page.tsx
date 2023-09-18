import { getAllPosts } from "@lib/get-posts";
import getLocalData from "@lib/get-local-data";
import HeroesSection from "@components/ui/heroes-section";
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

async function getJsonData() {
  const allJsonData: LocalData[] = await getLocalData();
  return {
    props: allJsonData,
  };
}

export default async function Home() {
  const projects = getAllProjects();
  const allJsonData = await getJsonData();

  return (
    <main>
      <HeroesSection />
      <AboutSection />
      <ExpSection props={allJsonData.props} />
      <ProjectSection props={projects.props} />
    </main>
  );
}
