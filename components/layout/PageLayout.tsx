import { ReactNode } from "react";
import Header from "@/components/Header";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main 
        id="main-content" 
        className={`min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pt-16 ${className}`}
      >
        {children}
      </main>
    </>
  );
}