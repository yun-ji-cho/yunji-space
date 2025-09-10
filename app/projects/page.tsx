import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import ProjectSection from "@/components/ProjectSection";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Yunji Space",
  description:
    "프론트엔드 개발자 조윤지의 프로젝트 포트폴리오입니다. React, Next.js, TypeScript를 활용한 다양한 웹 애플리케이션 프로젝트를 확인해보세요.",
  openGraph: {
    title: "Projects | Yunji Space",
    description: "프론트엔드 개발자 조윤지의 프로젝트 포트폴리오",
    type: "website",
  },
};

export default function Projects() {
  const mainProjects = getProjectsByCategory("main");
  const sideProjects = getProjectsByCategory("side");
  const otherProjects = getProjectsByCategory("other");

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Projects */}
        <ProjectSection
          title="Main Projects"
          subtitle="제가 주도적으로 아키텍처 설계부터 컴포넌트 개발까지 책임졌던 프로젝트들입니다. 하나의 프로덕트를 온전히 구축하며 얻은 값진 경험과 기술적인 선택의 이유를 기록했습니다."
          projects={mainProjects}
          isCompact={false}
          gridCols="md:grid-cols-2"
        />

        {/* Side Projects */}
        {sideProjects.length > 0 && (
          <ProjectSection
            title="Side Projects"
            subtitle="퍼블리셔에서 프론트엔드 개발자로의 전환을 이끌어준 프로젝트입니다. 새로운 기술에 대한 학습과 동료와의 협업 경험을 기록했습니다."
            projects={sideProjects}
            isCompact={true}
            gridCols="md:grid-cols-2 lg:grid-cols-3"
          />
        )}

        {/* Other Experience */}
        {otherProjects.length > 0 && (
          <ProjectSection
            title="Additional Experience"
            subtitle="견고한 마크업 구조, 웹 접근성, 반응형 UI에 대한 깊은 이해는 저를 더 나은 프론트엔드 개발자로 만들어주는 단단한 기반입니다."
            projects={otherProjects}
            isCompact={true}
            gridCols="md:grid-cols-2 lg:grid-cols-3"
          />
        )}
      </div>
    </PageLayout>
  );
}
