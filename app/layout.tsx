import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yunji Space - 프론트엔드 개발자",
  description:
    "사용자 경험을 중시하는 프론트엔드 개발자 조윤지의 포트폴리오입니다. 직관적이고 아름다운 웹 인터페이스를 만드는 것을 좋아합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
