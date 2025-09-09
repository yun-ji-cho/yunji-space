import { useEffect, useState } from "react";
import { ANIMATION } from "@/constants";

interface UseScrollOptions {
  threshold?: number;
  onResize?: (width: number) => void;
}

export function useScroll(options: UseScrollOptions = {}) {
  const { threshold = ANIMATION.SCROLL_THRESHOLD, onResize } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > threshold);
    };

    const handleResize = () => {
      // 화면 크기가 데스크톱 크기(md 이상)로 변경되면 모바일 메뉴 닫기
      const width = window.innerWidth;
      onResize?.(width);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold, onResize]);

  return { isScrolled };
}
