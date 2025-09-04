import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { renderIcon } from "@/utils/iconUtils";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  gradient: string;
  link?: string;
  github?: string;
  category?: "main" | "side" | "other";
  isCompact?: boolean;
  id?: string;
  hasDetailPage?: boolean;
  imagePath?: string;
}

export default function ProjectCard({
  title,
  description,
  icon,
  technologies,
  gradient,
  link,
  github,
  category = "main",
  isCompact = false,
  id,
  hasDetailPage = false,
  imagePath,
}: ProjectCardProps) {
  const cardClasses = isCompact
    ? `bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md ${
        category === "main" ? "hover:shadow-lg" : ""
      } transition-shadow ${category === "other" ? "flex flex-col" : ""}`
    : `bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg ${
        category === "main" ? "hover:shadow-xl" : ""
      } transition-shadow ${category === "other" ? "flex flex-col" : ""}`;

  const iconClasses = isCompact
    ? "w-full h-32 rounded-lg mb-3 flex items-center justify-center"
    : "w-full h-48 rounded-lg mb-4 flex items-center justify-center";

  const titleClasses = isCompact
    ? "text-lg font-semibold text-gray-900 mb-2"
    : "text-xl font-semibold text-gray-900 mb-2";

  const descriptionClasses = isCompact
    ? "text-gray-600 mb-3 text-sm"
    : "text-gray-600 mb-4";

  const CardContent = () => (
    <div className={`flex flex-col ${category === "other" ? "h-full" : ""}`}>
      <div className={category === "other" ? "flex-1" : ""}>
        <div className={`${iconClasses} ${gradient} relative overflow-hidden`}>
          {imagePath ? (
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={isCompact ? "text-3xl" : "text-4xl"}>
              {renderIcon({
                name: icon,
                size: isCompact ? 32 : 48,
                className: "text-white",
              })}
            </div>
          )}
        </div>
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs ${
                category === "main"
                  ? "bg-purple-100 text-purple-700"
                  : category === "side"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {(link || github) && (
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
      )}
    </div>
  );

  // 메인 프로젝트이고 상세 페이지가 있는 경우 링크로 감싸기
  if (category === "main" && hasDetailPage && id) {
    return (
      <Link href={`/projects/${id}`} className="block">
        <div className={`${cardClasses} cursor-pointer`}>
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      <CardContent />
    </div>
  );
}
