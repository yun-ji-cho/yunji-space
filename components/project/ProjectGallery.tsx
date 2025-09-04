import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  if (!project.imagePath) {
    return null;
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        프로젝트 미리보기
      </h2>
      <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}