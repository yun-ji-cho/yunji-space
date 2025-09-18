/**
 * 프로젝트 관련 타입 정의
 * - 중복 제거 및 구조화
 * - 관심사별 분리
 */

// === 공통 타입들 ===

export interface CodeSnippet {
  title: string;
  description?: string;
  code: string;
  language: string;
}

export interface ProblemSolving {
  challenge: string;
  solution: string;
}

export interface TechnicalChallenge {
  title: string;
  description: string;
  solution: string;
  color: string;
}

export interface TechnicalDecision {
  title: string;
  problem: string;
  alternatives: string[];
  chosenSolution: string;
  reasoning: string;
  outcome: string;
}

// === 기본 프로젝트 정보 ===

export interface BaseProject {
  // 필수 기본 정보
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  gradient: string;
  category: "main" | "side" | "other";

  // 선택적 기본 정보
  link?: string;
  github?: string;
  featured?: boolean;
  imagePath?: string;
  hasDetailPage?: boolean;
}

// === 프로젝트 메타데이터 ===

export interface ProjectMetadata {
  role?: string;
  projectDuration?: string;
  teamSize?: string;
  detailLevel?: 1 | 2 | 3;
}

// === 프로젝트 상세 정보 ===

export interface ProjectDetails {
  introduction?: string;
  achievements?: string[];
  learnings?: string[];
  screenshots?: string[];
  codeSnippets?: CodeSnippet[];
}

// === 고급 프로젝트 정보 ===

export interface AdvancedProjectInfo {
  technicalChallenges?: TechnicalChallenge[];
  technicalDecisions?: TechnicalDecision[];
  detailedWork?: DetailedWork[];
}

// === 상세 작업 정보 ===

export interface DetailedWork {
  title: string;
  description: string;
  color: string;
  keyResults?: string[];
  problemSolving?: ProblemSolving[];
  codeSnippets?: CodeSnippet[]; // 공통 타입 재사용
  screenshots?: string[];
}

// === 통합 프로젝트 인터페이스 ===

export interface Project
  extends BaseProject,
    ProjectMetadata,
    ProjectDetails,
    AdvancedProjectInfo {}

// === 프로젝트 생성을 위한 유틸리티 타입들 ===

/**
 * 간단한 프로젝트 (기본 정보만)
 */
export type SimpleProject = BaseProject & Partial<ProjectMetadata>;

/**
 * 상세 프로젝트 (기본 + 상세 정보)
 */
export type DetailedProject = BaseProject & ProjectMetadata & ProjectDetails;

/**
 * 완전한 프로젝트 (모든 정보 포함)
 */
export type CompleteProject = Project;

// === 프로젝트 카테고리별 타입 가드 ===

export function isMainProject(
  project: Project,
): project is Project & { category: "main" } {
  return project.category === "main";
}

export function isSideProject(
  project: Project,
): project is Project & { category: "side" } {
  return project.category === "side";
}

export function hasDetailPage(
  project: Project,
): project is Project & { hasDetailPage: true; id: string } {
  return project.hasDetailPage === true && !!project.id;
}

// === 기타 공통 타입들 ===

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
