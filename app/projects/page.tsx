import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/fetchProjects";

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              제가 작업한 프로젝트들입니다. 각각의 프로젝트는 새로운 도전과
              학습의 경험이었습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                icon={project.icon}
                technologies={project.technologies}
                gradient={project.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
