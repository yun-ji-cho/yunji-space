import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import Header from "@/components/Header";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectWorkWithModal from "@/components/project/ProjectWorkWithModal";
import ProjectAchievements from "@/components/project/ProjectAchievements";
import { getProjects } from "@/lib/projects";
import type { Project } from "@/types/project";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const projects = getProjects();

  return projects
    .filter((project) => project.category === "main")
    .map((project) => ({
      id: project.id,
    }));
}

// 동적 메타데이터 생성
export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const projects = getProjects();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | Yunji Space",
    };
  }

  return {
    title: `${project.title} | Yunji Space`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Yunji Space`,
      description: project.description,
      type: "website",
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const projects = getProjects();
  const project = projects.find((p) => p.id === params.id);

  if (!project || project.category !== "main") {
    notFound();
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-violet-50 to-blue-100 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
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

          <ProjectWorkWithModal project={project} />

          <ProjectAchievements project={project} />
        </div>
      </div>
    </>
  );
}
