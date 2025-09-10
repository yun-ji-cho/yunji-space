import { projectsData } from "@/data/projects";
import type { Project } from "@/types/project";

// 정적 프로젝트 데이터 반환 함수들
export function getProjects(): Project[] {
  return projectsData;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured);
}

export function getProjectsByCategory(
  category: "main" | "side" | "other"
): Project[] {
  return projectsData.filter((project) => project.category === category);
}
