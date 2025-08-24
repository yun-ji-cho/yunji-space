import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              연락하기
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              새로운 도전과 성장의 기회를 찾고 있습니다. 함께 성장할 수 있는
              팀에서 일하고 싶습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                연락처 정보
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">이메일</h3>
                    <p className="text-gray-600">pplusmessage@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">위치</h3>
                    <p className="text-gray-600">경기도 광명시</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  관심 있는 포지션:
                </h3>
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
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                메시지 보내기
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      이름
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      성
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="김"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="이직 제안"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="회사와 포지션에 대해 알려주세요..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Send className="w-5 h-5" />
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
