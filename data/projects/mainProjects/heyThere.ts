import type { Project } from "@/types/project";
import { heyThereDetailedWork } from "./heyThereDetailedWork";

export const heyThereProject: Project = {
  id: "2",
  title: "Hey-there ver1.0",
  description:
    "유지보수가 불가능했던 기존 코드의 기술 부채를 해결하고 사용자 경험(UX)을 개선한 Hey-there 리뉴얼 프로젝트입니다.",
  icon: "👋",
  technologies: [
    "React",
    "TypeScript",
    "Zustand",
    "TanStack Query",
    "Emotion",
    "i18next",
  ],
  gradient: "bg-gradient-to-br from-pink-400 to-rose-400",
  featured: true,
  category: "main",
  role: "프론트엔드 개발자",
  projectDuration: "12개월",
  teamSize: "프론트엔드 3명, 백엔드 3명, 디자이너 2명",
  achievements: [
    "**모노레포 아키텍처 구축** : 확장성을 고려한 모노레포 기반 아키텍처 설계 및 공통 컴포넌트/표준 API 레이어 구축을 통해 팀 생산성과 코드 일관성을 향상시켰습니다.",
    "**JWT 이중 토큰 인증 시스템** : `Axios Interceptor` 기반 자동 토큰 관리 시스템을 구현하여 보안성과 UX를 동시에 확보했습니다.",
    "**복합 대시보드 개발** : `Victory.js` 기반 차트·테이블과 복잡한 설정 페이지를 개발하여 **Dirty Checking**·성능 최적화를 적용했습니다.",
    "**동적 UI 아키텍처** : 서버 응답 기반 동적 UI를 설계하여 백엔드 설정만으로 확장 가능한 구조를 확보했습니다.",
    "**UX 중심 기능 구현** : 실시간 폼 검증·온보딩·가이드 제공 등 사용자 경험을 최우선으로 하는 기능들을 구현했습니다.",
  ],
  learnings: [
    "**아키텍처 설계의 중요성** : 초기 아키텍처 설계가 장기적 개발 효율성에 미치는 영향을 체감했습니다.",
    "**상태 관리 및 성능 최적화** : `Dirty Checking`, `useMemo` 등 고급 상태 관리 기법의 실무 적용 경험을 쌓았습니다.",
    "**UX 설계 역량 강화** : 복잡한 설정을 직관적 UI로 단순화하는 사용자 경험 설계 역량을 강화했습니다.",
    "**코드 일관성 확보** : 검증된 아키텍처 패턴을 기능 간 확장·재사용하며 프로젝트 전체의 코드 일관성을 확보했습니다.",
  ],
  hasDetailPage: true,
  detailLevel: 3, // 상세 레벨로 변경
  imagePath: "/images/projects/project_img_2.png",
  detailedWork: heyThereDetailedWork,
  technicalChallenges: [
    {
      title: "실시간 알림 시스템",
      description: "웹소켓을 활용한 실시간 예약 알림 및 상태 업데이트",
      solution:
        "Socket.io 클라이언트 구현, 재연결 로직, 알림 우선순위 관리로 사용자 경험 향상",
      color: "blue",
    },
    {
      title: "다국어 지원",
      description: "i18next를 활용한 다국어 지원 및 동적 언어 전환",
      solution:
        "네임스페이스 기반 번역 관리, 동적 언어 감지, 폰트 최적화로 글로벌 서비스 준비",
      color: "green",
    },
  ],
  technicalDecisions: [
    {
      title: "CSS-in-JS 라이브러리 선택",
      problem:
        "스타일링 방식 선택 시 성능, 개발 경험, 팀 협업을 모두 고려해야 함",
      alternatives: [
        "Styled-components",
        "Emotion",
        "CSS Modules",
        "Tailwind CSS",
      ],
      chosenSolution: "Emotion",
      reasoning:
        "1) 런타임 성능이 우수 2) TypeScript 지원이 완벽 3) 서버사이드 렌더링 지원 4) 번들 크기가 작음 5) 팀원들의 학습 곡선이 낮음",
      outcome: "스타일링 개발 속도 40% 향상, 번들 크기 20% 감소",
    },
    {
      title: "상태 관리 전략",
      problem: "예약 시스템의 복잡한 상태 관리와 실시간 업데이트 요구사항",
      alternatives: ["Redux", "Zustand", "Context API", "Recoil"],
      chosenSolution: "Zustand + React Query 조합",
      reasoning:
        "1) Zustand로 클라이언트 상태 관리 2) React Query로 서버 상태 관리 3) 캐싱과 동기화 자동화 4) 개발자 경험 향상",
      outcome: "상태 관리 복잡도 50% 감소, 데이터 동기화 오류 0건",
    },
    {
      title: "실시간 통신 방식",
      problem: "예약 상태 실시간 업데이트와 알림 시스템 구현",
      alternatives: [
        "Polling",
        "Server-Sent Events",
        "WebSocket",
        "GraphQL Subscriptions",
      ],
      chosenSolution: "WebSocket (Socket.io)",
      reasoning:
        "1) 양방향 실시간 통신 2) 연결 안정성 보장 3) 재연결 로직 내장 4) 브라우저 호환성 우수",
      outcome: "실시간 알림 전송률 99.9%, 사용자 만족도 30% 향상",
    },
  ],
  codeSnippets: [
    {
      title: "실시간 알림 커스텀 훅",
      description: "Socket.io를 활용한 실시간 알림 시스템 구현",
      code: `const useRealtimeNotifications = () => {
const [notifications, setNotifications] = useState([]);
const [isConnected, setIsConnected] = useState(false);

useEffect(() => {
const socket = io(process.env.REACT_APP_SOCKET_URL);

socket.on('connect', () => {
  setIsConnected(true);
});

socket.on('reservation_update', (data) => {
  setNotifications(prev => [...prev, data]);
  showToast(data.message);
});

socket.on('disconnect', () => {
  setIsConnected(false);
});

return () => socket.disconnect();
}, []);

return { notifications, isConnected };
};`,
      language: "typescript",
    },
  ],
  screenshots: [
    "/images/projects/heythere-dashboard.png",
    "/images/projects/heythere-booking.png",
    "/images/projects/heythere-settings.png",
  ],
};
