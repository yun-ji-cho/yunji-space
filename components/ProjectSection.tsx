import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/project";

interface ProjectSectionProps {
  title: string;
  subtitle?: string;
  projects: Project[];
  isCompact?: boolean;
  gridCols?: string;
}

export default function ProjectSection({
  title,
  subtitle,
  projects,
  isCompact = false,
  gridCols = "md:grid-cols-2 lg:grid-cols-3",
}: ProjectSectionProps) {
  // 마침표를 기준으로 줄바꿈 처리
  const formatSubtitle = (text: string) => {
    return text
      .split(".")
      .map((sentence, index, array) => {
        const trimmedSentence = sentence.trim();
        if (!trimmedSentence) return null;

        // 마지막 문장이 아니면 마침표 추가
        const isLast = index === array.length - 1;
        return (
          <span key={index}>
            {trimmedSentence}
            {!isLast && "."}
            {!isLast && <br />}
          </span>
        );
      })
      .filter(Boolean);
  };

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600">{formatSubtitle(subtitle)}</p>
        )}
      </div>

      <div className={`grid gap-6 ${gridCols}`}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            icon={project.icon}
            technologies={project.technologies}
            gradient={project.gradient}
            link={project.link}
            github={project.github}
            category={project.category}
            isCompact={isCompact}
            hasDetailPage={project.hasDetailPage}
            imagePath={project.imagePath}
          />
        ))}
      </div>
    </section>
  );
}
