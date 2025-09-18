/**
 * Tailwind CSS 색상 유틸리티 함수들
 * 중복을 제거하고 유지보수가 쉬운 구조로 개선
 */

// 지원하는 색상 목록
const SUPPORTED_COLORS = [
  "blue",
  "green",
  "purple",
  "red",
  "yellow",
  "indigo",
  "pink",
  "gray",
  "orange",
  "teal",
  "cyan",
  "lime",
  "emerald",
  "violet",
  "amber",
  "rose",
  "fuchsia",
  "sky",
  "slate",
] as const;

type SupportedColor = (typeof SUPPORTED_COLORS)[number];

// Tailwind의 유효한 색상 농도
const VALID_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
type Shade = (typeof VALID_SHADES)[number];

/**
 * 색상이 지원되는지 확인
 */
function isSupportedColor(color: string): color is SupportedColor {
  return SUPPORTED_COLORS.includes(color as SupportedColor);
}

/**
 * 유효한 shade인지 확인
 */
function isValidShade(shade: number): shade is Shade {
  return VALID_SHADES.includes(shade as Shade);
}

/**
 * 기본 색상 클래스 생성 함수
 * @param prefix - 클래스 prefix (border, bg, text 등)
 * @param color - 색상 이름
 * @param shade - 색상 농도
 * @param defaultColor - 기본 색상
 * @param defaultShade - 기본 농도
 */
function getColorClass(
  prefix: "border" | "bg" | "text",
  color: string,
  shade?: number,
  defaultColor: string = "gray",
  defaultShade: number = 500,
): string {
  // 색상이 지원되지 않으면 기본 색상 사용
  const finalColor = isSupportedColor(color) ? color : defaultColor;

  // shade가 제공되지 않은 경우
  if (shade === undefined) {
    // border의 경우 항상 500 사용
    if (prefix === "border") {
      return `${prefix}-${finalColor}-500`;
    }
    // bg와 text는 기본값 사용
    return `${prefix}-${finalColor}-${defaultShade}`;
  }

  // shade가 유효하지 않으면 기본값 사용
  const finalShade = isValidShade(shade) ? shade : defaultShade;

  return `${prefix}-${finalColor}-${finalShade}`;
}

/**
 * 색상 이름을 Tailwind border 클래스로 변환
 * @param color - 색상 이름 (예: "blue", "green", "purple")
 * @returns Tailwind border 색상 클래스 (예: "border-blue-500")
 */
export function getBorderColorClass(color: string): string {
  return getColorClass("border", color);
}

/**
 * 색상 이름을 Tailwind background 클래스로 변환
 * @param color - 색상 이름
 * @param shade - 색상 농도 (기본값: 100)
 * @returns Tailwind background 색상 클래스
 */
export function getBackgroundColorClass(
  color: string,
  shade: number = 100,
): string {
  return getColorClass("bg", color, shade, "gray", 100);
}

/**
 * 색상 이름을 Tailwind text 클래스로 변환
 * @param color - 색상 이름
 * @param shade - 색상 농도 (기본값: 700)
 * @returns Tailwind text 색상 클래스
 */
export function getTextColorClass(color: string, shade: number = 700): string {
  return getColorClass("text", color, shade, "gray", 700);
}

/**
 * 여러 색상 클래스를 한번에 생성
 * @param color - 색상 이름
 * @param options - 각 유형별 shade 옵션
 * @returns 색상 클래스 객체
 */
export function getColorClasses(
  color: string,
  options?: {
    borderShade?: number;
    bgShade?: number;
    textShade?: number;
  },
): {
  border: string;
  bg: string;
  text: string;
} {
  return {
    border: getBorderColorClass(color),
    bg: getBackgroundColorClass(color, options?.bgShade),
    text: getTextColorClass(color, options?.textShade),
  };
}

/**
 * 그라데이션 클래스 생성
 * @param fromColor - 시작 색상
 * @param toColor - 끝 색상
 * @param direction - 그라데이션 방향
 * @param fromShade - 시작 색상 농도
 * @param toShade - 끝 색상 농도
 */
export function getGradientClass(
  fromColor: string,
  toColor: string,
  direction: "r" | "l" | "t" | "b" | "tr" | "tl" | "br" | "bl" = "r",
  fromShade: number = 400,
  toShade: number = 600,
): string {
  const from = getColorClass("bg", fromColor, fromShade).replace(
    "bg-",
    "from-",
  );
  const to = getColorClass("bg", toColor, toShade).replace("bg-", "to-");
  return `bg-gradient-to-${direction} ${from} ${to}`;
}

// 타입 export
export type { SupportedColor, Shade };
