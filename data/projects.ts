import { mainProjects } from "./projects/mainProjects";
import { sideProject } from "./projects/sideProject";
import { otherProjects } from "./projects/otherProjects";
import type { Project } from "@/types/project";
// 정적 프로젝트 데이터 - 포트폴리오용 고정 콘텐츠
export const projectsData: Project[] = [
  ...mainProjects,
  sideProject,
  ...otherProjects,
];
