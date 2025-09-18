/**
 * ProjectCard 스타일 유틸리티
 */

interface StyleOptions {
  isCompact: boolean;
  category: "main" | "side" | "other";
}

export const getCardClasses = ({
  isCompact,
  category,
}: StyleOptions): string => {
  const base = "bg-white/80 backdrop-blur-sm transition-shadow";
  const size = isCompact
    ? "rounded-lg p-4 shadow-md"
    : "rounded-xl p-6 shadow-lg";
  const hover =
    category === "main"
      ? isCompact
        ? "hover:shadow-lg"
        : "hover:shadow-xl"
      : "";
  const layout = category === "other" ? "flex flex-col" : "";

  return `${base} ${size} ${hover} ${layout}`.trim();
};

export const getTitleClasses = (isCompact: boolean): string => {
  const base = "font-semibold text-gray-900 mb-2";
  const size = isCompact ? "text-lg" : "text-xl";

  return `${base} ${size}`;
};

export const getDescriptionClasses = (isCompact: boolean): string => {
  const base = "text-gray-600";
  const spacing = isCompact ? "mb-3 text-sm" : "mb-4";

  return `${base} ${spacing}`;
};
