import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "Yunji Space - 프론트엔드 개발자",
  description:
    "사용자 경험을 중시하는 프론트엔드 개발자 조윤지의 포트폴리오입니다. 직관적이고 깔끔한 웹 인터페이스를 만드는 것을 좋아합니다.",
  keywords: [
    "프론트엔드 개발자",
    "React",
    "Next.js",
    "TypeScript",
    "웹 개발",
    "포트폴리오",
  ],
  // Open Graph 메타태그 (카카오톡, 페이스북 등에서 링크 공유 시 사용)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Yunji Space",
    title: "Yunji Space - 프론트엔드 개발자",
    description:
      "사용자 경험을 중시하는 프론트엔드 개발자 조윤지의 포트폴리오입니다. 직관적이고 깔끔한 웹 인터페이스를 만드는 것을 좋아합니다.",
    // 필요시 이미지 추가 가능
    // images: [
    //   {
    //     url: "/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Yunji Space 포트폴리오",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
