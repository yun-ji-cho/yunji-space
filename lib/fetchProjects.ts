import { Project } from "@/types/project";

// 실제 API가 있다면 여기서 fetch를 사용
export async function fetchProjects(): Promise<Project[]> {
  // 임시 데이터 - 실제로는 API에서 가져옴
  return [
    {
      id: "1",
      title: "포트폴리오 웹사이트",
      description:
        "Next.js와 Tailwind CSS로 구축한 모던한 포트폴리오 웹사이트입니다.",
      icon: "🚀",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      gradient: "bg-gradient-to-br from-purple-400 to-pink-400",
      link: "https://yunji-space.vercel.app",
      github: "https://github.com/yunji/portfolio",
      featured: true,
    },
    {
      id: "2",
      title: "할 일 관리 앱",
      description:
        "React Native로 개발한 크로스 플랫폼 할 일 관리 애플리케이션입니다.",
      icon: "📱",
      technologies: ["React Native", "TypeScript"],
      gradient: "bg-gradient-to-br from-blue-400 to-cyan-400",
      link: "https://todo-app.example.com",
      github: "https://github.com/yunji/todo-app",
    },
    {
      id: "3",
      title: "온라인 쇼핑몰",
      description: "결제 시스템이 통합된 풀스택 이커머스 솔루션입니다.",
      icon: "🛒",
      technologies: ["Node.js", "MongoDB", "Stripe"],
      gradient: "bg-gradient-to-br from-green-400 to-emerald-400",
      link: "https://shop.example.com",
      github: "https://github.com/yunji/ecommerce",
    },
  ];
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchProjects();
  return projects.filter((project) => project.featured);
}
