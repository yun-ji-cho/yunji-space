"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // 실제 테마 전환 로직은 나중에 구현
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Yunji Space</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-700" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
