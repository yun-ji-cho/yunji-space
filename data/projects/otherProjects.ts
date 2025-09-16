import type { Project } from "@/types/project";

export const otherProjects: Project[] = [
  {
    id: "4",
    title: "펀드파트너스",
    description:
      "풀페이지 스크롤, 카운팅 애니메이션, 키보드 탐색 등 인터랙션 중심 UI를 구현하여 웹 접근성과 사용자 몰입도를 강화했습니다.",
    icon: "DollarSign",
    technologies: ["HTML5", "SCSS", "jQuery", "Slick Slider"],
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-400",
    link: "https://www.korfp.com/",
    category: "other",
    role: "프론트앤ㄷ",
    hasDetailPage: true,
    imagePath: "/images/projects/fundpartners.png",
  },
  {
    id: "5",
    title: "Betree 홈페이지",
    description:
      "레이어 팝업 기반 SPA형 UI를 설계하여 페이지 전환 없는 콘텐츠 탐색 경험을 제공했고, 애니메이션과 인터랙션을 통해 생동감 있는 사용자 경험을 구현했습니다.",
    icon: "TreePine",
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
    hasDetailPage: true,
    imagePath: "/images/projects/betree.png",
  },
  {
    id: "6",
    title: "켄싱턴 호텔 사이판",
    description:
      "WordPress 환경에서 반응형 UI와 커스터마이즈된 이미지 슬라이더를 개발하여 유지보수성과 마케팅 효과를 동시에 확보했습니다.",
    icon: "Building",
    technologies: ["HTML5", "SCSS", "jQuery", "SCSS"],
    gradient: "bg-gradient-to-br from-indigo-400 to-purple-400",
    link: "https://www.kensingtonsaipan.com/kr/",
    category: "other",
    role: "퍼블리셔",
    hasDetailPage: false,
    imagePath: "/images/projects/kensington.png",
  },
];
