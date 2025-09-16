export const sangdamCallDetailedWork = [
  {
    title: "01. 실시간 상담 및 운영 관리",
    description:
      "3단 레이아웃 구조를 기반으로 실시간 통화 목록과 고객 정보를 연동하여, 상담원의 즉각적인 고객 응대 및 관리가 가능한 환경을 구축했습니다.",
    color: "blue",

    keyResults: [
      "**3단 레이아웃 통합 워크스페이스**: 통화 목록, 상담 기록, 고객 정보를 한 화면에서 연동하여 상담원이 여러 화면을 전환할 필요 없이 모든 업무 처리",
      "**무한 스크롤 구현**: Intersection Observer 기반으로 수천 건 데이터를 성능 저하 없이 처리",
      "**전역 상태 관리**: Zustand로 컴포넌트 간 데이터 동기화를 자동화하여 데이터 불일치 방지",
      "**Trial 사용자 제한**: 비즈니스 로직을 구현하여 체험 사용자의 기능 접근을 세밀하게 제어",
    ],

    problemSolving: [
      {
        challenge:
          "통화 목록, 상담 섹션, 고객 상세 간 복잡한 데이터 의존성과 Prop Drilling 문제",
        solution:
          "Zustand 전역 스토어를 도입하여 '현재 선택된 콜' 정보를 중앙에서 관리하고, 모든 컴포넌트가 일관된 데이터를 사용하도록 설계했습니다.",
      },
      {
        challenge:
          "수천 건의 통화 데이터를 한 번에 로드할 때 발생하는 성능 저하와 브라우저 과부하",
        solution:
          "Intersection Observer 기반 무한 스크롤을 구현하여 첫 페이지만 초기 로드하고, 스크롤 시 다음 데이터를 비동기적으로 불러와 성능을 최적화했습니다.",
      },
      {
        challenge:
          "UI 컴포넌트에 API 호출, 데이터 가공, 페이지네이션 등 비즈니스 로직이 혼재되어 유지보수가 어려운 문제",
        solution:
          "useInfiniteCallList 커스텀 훅을 만들어 복잡한 비즈니스 로직을 UI로부터 완전히 분리하고, 재사용 가능한 형태로 추상화했습니다.",
      },
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
    screenshots: ["/images/projects/sangdamcallDetail/ars_1_1.png"],
  },

  {
    title: "02. 데이터 기반 고객 관계 관리 (CRM)",
    description:
      "다양한 검색 조건과 정렬 기능을 갖춘 고객 관리 시스템을 개발하여, 효율적인 고객 데이터 관리 및 응대의 기반을 마련했습니다.",
    color: "orange",

    keyResults: [
      "**서버 사이드 처리 최적화**: 수만 건 데이터를 지연 없이 조회하는 필터링/정렬/페이지네이션 구현",
      "**컨텍스트 보존**: URL 쿼리와 sessionStorage를 활용하여 페이지 이동 후에도 필터와 스크롤 위치 완벽 복원",
      "**Dirty State 감지**: 변경된 내용이 있을 때만 저장 버튼을 활성화하여 안전한 데이터 수정 보장",
      "**Custom Hook 설계**: UserProfileForm 훅으로 복잡한 폼 로직을 UI로부터 완전히 분리",
    ],

    problemSolving: [
      {
        challenge:
          "수만 건의 데이터를 클라이언트에서 처리할 때 발생하는 초기 로딩 지연 및 브라우저 과부하",
        solution:
          "서버 사이드 처리 방식으로 전환하고, 복잡한 필터/정렬 상태를 API 파라미터로 변환하는 프론트엔드 데이터 흐름을 설계했습니다.",
      },
      {
        challenge:
          "페이지 이동 시 검색 조건과 스크롤 위치가 초기화되어 사용자 작업 흐름이 끊기는 문제",
        solution:
          "URL 쿼리 파라미터로 필터를 관리하여 공유 가능하게 하고, sessionStorage로 스크롤 위치를 저장하여 개인화된 탐색 경험을 제공했습니다.",
      },
      {
        challenge:
          "고객 정보 수정 폼의 복잡한 상태 로직이 UI 컴포넌트에 혼재되어 코드 복잡도가 증가하는 문제",
        solution:
          "UserProfileForm 커스텀 훅을 설계하여 Dirty State 감지 등 폼 상태 관리 로직을 UI로부터 완전히 분리했습니다.",
      },
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
    screenshots: [
      "/images/projects/sangdamcallDetail/ars_2_1.png",
      "/images/projects/sangdamcallDetail/ars_2_2.png",
    ],
  },

  {
    title: "03. 비즈니스의 핵심 현황: 실시간 대시보드 구축",
    description:
      "산재된 데이터를 통합하고 동적 차트 시각화를 통해, 비즈니스 현황과 AI 분석 결과를 한눈에 파악할 수 있는 관제 대시보드를 구현했습니다.",
    color: "green",

    keyResults: [
      "**실시간 동기화**: 5초 주기 폴링으로 상담 현황과 회선 상태를 자동 업데이트",
      "**통합 시각화**: 실시간 통계, AI 감정 분석, 키워드 추출을 도넛 차트와 테이블로 직관적 표현",
      "**인터랙티브 UI**: 날짜/시간 단위/키워드 필터 변경 시 대시보드 전체가 동적으로 갱신",
      "**모듈식 아키텍처**: 데이터 시각화 컴포넌트를 기능별로 분리하여 새 위젯 추가 용이",
    ],

    problemSolving: [
      {
        challenge:
          "데이터의 최신성이 중요한 대시보드에서 실시간 동기화 메커니즘 부재",
        solution:
          "Zustand 스토어 기반 폴링 아키텍처를 구현하여 컴포넌트 생명주기와 독립적으로 5초마다 데이터를 자동 동기화했습니다.",
      },
      {
        challenge:
          "필터 변경 시 모든 API를 재호출하여 발생하는 불필요한 서버 부하",
        solution:
          "useState와 useEffect로 필터 상태를 추적하고, 변경된 파라미터와 관련된 API만 선택적으로 재호출하는 반응형 시스템을 구축했습니다.",
      },
      {
        challenge:
          "차트 데이터 변환 같은 고비용 연산이 매 렌더링마다 반복 실행되어 성능 저하",
        solution:
          "useMemo를 활용하여 데이터 변환 로직을 메모이제이션하고, 의존성 배열을 최적화하여 필요한 경우만 재계산되도록 했습니다.",
      },
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
    screenshots: [
      "/images/projects/sangdamcallDetail/ars_3_1.png",
      "/images/projects/sangdamcallDetail/ars_3_2.png",
      "/images/projects/sangdamcallDetail/ars_3_3.png",
    ],
  },

  {
    title: "04. 성과 분석 및 인사이트 도출: 통계 리포트 시스템",
    description:
      "다각적인 통계 리포트 시스템을 개발하여, 서비스 운영 성과를 정량적으로 분석하고 데이터 기반 의사결정을 지원했습니다.",
    color: "purple",

    keyResults: [
      "**아키텍처 설계**: Zustand를 활용해 UI와 비즈니스 로직을 분리하여 테스트 용이성과 유지보수성 극대화",
      "**성능 최적화**: 불필요한 API 호출을 차단하고 useMemo로 고비용 연산을 최적화하여 반응 속도 개선",
      "**데이터 처리**: 복잡한 API 응답을 클라이언트에서 가공/집계하는 로직을 모듈화하여 안정적인 파이프라인 구축",
      "**동적 뷰 전환**: 조회 기간에 따라 시간/일/월별 뷰를 자동 제안하여 사용자 편의성 향상",
    ],

    problemSolving: [
      {
        challenge:
          "수많은 필터 조건으로 인해 발생하는 복잡한 상태와 불필요한 API 호출 문제",
        solution:
          "필터 상태와 API 호출 상태를 분리하고, Zustand 스토어에서 상태와 관련 로직을 중앙 집중적으로 관리하여 문제를 해결했습니다.",
      },
      {
        challenge:
          "잦은 리렌더링 시 반복적인 데이터 연산으로 인한 성능 저하 위험",
        solution:
          "데이터 의존성을 명확히 하여 useMemo를 적용, 변경이 필요할 때만 고비용 연산이 실행되도록 최적화했습니다.",
      },
      {
        challenge:
          "백엔드 API와 프론트엔드 UI 라이브러리 간 데이터 구조 불일치",
        solution:
          "데이터 변환 로직을 별도 유틸리티 함수로 모듈화 및 추상화하여 컴포넌트의 복잡도를 낮추고 재사용성을 높였습니다.",
      },
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
    screenshots: ["/images/projects/sangdamcallDetail/ars_4_1.png"],
  },

  {
    title: "05. 복잡한 비즈니스 로직의 자동화: ARS 시나리오 설정",
    description:
      "코딩 없이 사용자가 직접 전화 응대 시나리오를 설계하고, 외부 전문 솔루션과 연동하여 실시간으로 적용할 수 있는 동적 ARS 설정 UI를 개발했습니다.",
    color: "red",

    keyResults: [
      "**커스텀 훅 아키텍처**: ARS 시나리오와 보이스 설정을 독립적인 훅으로 분리하여 유지보수성 극대화",
      "**동적 UI 제어**: 사용자 ARS 타입과 비즈니스 규칙에 따라 UI가 자동으로 변경되는 반응형 설계",
      "**UX 중심 설계**: 모달 확인, 조건 체크 등으로 사용자 실수를 사전에 방지하는 안전장치 구현",
    ],

    problemSolving: [
      {
        challenge:
          "ARS 시나리오와 보이스 설정이 하나의 컴포넌트에 혼재되어 코드가 비대해지는 문제",
        solution:
          "useArsConnections와 useVoiceSettings 커스텀 훅으로 비즈니스 로직을 완전히 분리하여 각 도메인을 독립적으로 관리했습니다.",
      },
      {
        challenge:
          "비즈니스 규칙이 하드코딩되어 변경 시 코드 수정이 필요한 유지보수 문제",
        solution:
          "ARS 연결 타입, 목소리 옵션 등을 상수 파일로 분리하여 중앙에서 관리하고, 설정값만 수정하면 자동 반영되도록 구조화했습니다.",
      },
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
    screenshots: [
      "/images/projects/sangdamcallDetail/ars_5_1.png",
      "/images/projects/sangdamcallDetail/ars_5_2.png",
    ],
  },
];
