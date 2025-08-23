import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me | Yunji\'s Portfolio',
  description: 'Introduction to the developer, Yunji.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="max-w-2xl mx-auto p-10 bg-white dark:bg-zinc-900 rounded-xl shadow-lg text-center border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">안녕하세요, KindJ입니다.
</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          끊임없이 배우고 성장하는 것을 즐기는 프론트엔드 개발자입니다.
        </p>
        <div className="space-y-4 text-base text-left text-zinc-700 dark:text-zinc-300">
          <p>
            사용자에게 최고의 경험을 제공하는 직관적이고 아름다운 인터페이스를 만드는 것에 큰 열정을 가지고 있습니다. React, Next.js, TypeScript를 사용하여 견고하고 확장 가능한 웹 애플리케이션을 구축하는 것을 즐깁니다.
          </p>
          <p>
            이 포트폴리오 사이트는 저의 기술적인 실험과 학습 과정을 담는 공간입니다. 앞으로 다양한 기능들을 추가하며 채워나갈 예정이니 지켜봐 주세요!
          </p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-blue-500 dark:text-blue-400 hover:underline font-semibold">
            &larr; 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
