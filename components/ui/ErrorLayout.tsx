import Link from "next/link";
import type { ReactNode } from "react";

interface ErrorLayoutProps {
  icon?: ReactNode;
  title: string;
  description: string;
  onReset?: () => void;
  resetButtonText?: string;
  showHomeButton?: boolean;
  showProjectsButton?: boolean;
  children?: ReactNode;
}

export default function ErrorLayout({
  icon,
  title,
  description,
  onReset,
  resetButtonText = "다시 시도하기",
  showHomeButton = true,
  showProjectsButton = false,
  children,
}: ErrorLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-violet-50 to-blue-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Icon Section */}
          {icon && (
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {icon}
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-gray-600">{description}</p>
            </div>
          )}

          {/* Default content without icon */}
          {!icon && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-gray-600">{description}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {onReset && (
              <button
                onClick={onReset}
                className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-sky-600 text-white font-medium rounded-lg hover:from-violet-700 hover:to-sky-700 transition-all duration-200 transform hover:scale-105"
              >
                {resetButtonText}
              </button>
            )}

            {showProjectsButton && (
              <Link
                href="/projects"
                className="block w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                프로젝트 목록으로
              </Link>
            )}

            {showHomeButton && (
              <Link
                href="/"
                className="block w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                홈으로 돌아가기
              </Link>
            )}
          </div>

          {/* Additional Content */}
          {children}
        </div>
      </div>
    </div>
  );
}