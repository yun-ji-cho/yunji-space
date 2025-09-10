/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  // 동적으로 생성되는 색상 클래스들을 safelist에 추가
  safelist: [
    // border 색상들
    "border-blue-500",
    "border-green-500",
    "border-purple-500",
    "border-red-500",
    "border-yellow-500",
    "border-indigo-500",
    "border-pink-500",
    "border-gray-500",
    "border-orange-500",
    "border-teal-500",
    "border-cyan-500",
    "border-lime-500",
    "border-emerald-500",
    "border-violet-500",
    "border-amber-500",
    "border-rose-500",
    "border-fuchsia-500",
    "border-sky-500",
    "border-slate-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
