import React from "react";
import type { DetailedWork } from "@/types/project";
import { Monitor, Target, ArrowRight, Rocket, NotebookPen } from "lucide-react";
import StyledText from "./ui/StyledText";
import ImageCarousel from "./ui/ImageCarousel";
import { useModalAccessibility } from "@/hooks/useModalAccessibility";

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
  const { modalRef, closeButtonRef, handleBackdropClick } =
    useModalAccessibility({
      isOpen,
      onClose,
    });

  if (!isOpen || !workDetail) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
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
            {/* 스크린샷 */}
            {workDetail.screenshots && workDetail.screenshots.length > 0 && (
              <ImageCarousel images={workDetail.screenshots} title="스크린샷" />
            )}

            {/* 작업 개요 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <NotebookPen className="mr-2 w-5 h-5 text-purple-600" />
                작업 개요
              </h3>
              <StyledText
                text={workDetail.description}
                className="text-gray-700"
                animate={false}
              />
            </div>

            {/* 핵심 성과 */}
            {workDetail.keyResults && workDetail.keyResults.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="mr-2 w-5 h-5 text-green-600" />
                  핵심 성과
                </h3>
                <ul className="space-y-2">
                  {workDetail.keyResults.map((result, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <StyledText
                        text={result}
                        className="text-gray-700"
                        animate={false}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 도전 과제 및 해결 방안 */}
            {workDetail.problemSolving &&
              workDetail.problemSolving.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Rocket className="mr-2 w-5 h-5 text-red-600" />
                    도전 과제 및 해결 방안
                  </h3>
                  <div className="space-y-4">
                    {workDetail.problemSolving.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          {/* 도전 과제 */}
                          <div className="flex-1">
                            <div className="mb-2">
                              <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
                                Challenge
                              </span>
                            </div>
                            <StyledText
                              text={item.challenge}
                              className="text-gray-700"
                              animate={false}
                            />
                          </div>

                          {/* 화살표 */}
                          <div className="flex items-center justify-center px-2 py-8">
                            <ArrowRight className="w-6 h-6 text-gray-400" />
                          </div>

                          {/* 해결 방안 */}
                          <div className="flex-1">
                            <div className="mb-2">
                              <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                                Solution
                              </span>
                            </div>
                            <StyledText
                              text={item.solution}
                              className="text-gray-700"
                              animate={false}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                      <StyledText
                        text={snippet.description}
                        className="text-sm text-gray-600 mb-2"
                        animate={false}
                      />
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
