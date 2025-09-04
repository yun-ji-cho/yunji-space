import React, { useEffect, useRef } from "react";
import { DetailedWork } from "@/types/project";
import {
  FileText,
  File,
  AlertTriangle,
  Check,
  Monitor,
  Lightbulb,
} from "lucide-react";

interface WorkDetailModalProps {
  isOpen: boolean;
  workDetail: DetailedWork | null;
  onClose: () => void;
}

export default function WorkDetailModal({
  isOpen,
  onClose,
  workDetail,
}: WorkDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // 모달이 열렸을 때 배경 스크롤 방지 및 포커스 관리
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // 모달이 열리면 닫기 버튼에 포커스
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }

    // 컴포넌트가 언마운트될 때 스크롤 복원
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ESC 키와 포커스 트랩 처리
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 키로 모달 닫기
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Tab 키 포커스 트랩
      if (e.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

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
  }, [isOpen, onClose]);

  if (!isOpen || !workDetail) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        // 배경 클릭 시 모달 닫기
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white rounded-t-xl">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
            {workDetail.title}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="모달 닫기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* 작업 개요 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="mr-2 w-5 h-5 text-blue-600" />
                작업 개요
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                {workDetail.description}
              </p>
            </div>

            {/* 상세 내용 */}
            {workDetail.details && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <File className="mr-2 w-5 h-5 text-purple-600" />
                  상세 내용
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-line">
                    {workDetail.details}
                  </p>
                </div>
              </div>
            )}

            {/* 도전 과제 */}
            {workDetail.challenges && workDetail.challenges.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="mr-2 w-5 h-5 text-orange-600" />
                  도전 과제
                </h3>
                <ul className="space-y-2">
                  {workDetail.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 해결 방안 */}
            {workDetail.solutions && workDetail.solutions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Lightbulb className="mr-2 w-5 h-5 text-yellow-600" />
                  해결 방안
                </h3>
                <ul className="space-y-2">
                  {workDetail.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 코드 스니펫 */}
            {workDetail.codeSnippets && workDetail.codeSnippets.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Monitor className="mr-2 w-5 h-5 text-indigo-600" />
                  코드 예시
                </h3>
                {workDetail.codeSnippets.map((snippet, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      {snippet.title}
                    </h4>
                    {snippet.description && (
                      <p className="text-sm text-gray-600 mb-2">
                        {snippet.description}
                      </p>
                    )}
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
