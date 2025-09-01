"use client";

import Header from "@/components/Header";
import { fetchProjects } from "@/lib/fetchProjects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import WorkDetailModal from "@/components/WorkDetailModal";
import { Project } from "@/types/project";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  // 색상 매핑 함수
  const getBorderColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
      orange: "border-orange-500",
      red: "border-red-500",
      indigo: "border-indigo-500",
      emerald: "border-emerald-500",
      cyan: "border-cyan-500",
      violet: "border-violet-500",
      amber: "border-amber-500",
      rose: "border-rose-500",
      teal: "border-teal-500",
      fuchsia: "border-fuchsia-500",
      lime: "border-lime-500",
    };
    return colorMap[color] || "border-gray-500";
  };

  useEffect(() => {
    const loadProject = async () => {
      const projects = await fetchProjects();
      const foundProject = projects.find((p) => p.id === params.id);

      if (!foundProject || foundProject.category !== "main") {
        notFound();
      }

      setProject(foundProject);
    };

    loadProject();
  }, [params.id]);

  const handleWorkClick = (work: any) => {
    setSelectedWork(work);
    setIsModalOpen(true);
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
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading...</p>
            </div>
          </div>
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
            <a
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
            </a>
          </div>

          {/* Project Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-6">
              <div
                className={`w-20 h-20 ${project.gradient} rounded-lg flex items-center justify-center mr-6 mb-4 lg:mb-0`}
              >
                <span className="text-3xl">{project.icon}</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-600 mb-2">{project.role}</p>
                <p className="text-gray-700 text-lg mb-4">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  {project.projectDuration && (
                    <div className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      <span>{project.projectDuration}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center">
                      <span className="mr-1">👥</span>
                      <span>{project.teamSize}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🔗{" "}
                  {project.category === "side"
                    ? "프로젝트 소개"
                    : "사이트 보기"}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  📁 GitHub
                </a>
              )}
            </div>
          </div>

          {/* Project Screenshot */}
          {project.imagePath && (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                프로젝트 미리보기
              </h2>
              <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Introduction + Detailed Work Section - Level 2+ */}
          {project.detailLevel && project.detailLevel >= 2 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">📋</span>
                담당 업무 상세
              </h2>
              {project.introduction && (
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    프로젝트 리더로서의 역할과 문제 해결 과정
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    {project.introduction}
                  </p>
                </div>
              )}
              <div className="grid gap-4">
                {project.detailedWork ? (
                  project.detailedWork.map((work, index) => (
                    <div
                      key={index}
                      className={`border-l-4 ${getBorderColorClass(
                        work.color
                      )} pl-4 p-4 rounded-r-lg hover:bg-gray-50 cursor-pointer transition-colors`}
                      onClick={() => handleWorkClick(work)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">
                            {work.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {work.description}
                          </p>
                        </div>
                        <div className="text-gray-400 hover:text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Fallback for projects without detailed work data
                  <>
                    <div className="border-l-4 border-blue-500 pl-4 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        🛠️ 프로젝트 셋팅 & 공통 컴포넌트
                      </h3>
                      <p className="text-gray-600 text-sm">
                        프로젝트 초기 설정 및 재사용 가능한 컴포넌트 설계 및
                        구현
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        🔐 인증 시스템
                      </h3>
                      <p className="text-gray-600 text-sm">
                        로그인, 회원가입, 토큰 기반 인증 처리 및 보안 구현
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        📊 리포트 & 대시보드
                      </h3>
                      <p className="text-gray-600 text-sm">
                        데이터 시각화 및 사용자 친화적인 대시보드 구현
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Achievements and Learnings */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🏆</span>
                  주요 성과
                </h2>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings - Level 2+ */}
            {project.learnings &&
              project.learnings.length > 0 &&
              project.detailLevel &&
              project.detailLevel >= 2 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">📚</span>
                    배운 점
                  </h2>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">💡</span>
                        <span className="text-gray-700">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Work Detail Modal */}
      <WorkDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        workDetail={selectedWork}
      />
    </>
  );
}
