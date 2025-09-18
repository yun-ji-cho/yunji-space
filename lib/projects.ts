import { projectsData } from "@/data/projects";
import type { Project, DetailedWork } from "@/types/project";

// 정적 프로젝트 데이터 반환 함수
export function getProjects(): Project[] {
  return projectsData;
}

/**
 * DetailedWork 배열에서 모든 screenshots를 수집하는 유틸리티 함수
 * @param detailedWork - DetailedWork 배열
 * @returns 모든 screenshots를 포함한 배열
 */
export function collectScreenshotsFromDetailedWork(
  detailedWork?: DetailedWork[],
): string[] {
  if (!detailedWork) return [];

  return detailedWork.reduce((acc: string[], work) => {
    if (work.screenshots && work.screenshots.length > 0) {
      return [...acc, ...work.screenshots];
    }
    return acc;
  }, []);
}

export function getProjectsByCategory(
  category: "main" | "side" | "other",
): Project[] {
  return projectsData.filter((project) => project.category === category);
}
