"use client";

import { useEffect } from "react";
import { Folder } from "lucide-react";

import ErrorLayout from "@/components/ui/ErrorLayout";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Project loading error:", error);
  }, [error]);

  return (
    <ErrorLayout
      icon={<Folder className="text-orange-600" size={48} />}
      title="프로젝트를 불러올 수 없습니다"
      description="프로젝트 목록을 가져오는 중 문제가 발생했습니다."
      onReset={reset}
      resetButtonText="다시 불러오기"
      showHomeButton={true}
    />
  );
}