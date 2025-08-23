import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
          KindJ's Portfolio
        </h1>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Welcome! This is a collection of my front-end development demos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-md bg-zinc-700 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors"
          >
            소개 (About Me)
          </Link>
          {/* <Link href="/infinite-scroll" className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            무한 스크롤 (Infinite Scroll)
          </Link> */}
        </div>
      </div>
    </main>
  );
}
