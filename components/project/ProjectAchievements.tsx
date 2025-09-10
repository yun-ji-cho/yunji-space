import type { Project } from "@/types/project";

interface ProjectAchievementsProps {
  project: Project;
}

export default function ProjectAchievements({ project }: ProjectAchievementsProps) {
  // achievements나 learnings가 모두 없으면 렌더링하지 않음
  const hasAchievements = project.achievements && project.achievements.length > 0;
  const hasLearnings = project.learnings && project.learnings.length > 0 && 
    project.detailLevel && project.detailLevel >= 2;

  if (!hasAchievements && !hasLearnings) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Achievements */}
      {hasAchievements && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🏆</span>
            주요 성과
          </h2>
          <ul className="space-y-3">
            {project.achievements!.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learnings - Level 2+ */}
      {hasLearnings && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">📚</span>
            배운 점
          </h2>
          <ul className="space-y-3">
            {project.learnings!.map((learning, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">💡</span>
                <span className="text-gray-700">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}