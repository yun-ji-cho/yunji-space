"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { ComponentType } from "react";
import Loading from "@/components/ui/Loading";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectWork from "@/components/project/ProjectWork";
import ProjectAchievements from "@/components/project/ProjectAchievements";
import { getProjects } from "@/lib/projects";
import { Project, DetailedWork } from "@/types/project";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<DetailedWork | null>(null);
  const [ModalComponent, setModalComponent] = useState<ComponentType<any> | null>(null);
  const [isModalLoading, setIsModalLoading] = useState(false);

  // 색상 매핑 함수
  const getBorderColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
      red: "border-red-500",
      yellow: "border-yellow-500",
      indigo: "border-indigo-500",
      pink: "border-pink-500",
      gray: "border-gray-500",
      orange: "border-orange-500",
      teal: "border-teal-500",
      cyan: "border-cyan-500",
      lime: "border-lime-500",
      // 헤이데어 프로젝트에서 사용하는 추가 색상들
      emerald: "border-emerald-500",
      violet: "border-violet-500", 
      amber: "border-amber-500",
      rose: "border-rose-500",
      fuchsia: "border-fuchsia-500",
    };
    return colorMap[color] || "border-gray-500";
  };

  useEffect(() => {
    const loadProject = () => {
      try {
        const projects = getProjects();
        const foundProject = projects.find((p) => p.id === params.id);

        if (!foundProject || foundProject.category !== "main") {
          notFound();
        }

        setProject(foundProject);
      } catch (error) {
        console.error("프로젝트 로딩 중 오류 발생:", error);
        // Error Boundary가 처리할 수 있도록 에러를 다시 throw
        throw error;
      }
    };

    loadProject();
  }, [params.id]);

  const handleWorkClick = async (work: DetailedWork) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    
    // 모달이 아직 로드되지 않았다면 동적으로 로드
    if (!ModalComponent) {
      setIsModalLoading(true);
      try {
        const { default: Modal } = await import("@/components/WorkDetailModal");
        setModalComponent(() => Modal);
      } catch (error) {
        console.error("모달 로딩 중 오류:", error);
      } finally {
        setIsModalLoading(false);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pt-24">
          <Loading message="프로젝트를 불러오는 중..." />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              프로젝트 목록으로 돌아가기
            </Link>
          </div>

          {/* Project Components */}
          <ProjectHeader project={project} />
          
          <ProjectGallery project={project} />
          
          <ProjectWork 
            project={project}
            onWorkClick={handleWorkClick}
            getBorderColorClass={getBorderColorClass}
          />

          <ProjectAchievements project={project} />
        </div>
      </div>

      {/* Work Detail Modal */}
      {isModalOpen && (
        <>
          {isModalLoading ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">모달을 불러오는 중...</p>
                </div>
              </div>
            </div>
          ) : (
            ModalComponent && (
              <ModalComponent
                isOpen={isModalOpen}
                onClose={closeModal}
                workDetail={selectedWork}
              />
            )
          )}
        </>
      )}
    </>
  );
}