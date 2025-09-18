import { ExternalLink, Github } from "lucide-react";

interface ProjectLinksProps {
  link?: string;
  github?: string;
  category?: "main" | "side" | "other";
}

export default function ProjectLinks({
  link,
  github,
  category = "main",
}: ProjectLinksProps) {
  if (!link && !github) return null;

  return (
    <div className="flex gap-2 mt-auto">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center"
        >
          <ExternalLink size={16} className="mr-1" />
          {category === "side" ? "프로젝트 소개" : "사이트 보기"}
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-200 flex items-center"
        >
          <Github size={16} className="mr-1" />
          GitHub
        </a>
      )}
    </div>
  );
}
