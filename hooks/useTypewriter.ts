import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseTime?: number;
}

export function useTypewriter(
  texts: string[],
  options: UseTypewriterOptions = {}
) {
  const { speed = 100, delay = 1000, loop = false, pauseTime = 2000 } = options;

  const [currentText, setCurrentText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // 초기 지연 시간 후 타이핑 시작
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const currentFullText = texts[0]; // 첫 번째 텍스트만 사용

    const timer = setTimeout(() => {
      // 타이핑 중
      if (currentText.length < currentFullText.length) {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }
      // 타이핑 완료되면 그대로 멈춤 (삭제하지 않음)
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, texts, speed, hasStarted]);

  return {
    text: hasStarted ? currentText : "",
    isTyping: hasStarted && currentText.length < texts[0].length,
  };
}
