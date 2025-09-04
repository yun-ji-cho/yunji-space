"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 네비게이션 메뉴 아이템 배열로 관리
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Skip Navigation Link - 포커스 시에만 보임 */}
      <a
        href="#main-content"
        className="fixed top-0 left-4 transform -translate-y-full focus:translate-y-4 focus:z-[100] 
                   bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg
                   focus:outline-none focus:ring-4 focus:ring-purple-300 
                   transition-all duration-200"
      >
        메인 콘텐츠로 건너뛰기
      </a>
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Yunji Space
          </Link>
          <nav
            className={`${
              isMobileMenuOpen
                ? "absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 md:static md:bg-transparent md:border-0"
                : "hidden md:flex"
            } md:relative md:top-0 md:flex md:items-center`}
            role="navigation"
            aria-label="주 메뉴"
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 px-4 py-4 md:p-0">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 md:py-0 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}
