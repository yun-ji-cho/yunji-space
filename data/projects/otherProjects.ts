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
    detailedWork: [
      {
        title: "01. 웹 접근성 중심 UI/UX 설계",
        description:
          "키보드 접근성과 WAI-ARIA 가이드를 준수하여 모든 사용자가 접근 가능한 웹사이트를 구현했습니다.",
        color: "yellow",
        details: `웹 접근성 표준을 준수하여 시각 장애인, 청각 장애인, 지체 장애인 등 모든 사용자가 웹사이트를 이용할 수 있도록 설계했습니다. 특히 키보드만으로도 모든 기능을 사용할 수 있도록 하고, 스크린 리더 사용자를 위한 적절한 라벨링과 구조화된 마크업을 구현했습니다.

• **키보드 접근성 구현**: \`Tab\`, \`Enter\`, \`Space\` 키만으로 모든 인터랙션 요소에 접근할 수 있도록 포커스 관리 시스템을 구축했습니다.
• **WAI-ARIA 가이드 준수**: \`aria-label\`, \`aria-describedby\`, \`role\` 속성을 적절히 활용하여 스크린 리더 사용자를 위한 의미 있는 정보를 제공했습니다.
• **시맨틱 마크업 구조**: \`header\`, \`nav\`, \`main\`, \`section\`, \`article\` 등 의미 있는 HTML5 태그를 사용하여 콘텐츠의 구조를 명확히 했습니다.
• **색상 대비 최적화**: WCAG 2.1 AA 기준에 맞는 색상 대비율을 확보하여 시각적 접근성을 향상시켰습니다.`,
        challenges: [
          "**기존 디자인과 접근성의 균형**: 시각적으로 매력적인 디자인을 유지하면서도 접근성 표준을 만족시키는 것이 가장 큰 도전이었습니다.",
          "**크로스 브라우저 호환성**: 다양한 브라우저와 스크린 리더에서 일관된 접근성 경험을 제공해야 했습니다.",
          "**복잡한 인터랙션 요소의 접근성**: 슬라이더, 드롭다운 메뉴 등 복잡한 UI 컴포넌트의 접근성을 보장하는 것이 어려웠습니다.",
        ],
        solutions: [
          "**점진적 접근성 향상**: 기존 디자인을 최대한 유지하면서 접근성 기능을 단계적으로 추가하여 사용자 경험을 개선했습니다.",
          "**접근성 테스트 자동화**: \`axe-core\` 라이브러리를 활용하여 접근성 문제를 자동으로 감지하고 수정했습니다.",
          "**사용자 테스트 진행**: 실제 스크린 리더 사용자와의 테스트를 통해 접근성 구현의 실효성을 검증했습니다.",
        ],
        codeSnippets: [
          {
            title: "키보드 접근성 구현 예시",
            description:
              "Tab 키로 포커스 이동 시 시각적 피드백을 제공하는 CSS와 JavaScript 구현",
            code: `/* 포커스 스타일 정의 */
.focusable:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* JavaScript로 키보드 이벤트 처리 */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    // 인터랙션 로직 실행
  }
});`,
            language: "css",
          },
        ],
      },
    ],
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
    detailedWork: [
      {
        title: "01. VR 콘텐츠 뷰어 통합",
        description:
          "iframe을 활용하여 VR 콘텐츠를 웹사이트에 자연스럽게 통합하고, 사용자 경험을 최적화했습니다.",
        color: "teal",
        details: `VR 기술을 웹 환경에 통합하여 사용자가 웹사이트에서 직접 VR 콘텐츠를 체험할 수 있도록 구현했습니다. iframe을 활용한 외부 VR 뷰어 연동과 반응형 디자인을 통해 다양한 디바이스에서 최적의 경험을 제공했습니다.

• **iframe 기반 VR 뷰어 연동**: 외부 VR 플랫폼과의 안전한 통신을 위해 \`iframe\`을 활용하여 VR 콘텐츠를 웹사이트에 임베드했습니다.
• **반응형 VR 인터페이스**: 데스크톱, 태블릿, 모바일 등 다양한 디바이스에서 VR 콘텐츠가 최적화된 크기로 표시되도록 반응형 디자인을 구현했습니다.
• **크로스 브라우저 호환성**: \`Chrome\`, \`Firefox\`, \`Safari\`, \`Edge\` 등 주요 브라우저에서 일관된 VR 경험을 제공하도록 최적화했습니다.
• **로딩 성능 최적화**: VR 콘텐츠 로딩 시간을 단축하고 사용자 경험을 향상시키기 위한 \`lazy loading\` 및 \`preloading\` 전략을 적용했습니다.`,
        challenges: [
          "**VR 콘텐츠 로딩 성능**: 고해상도 VR 콘텐츠로 인한 긴 로딩 시간과 네트워크 대역폭 사용량 최적화가 필요했습니다.",
          "**다양한 디바이스 대응**: VR 콘텐츠가 다양한 화면 크기와 해상도에서 일관되게 작동하도록 하는 것이 어려웠습니다.",
          "**브라우저별 호환성**: 각 브라우저마다 다른 iframe 정책과 보안 제약으로 인한 통합의 복잡성이 있었습니다.",
        ],
        solutions: [
          "**적응형 스트리밍 구현**: 사용자의 네트워크 상태에 따라 VR 콘텐츠의 품질을 자동으로 조절하는 적응형 스트리밍을 구현했습니다.",
          "**반응형 iframe 설계**: \`CSS\` \`aspect-ratio\`와 \`viewport\` 단위를 활용하여 모든 디바이스에서 최적의 VR 뷰어 크기를 보장했습니다.",
          "**폴리필 및 대체 방안**: 구형 브라우저를 위한 \`polyfill\`과 VR을 지원하지 않는 환경을 위한 대체 콘텐츠를 제공했습니다.",
        ],
        codeSnippets: [
          {
            title: "반응형 VR iframe 구현",
            description:
              "다양한 디바이스에서 최적화된 VR 뷰어 크기를 보장하는 CSS 구현",
            code: `/* VR 뷰어 컨테이너 */
.vr-viewer-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  max-width: 800px;
  margin: 0 auto;
}

/* iframe 스타일링 */
.vr-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* 모바일 최적화 */
@media (max-width: 768px) {
  .vr-viewer-container {
    aspect-ratio: 4/3;
    margin: 1rem;
  }
}`,
            language: "css",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "켄싱턴 호텔 사이판",
    description:
      "“WordPress 환경에서 반응형 UI와 커스터마이즈된 이미지 슬라이더를 개발하여 유지보수성과 마케팅 효과를 동시에 확보했습니다.",
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
