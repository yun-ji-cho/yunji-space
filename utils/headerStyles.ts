import type { CSSProperties } from "react";

interface HeaderStyleConfig {
  isScrolled: boolean;
}

/**
 * 헤더 배경 스타일을 반환하는 함수
 */
export function getHeaderBackgroundStyle({
  isScrolled,
}: HeaderStyleConfig): CSSProperties {
  if (isScrolled) {
    return {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    };
  }

  return {
    backgroundColor: "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    boxShadow: "none",
  };
}

/**
 * 로고 그라디언트 스타일
 */
export const logoGradientStyle = {
  default: {
    backgroundImage: "linear-gradient(to right, #8b5cf6, #0ea5e9)", // violet-500 to sky-500
  },
  hover: {
    backgroundImage: "linear-gradient(to right, #7c3aed, #0284c7)", // violet-600 to sky-600
  },
};

/**
 * Skip navigation 스타일
 */
export const skipNavigationStyle: CSSProperties = {
  backgroundColor: "#5b21b6", // violet-800
  "--tw-ring-color": "#8b5cf6", // violet-500
} as CSSProperties;

/**
 * 네비게이션 링크 클래스 이름을 반환하는 함수
 */
export function getNavLinkClassName(isScrolled: boolean): string {
  const baseClasses =
    "relative py-2 font-medium transition-all duration-300 group";
  const colorClasses = isScrolled
    ? "text-gray-700 hover:text-purple-600"
    : "text-black/80 hover:text-black";

  return `${baseClasses} ${colorClasses}`;
}

/**
 * 햄버거 메뉴 아이콘 색상을 반환하는 함수
 */
export function getHamburgerIconColor(isScrolled: boolean): string {
  return isScrolled ? "#374151" : "black"; // gray-700 or black
}
