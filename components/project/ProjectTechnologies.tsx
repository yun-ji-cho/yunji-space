interface ProjectTechnologiesProps {
  technologies: string[];
  category?: "main" | "side" | "other";
}

const getTechBadgeStyles = (category: "main" | "side" | "other") => {
  const baseStyles = "px-2 py-1 rounded-full text-xs font-medium";

  const categoryStyles = {
    main: "bg-gradient-to-r from-violet-100 to-sky-100 text-violet-700",
    side: "bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700",
    other: "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700",
  };

  return `${baseStyles} ${categoryStyles[category]}`;
};

export default function ProjectTechnologies({
  technologies,
  category = "main",
}: ProjectTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {technologies.map((tech, index) => (
        <span key={index} className={getTechBadgeStyles(category)}>
          {tech}
        </span>
      ))}
    </div>
  );
}
