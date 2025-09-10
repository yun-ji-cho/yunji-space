'use client';

import { useEffect } from 'react';

import ErrorLayout from '@/components/ui/ErrorLayout';

export default function ProjectDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Project detail error:', error);
  }, [error]);

  return (
    <ErrorLayout
      icon={<span className="text-4xl">🔍</span>}
      title="프로젝트를 찾을 수 없습니다"
      description="요청하신 프로젝트 정보를 불러올 수 없습니다. 잠시 후 다시 시도해주세요."
      onReset={reset}
      resetButtonText="다시 시도하기"
      showHomeButton={true}
      showProjectsButton={true}
    />
  );
}