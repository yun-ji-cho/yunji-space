// 애니메이션 관련 상수들
export const ANIMATION = {
  // 스크롤 임계값
  SCROLL_THRESHOLD: 20,

  // 모바일 메뉴 애니메이션
  MOBILE_MENU: {
    // clipPath 원의 크기
    CIRCLE_SIZE: {
      CLOSED: "25px",
      OPEN: "150vh",
    },
    // 원의 위치 (햄버거 버튼 기준)
    CIRCLE_POSITION: "calc(100% - 48px) 48px",

    // 스프링 애니메이션 설정
    SPRING: {
      OPEN: {
        type: "spring" as const,
        stiffness: 20,
        restDelta: 2,
      },
      CLOSED: {
        type: "spring" as const,
        delay: 0.2,
        stiffness: 400,
        damping: 40,
      },
    },

    // 아이템 애니메이션
    ITEM: {
      Y_OFFSET: 30,
      SPRING: {
        stiffness: 1000,
        velocity: -100,
      },
    },

    // 스태거 애니메이션
    STAGGER: {
      CHILDREN_DELAY: 0.07,
      DELAY_CHILDREN: 0.2,
      CLOSED_DELAY: 0.05,
    },
  },

  // 반응형 브레이크포인트
  BREAKPOINTS: {
    MD: 768,
  },
} as const;
