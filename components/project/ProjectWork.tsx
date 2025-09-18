import type { Project, DetailedWork } from "@/types/project";
import StyledText from "../ui/StyledText";

interface ProjectWorkProps {
  project: Project;
  onWorkClick: (work: DetailedWork) => void;
  getBorderColorClass: (color: string) => string;
}

export default function ProjectWork({
  project,
  onWorkClick,
  getBorderColorClass,
}: ProjectWorkProps) {
  // Level 2 미만이거나 detailedWork가 없으면 렌더링하지 않음
  if (
    !project.detailLevel ||
    project.detailLevel < 2 ||
    !project.detailedWork
  ) {
    return null;
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        담당 업무 상세
      </h2>

      {project.introduction && (
        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            프로젝트 리더로서의 역할과 문제 해결 과정
          </h3>
          <StyledText
            text={project.introduction}
            className="text-blue-800 leading-relaxed"
            animate={false}
          />
        </div>
      )}

      <div className="grid gap-4">
        {project.detailedWork.map((work, index) => (
          <div
            key={index}
            onClick={() => onWorkClick(work)}
            className={`p-4 border-l-4 ${getBorderColorClass(
              work.color,
            )} bg-gradient-to-r from-gray-50 to-white rounded-r-lg cursor-pointer hover:shadow-md transition-all duration-200 group`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {work.title}
                </h3>
                <StyledText
                  text={work.description}
                  className="text-gray-600 mt-1 text-sm"
                  animate={false}
                />
              </div>
              <div className="ml-4 text-gray-400 group-hover:text-purple-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
