import type { Metadata } from "next";

import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Yunji Space - 프론트엔드 개발자 포트폴리오",
  description:
    "사용자의 시선이 머무는 곳에 직관적인 경험을 설계하고, 견고한 코드로 비즈니스 가치를 더하는 프론트엔드 개발자 조윤지입니다.",
  openGraph: {
    title: "Yunji Space - 프론트엔드 개발자",
    description: "React, Next.js, TypeScript를 활용한 웹 애플리케이션 개발",
    type: "website",
    locale: "ko_KR",
  },
  keywords: [
    "프론트엔드",
    "개발자",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
  ],
};

export default function Home() {
  return (
    <>
      <Header enableAnimation={true} />

      {/* Background Gradient */}
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern"></div>

        {/* Main Content */}
        <main
          id="main-content"
          className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <HomeContent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
