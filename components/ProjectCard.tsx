interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  gradient: string;
}

export default function ProjectCard({
  title,
  description,
  icon,
  technologies,
  gradient,
}: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div
        className={`w-full h-48 ${gradient} rounded-lg mb-4 flex items-center justify-center`}
      >
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
