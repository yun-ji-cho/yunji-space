import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useMobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 페이지 변경 시 메뉴 자동 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return {
    toggleMobileMenu,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    closeMobileMenu,
  };
}
