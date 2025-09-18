import Link from "next/link";
import StyledText from "./ui/StyledText";
import ProjectIcon from "./project/ProjectIcon";
import ProjectTechnologies from "./project/ProjectTechnologies";
import ProjectLinks from "./project/ProjectLinks";
import {
  getCardClasses,
  getTitleClasses,
  getDescriptionClasses,
} from "./project/ProjectCardStyles";

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
  const cardClasses = getCardClasses({ isCompact, category });
  const titleClasses = getTitleClasses(isCompact);
  const descriptionClasses = getDescriptionClasses(isCompact);

  const CardContent = () => (
    <div className={`flex flex-col ${category === "other" ? "h-full" : ""}`}>
      <div className={category === "other" ? "flex-1" : ""}>
        <ProjectIcon
          title={title}
          icon={icon}
          gradient={gradient}
          imagePath={imagePath}
          isCompact={isCompact}
        />

        <h3 className={titleClasses}>{title}</h3>

        <StyledText
          text={description}
          className={descriptionClasses}
          animate={false}
        />

        <ProjectTechnologies technologies={technologies} category={category} />
      </div>

      <ProjectLinks link={link} github={github} category={category} />
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
