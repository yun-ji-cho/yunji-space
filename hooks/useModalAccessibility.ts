import { useEffect, useRef } from "react";

interface UseModalAccessibilityOptions {
  isOpen: boolean;
  onClose: () => void;
  focusOnOpen?: boolean;
  trapFocus?: boolean;
  closeOnEscape?: boolean;
  preventScroll?: boolean;
}

/**
 * 모달 접근성을 위한 커스텀 훅
 * - 배경 스크롤 방지
 * - ESC 키로 모달 닫기
 * - 포커스 트랩 (Tab 키 순환)
 * - 초기 포커스 관리
 */
export function useModalAccessibility({
  isOpen,
  onClose,
  focusOnOpen = true,
  trapFocus = true,
  closeOnEscape = true,
  preventScroll = true,
}: UseModalAccessibilityOptions) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // 배경 스크롤 방지 및 초기 포커스 관리
  useEffect(() => {
    if (isOpen) {
      if (preventScroll) {
        // 현재 스크롤 위치 저장
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
      }

      // 모달이 열리면 닫기 버튼에 포커스
      if (focusOnOpen) {
        // setTimeout으로 다음 렌더링 사이클에서 포커스
        setTimeout(() => {
          closeButtonRef.current?.focus();
        }, 0);
      }
    } else {
      if (preventScroll) {
        // 스크롤 위치 복원
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // 컴포넌트가 언마운트될 때 스타일 복원
    return () => {
      if (preventScroll) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
      }
    };
  }, [isOpen, focusOnOpen, preventScroll]);

  // ESC 키와 포커스 트랩 처리
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 키로 모달 닫기
      if (closeOnEscape && e.key === "Escape") {
        onClose();
        return;
      }

      // Tab 키 포커스 트랩
      if (trapFocus && e.key === "Tab") {
        const focusableElements =
          modalRef.current?.querySelectorAll<HTMLElement>(
            "button:not([disabled]), " +
              "[href]:not([disabled]), " +
              "input:not([disabled]), " +
              "select:not([disabled]), " +
              "textarea:not([disabled]), " +
              '[tabindex]:not([tabindex="-1"]):not([disabled])',
          );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Shift + Tab: 첫 번째 요소에서 마지막으로
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // Tab: 마지막 요소에서 첫 번째로
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, closeOnEscape, trapFocus]);

  // 배경 클릭으로 모달 닫기 헬퍼 함수
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return {
    modalRef,
    closeButtonRef,
    handleBackdropClick,
  };
}
