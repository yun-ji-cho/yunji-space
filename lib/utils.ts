// 간단한 클래스명 조합 유틸리티 (패키지 설치 없이)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
