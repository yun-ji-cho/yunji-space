"use client";

import Link from "next/link";
import { Mail, ExternalLink, Github } from "lucide-react";
import * as motion from "motion/react-client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { ANIMATION } from "@/constants";

export default function HomeContent() {
  const isDesktop = useIsDesktop();

  const { text: typewriterText } = useTypewriter(["안녕하세요, 조윤지입니다"], {
    speed: 90,
    delay: 1000, // PC에서는 프로필 이미지 완료 후 시작
    loop: false,
    pauseTime: 0,
  });

  return (
    <>
      {/* Left Side - Profile Image */}
      <motion.div
        className="flex justify-center lg:justify-start pt-[80px] lg:pt-0"
        initial={{
          x: isDesktop ? -300 : 0,
          y: isDesktop ? 0 : 100,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: ANIMATION.HOME_SEQUENCE.PROFILE_IMAGE.DURATION,
          ease: "easeOut",
          delay: ANIMATION.HOME_SEQUENCE.PROFILE_IMAGE.DELAY,
        }}
      >
        <div className="relative">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-violet-400 to-sky-400 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-6xl lg:text-8xl">👩‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <div className="text-center lg:text-left">
        {/* 제목 - 타이핑과 함께 등장 */}
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center lg:justify-start"
          initial={{
            y: isDesktop ? 50 : 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: ANIMATION.HOME_SEQUENCE.TITLE.DURATION,
            ease: "easeOut",
            delay: ANIMATION.HOME_SEQUENCE.TITLE.DELAY,
          }}
        >
          <span className="relative">
            {typewriterText}
            <span className="typing-cursor typing-cursor-lg" />
          </span>
        </motion.h1>

        {/* 컨텐츠 - 타이핑 완료 후 등장 */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: ANIMATION.HOME_SEQUENCE.CONTENT.DURATION,
            ease: "easeOut",
            delay: ANIMATION.HOME_SEQUENCE.CONTENT.DELAY,
          }}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
            A Front-end Developer✨
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
            사용자의 시선이 머무는 곳에 직관적인 경험을 설계하고,
            <br />
            견고한 코드로 비즈니스 가치를 더하는 프론트엔드 개발자입니다.
          </p>

          {/* Buttons and Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>

            <Link
              href="/projects"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View Projects
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Link
              href="https://github.com"
              className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </Link>

            <Link
              href="https://velog.io/@favorcho"
              className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-sky-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
