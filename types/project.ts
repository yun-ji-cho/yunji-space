// DetailedWork 타입 별도 정의
export interface ProblemSolving {
  challenge: string;
  solution: string;
}

export interface DetailedWork {
  title: string;
  description: string;
  color: string;
  // 새로운 구조
  keyResults?: string[]; // 핵심 성과
  problemSolving?: ProblemSolving[]; // challenge-solution 매칭
  // 기존 필드 (deprecated - 추후 제거 예정)
  details?: string;
  challenges?: string[];
  solutions?: string[];
  codeSnippets?: {
    title: string;
    description?: string;
    code: string;
    language: string;
  }[];
  screenshots?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  gradient: string;
  link?: string;
  github?: string;
  featured?: boolean;
  category: "main" | "side" | "other";
  role?: string;
  introduction?: string;
  achievements?: string[];
  learnings?: string[];
  hasDetailPage?: boolean;
  imagePath?: string;
  // 상세도 레벨 (1: 간단, 2: 보통, 3: 상세)
  detailLevel?: 1 | 2 | 3;
  // 새로운 상세 정보 필드들
  detailedWork?: DetailedWork[];
  technicalChallenges?: {
    title: string;
    description: string;
    solution: string;
    color: string;
  }[];
  // 기술적 의사결정 과정
  technicalDecisions?: {
    title: string;
    problem: string;
    alternatives: string[];
    chosenSolution: string;
    reasoning: string;
    outcome: string;
  }[];
  codeSnippets?: {
    title: string;
    description: string;
    code: string;
    language: string;
  }[];
  projectDuration?: string;
  teamSize?: string;
  screenshots?: string[];
}

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
