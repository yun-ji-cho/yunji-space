"use client";

import { useState } from "react";

import ProjectWork from "./ProjectWork";
import { useLazyModal } from "@/hooks/useLazyModal";
import { getBorderColorClass } from "@/utils/colorUtils";
import type { Project, DetailedWork } from "@/types/project";

interface ProjectWorkWithModalProps {
  project: Project;
}

export default function ProjectWorkWithModal({
  project,
}: ProjectWorkWithModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<DetailedWork | null>(null);

  // 모달 지연 로딩 훅 사용
  const {
    Component: ModalComponent,
    isLoading: isModalLoading,
    loadComponent: loadModal,
  } = useLazyModal(() => import("@/components/WorkDetailModal"));

  // 모달 클릭 핸들러
  const handleWorkClick = async (work: DetailedWork) => {
    setSelectedWork(work);
    setIsModalOpen(true);

    // 모달 컴포넌트 지연 로딩
    await loadModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <>
      <ProjectWork
        project={project}
        onWorkClick={handleWorkClick}
        getBorderColorClass={getBorderColorClass}
      />

      {/* Modal */}
      {isModalOpen && ModalComponent && selectedWork && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={closeModal}
          workDetail={selectedWork}
        />
      )}

      {/* Modal Loading State */}
      {isModalLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
          </div>
        </div>
      )}
    </>
  );
}
