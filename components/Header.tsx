"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";

import { useScroll } from "@/hooks/useScroll";
import useMobileMenu from "@/hooks/useMobileMenu";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { itemVariants, revealVariants } from "@/lib/animation";
import { menuItems } from "@/data/menus";
import { ACCESSIBILITY, ANIMATION, COLORS } from "@/constants";
import {
  getHeaderBackgroundStyle,
  logoGradientStyle,
  skipNavigationStyle,
  getNavLinkClassName,
  getHamburgerIconColor,
} from "@/utils/headerStyles";
import Path from "@/components/ui/Path";

interface HeaderProps {
  enableAnimation?: boolean;
}

export default function Header({ enableAnimation = false }: HeaderProps = {}) {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();

  const {
    toggleMobileMenu,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    closeMobileMenu,
  } = useMobileMenu();
  const { isScrolled } = useScroll({
    onResize: (width) => {
      if (width >= ANIMATION.BREAKPOINTS.MD && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
  });

  return (
    <>
      {/* Skip Navigation Link - 포커스 시에만 보임 */}
      <a
        href={ACCESSIBILITY.SKIP_NAVIGATION.HREF}
        className="fixed top-0 left-4 transform -translate-y-full focus:translate-y-4 focus:z-[100] 
                   text-white px-6 py-3 rounded-lg font-medium focus:shadow-lg
                   focus:outline-none focus:ring-4 
                   transition-all duration-200"
        style={skipNavigationStyle}
      >
        {ACCESSIBILITY.SKIP_NAVIGATION.TEXT}
      </a>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        initial={enableAnimation ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: enableAnimation ? ANIMATION.HOME_SEQUENCE.HEADER.DURATION : 0,
          ease: "easeOut",
          delay: enableAnimation ? ANIMATION.HOME_SEQUENCE.HEADER.DELAY : 0,
        }}
        style={getHeaderBackgroundStyle({ isScrolled })}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
              style={logoGradientStyle.default}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = logoGradientStyle.hover.backgroundImage;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = logoGradientStyle.default.backgroundImage;
              }}
            >
              Yunji Space
            </Link>
            <nav className="hidden md:flex md:items-center md:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getNavLinkClassName(isScrolled)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden z-50 p-2 rounded-full"
              aria-label={
                isMobileMenuOpen
                  ? ACCESSIBILITY.ARIA_LABELS.MOBILE_MENU_CLOSE
                  : ACCESSIBILITY.ARIA_LABELS.MOBILE_MENU_OPEN
              }
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                {/* SVG 아이콘 Path 색상 변경 */}
                <Path
                  stroke={getHamburgerIconColor(isScrolled)}
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                />
                <Path
                  stroke={getHamburgerIconColor(isScrolled)}
                  d="M 2 9.423 L 20 9.423"
                  variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                  transition={{ duration: 0.1 }}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                />
                <Path
                  stroke={getHamburgerIconColor(isScrolled)}
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        // 👇 2. nav 컴포넌트에 새로운 variants를 적용하고, 불필요한 className 제거
        <motion.nav
          initial="closed"
          animate="open"
          exit="closed"
          variants={revealVariants}
          className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40"
          style={{ backgroundColor: COLORS.BACKGROUND.MOBILE_MENU }}
          aria-hidden={!isMobileMenuOpen}
        >
          <motion.ul
            variants={{
              open: {
                transition: {
                  staggerChildren: ANIMATION.MOBILE_MENU.STAGGER.CHILDREN_DELAY,
                  delayChildren: ANIMATION.MOBILE_MENU.STAGGER.DELAY_CHILDREN,
                },
              },
              closed: {
                transition: {
                  staggerChildren: ANIMATION.MOBILE_MENU.STAGGER.CLOSED_DELAY,
                  staggerDirection: -1,
                },
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col items-center justify-center h-full"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.li
                  key={item.href}
                  variants={itemVariants}
                  className="mb-8"
                >
                  <Link
                    href={item.href}
                    className={`text-3xl font-bold transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent"
                        : "text-gray-800 hover:bg-gradient-to-r hover:from-violet-500 hover:to-sky-500 hover:bg-clip-text hover:text-transparent"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.nav>
      )}
    </>
  );
}
