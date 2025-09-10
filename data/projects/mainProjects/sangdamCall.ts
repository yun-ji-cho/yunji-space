import type { Project } from "@/types/project";

export const sangdamCallProject: Project = {
  id: "1",
  title: "상담콜 프론트 리뉴얼",
  description:
    "기존 상담콜 시스템의 프론트엔드를 완전히 리뉴얼하여 사용자 경험을 대폭 개선한 프로젝트입니다.",
  icon: "📞",
  technologies: [
    "React",
    "TypeScript",
    "Zustand",
    "React Query",
    "Tailwind(shadcn/ui)",
  ],
  gradient: "bg-gradient-to-br from-blue-400 to-purple-400",
  featured: true,
  category: "main",
  role: "프론트엔드 개발자",
  projectDuration: "5개월",
  teamSize: "프론트엔드 1명, 백엔드 1명",
  introduction:
    "기획/디자인/API 문서가 전무한 레거시 PHP 프로젝트의 프론트엔드 리뉴얼을 0부터 1까지 책임졌습니다. 불안정한 레거시 API를 직접 역추적하고 문서화하여 팀의 가장 큰 병목을 해결했으며, AI 도구를 활용한 신속한 프로토타이핑으로 개발 속도를 확보했습니다. 또한, 팀의 코드 가이드라인과 협업 문서를 구축하여 지속 가능한 개발 환경의 기틀을 마련했습니다.",
  achievements: [
    "'3중 제약' 속 성공적인 초기 개발 완료: 문서 부재, 높은 복잡도, 타이트한 일정이라는 3가지 제약 조건 속에서도 프로젝트의 핵심 기반을 성공적으로 구축했습니다. 33개 페이지 UI를 2주 내에 완성했으며, 약 1개월 만에 10개의 주요 페이지 기능 구현을 완료하여 리뉴얼 프로젝트의 성공 가능성을 증명했습니다.",
    "레거시 API 명세 부재 문제 해결: 팀의 가장 큰 병목 지점이었던 API 명세 부재 문제를, 직접 스펙을 분석하고 문서화하여 해결했습니다. 이는 프론트엔드뿐만 아니라 백엔드 팀과의 협업 효율을 극대화하는 중요한 성과였습니다.",
    "성능 최적화를 통한 사용자 경험 개선: Intersection Observer를 활용한 조건부 렌더링 및 캐싱 전략을 도입하여 레거시 시스템 대비 페이지 응답 속도를 실질적으로 개선했습니다.",
  ],
  learnings: [
    "불확실한 환경에서의 문제 해결 능력: 기획, 디자인, API 명세가 없는 극한의 환경에서 스스로 길을 찾는 능력을 길렀습니다. 주어진 환경을 탓하기보다, 네트워크 요청을 분석하고 직접 문서를 만드는 등 적극적으로 문제를 정의하고 해결하는 주도성의 중요성을 체감했습니다.",
    "문서화의 가치: 문서의 부재가 팀 전체의 생산성을 얼마나 저하시키는지 직접 경험하며, 잘 만든 문서 하나가 최고의 동료가 될 수 있음을 깨달았습니다. README나 코딩 가이드 같은 공통 문서를 만드는 것이 단순한 추가 업무가 아닌, 프로젝트 성공을 위한 핵심 투자임을 배웠습니다.",
    "최신 기술을 활용한 생산성 혁신: Cursor와 같은 AI 도구를 개발 워크플로우에 적극적으로 도입하며, 단순 반복 작업을 자동화하고 더 중요한 문제 해결에 집중하는 방법을 터득했습니다. 이를 통해 개발 속도와 코드 품질을 동시에 높이는 경험을 할 수 있었습니다.",
  ],
  hasDetailPage: true,
  detailLevel: 3, // 가장 상세한 레벨
  imagePath: "/images/projects/project_img_1.png",
  detailedWork: [
    {
      title: "01. 실시간 상담 및 운영 관리",
      description:
        "3단 레이아웃 구조를 기반으로 실시간 통화 목록과 고객 정보를 연동하여, 상담원의 즉각적인 고객 응대 및 관리가 가능한 환경을 구축했습니다.",
      color: "blue",
      details: `실시간으로 인입되는 고객 상담콜을 관리하고 처리하는 서비스의 핵심 운영 페이지를 개발했습니다. 이 페이지는 서로 다른 3개의 섹션(통화 목록, 상담 섹션, 고객 상세)이 유기적으로 상호작용해야 하는 복잡한 UI를 가집니다. 따라서 복잡한 데이터를 효율적으로 관리하고, 대용량 통화 목록에서도 쾌적한 사용자 경험을 제공하며, 향후 유지보수가 용이한 확장 가능한 구조를 설계하는 데 중점을 두었습니다.

• 3단 레이아웃 기반 통합 워크스페이스: 통화 목록, 상담 기록, 고객 상세 정보가 한 화면에 연동되어 상담원이 여러 화면을 전환할 필요 없이 모든 업무를 처리할 수 있도록 UI를 구축했습니다.
• 무한 스크롤을 적용한 실시간 통화 목록: 수천 건의 통화 데이터도 성능 저하 없이 부드럽게 탐색할 수 있도록 Intersection Observer 기반의 무한 스크롤을 구현했습니다.
• 전역 상태와 연동된 고객 상세 정보: 통화 목록에서 특정 콜을 선택하면, 해당 고객의 정보가 즉시 고객 상세 섹션에 동기화되어 나타납니다.
• 상담 세션 관리 및 Trial 사용자 제한: 상담 내용 기록, 콜백 처리 등 상담 세션을 관리하고, Trial(체험) 사용자의 기능 접근을 제한하는 등 비즈니스 로직을 구현했습니다.`,
      challenges: [
        "복잡한 데이터 의존성과 상태 동기화: 통화 목록, 상담 섹션, 고객 상세 정보 섹션은 각각 다른 컴포넌트지만, '현재 선택된 콜'이라는 하나의 데이터를 공유하고 동시에 상태가 변경되어야 했습니다. 컴포넌트 구조가 깊어 Prop Drilling 문제가 발생하기 쉬웠고, 데이터 불일치가 발생할 위험이 높았습니다.",
        "대용량 데이터 렌더링에 따른 성능 저하: 수천 건에 달하는 전체 통화 목록을 한 번에 로드하고 렌더링할 경우, 초기 로딩 시간이 길어져 사용자 경험을 심각하게 저해하고 브라우저에 과부하를 줄 수 있었습니다.",
        "UI와 비즈니스 로직의 강한 결합: 컴포넌트 내에 API 호출, 데이터 가공, 페이지네이션 관리 등의 비즈니스 로직이 혼재될 경우, 컴포넌트가 비대해지고 가독성이 떨어져 유지보수가 어려워지는 문제가 있었습니다.",
      ],
      solutions: [
        "Zustand를 활용한 전역 상태 관리 아키텍처 도입: Prop Drilling과 데이터 불일치 문제를 해결하기 위해 Zustand 기반의 전역 스토어를 도입했습니다. 현재 선택된 콜 정보와 같이 여러 컴포넌트가 공유해야 하는 핵심 데이터를 중앙에서 관리하여, 어떤 컴포넌트에서든 항상 최신 데이터를 일관되게 사용할 수 있도록 설계했습니다.",
        "Intersection Observer 기반 무한 스크롤 구현: 초기 로딩 성능을 최적화하기 위해, 첫 페이지의 데이터만 먼저 로드하고 사용자가 스크롤을 내릴 때 Intersection Observer가 이를 감지하여 다음 페이지 데이터를 비동기적으로 불러오는 무한 스크롤을 구현했습니다. 이를 통해 초기 로딩 시간을 대폭 단축하고 서버 부하를 감소시켰습니다.",
        "Custom Hook을 통한 비즈니스 로직의 분리 및 추상화: useInfiniteCallList와 같은 커스텀 훅을 만들어 API 연동, 데이터 정제, 무한 스크롤 상태 관리 등 복잡한 비즈니스 로직을 UI 컴포넌트로부터 완전히 분리했습니다. 이를 통해 컴포넌트는 오직 UI 렌더링에만 집중할 수 있게 하여 관심사 분리 원칙을 지켰고, 로직의 재사용성과 테스트 용이성을 높였습니다.",
      ],
      codeSnippets: [
        {
          title: "무한 스크롤 커스텀 훅",
          description:
            "react-query의 useInfiniteQuery와 Intersection Observer를 결합하여 통화 목록 데이터 페칭과 무한 스크롤 로직을 캡슐화",
          code: `import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getCallListAPI } from '@apis/consulting';

export function useInfiniteCallList(filters) {
const observerRef = useRef<HTMLDivElement>(null);

const {
data,
fetchNextPage,
hasNextPage,
isLoading,
isFetchingNextPage,
} = useInfiniteQuery(
['callList', filters],
({ pageParam = 1 }) => getCallListAPI({ page: pageParam, ...filters }),
{
  getNextPageParam: (lastPage, allPages) => {
    const nextPage = allPages.length + 1;
    return lastPage.hasNext ? nextPage : undefined;
  },
},
);

useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  },
  { threshold: 1.0 },
);

if (observerRef.current) {
  observer.observe(observerRef.current);
}

return () => observer.disconnect();
}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

return {
callListData: data?.pages.flatMap((page) => page.contents),
isLoading,
observerRef,
};
}`,
          language: "typescript",
        },
      ],
    },
    {
      title: "02. 데이터 기반 고객 관계 관리 (CRM)",
      description:
        "다양한 검색 조건과 정렬 기능을 갖춘 고객 관리 시스템을 개발하여, 효율적인 고객 데이터 관리 및 응대의 기반을 마련했습니다.",
      color: "orange",
      details: `수만 건 이상의 대규모 통화 데이터를 효율적으로 관리하고, 개별 고객 정보를 정밀하게 수정하는 CRM 기능을 개발했습니다. 사용자가 원하는 조건으로 데이터를 탐색하고, 작업 흐름이 끊기지 않는 편의성을 제공하는 데 중점을 두었습니다.

• 빠른 데이터 조회 및 관리: 서버 사이드 처리 기반의 필터링, 정렬, 페이지네이션 기능을 구현하여 수만 건의 데이터도 지연 없이 관리합니다.
• 사용자 컨텍스트 보존: 상세 페이지 진입 후 '뒤로가기' 시, 이전에 설정했던 필터, 정렬, 스크롤 위치를 완벽하게 복원합니다.
• 안전한 정보 수정: 고객 정보 수정 시, 변경된 내용이 있을 때만 '저장' 버튼이 활성화되는 'Dirty State' 감지 기능을 적용했습니다.`,
      challenges: [
        "대용량 데이터 렌더링 성능: 수만 건의 데이터를 클라이언트에서 처리할 때 발생하는 초기 로딩 지연 및 브라우저 과부하 문제.",
        "파편화된 사용자 경험: 페이지 이동 시 검색 조건이 초기화되어 사용자의 작업 흐름이 끊기는 문제.",
        "코드 복잡성 증가: 고객 정보 수정 폼과 같이 복잡한 상태 로직이 UI 컴포넌트 내에 혼재되어 코드의 가독성 및 유지보수성이 저하되는 문제.",
      ],
      solutions: [
        "서버 중심 아키텍처 최적화: 기존 서버 사이드 처리 방식에 맞춰, 복잡한 필터/정렬 상태를 API 파라미터로 변환하고 응답에 따라 UI를 지연 없이 갱신하는 프론트엔드 데이터 흐름을 책임지고 구현했습니다.",
        "URL 쿼리 파라미터와 sessionStorage를 조합을 활용한 컨텍스트 보존: 필터 상태는 공유 및 새로고침 시에도 유지되도록, 스크롤 위치는 개인화되어 복원되는 끊김 없는 탐색 경험을 구현했습니다.",
        "Custom Hook 기반 로직 추상화: UserProfileForm 커스텀 훅을 설계하여 복잡한 폼 상태 관리 로직(Dirty State 감지 등)을 UI로부터 완전히 분리, 코드의 결합도를 낮추고 유지보수성을 향상시켰습니다.",
      ],
      codeSnippets: [
        {
          title: "고객 정보 수정시 Dirty state 감지",
          description:
            "고객 정보 수정 시, 변경된 내용이 있을 때만 '저장' 버튼이 활성화되는 'Dirty State' 감지 기능을 적용했습니다.",
          code: `// hooks/UserProfileForm.ts
  import { useState, useEffect, useCallback, useRef } from "react";

  export function UserProfileForm(userData) {
    const [formData, setFormData] = useState(() => getInitialFormData(userData));
    const [isDirty, setIsDirty] = useState(false);

    // 🔑 핵심: useRef로 초기값을 한 번만 저장하여 불필요한 재계산 방지
    const initialDataRef = useRef(getInitialFormData(userData));

    // userData 변경 시 초기값도 함께 업데이트
    useEffect(() => {
      if (userData) {
        const newInitialData = getInitialFormData(userData);
        setFormData(newInitialData);
        initialDataRef.current = newInitialData; // 참조값 업데이트
      }
    }, [userData]);

    // 🔑 핵심: 실시간 Dirty State 감지 로직
    useEffect(() => {
      const initialData = initialDataRef.current;

      const hasChanged = Object.keys(formData).some((key) => {
        const currentValue = formData[key];
        const initialValue = initialData[key];

        // 🔑 특별 처리: Date 객체 비교 최적화
        if (key === "birthDate") {
          if (!currentValue && !initialValue) return false;
          if (!currentValue || !initialValue) return true;

          // Date를 YYYY-MM-DD 문자열로 변환하여 날짜만 비교
          const currentDateStr = \`${"${"}currentValue.getFullYear(){'}'}-${"${"}String(
            currentValue.getMonth() + 1
          ).padStart(2, "0"){'}'}-${"${"}String(currentValue.getDate()).padStart(2, "0"){'}'}\`;

          const initialDateStr = \`${"${"}initialValue.getFullYear(){'}'}-${"${"}String(
            initialValue.getMonth() + 1
          ).padStart(2, "0"){'}'}-${"${"}String(initialValue.getDate()).padStart(2, "0"){'}'}\`;

          return currentDateStr !== initialDateStr;
        }

        // 일반 필드는 직접 값 비교
        return currentValue !== initialValue;
      });

      setIsDirty(hasChanged);
    }, [formData]); // formData 변경시에만 실행

    return { formData, setFormData, isDirty, /* ... */ };
  }

  3. UI 적용 코드

  // components/CustomerInfoForm.tsx
  export const CustomerInfoForm = ({ userData }) => {
    const { formData, isDirty, handleInputChange } =
  UserProfileForm(userData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 저장 로직
  };

    return (
      <form onSubmit={handleSubmit}>
        {/* 폼 필드들 */}
        <Input
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        {/* ... 다른 폼 필드들 ... */}

        {/* 🔑 핵심: Dirty State 기반 버튼 활성화 */}
        <Button
          type="submit"
          disabled={!isDirty}
          className={cn(
            isDirty
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        >
          수정
        </Button>
      </form>
    );
  };`,
          language: "typescript",
        },
      ],
    },
    {
      title: "03. 비즈니스의 핵심 현황: 실시간 대시보드 구축",
      description:
        "산재된 데이터를 통합하고 동적 차트 시각화를 통해, 비즈니스 현황과 AI 분석 결과를 한눈에 파악할 수 있는 관제 대시보드를 구현했습니다.",
      color: "green",
      details: `실시간 상담 현황, AI 분석 데이터 등 여러 소스에 분산된 데이터를 하나의 화면으로 통합하여, 서비스의 핵심 지표를 직관적으로 파악할 수 있는 데이터 중심의 대시보드를 개발했습니다. 이 프로젝트의 핵심 과제는 데이터의 최신성을 보장하는 실시간 동기화 아키텍처를 설계하고, 사용자의 다양한 인터랙션에 지연 없이 반응하는 반응형 UI를 구현하여 복잡한 데이터를 효과적으로 전달하는 것이었습니다.

• 실시간 데이터 동기화: 5초 주기의 폴링(Polling) 기법을 도입하여, 상담 현황 및 회선 상태와 같은 핵심 지표를 별도의 새로고침 없이 실시간에 가깝게 업데이트합니다.
• 통합 데이터 시각화: 실시간 통계, AI 감정 분석, 키워드 추출 등 다양한 데이터를 도넛 차트, 통계 카드, 테이블 등 사용자가 이해하기 쉬운 형태로 시각화하여 제공합니다.
• 인터랙티브 데이터 탐색: 사용자가 직접 날짜 범위, 시간 단위(일/주/월)를 선택하거나 관심 키워드를 등록하면, 대시보드 전체 데이터가 선택된 조건에 맞춰 동적으로 갱신되는 사용자 주도적 데이터 탐색 기능을 구현했습니다.
• 모듈식 컴포넌트 아키텍처: 데이터 시각화 컴포넌트(StatusDonutChart, CallStatsCard 등)를 기능 단위로 명확하게 분리하여 코드의 재사용성과 유지보수성을 높였고, 새로운 통계 위젯을 쉽게 추가할 수 있는 확장성을 확보했습니다.`,
      challenges: [
        "데이터 최신성 보장: 콜센터 현황판과 같이 데이터의 최신성이 매우 중요한 요구사항을 충족시키기 위해, 페이지 진입 시 한 번만 데이터를 불러오는 방식이 아닌 지속적인 데이터 동기화 메커니즘이 필요했습니다.",
        "복잡한 상태에 따른 동적 API 제어: 날짜, 시간 단위, 키워드 등 수많은 상태와 API가 얽힌 복잡한 환경에서, 사용자의 인터랙션에 따라 불필요한 API 호출은 최소화하고 필요한 데이터만 효율적으로 갱신하는 반응형 아키텍처를 설계해야 했습니다.",
        "UI 렌더링 성능 저하: 사용자의 필터 변경이나 주기적인 폴링으로 인해 잦은 리렌더링이 발생할 때, 계산 비용이 높은 데이터 변환 로직(차트 데이터 가공 등)이 반복 실행되어 애플리케이션의 반응성이 저하될 수 있는 문제를 해결해야 했습니다.",
      ],
      solutions: [
        "Zustand 스토어 기반의 폴링 아키텍처 활용: 데이터 호출 및 상태 관리 로직을 Zustand 스토어(dashboardStore)에 완전히 위임하는 폴링 아키텍처를 활용했습니다. 페이지 컴포넌트는 useEffect의 생명주기에 맞춰 스토어의 startPolling과 stopPolling 액션만 호출하며, 이를 통해 컴포넌트의 관심사를 명확히 분리하고 메모리 누수 없이 안정적인 실시간 데이터 업데이트를 구현했습니다.",
        "상태 기반의 동적 API 호출 및 연산 최적화: 사용자의 모든 필터 조건을 useState로 관리하고, useEffect를 통해 특정 상태의 변경을 감지하여 변경된 파라미터로 필요한 API만 동적으로 재호출하는 반응형 시스템을 구축했습니다. 또한, 차트 데이터 변환 등 계산 비용이 높은 연산은 useMemo로 메모이제이션하여 불필요한 반복 계산을 방지하고 애플리케이션의 반응성을 높였습니다.",
        "데이터 가공 로직 및 설정의 분리: API 원본 데이터를 차트 라이브러리가 요구하는 형식에 맞게 가공하는 데이터 변환 로직을 명확히 분리했습니다. 또한, 차트의 색상이나 레이블 같은 설정 값들을 별도의 상수 파일(constants)로 분리하여, 향후 디자인 변경 시 비즈니스 로직을 수정하지 않고 상수만 변경하면 되도록 유지보수성을 크게 향상시켰습니다.",
      ],
      codeSnippets: [
        {
          title: "실시간 대시보드 폴링 아키텍처",
          description:
            "Zustand 스토어 기반의 실시간 데이터 동기화 아키텍처로 UI와 비즈니스 로직을 완벽하게 분리",
          code: `import { useDashboardStore } from "@/stores/dashboardStore";

export default function RealTimeStatus() {
const startPolling = useDashboardStore((state) => state.startPolling);
const stopPolling = useDashboardStore((state) => state.stopPolling);
const stats = useDashboardStore((state) => state.stats);
const user = useAuthStore((state) => state.user);

useEffect(() => {
if (user?.site_id) {
  startPolling(user.site_id); // Polling 시작
  return () => stopPolling(); // 컴포넌트 언마운트 시 Polling 중지
}
return () => stopPolling();
}, [startPolling, stopPolling, user?.site_id]);

// ... JSX ...
}`,
          language: "typescript",
        },
      ],
    },
    {
      title: "04. 성과 분석 및 인사이트 도출: 통계 리포트 시스템",
      description:
        "다각적인 통계 리포트 시스템을 개발하여, 서비스 운영 성과를 정량적으로 분석하고 데이터 기반 의사결정을 지원했습니다.",
      color: "purple",
      details: `일자별, 기능별, 상담 분류별 등 파편화된 통계 데이터를 사용자가 원하는 조건으로 정밀하게 조회하고, 시각화된 리포트를 통해 비즈니스 인사이트를 얻을 수 있는 통합 통계 시스템을 구축했습니다. 이 프로젝트의 핵심은 복잡한 필터 조건과 API 요청을 안정적으로 관리하고, 백엔드로부터 받은 원본 데이터를 프론트엔드에서 효과적으로 가공 및 최적화하며, 이 모든 로직을 유지보수하기 용이한 아키텍처로 설계하는 것이었습니다.

• 복합 조건 필터링 및 동적 API 파라미터 구성: 사용자가 수많은 필터 조건을 조합하여 원하는 통화 목록을 정밀하게 조회할 수 있으며, 선택된 조건에 따라 API 요청 파라미터를 동적으로 조합하여 전송합니다.
• 사용자 경험을 고려한 동적 뷰(View) 전환: 사용자가 선택한 날짜 범위의 길이에 따라 가장 유용한 통계 기준(시간/일/월)을 자동으로 제안하고, 사용자가 수동으로 뷰를 전환할 수도 있는 스마트 UX를 구현했습니다.
• 클라이언트 사이드 데이터 집계 및 가공: 백엔드에 의존하지 않고 프론트엔드에서 직접 데이터를 집계(reduce)하여 테이블에 '합계'와 같은 요약 정보를 생성하고, 복잡한 중첩 구조의 API 응답을 차트 라이브러리에 맞는 형태로 변환합니다.
• 상태 분리를 통한 API 호출 최적화: 사용자가 필터를 조작하는 상태와 실제 API를 호출하는 상태를 분리하여, 여러 필터를 신중하게 조합한 후 원하는 시점에만 '조회'를 실행하도록 설계함으로써 불필요한 API 호출을 방지했습니다.`,
      challenges: [
        "복잡한 상태 관리 및 불필요한 API 호출: 수많은 필터 조건이 변경될 때마다 API를 호출하면 서버에 큰 부하를 줄 수 있었고, 각 통계 페이지의 복잡한 상태(필터, 로딩, 원본 데이터, 가공 데이터 등)를 UI 컴포넌트 내에서 관리할 경우 코드가 비대해지고 유지보수가 어려워지는 문제가 있었습니다.",
        "반복적인 데이터 연산으로 인한 성능 저하: 사용자가 필터나 뷰(시간/일/월)를 변경하여 잦은 리렌더링이 발생할 때마다, 차트나 테이블에 필요한 데이터를 변환하고 집계하는 계산 비용이 높은 연산이 반복 실행되어 애플리케이션의 반응성이 저하될 위험이 있었습니다.",
        "백엔드와 프론트엔드의 데이터 구조 불일치: 백엔드 API로부터 받은 원본 데이터는 종종 중첩된 객체 형태였으나, 프론트엔드의 차트 라이브러리나 테이블은 평탄화된 배열 형태의 데이터를 요구하여 그 간극을 메우는 효율적인 데이터 변환(Data Transformation) 계층이 필요했습니다.",
      ],
      solutions: [
        "Zustand 스토어를 통한 상태 및 비즈니스 로직 중앙 관리: 페이지의 UI 렌더링 책임과 데이터 관리 책임을 완벽하게 분리하는 아키텍처를 적용했습니다. 필터 조건, API 호출 함수, 로딩 상태, 원본 데이터, 가공 데이터 등 페이지에 필요한 모든 상태와 관련 로직을 Zustand 스토어에서 중앙 관리했습니다. 이를 통해 페이지 컴포넌트는 UI 렌더링에만 집중할 수 있게 하여 테스트 용이성과 유지보수성을 극대화했습니다.",
        "useMemo를 활용한 데이터 변환 연산 최적화: API 원본 데이터나 사용자가 선택한 뷰가 변경될 때만 차트와 테이블 데이터를 변환하는 로직이 실행되도록 useMemo로 메모이제이션(Memoization)을 적용했습니다. 이를 통해 불필요한 리렌더링 시마다 반복될 수 있는 무거운 데이터 가공 연산을 방지하고 애플리케이션의 성능과 반응성을 최적화했습니다.",
        "데이터 처리 로직의 모듈화 및 추상화: API 응답 데이터를 차트용, 테이블용 데이터로 가공하는 복잡한 로직을 별도의 유틸리티 파일(utils)로 분리하여 관리했습니다. map, reduce, Object.entries와 같은 고차 함수를 활용하여 데이터 변환 로직을 모듈화하고 추상화함으로써, 컴포넌트를 간결하게 유지하고 데이터 처리 로직을 독립적으로 테스트할 수 있도록 설계했습니다.",
      ],
      codeSnippets: [
        {
          title: "통계 페이지 아키텍처",
          description:
            "Zustand 스토어를 통한 상태 및 비즈니스 로직 중앙 관리로 UI와 로직을 완벽하게 분리",
          code: `import { useStatisticsCounselingTypeStore } from "@/stores/statisticsCounselingTypeStore";

export default function StatisticsCounselingTypePage() {
// Store에서 UI에 필요한 모든 상태와 액션을 가져와 사용합니다.
const {
data,
chartData,
loading,
// ...
fetchStatistics,
} = useStatisticsCounselingTypeStore();

// 컴포넌트가 마운트될 때 스토어의 데이터 요청 액션을 한 번만 호출합니다.
useEffect(() => {
fetchStatistics();
}, []);

// ... JSX ...
}`,
          language: "typescript",
        },
      ],
    },
    {
      title: "05. 복잡한 비즈니스 로직의 자동화: ARS 시나리오 설정",
      description:
        "코딩 없이 사용자가 직접 전화 응대 시나리오를 설계하고, 외부 전문 솔루션과 연동하여 실시간으로 적용할 수 있는 동적 ARS 설정 UI를 개발했습니다.",
      color: "red",
      details: `사용자가 직접 ARS 시나리오를 구성하고 목소리 설정을 변경할 수 있는 설정 빌더(Builder) 페이지를 개발했습니다. 이 프로젝트의 핵심은 '간편한 ARS'의 복잡하고 상호 의존적인 상태들을 커스텀 훅 기반 아키텍처로 분리하여 효과적으로 관리하고, '맞춤형 ARS'의 외부 전문 솔루션을 사용자에게 이질감 없이 매끄럽게 연동하는 것이었습니다.

• 커스텀 훅 기반 아키텍처: ARS 시나리오, 프리미엄 보이스 설정 등 두 개의 큰 비즈니스 로직을 각각의 커스텀 훅(useArsConnections, useVoiceSettings)으로 완벽하게 분리하여, 페이지 컴포넌트는 UI 렌더링에만 집중하도록 설계했습니다.
• 외부 솔루션 연동 게이트웨이: 복잡한 ARS 빌더는 외부 전문 솔루션(어썸봇)을 연동하는 방식으로 구현하여 개발 리소스를 절감하고 더 강력한 기능을 제공했습니다. 사용자가 외부 솔루션을 쉽게 사용하도록 안내하는 게이트웨이 역할을 수행합니다.
• 상태와 연동된 동적 UI 및 비즈니스 규칙: ARS 연결 번호의 최대 개수를 초과하면 알림 모달을 띄우는 등 비즈니스 규칙을 상태 관리 로직과 결합했습니다. 또한, 전역 스토어의 사용자 ARS 타입에 따라 UI를 동적으로 제어하여 데이터 정합성을 유지합니다.
• 사용자 경험(UX) 중심의 안내 시스템: 서비스 모드 변경이나 외부 솔루션 이동 전, 모달을 활용하여 사용자에게 명확한 정보를 제공하고 의사를 확인하는 안정적인 UX 패턴을 적용하여 사용자의 실수를 방지했습니다.`,
      challenges: [
        "높은 상태 복잡도와 컴포넌트 비대화: ARS 시나리오 설정과 목소리 설정은 서로 다른 도메인이지만, 하나의 페이지에서 관리되어야 했습니다. 이 모든 상태와 로직을 단일 컴포넌트에서 처리할 경우, 코드가 비대해지고 유지보수가 불가능해지는 문제가 있었습니다.",
        "외부 솔루션과의 매끄러운 연동: 사용자가 내부 서비스와 외부 솔루션 사이를 이동할 때 이질감을 느끼거나 혼란을 겪지 않도록, 명확한 사전 안내와 필수 조건 체크 등 세심한 사용자 여정(User Journey) 설계가 필요했습니다.",
        "비즈니스 규칙과 UI 상태의 결합: '연결 번호는 최대 7개까지만 추가 가능'과 같은 시스템 제약 사항을 UI에 자연스럽게 녹여내고, 사용자의 잘못된 조작을 효과적으로 방지하는 로직을 구현해야 했습니다.",
      ],
      solutions: [
        "커스텀 훅을 통한 핵심 로직의 완전한 분리 및 추상화: 관심사 분리(SoC) 원칙에 따라, ARS 시나리오와 보이스 설정 로직을 각각의 커스텀 훅으로 완벽하게 분리했습니다. 이 아키텍처는 페이지 컴포넌트를 매우 간결하고 선언적으로 유지시켜주며, 각 훅은 독립적으로 개발하고 테스트할 수 있어 코드의 안정성과 유지보수성을 극대화했습니다.",
        "게이트웨이 페이지 및 모달을 통한 UX 설계: 외부 솔루션 연동을 위해, 기능을 직접 안내하고 필수 조건을 확인하는 게이트웨이 페이지를 설계했습니다. 또한, 서비스 모드 변경 등 중요한 작업 전에는 모달을 통해 사용자에게 명확한 정보를 제공하고 의사를 재확인하는 안정적인 UX 패턴을 적용하여 사용자의 혼란과 실수를 방지했습니다.",
        "상수(Constants) 파일을 활용한 설정 중앙 관리: ARS 연결 타입, 목소리 옵션 등 수많은 선택지를 별도의 상수 파일로 분리하여 중앙에서 관리했습니다. 이를 통해 매직 넘버나 문자열을 제거하여 코드의 가독성을 높이고, 향후 옵션 변경 시 유지보수 비용을 크게 절감했습니다.",
      ],
      codeSnippets: [
        {
          title: "ARS 설정 페이지 아키텍처",
          description:
            "커스텀 훅을 통한 핵심 로직의 완전한 분리 및 추상화로 복잡한 상태를 효과적으로 관리",
          code: `// '간편한 ARS' 페이지의 핵심 아키텍처
export default function SingleArsPage() {
// ARS 시나리오 관련 상태와 로직을 커스텀 훅으로 분리
const {
arsConnections,
addConnection,
removeConnection,
updateConnection,
// ...
} = useArsConnections();

// 보이스 설정 관련 상태와 로직을 커스텀 훅으로 분리
const {
voiceSettings,
updateVoiceSettings,
// ...
} = useVoiceSettings();

// 페이지 컴포넌트는 UI 렌더링에만 집중
return (
<div>
  {/* ARS 연결 설정 UI */}
  <ArsConnectionsSection 
    connections={arsConnections}
    onAdd={addConnection}
    onRemove={removeConnection}
    onUpdate={updateConnection}
  />
  
  {/* 보이스 설정 UI */}
  <VoiceSettingsSection 
    settings={voiceSettings}
    onUpdate={updateVoiceSettings}
  />
</div>
);
}`,
          language: "typescript",
        },
      ],
    },
  ],
  technicalChallenges: [
    {
      title: "상태 관리 최적화",
      description: "대규모 애플리케이션에서의 복잡한 상태 관리",
      solution:
        "Zustand를 활용한 모듈화된 상태 관리, 선택적 구독 패턴으로 불필요한 리렌더링 방지",
      color: "blue",
    },
    {
      title: "성능 최적화",
      description: "대용량 데이터 처리 및 렌더링 성능 개선",
      solution:
        "React.memo, useMemo, useCallback 활용, 가상화 적용으로 성능 40% 향상",
      color: "green",
    },
  ],
  technicalDecisions: [
    {
      title: "상태 관리 라이브러리 선택",
      problem:
        "대규모 애플리케이션에서 전역 상태 관리가 필요했지만, Redux는 보일러플레이트가 많고 학습 곡선이 가파름",
      alternatives: ["Redux Toolkit", "Zustand", "Recoil", "Context API"],
      chosenSolution: "Zustand",
      reasoning:
        "1) 보일러플레이트 최소화로 개발 속도 향상 2) TypeScript 지원이 우수 3) 번들 크기가 작음 4) 팀원들의 학습 비용이 낮음 5) 선택적 구독으로 성능 최적화 가능",
      outcome: "개발 속도 30% 향상, 번들 크기 15% 감소, 팀원 온보딩 시간 단축",
    },
    {
      title: "인증 토큰 관리 방식",
      problem: "JWT 토큰 만료 시 사용자 경험 저하와 보안 취약점 발생",
      alternatives: [
        "로컬스토리지 저장",
        "세션스토리지 저장",
        "HttpOnly 쿠키",
        "메모리 저장",
      ],
      chosenSolution: "HttpOnly 쿠키 + 메모리 저장 조합",
      reasoning:
        "1) XSS 공격 방지 (HttpOnly 쿠키) 2) CSRF 공격 방지 (SameSite 속성) 3) 자동 갱신을 위한 메모리 저장 4) 서버 사이드에서 토큰 무효화 가능",
      outcome: "보안 취약점 0건, 사용자 재로그인 요청 90% 감소",
    },
    {
      title: "폼 검증 전략",
      problem: "사용자가 폼 제출 후 에러를 확인하고 수정하는 과정에서 UX 저하",
      alternatives: [
        "제출 시 검증",
        "실시간 검증",
        "포커스 아웃 시 검증",
        "디바운스 검증",
      ],
      chosenSolution: "실시간 검증 + 디바운스",
      reasoning:
        "1) 사용자가 즉시 피드백을 받아 수정 가능 2) 디바운스로 성능 최적화 3) 제출 버튼 활성화/비활성화로 UX 향상 4) 서버 부하 감소",
      outcome: "폼 완료율 25% 향상, 사용자 불만 감소",
    },
  ],
  codeSnippets: [
    {
      title: "인증 커스텀 훅",
      description: "JWT 토큰 기반 인증 로직을 관리하는 재사용 가능한 훅",
      code: `const useAuth = () => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const login = async (credentials) => {
try {
  const response = await authAPI.login(credentials);
  const { accessToken, refreshToken } = response.data;
  
  setTokens(accessToken, refreshToken);
  setUser(response.data.user);
  
  return { success: true };
} catch (error) {
  return { success: false, error: error.message };
}
};

return { user, loading, login };
};`,
      language: "typescript",
    },
  ],
  screenshots: [
    "/images/projects/sangdam-dashboard.png",
    "/images/projects/sangdam-login.png",
    "/images/projects/sangdam-settings.png",
  ],
};
