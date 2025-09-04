import {
  Mail,
  Clock,
  Code,
  Calendar,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export default function Contact() {
  return (
    <PageLayout className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            연락하기
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            새로운 도전과 성장의 기회를 찾고 있습니다. <br />
            함께 성장할 수 있는 팀에서 일하고 싶습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 연락처 정보 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              연락처 정보
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">이메일</h3>
                  <a
                    href="mailto:pplusmessage@gmail.com?subject=포트폴리오 문의&body=안녕하세요, 포트폴리오를 보고 연락드립니다."
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    pplusmessage@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">전화</h3>
                  <a
                    href="tel:010-8454-4456"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    010-8454-4456
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 현재 상황 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              현재 상황
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">이직 준비 중</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  새로운 기회를 찾고 있습니다
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">최소 1개월 후 입사 가능</span>
              </div>
            </div>
          </div>

          {/* 관심 있는 분야 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              관심 있는 분야
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
                프론트엔드 개발자
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                React 개발자
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
                웹 개발자
              </span>
            </div>
          </div>

          {/* 주요 기술 스택 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              주요 기술 스택
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-600">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Emotion
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">
                  State Management
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                    Zustand
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                    TanStack Query
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Tools</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    Git
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    Vite
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    ESLint
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 경험 년수 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              경험 년수
            </h2>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  4-5년
                </div>
                <p className="text-gray-600">프론트엔드 개발 경험</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 퍼블리셔에서 프론트엔드 개발자로 전환</p>
                <p>• React 기반 웹 애플리케이션 개발</p>
                <p>• 대규모 프로젝트 아키텍처 설계 경험</p>
              </div>
            </div>
          </div>

          {/* 선호하는 연락 방식 & 응답 시간 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              연락 방식 & 응답 시간
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  선호하는 연락 방식
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">전화</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">이메일</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-green-600" />
                  응답 시간
                </h3>
                <p className="text-gray-700">보통 24시간 내에 답변드립니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
