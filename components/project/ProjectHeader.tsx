import Link from "next/link";
import { ExternalLink, Github, Clock, Users } from "lucide-react";

import { renderIcon } from "@/utils/iconUtils";
import type { Project } from "@/types/project";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center mb-6">
        <div
          className={`w-20 h-20 ${project.gradient} rounded-lg flex items-center justify-center mr-6 mb-4 lg:mb-0`}
        >
          {renderIcon({ name: project.icon, size: 32, className: "text-white" })}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">{project.role}</p>
          <p className="text-gray-700 text-lg mb-4">
            {project.description}
          </p>

          {/* Project Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {project.projectDuration && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{project.projectDuration}</span>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{project.teamSize}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-violet-100 to-sky-100 text-violet-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 font-medium"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
}