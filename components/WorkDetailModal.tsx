import React from "react";

interface WorkDetail {
  title: string;
  description: string;
  details: string;
  challenges?: string[];
  solutions?: string[];
  codeSnippets?: {
    title: string;
    code: string;
    language: string;
  }[];
}

interface WorkDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  workDetail: WorkDetail | null;
}

export default function WorkDetailModal({
  isOpen,
  onClose,
  workDetail,
}: WorkDetailModalProps) {
  if (!isOpen || !workDetail) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {workDetail.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
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

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📋 작업 개요
            </h3>
            <p className="text-gray-700">{workDetail.description}</p>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🔍 상세 내용
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 whitespace-pre-line">
                {workDetail.details}
              </p>
            </div>
          </div>

          {/* Challenges */}
          {workDetail.challenges && workDetail.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                💡 기술적 도전
              </h3>
              <ul className="space-y-2">
                {workDetail.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {workDetail.solutions && workDetail.solutions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ✅ 해결 방법
              </h3>
              <ul className="space-y-2">
                {workDetail.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Snippets */}
          {workDetail.codeSnippets && workDetail.codeSnippets.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                💻 주요 코드
              </h3>
              <div className="space-y-4">
                {workDetail.codeSnippets.map((snippet, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">
                      {snippet.title}
                    </h4>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
