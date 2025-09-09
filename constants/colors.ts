// 색상 관련 상수들
export const COLORS = {
  // 텍스트 색상
  TEXT: {
    PRIMARY: "#374151", // gray-700
    SECONDARY: "hsl(0, 0%, 18%)", // 어두운 회색
    MUTED: "rgba(0, 0, 0, 0.7)", // 반투명 검정
  },

  // 배경 색상
  BACKGROUND: {
    HEADER_SCROLLED: "rgba(255, 255, 255, 0.95)", // 반투명 흰색
    MOBILE_MENU: "#ffffff", // 순백색
    SKIP_NAVIGATION: "#9333ea", // purple-600
  },

  // 그라데이션
  GRADIENT: {
    LOGO: {
      FROM: "#9333ea", // purple-600
      TO: "#2563eb", // blue-600
      HOVER_FROM: "#7c3aed", // purple-700
      HOVER_TO: "#1d4ed8", // blue-700
    },
  },

  // 테두리
  BORDER: {
    HEADER: "#e5e7eb", // gray-200
  },

  // 포커스 링
  FOCUS_RING: {
    SKIP_NAVIGATION: "#c084fc", // purple-300
  },
} as const;
