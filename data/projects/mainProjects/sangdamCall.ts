import type { Project } from "@/types/project";
import { sangdamCallDetailedWork } from "./sangdamCallDetailedWork";
import { collectScreenshotsFromDetailedWork } from "@/lib/projects";

export const sangdamCallProject: Project = {
  id: "1",
  title: "상담콜 프론트 리뉴얼",
  description:
    "기존 상담콜 시스템의 프론트엔드를 완전히 리뉴얼하여 사용자 경험을 대폭 개선한 프로젝트입니다.",
  icon: "📞",
  technologies: [
    "React",
    "TypeScript",
    "Zustand",
    "React Query",
    "Tailwind(shadcn/ui)",
  ],
  gradient: "bg-gradient-to-br from-blue-400 to-purple-400",
  featured: true,
  category: "main",
  role: "프론트엔드 개발자",
  projectDuration: "5개월",
  teamSize: "프론트엔드 1명, 백엔드 1명",
  introduction:
    "프로젝트 리더로서 기획/디자인/API 문서가 전무한 레거시 PHP 프로젝트의 프론트엔드 리뉴얼을 0부터 1까지 책임졌습니다. ==불안정한 레거시 API를 역추적·문서화하여 팀의 최대 병목을 해소==했고, AI 도구를 활용한 신속한 프로토타이핑으로 개발 속도를 확보했습니다. 또한, ==코드 가이드라인과 협업 문서를 구축해 지속 가능한 개발 환경의 기틀을 마련==했습니다.",
  achievements: [
    "**'3중 제약' 속 성공적인 초기 개발 완료 ** : 문서 부재, 높은 복잡도, 타이트한 일정이라는 조건 속에서도 프로젝트 기반을 구축했습니다. `33개 페이지 UI`를 `2주` 내에 완성했으며, 약 `1개월` 만에 `10개`의 주요 기능을 구현해 리뉴얼 가능성을 증명했습니다.",
    "**레거시 API 명세 부재 문제 해결**: 직접 스펙을 분석하고 문서화하여 백엔드 팀과의 협업 효율을 크게 향상시켰습니다.",
    "**성능 최적화**를 통한 사용자 경험 개선: `Intersection Observer` 기반 조건부 렌더링과 캐싱 전략을 도입해 응답 속도를 개선했습니다.",
  ],
  learnings: [
    "**불확실한 환경에서의 문제 해결 능력**: `기획, 디자인, API 명세가 없는 극한의 환경`에서 문제를 정의하고 해결하는 주도성을 길렀습니다.",
    "**문서화의 전략적 가치**: 단순한 기록이 아니라 팀 생산성을 높이는 핵심 자산임을 깨달았고, `README·코딩 가이드 등 공통 문서` 작성에 적극적으로 임하게 되었습니다.",
    "**생산성 혁신 마인드셋**: `Cursor`와 같은 **AI 도구**를 도입해 반복 작업을 자동화하고, 본질적인 문제 해결에 집중하는 습관을 얻었습니다.",
  ],
  hasDetailPage: true,
  detailLevel: 3, // 가장 상세한 레벨
  imagePath: "/images/projects/project_img_1.png",
  screenshots: collectScreenshotsFromDetailedWork(sangdamCallDetailedWork),
  detailedWork: sangdamCallDetailedWork,
  technicalChallenges: [
    {
      title: "상태 관리 최적화",
      description: "대규모 애플리케이션에서의 복잡한 상태 관리",
      solution:
        "Zustand를 활용한 모듈화된 상태 관리, 선택적 구독 패턴으로 불필요한 리렌더링 방지",
      color: "blue",
    },
    {
      title: "성능 최적화",
      description: "대용량 데이터 처리 및 렌더링 성능 개선",
      solution:
        "React.memo, useMemo, useCallback 활용, 가상화 적용으로 성능 40% 향상",
      color: "green",
    },
  ],
  technicalDecisions: [
    {
      title: "상태 관리 라이브러리 선택",
      problem:
        "대규모 애플리케이션에서 전역 상태 관리가 필요했지만, Redux는 보일러플레이트가 많고 학습 곡선이 가파름",
      alternatives: ["Redux Toolkit", "Zustand", "Recoil", "Context API"],
      chosenSolution: "Zustand",
      reasoning:
        "1) 보일러플레이트 최소화로 개발 속도 향상 2) TypeScript 지원이 우수 3) 번들 크기가 작음 4) 팀원들의 학습 비용이 낮음 5) 선택적 구독으로 성능 최적화 가능",
      outcome: "개발 속도 30% 향상, 번들 크기 15% 감소, 팀원 온보딩 시간 단축",
    },
    {
      title: "인증 토큰 관리 방식",
      problem: "JWT 토큰 만료 시 사용자 경험 저하와 보안 취약점 발생",
      alternatives: [
        "로컬스토리지 저장",
        "세션스토리지 저장",
        "HttpOnly 쿠키",
        "메모리 저장",
      ],
      chosenSolution: "HttpOnly 쿠키 + 메모리 저장 조합",
      reasoning:
        "1) XSS 공격 방지 (HttpOnly 쿠키) 2) CSRF 공격 방지 (SameSite 속성) 3) 자동 갱신을 위한 메모리 저장 4) 서버 사이드에서 토큰 무효화 가능",
      outcome: "보안 취약점 0건, 사용자 재로그인 요청 90% 감소",
    },
    {
      title: "폼 검증 전략",
      problem: "사용자가 폼 제출 후 에러를 확인하고 수정하는 과정에서 UX 저하",
      alternatives: [
        "제출 시 검증",
        "실시간 검증",
        "포커스 아웃 시 검증",
        "디바운스 검증",
      ],
      chosenSolution: "실시간 검증 + 디바운스",
      reasoning:
        "1) 사용자가 즉시 피드백을 받아 수정 가능 2) 디바운스로 성능 최적화 3) 제출 버튼 활성화/비활성화로 UX 향상 4) 서버 부하 감소",
      outcome: "폼 완료율 25% 향상, 사용자 불만 감소",
    },
  ],
  codeSnippets: [
    {
      title: "인증 커스텀 훅",
      description: "JWT 토큰 기반 인증 로직을 관리하는 재사용 가능한 훅",
      code: `const useAuth = () => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const login = async (credentials) => {
try {
  const response = await authAPI.login(credentials);
  const { accessToken, refreshToken } = response.data;
  
  setTokens(accessToken, refreshToken);
  setUser(response.data.user);
  
  return { success: true };
} catch (error) {
  return { success: false, error: error.message };
}
};

return { user, loading, login };
};`,
      language: "typescript",
    },
  ],
};
