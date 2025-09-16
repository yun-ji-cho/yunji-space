import React from "react";
import { cn } from "../../lib/utils";

interface StyledTextProps {
  text: string;
  className?: string;
  animate?: boolean;
}

export default function StyledText({
  text,
  className = "",
  animate = false,
}: StyledTextProps) {
  // 줄바꿈 처리 함수
  const processLineBreaks = (text: string) => {
    const parts: Array<{
      text: string;
      isBold?: boolean;
      color?: string;
      isHighlighted?: boolean;
      className?: string;
      isLineBreak?: boolean;
    }> = [];

    const lines = text.split("\n");
    lines.forEach((line, index) => {
      if (line) {
        parts.push({ text: line });
      }
      // 마지막 줄이 아니면 줄바꿈 추가
      if (index < lines.length - 1) {
        parts.push({ text: "\n", isLineBreak: true });
      }
    });

    return parts;
  };

  // 고급 패턴 매칭으로 텍스트 스타일링
  const processText = (text: string) => {
    const parts: Array<{
      text: string;
      isBold?: boolean;
      color?: string;
      isHighlighted?: boolean;
      className?: string;
      isLineBreak?: boolean;
    }> = [];

    // 마크다운 스타일 패턴들 (사용자가 직접 제어 가능)
    const patterns = [
      // **볼드** - 마크다운 스타일 (파란색) - 더 긴 패턴을 먼저 처리
      {
        regex: /\*\*([^*]+)\*\*/g,
        isBold: true,
        color: "text-blue-600",
        className: "font-bold",
      },
      // __굵은글씨__ - 검정색 굵은 글씨
      {
        regex: /__([^_]+)__/g,
        isBold: true,
        color: "text-gray-900",
        className: "font-bold",
      },
      // *이탤릭* - 마크다운 스타일 (단일 별표는 제거)
      // {
      //   regex: /\*([^*]+)\*/g,
      //   isBold: true,
      //   color: "text-purple-600",
      // },
      // `코드` - 마크다운 스타일
      {
        regex: /`([^`]+)`/g,
        isBold: true,
        color: "text-green-600",
        isHighlighted: true,
        className: "bg-green-100 px-1 py-0.5 rounded",
      },
      // ==하이라이트== - 커스텀 하이라이트
      {
        regex: /==([^=]+)==/g,
        isBold: true,
        color: "text-yellow-700",
        className: "bg-yellow-200 px-1 py-0.5 rounded",
      },
      // !!중요!! - 중요 표시
      {
        regex: /!!([^!]+)!!/g,
        isBold: true,
        color: "text-red-600",
        className: "bg-red-100 px-1 py-0.5 rounded border-l-2 border-red-500",
      },
      // ##제목## - 제목 스타일
      {
        regex: /##([^#]+)##/g,
        isBold: true,
        color: "text-indigo-600",
        className: "text-lg font-bold bg-indigo-50 px-2 py-1 rounded",
      },
      // 숫자 + 단위 (33개, 2주, 1개월 등) - 자동 감지
      {
        regex: /(\d+[개주월명%])/g,
        isBold: true,
        color: "text-orange-600",
        className: "text-time",
      },
    ];

    let processedText = text;
    let allMatches: Array<{
      start: number;
      end: number;
      text: string;
      isBold?: boolean;
      color?: string;
      isHighlighted?: boolean;
      className?: string;
    }> = [];

    // 모든 패턴의 매치를 수집
    patterns.forEach((pattern) => {
      let match;
      while ((match = pattern.regex.exec(text)) !== null) {
        allMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[1] || match[0],
          isBold: pattern.isBold,
          color: pattern.color,
          isHighlighted: pattern.isHighlighted,
          className: pattern.className,
        });
      }
    });

    // 시작 위치로 정렬
    allMatches.sort((a, b) => a.start - b.start);

    // 겹치는 매치 제거 (더 긴 매치 우선)
    const filteredMatches = allMatches.filter((match, index) => {
      return !allMatches.some(
        (otherMatch, otherIndex) =>
          otherIndex !== index &&
          otherMatch.start <= match.start &&
          otherMatch.end >= match.end,
      );
    });

    // 결과 생성
    let lastIndex = 0;
    filteredMatches.forEach((match) => {
      // 매치 이전의 일반 텍스트 추가 (줄바꿈 처리 포함)
      if (match.start > lastIndex) {
        const beforeText = text.slice(lastIndex, match.start);
        parts.push(...processLineBreaks(beforeText));
      }

      // 스타일링된 텍스트 추가
      parts.push({
        text: match.text,
        isBold: match.isBold,
        color: match.color,
        isHighlighted: match.isHighlighted,
        className: match.className,
      });

      lastIndex = match.end;
    });

    // 마지막 일반 텍스트 추가 (줄바꿈 처리 포함)
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      parts.push(...processLineBreaks(remainingText));
    }

    return parts.length > 0 ? parts : [{ text }];
  };

  const textParts = processText(text);

  return (
    <span className={className}>
      {textParts.map((part, index) => {
        const baseClasses = "transition-all duration-300";
        const boldClasses = part.isBold ? "font-bold" : "";
        const colorClasses = part.color || "";
        const highlightClasses = part.isHighlighted
          ? "bg-yellow-100 dark:bg-yellow-900/30 px-1 py-0.5 rounded"
          : "";
        const animateClasses = animate && part.isBold ? "hover:scale-105" : "";
        const customClasses = part.className || "";

        // 줄바꿈 처리
        if (part.isLineBreak) {
          return <br key={index} />;
        }

        return (
          <span
            key={index}
            className={cn(
              baseClasses,
              boldClasses,
              colorClasses,
              highlightClasses,
              animateClasses,
              customClasses,
            )}
          >
            {part.text}
          </span>
        );
      })}
    </span>
  );
}
