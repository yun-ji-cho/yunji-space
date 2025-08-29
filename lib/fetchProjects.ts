import { Project } from "@/types/project";

// 실제 API가 있다면 여기서 fetch를 사용
export async function fetchProjects(): Promise<Project[]> {
  // 임시 데이터 - 실제로는 API에서 가져옴
  return [
    // Main Projects
    {
      id: "1",
      title: "상담콜 프론트 리뉴얼",
      description:
        "기존 상담콜 시스템의 프론트엔드를 완전히 리뉴얼하여 사용자 경험을 대폭 개선한 프로젝트입니다.",
      icon: "📞",
      technologies: [
        "React",
        "TypeScript",
        "Zustand",
        "TanStack Query",
        "Tailwind(shadcn/ui)",
      ],
      gradient: "bg-gradient-to-br from-blue-400 to-purple-400",
      featured: true,
      category: "main",
      role: "프론트엔드 개발자",
      projectDuration: "6개월",
      teamSize: "프론트엔드 2명, 백엔드 3명, 디자이너 1명",
      achievements: [
        "사용자 인터페이스 개선으로 상담 처리 시간 30% 단축",
        "반응형 디자인 적용으로 모바일 사용률 50% 증가",
        "성능 최적화로 페이지 로딩 속도 40% 개선",
      ],
      learnings: [
        "대규모 프로젝트에서의 상태 관리 전략",
        "성능 최적화 기법과 모니터링",
        "팀 협업과 코드 리뷰 프로세스",
      ],
      hasDetailPage: true,
      detailLevel: 3, // 가장 상세한 레벨
      imagePath: "/images/projects/project_img_1.png",
      detailedWork: [
        {
          title: "인증 시스템 구축",
          description:
            "JWT 토큰 기반 로그인/회원가입, 리프레시 토큰 자동 갱신, 소셜 로그인 연동 및 보안 강화",
          color: "blue",
        },
        {
          title: "대시보드 & 리포트",
          description:
            "Chart.js 기반 데이터 시각화, 실시간 데이터 업데이트, 반응형 차트 및 필터링 기능 구현",
          color: "green",
        },
        {
          title: "온보딩 & 설정 페이지",
          description:
            "신규 사용자 온보딩 플로우, 버튼/스퀘어/카드 설정 UI, 실시간 미리보기 및 드래그 앤 드롭",
          color: "purple",
        },
      ],
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
          outcome:
            "개발 속도 30% 향상, 번들 크기 15% 감소, 팀원 온보딩 시간 단축",
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
          problem:
            "사용자가 폼 제출 후 에러를 확인하고 수정하는 과정에서 UX 저하",
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
      screenshots: [
        "/images/projects/sangdam-dashboard.png",
        "/images/projects/sangdam-login.png",
        "/images/projects/sangdam-settings.png",
      ],
    },
    {
      id: "2",
      title: "헤이데어 리뉴얼",
      description:
        "헤어샵 예약 및 관리 시스템의 프론트엔드를 현대적인 기술 스택으로 리뉴얼한 프로젝트입니다.",
      icon: "💇‍♀️",
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
      projectDuration: "4개월",
      teamSize: "프론트엔드 2명, 백엔드 2명, 디자이너 1명",
      achievements: [
        "예약 시스템 UX 개선으로 예약 완료율 25% 증가",
        "실시간 알림 시스템 구축",
        "관리자 대시보드 기능 확장",
      ],
      learnings: [
        "GraphQL을 활용한 효율적인 데이터 페칭",
        "실시간 기능 구현과 웹소켓 활용",
        "사용자 중심의 UI/UX 설계",
      ],
      hasDetailPage: true,
      detailLevel: 3, // 상세 레벨로 변경
      imagePath: "/images/projects/project_img_2.png",
      detailedWork: [
        {
          title: "프로젝트 셋팅 & 공통 컴포넌트",
          description:
            "Vite 기반 프로젝트 초기 설정, 재사용 가능한 UI 컴포넌트 라이브러리 구축, TypeScript 설정 및 ESLint/Prettier 규칙 정의",
          color: "blue",
          details: `프로젝트 초기 설정부터 시작하여 개발 환경을 구축했습니다.

• Vite를 선택한 이유: 빠른 개발 서버와 빌드 속도, 플러그인 생태계가 풍부하여 개발 효율성 향상
• TypeScript 설정: 엄격한 타입 체크로 런타임 에러 방지, 코드 품질 향상
• ESLint/Prettier: 팀 전체의 코드 스타일 통일, 자동 포맷팅으로 개발 속도 향상
• 공통 컴포넌트 라이브러리: Button, Input, Modal 등 재사용 가능한 컴포넌트 설계 및 구현

이를 통해 프로젝트 전체의 개발 속도와 코드 품질을 크게 향상시켰습니다.`,
          challenges: [
            "팀원들의 TypeScript 학습 곡선 관리",
            "공통 컴포넌트의 확장성과 유연성 확보",
            "ESLint 규칙 설정 시 팀 컨벤션 맞추기",
          ],
          solutions: [
            "TypeScript 가이드 문서 작성 및 코드 리뷰 시 타입 체크 강화",
            "Props 인터페이스 설계 시 옵셔널 속성과 기본값 활용",
            "팀 회의를 통한 ESLint 규칙 합의 및 자동화 도구 활용",
          ],
        },
        {
          title: "인증 시스템",
          description:
            "JWT 토큰 기반 로그인/회원가입, 리프레시 토큰 자동 갱신, 권한별 라우트 가드, 소셜 로그인 연동",
          color: "green",
          details: `사용자 인증과 권한 관리를 위한 완전한 인증 시스템을 구축했습니다.

• JWT 토큰 기반 인증: 보안성과 확장성을 고려한 토큰 기반 인증 구현
• 리프레시 토큰: 자동 토큰 갱신으로 사용자 경험 향상
• 권한별 라우트 가드: 사용자 역할에 따른 페이지 접근 제어
• 소셜 로그인: Google, Kakao 등 다양한 소셜 로그인 연동

보안과 사용자 편의성을 모두 고려한 인증 시스템을 완성했습니다.`,
          challenges: [
            "토큰 만료 시 자동 갱신 로직 구현",
            "소셜 로그인 연동 시 각 플랫폼별 차이점 처리",
            "권한 관리 시스템의 복잡성",
          ],
          solutions: [
            "Axios 인터셉터를 활용한 자동 토큰 갱신 로직 구현",
            "공통 인터페이스 설계로 소셜 로그인 통합 관리",
            "역할 기반 접근 제어(RBAC) 패턴 적용",
          ],
          codeSnippets: [
            {
              title: "토큰 자동 갱신 인터셉터",
              code: `// axios 인터셉터 설정
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const { data } = await authAPI.refresh(refreshToken);
          setTokens(data.accessToken, data.refreshToken);
          return axios.request(error.config);
        } catch (refreshError) {
          logout();
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);`,
              language: "typescript",
            },
          ],
        },
        {
          title: "리포트 & 대시보드",
          description:
            "Chart.js를 활용한 데이터 시각화, 실시간 데이터 업데이트, 필터링 및 정렬 기능, 반응형 차트 구현",
          color: "purple",
          details: `비즈니스 데이터를 시각적으로 표현하는 대시보드를 구현했습니다.

• Chart.js 활용: 다양한 차트 타입으로 데이터 시각화
• 실시간 데이터 업데이트: WebSocket을 통한 실시간 데이터 동기화
• 필터링 및 정렬: 사용자가 원하는 데이터를 쉽게 찾을 수 있는 기능
• 반응형 차트: 다양한 디바이스에서 최적화된 차트 표시

데이터 기반 의사결정을 지원하는 직관적인 대시보드를 완성했습니다.`,
          challenges: [
            "대용량 데이터의 성능 최적화",
            "실시간 데이터 동기화 시 UI 깜빡임 방지",
            "반응형 차트의 레이아웃 관리",
          ],
          solutions: [
            "데이터 가상화와 페이지네이션으로 성능 최적화",
            "데이터 업데이트 시 부드러운 애니메이션 적용",
            "CSS Grid와 Flexbox를 활용한 반응형 레이아웃 구현",
          ],
        },
        {
          title: "온보딩 페이지",
          description:
            "신규 사용자를 위한 단계별 가이드, 진행률 표시, 스킵 기능, 모바일 최적화된 터치 인터랙션",
          color: "orange",
          details: `신규 사용자가 서비스를 쉽게 이해할 수 있는 온보딩 플로우를 구현했습니다.

• 단계별 가이드: 사용자가 서비스의 핵심 기능을 단계별로 학습
• 진행률 표시: 현재 위치와 남은 단계를 명확히 표시
• 스킵 기능: 이미 알고 있는 사용자를 위한 선택적 학습
• 모바일 최적화: 터치 인터랙션과 제스처를 고려한 UX 설계

사용자 이탈률을 줄이고 서비스 이해도를 높이는 온보딩을 완성했습니다.`,
          challenges: [
            "사용자별 맞춤형 온보딩 경험 제공",
            "모바일에서의 부드러운 애니메이션 구현",
            "온보딩 완료 상태 관리",
          ],
          solutions: [
            "사용자 행동 분석을 통한 개인화된 온보딩 설계",
            "CSS Transform과 Transition을 활용한 성능 최적화",
            "로컬 스토리지와 서버 동기화로 상태 관리",
          ],
        },
        {
          title: "설정 페이지",
          description:
            "버튼/스퀘어/카드 설정 UI, 실시간 미리보기, 드래그 앤 드롭 기능, 설정 저장 및 불러오기",
          color: "red",
          details: `사용자가 서비스를 자신만의 방식으로 커스터마이징할 수 있는 설정 페이지를 구현했습니다.

• 버튼/스퀘어/카드 설정: 다양한 UI 요소의 스타일과 동작 설정
• 실시간 미리보기: 설정 변경 시 즉시 결과 확인 가능
• 드래그 앤 드롭: 직관적인 UI 요소 배치 기능
• 설정 저장/불러오기: 사용자 설정의 영구 저장 및 복원

사용자 경험을 크게 향상시키는 직관적인 설정 시스템을 완성했습니다.`,
          challenges: [
            "드래그 앤 드롭의 성능 최적화",
            "실시간 미리보기의 메모리 관리",
            "설정 데이터의 버전 관리",
          ],
          solutions: [
            "React DnD 라이브러리 활용으로 드래그 성능 최적화",
            "디바운싱과 메모이제이션으로 미리보기 성능 향상",
            "JSON 스키마 버전 관리로 설정 호환성 보장",
          ],
        },
      ],
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
        "/images/projects/heydear-dashboard.png",
        "/images/projects/heydear-booking.png",
        "/images/projects/heydear-settings.png",
      ],
    },
    // Side Projects
    {
      id: "3",
      title: "소분소분",
      description:
        "React와 TypeScript 기반의 협업 프로세스를 학습하며 프론트엔드 개발자로의 전환을 이끌어준 프로젝트입니다.",
      icon: "🔄",
      technologies: ["React", "TypeScript", "React Query", "SASS"],
      gradient: "bg-gradient-to-br from-green-400 to-emerald-400",
      // link: "https://sobonsobon.example.com",
      github: "https://github.com/SobunSobun/SobunSobun-FrontEnd",
      category: "side",
      role: "프론트엔드 개발자 (퍼블리셔에서 전환)",
      hasDetailPage: false,
      imagePath: "/images/projects/sobunsobun.png",
    },
    // Other Experience
    {
      id: "4",
      title: "펀드파트너스",
      description:
        "키보드 접근성과 WAI-ARIA 가이드를 준수하며 웹 접근성 중심의 인터랙티브 UI를 설계 및 구현했습니다.",
      icon: "💰",
      technologies: ["HTML5", "SCSS", "jQuery", "Slick Slider"],
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-400",
      link: "https://www.korfp.com/",
      category: "other",
      role: "퍼블리셔",
      hasDetailPage: false,
      imagePath: "/images/projects/fundpartners.png",
    },
    {
      id: "5",
      title: "Betree 홈페이지",
      description:
        "iframe을 활용한 VR 콘텐츠 뷰어를 연동하고, 다양한 디바이스에 대응하는 반응형 UI를 개발했습니다.",
      icon: "🌳",
      technologies: [
        "HTML5",
        "SCSS,",
        "JavaScript",
        "VR 콘텐츠 뷰어(iFrame 포함)",
        "크로스브라우징 대응",
      ],
      gradient: "bg-gradient-to-br from-teal-400 to-cyan-400",
      link: "https://betree.co.kr/kr",
      category: "other",
      role: "퍼블리셔",
      hasDetailPage: false,
      imagePath: "/images/projects/betree.png",
    },
    {
      id: "6",
      title: "켄싱턴 호텔 사이판",
      description:
        "PHP 템플릿 환경을 고려하여 유지보수가 용이한 마크업 구조를 설계하고, jQuery 기반의 동적 UI를 구현했습니다.",
      icon: "🏨",
      technologies: ["HTML5", "SCSS", "jQuery", "SCSS"],
      gradient: "bg-gradient-to-br from-indigo-400 to-purple-400",
      link: "https://www.kensingtonsaipan.com/kr/",
      category: "other",
      role: "퍼블리셔",
      hasDetailPage: false,
      imagePath: "/images/projects/kensington.png",
    },
  ];
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchProjects();
  return projects.filter((project) => project.featured);
}

export async function fetchProjectsByCategory(
  category: "main" | "side" | "other"
): Promise<Project[]> {
  const projects = await fetchProjects();
  return projects.filter((project) => project.category === category);
}
