"use client";

import ImageCarousel from "@/components/ui/ImageCarousel";
import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  // 표시할 이미지 결정
  const images = project.screenshots?.length
    ? project.screenshots
    : project.imagePath
      ? [project.imagePath]
      : [];

  // 이미지가 없으면 렌더링하지 않음
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        프로젝트 미리보기
      </h2>
      <ImageCarousel images={images} />
    </div>
  );
}
