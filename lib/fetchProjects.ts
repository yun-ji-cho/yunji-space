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
      imagePath: "/images/projects/consulting-call.png",
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
      imagePath: "/images/projects/heydeer.png",
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
