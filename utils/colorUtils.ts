/**
 * 색상 이름을 Tailwind border 클래스로 변환하는 함수
 * @param color - 색상 이름 (예: "blue", "green", "purple")
 * @returns Tailwind border 색상 클래스 (예: "border-blue-500")
 */
export function getBorderColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    // 기본 색상
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
    yellow: "border-yellow-500",
    indigo: "border-indigo-500",
    pink: "border-pink-500",
    gray: "border-gray-500",
    orange: "border-orange-500",
    teal: "border-teal-500",
    cyan: "border-cyan-500",
    lime: "border-lime-500",
    
    // 확장 색상
    emerald: "border-emerald-500",
    violet: "border-violet-500",
    amber: "border-amber-500",
    rose: "border-rose-500",
    fuchsia: "border-fuchsia-500",
    sky: "border-sky-500",
    slate: "border-slate-500",
  };
  
  return colorMap[color] || "border-gray-500";
}

/**
 * 색상 이름을 Tailwind background 클래스로 변환하는 함수
 * @param color - 색상 이름
 * @param shade - 색상 농도 (기본값: 100)
 * @returns Tailwind background 색상 클래스
 */
export function getBackgroundColorClass(color: string, shade: number = 100): string {
  const validShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  if (!validShades.includes(shade)) {
    shade = 100;
  }
  
  const colorMap: Record<string, string> = {
    blue: `bg-blue-${shade}`,
    green: `bg-green-${shade}`,
    purple: `bg-purple-${shade}`,
    violet: `bg-violet-${shade}`,
    sky: `bg-sky-${shade}`,
    emerald: `bg-emerald-${shade}`,
    // 필요한 색상 추가 가능
  };
  
  return colorMap[color] || `bg-gray-${shade}`;
}

/**
 * 색상 이름을 Tailwind text 클래스로 변환하는 함수
 * @param color - 색상 이름
 * @param shade - 색상 농도 (기본값: 700)
 * @returns Tailwind text 색상 클래스
 */
export function getTextColorClass(color: string, shade: number = 700): string {
  const validShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  if (!validShades.includes(shade)) {
    shade = 700;
  }
  
  const colorMap: Record<string, string> = {
    blue: `text-blue-${shade}`,
    green: `text-green-${shade}`,
    purple: `text-purple-${shade}`,
    violet: `text-violet-${shade}`,
    sky: `text-sky-${shade}`,
    emerald: `text-emerald-${shade}`,
    // 필요한 색상 추가 가능
  };
  
  return colorMap[color] || `text-gray-${shade}`;
}