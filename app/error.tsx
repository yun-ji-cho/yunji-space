'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

import ErrorLayout from '@/components/ui/ErrorLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 (프로덕션에서는 에러 리포팅 서비스로 전송)
    console.error('Application error:', error);
  }, [error]);

  return (
    <ErrorLayout
      icon={<AlertTriangle className="text-red-600" size={48} />}
      title="오류가 발생했습니다"
      description="예상치 못한 문제가 발생했습니다. 불편을 드려 죄송합니다."
      onReset={reset}
      showHomeButton={true}
    >
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
            개발자용 에러 정보
          </summary>
          <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-auto max-h-40">
            {error.message}
            {error.stack}
          </pre>
        </details>
      )}
    </ErrorLayout>
  );
}