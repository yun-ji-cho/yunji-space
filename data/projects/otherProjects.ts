import { Project } from "@/types/project";

export const otherProjects: Project[] = [
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
