import { Project } from "@/types/project";

// 실제 API가 있다면 여기서 fetch를 사용
export async function fetchProjects(): Promise<Project[]> {
  // 임시 데이터 - 실제로는 API에서 가져옴
  return [
    // Main Projects
    {
      id: "1",
      title: "상담콜 프론트 리뉴얼",
      description:
        "기존 상담콜 시스템의 프론트엔드를 완전히 리뉴얼하여 사용자 경험을 대폭 개선한 프로젝트입니다.",
      icon: "📞",
      technologies: [
        "React",
        "TypeScript",
        "Zustand",
        "TanStack Query",
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

• 3단 레이아웃 기반 통합 워크스페이스: 통화 목록, 상담 기록, 고객 상세 정보가 한 화면에 연동되어 상담원이 여러 화면을 전환할 필요 없이 모든 업무를 처리할 수 있도록 UI를 설계했습니다.
• 무한 스크롤을 적용한 실시간 통화 목록: 수천 건의 통화 데이터도 성능 저하 없이 부드럽게 탐색할 수 있도록 Intersection Observer 기반의 무한 스크롤을 구현했습니다.
• 전역 상태와 연동된 고객 상세 정보: 통화 목록에서 특정 콜을 선택하면, 해당 고객의 정보가 즉시 고객 상세 섹션에 동기화되어 나타납니다.
• 상담 세션 관리 및 Trial 사용자 제한: 상담 내용 기록, 콜백 처리 등 상담 세션을 관리하고, Trial(체험) 사용자의 기능 접근을 제한하는 등 비즈니스 로직을 구현했습니다.`,
          challenges: [
            "복잡한 데이터 의존성과 상태 동기화: 통화 목록, 상담 섹션, 고객 상세 정보 섹션은 각각 다른 컴포넌트지만, '현재 선택된 콜'이라는 하나의 데이터를 공유하고 동시에 상태가 변경되어야 했습니다. 컴포넌트 구조가 깊어 Prop Drilling 문제가 발생하기 쉬웠고, 데이터 불일치가 발생할 위험이 높았습니다.",
            "대용량 데이터 렌더링에 따른 성능 저하: 수천 건에 달하는 전체 통화 목록을 한 번에 로드하고 렌더링할 경우, 초기 로딩 시간이 길어져 사용자 경험을 심각하게 저해하고 브라우저에 과부하를 줄 수 있었습니다.",
            "UI와 비즈니스 로직의 강한 결합: 컴포넌트 내에 API 호출, 데이터 가공, 페이지네이션 관리 등의 비즈니스 로직이 혼재될 경우, 컴포넌트가 비대해지고 가독성이 떨어져 유지보수가 어려워지는 문제가 있었습니다.",
          ],
          solutions: [
            "Zustand를 활용한 전역 상태 관리 아키텍처 도입: Prop Drilling과 데이터 불일치 문제를 해결하기 위해 Zustand 기반의 전역 스토어를 도입했습니다. 현재 선택된 콜 정보, 필터 옵션 등 여러 컴포넌트가 공유해야 하는 핵심 데이터를 중앙에서 관리하여, 어떤 컴포넌트에서든 항상 최신 데이터를 일관되게 사용할 수 있도록 설계했습니다.",
            "Intersection Observer 기반 무한 스크롤 구현: 초기 로딩 성능을 최적화하기 위해, 첫 페이지의 데이터만 먼저 로드하고 사용자가 스크롤을 내릴 때 Intersection Observer가 이를 감지하여 다음 페이지 데이터를 비동기적으로 불러오는 무한 스크롤을 구현했습니다. 이를 통해 초기 로딩 시간을 대폭 단축하고 서버 부하를 감소시켰습니다.",
            "Custom Hook을 통한 비즈니스 로직의 분리 및 추상화: useInfiniteCallList와 같은 커스텀 훅을 만들어 API 연동, 데이터 정제, 무한 스크롤 상태 관리 등 복잡한 비즈니스 로직을 UI 컴포넌트로부터 완전히 분리했습니다. 이를 통해 컴포넌트는 오직 UI 렌더링에만 집중할 수 있게 하여 관심사 분리(SoC) 원칙을 지켰고, 로직의 재사용성과 테스트 용이성을 높였습니다.",
          ],
          codeSnippets: [
            {
              title: "무한 스크롤 커스텀 훅",
              description:
                "react-query의 useInfiniteQuery와 Intersection Observer를 결합하여 통화 목록 데이터 페칭과 무한 스크롤 로직을 캡슐화",
              code: `import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
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
          details: `수만 건 이상의 대규모 통화 데이터를 효율적으로 관리하고, 개별 고객 정보를 정밀하게 수정하는 CRM 기능을 개발했습니다. 이 과제의 핵심은 대용량 데이터 조회 시의 성능 최적화, 상세 페이지에서의 사용자 경험(UX) 극대화, 그리고 복잡한 로직을 체계적으로 관리하는 유지보수하기 좋은 코드 아키텍처 설계였습니다.

• 서버 사이드 데이터 처리: 필터링, 정렬, 페이지네이션 등 모든 데이터 조작을 서버 사이드에서 처리하여, 대규모 데이터셋에서도 클라이언트 부하 없이 빠르고 일관된 성능을 보장합니다.
• 사용자 컨텍스트 보존: 상세 페이지 진입 후 '뒤로가기' 시, 이전에 설정한 필터, 정렬, 페이지, 스크롤 위치까지 완벽하게 복원하여 사용자의 탐색 흐름이 끊기지 않도록 UX를 개선했습니다.
• 변경 여부(Dirty State) 감지: 고객 정보 수정 시, 변경된 내용이 있을 때만 '저장' 버튼을 활성화하고 시각적 피드백을 제공하여 불필요한 API 호출과 사용자 실수를 방지합니다.
• 다중 선택 및 일괄 처리: 여러 고객을 동시에 선택하여 '차단 해제'와 같은 작업을 일괄적으로 처리하는 기능을 구현했으며, Set 자료구조를 활용해 중복 선택을 방지하고 로직을 최적화했습니다.
• 비동기 파일 다운로드: API로부터 받은 Blob 데이터를 브라우저 API(URL.createObjectURL)를 활용해 처리하는, 비밀번호로 보호된 엑셀 다운로드 기능을 구현했습니다.`,
          challenges: [
            "대용량 데이터 조회 성능 저하: 수만 건의 데이터를 클라이언트 사이드에서 처리할 경우 발생하는 심각한 초기 로딩 지연과 브라우저 과부하 문제를 해결해야 했습니다.",
            "파편화된 사용자 경험 및 데이터 유실 위험: 페이지 이동 시 검색 조건이 초기화되거나, 수정 중인 내용을 저장하지 않고 이탈하는 등 사용자의 작업 흐름을 방해하고 데이터 유실을 유발할 수 있는 시나리오를 방지해야 했습니다.",
            "UI와 비즈니스 로직의 강한 결합: 고객 정보 수정 폼과 같이 복잡한 상태 로직이 UI 컴포넌트 내에 직접 구현될 경우, 코드의 가독성이 떨어지고 재사용이 불가능해져 유지보수 비용이 증가하는 문제가 있었습니다.",
          ],
          solutions: [
            "서버 사이드 프로세싱 전면 도입: 모든 데이터 조작을 서버에 위임하는 서버 사이드 처리 방식을 채택하여, 클라이언트의 부담을 최소화하고 대용량 데이터에서도 일관된 고성능을 확보했습니다.",
            "사용자 컨텍스트 보존 및 상태 기반 UX 최적화: react-router의 location.state를 활용하여 페이지 이동 후에도 이전 필터, 정렬, 스크롤 위치를 완벽하게 복원했습니다. 또한, 폼의 '변경 여부(Dirty State)'를 실시간으로 감지하여 저장 버튼 활성화 여부를 제어하는 등, 상태에 기반한 세심한 UX를 설계하여 사용자 편의성을 극대화했습니다.",
            "Custom Hook을 통한 로직의 분리 및 추상화: useCustomerInfoForm과 같은 커스텀 훅을 설계하여, 고객 정보 수정 폼의 복잡한 상태 관리 로직(입력값, 초기값 대비 변경 여부 등)을 UI 컴포넌트로부터 완전히 분리했습니다. 이를 통해 관심사 분리(SoC) 원칙을 실현하고, 코드의 가독성, 재사용성, 테스트 용이성을 크게 향상시켰습니다.",
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
          outcome:
            "개발 속도 30% 향상, 번들 크기 15% 감소, 팀원 온보딩 시간 단축",
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
          problem:
            "사용자가 폼 제출 후 에러를 확인하고 수정하는 과정에서 UX 저하",
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
    },
    {
      id: "2",
      title: "Hey-there ver1.0",
      description:
        "유지보수가 불가능했던 기존 코드의 기술 부채를 해결하고 사용자 경험(UX)을 개선한 Hey-there 리뉴얼 프로젝트",
      icon: "💇‍♀️",
      technologies: [
        "React",
        "TypeScript",
        "Zustand",
        "TanStack Query",
        "Emotion",
        "i18next",
      ],
      gradient: "bg-gradient-to-br from-pink-400 to-rose-400",
      featured: true,
      category: "main",
      role: "프론트엔드 개발자",
      projectDuration: "12개월",
      teamSize: "프론트엔드 3명, 백엔드 3명, 디자이너 2명",
      achievements: [
        "모노레포 기반 아키텍처 설계 및 공통 컴포넌트/표준 API 레이어 구축 → 팀 생산성과 코드 일관성 향상",
        "JWT 이중 토큰 + Axios Interceptor 기반 인증 시스템 구현 → 보안성과 UX 동시 확보",
        "Victory.js 기반 대시보드(차트·테이블)와 복잡한 설정 페이지 개발 → Dirty Checking·성능 최적화 적용",
        "서버 응답 기반 동적 UI 설계 → 백엔드 설정만으로 확장 가능한 구조 확보",
        "실시간 폼 검증·온보딩·가이드 제공 등 UX 중심 기능 구현",
      ],
      learnings: [
        "초기 아키텍처 설계가 장기적 개발 효율성에 미치는 영향 체감",
        "상태 관리·성능 최적화(Dirty Checking, useMemo 등) 실무 적용 경험",
        "복잡한 설정을 직관적 UI로 단순화하는 UX 설계 역량 강화",
        "검증된 아키텍처 패턴을 기능 간 확장·재사용하며 코드 일관성 확보",
      ],
      hasDetailPage: true,
      detailLevel: 3, // 상세 레벨로 변경
      imagePath: "/images/projects/project_img_2.png",
      detailedWork: [
        {
          title: "프로젝트 셋팅 & 공통 컴포넌트",
          description:
            "확장성 고려 아키텍처 설계, API 레이어 표준화, 공통 컴포넌트 시스템 구축, 인증 기반 라우팅, 전역 유틸리티 라이브러리, 핵심 라이브러리 도입",
          color: "indigo",
          details: `프로젝트 초기 멤버로서, 개별 기능 개발을 넘어 팀 전체의 개발 생산성 향상, 코드 품질 표준화, 그리고 향후 서비스 확장에 대비한 기술적 기반을 설계하고 구축했습니다.

• 확장성을 고려한 프로젝트 아키텍처 설계: 모노레포(Monorepo) 스타일의 구조로 여러 애플리케이션을 독립적으로 관리하며, 공통 코드는 최상위 레벨에서 재사용할 수 있도록 설계하여 지속 가능한 확장성 확보
• API 요청 레이어 표준화: axios 인스턴스 기반의 중앙화된 API 요청 구조 설계로 코드 중복 제거 및 일관성 확보
• 공통 컴포넌트 시스템 구축: SelectBox, Input, Tooltip, Pagination 등 수십 개의 UI 컴포넌트를 사내 디자인 가이드에 맞춰 제작하여 UI 일관성 확보
• 라우팅 시스템 기반 구조 설계: PublicRouter와 PrivateRouter 구조로 인증 기반 접근 제어를 위한 기본 프레임워크 구축
• 전역 유틸리티 라이브러리 제작: 날짜 포맷팅, 숫자 콤마 처리, 쿠키 핸들링, 객체 깊은 복사 등 핵심 유틸리티 함수들을 중앙화
• 핵심 라이브러리 도입 및 팀 전파: React Query(TanStack Query)와 i18next를 도입하여 서버 상태 관리 자동화 및 다국어 지원 기반 마련

**설계 의도**: 미래에 다양한 종류의 애플리케이션(고객사 어드민, 내부 관리자, 최종 사용자 UI 등)이 추가될 것을 예상하여 모노레포 스타일의 아키텍처를 채택했습니다. 각 앱은 독립적인 진입점과 라우팅 구조를 가지며, 공통 코드는 최상위 레벨에서 재사용하여 중복을 방지하고 일관성을 유지합니다.

팀이 예측 가능하고 안정적인 환경에서 빠르고 효율적으로 개발을 진행할 수 있는 기틀을 마련했습니다.`,
          challenges: [
            "프로젝트 초기에 아키텍처를 제대로 잡지 않으면 규모가 커지고 협업 인원이 늘어났을 때 코드의 복잡성이 기하급수적으로 증가하고 유지보수 비용이 커지는 문제",
            "반복적인 UI 요소를 매번 새로 개발하는 것은 비효율적이며 프로젝트 전체의 UI/UX 일관성을 해치는 주요 원인",
            "작지만 빈번하게 사용되는 로직들이 여러 파일에 흩어져 있으면 미묘한 차이로 인해 버그가 발생하거나 중복 코드로 인해 코드베이스가 무거워지는 문제",
            "서버 데이터의 비동기적 특성(로딩, 에러, 캐싱)을 클라이언트 상태 관리 방식으로 다루는 것은 비효율적",
          ],
          solutions: [
            "코드의 응집도를 높이고 결합도를 낮추는 역할 기반 폴더 구조를 도입하여 특정 기능 수정이 다른 부분에 미치는 영향을 최소화",
            "재사용 가능한 공통 컴포넌트 라이브러리를 구축하여 개발 속도를 높이고 UI 일관성을 확보, react-hook-form과 같은 상태 관리 라이브러리와 쉽게 연동되도록 설계",
            "검증된 유틸리티 함수들을 한곳에 모아 팀 전체가 재사용하도록 함으로써 코드의 안정성과 신뢰도를 높이고 중복 코드 제거",
            "React Query를 도입하여 서버 상태 관리를 자동화하고 캐싱을 통해 불필요한 API 호출을 줄여 성능과 사용자 경험을 개선",
          ],
          codeSnippets: [
            {
              title: "프로젝트 아키텍처 구조",
              code: `my-project/
├── .eslintrc
├── package.json
├── tsconfig.json
├── vite.config.ts
│
├── public/
│
└── src/
    │
    ├── apps/           # [핵심] 여러 애플리케이션을 관리하는 Monorepo 스타일 구조
    │   ├── customer-admin/     # 고객사 관리자용 어드민
    │   ├── main-app/           # 최종 사용자용 UI
    │   └── internal-backoffice/  # 내부 운영팀용 백오피스
    │
    ├── components/     # [핵심] 여러 앱에서 공유하는 공통 컴포넌트
    │
    ├── hooks/          # [핵심] 공유 커스텀 훅
    │
    ├── store/          # 공유 전역 상태
    │
    ├── styles/         # 전역 스타일
    │
    └── utils/          # [핵심] 공유 유틸리티 함수`,
              language: "bash",
            },
          ],
        },
        {
          title: "로그인 / 회원가입 / 아이디 찾기 / 비밀번호 찾기",
          description:
            "폼 검증 및 UX 개선, 약관 동의 컴포넌트, 상태 관리 및 API 연동, 보안 및 에러 처리, 사용자 경험 강화",
          color: "emerald",
          details: `로그인·회원가입 프로세스 전반을 담당하면서, 단순히 기능 구현에 그치지 않고 사용자 경험(UX) 개선, 보안, 상태 관리 구조화, 재사용 가능한 컴포넌트 설계까지 고려하여 개발했습니다.

• 실시간 폼 검증: 이메일 정규식 검증, 비밀번호 복잡도 검사, 실시간 일치 여부 확인으로 사용자 경험 최적화
• 약관 동의 컴포넌트: 전체 동의/개별 동의 기능을 재사용 가능한 컴포넌트로 분리하여 법적 이슈 방지
• 커스텀 훅 패턴: useLogin, useSignup, usePasswordCheck 등으로 비즈니스 로직을 컴포넌트와 분리
• 보안 및 에러 처리: 상세 에러 코드 매핑, 재시도 로직으로 사용자 친화적 메시지 제공
• 사용자 경험 강화: 로그인 유지(7일), 파트너 연동 토큰 처리, 일관된 피드백 시스템

입력 과정에서 에러를 줄여 사용자 경험을 개선하고, 코드 재사용성과 테스트 용이성을 높이는 것을 우선시했습니다.`,
          challenges: [
            "폼 제출 시점에만 에러를 알려주면 사용자가 같은 과정을 반복해야 하는 불편",
            "약관 동의 시 하위 항목까지 명확히 관리해야 법적 이슈 방지",
            "단순히 서버 에러를 노출하는 대신 사용자가 이해 가능한 메시지 제공 필요",
            "사용자 편의성과 파트너 서비스와의 안정적인 연동 모두 고려",
          ],
          solutions: [
            "실시간 검증 로직으로 입력 과정에서 에러를 즉시 수정 가능하도록 UX 최적화",
            "체크박스 상태를 isAllChecked로 관리하며 전체 선택 시 하위 항목 일괄 갱신",
            "서버 에러 코드를 사용자 친화적인 메시지로 변환하여 서비스 신뢰도 확보",
            "별도의 훅으로 관리하여 코드 분리 및 유지보수성 확보",
          ],
          codeSnippets: [
            {
              title: "약관 동의 컴포넌트",
              code: `function TermsAgreement({ agreements, setAgreements }) {
  const isAllChecked = Object.values(agreements).every((item) => item.checked);

  const toggleAll = (checked) => {
    setAgreements(
      Object.fromEntries(
        Object.entries(agreements).map(([k, v]) => [k, { ...v, checked }])
      )
    );
  };

  return (
    <div>
      <CheckBox checked={isAllChecked} onChange={(e) => toggleAll(e.target.checked)}>
        전체 동의
      </CheckBox>
      {Object.entries(agreements).map(([key, { label, checked }]) => (
        <CheckBox key={key}
          checked={checked}
          onChange={(e) =>
            setAgreements({ ...agreements, [key]: { label, checked: e.target.checked } })
          }
        >
          {label}
        </CheckBox>
      ))}
    </div>
  );
}`,
              language: "jsx",
            },
            {
              title: "커스텀 훅 패턴",
              code: `// useLogin 훅
const useLogin = () => {
  const login = async (credentials) => {
    // 로그인 성공 시 사용자 정보 저장
    // 언어 설정 로컬스토리지 반영
    // 온보딩 단계에 따라 페이지 라우팅
  };
  
  return { login };
};

// useSignup 훅  
const useSignup = () => {
  const signup = async (userData) => {
    // 이메일 인증 모달 띄우기
    // 인증 재발송 로직 처리
    // 미인증 사용자 대응
  };
  
  return { signup };
};`,
              language: "typescript",
            },
          ],
        },
        {
          title: "JWT 토큰 기반 인증 시스템",
          description:
            "이중 토큰 아키텍처, Axios Interceptor 기반 자동 토큰 관리, 클라이언트 측 토큰 만료 검증, 멀티 앱 아키텍처 지원, 라우트 가드 시스템",
          color: "cyan",
          details: `기업급 서비스에서 요구되는 보안성과 사용자 경험을 모두 고려한 JWT 인증 시스템을 설계·구현했습니다.

• 이중 토큰 아키텍처: Access Token(15분)과 Refresh Token(7일)을 분리하여 보안성과 사용자 편의성 동시 확보
• Axios Interceptor 기반 자동 토큰 관리: 401 에러 시 자동 토큰 갱신 및 실패 요청 재시도로 끊김 없는 서비스 제공
• 클라이언트 측 토큰 만료 검증: Base64 디코딩을 통한 선제적 만료 감지로 불필요한 네트워크 요청 최소화
• 멀티 앱 아키텍처 지원: Admin/Manager 앱별 독립된 토큰 키 관리로 권한 체계 충돌 방지
• 라우트 가드 시스템: PrivateRouter를 통한 페이지 단위 인증 강제로 비인가 접근 원천 차단

"이중 토큰 + 자동 갱신 + 라우트 가드"를 기반으로 안정적이고 매끄러운 로그인 경험을 제공했습니다.`,
          challenges: [
            "토큰을 단일로 관리하면 만료 주기를 길게 가져가야 하므로 탈취 시 보안 리스크가 큼",
            "토큰 만료 시 매번 사용자가 로그인해야 하는 번거로움으로 서비스 이용 흐름 단절",
            "서버에서 401 에러를 받기 전까지 만료를 모르는 상황으로 불필요한 네트워크 요청 발생",
            "하나의 프로젝트 내 Admin/Manager 앱이 공존하여 앱마다 권한 체계와 인증 서버가 달라 충돌 발생",
          ],
          solutions: [
            "Access Token(단기) + Refresh Token(장기) 구조로 세션 하이재킹 리스크 완화",
            "Axios Interceptor를 활용한 Silent Refresh로 끊김 없는 서비스 이용 보장",
            "JWT Base64 디코딩을 통한 클라이언트 측 선제적 만료 감지로 UX 개선",
            "앱별 독립된 토큰 키 관리로 권한 체계 충돌 방지 및 보안 강화",
          ],
          codeSnippets: [
            {
              title: "Axios Interceptor 자동 토큰 관리",
              code: `axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) config.headers.Authorization = \`Bearer \${accessToken}\`;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      const newAccessToken = await getNewAccessToken();
      if (newAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);
        err.config.headers.Authorization = \`Bearer \${newAccessToken}\`;
        return axiosInstance(err.config); // 실패 요청 재시도
      }
    }
    return Promise.reject(err);
  }
);`,
              language: "typescript",
            },
            {
              title: "클라이언트 측 토큰 만료 검증",
              code: `function isTokenExpired(token: string) {
  const { exp } = JSON.parse(atob(token.split(".")[1]));
  return exp * 1000 < Date.now();
}

// 멀티 앱 아키텍처 지원
const tokenKey = pageType === "ADMIN" ? "adminAccessToken" : "managerAccessToken";`,
              language: "typescript",
            },
          ],
        },
        {
          title: "리포트 & 대시보드",
          description:
            "Victory.js 기반 복합 데이터 시각화, 실시간 데이터 가공 및 비즈니스 메트릭 계산, 성능 최적화, 고급 테이블 컴포넌트 개발",
          color: "violet",
          details: `10개+ 차트와 4개 테이블 위젯을 포함한 복합 대시보드를 설계·구현했습니다.

• Victory.js 기반 복합 데이터 시각화: 스택바, 바차트, 파이차트 등 다양한 차트 구현 및 커스텀 툴팁 적용
• 실시간 데이터 가공 및 비즈니스 메트릭 계산: API 응답 데이터를 실시간으로 가공하여 CTR, 체류시간 등 KPI 제공
• 성능 최적화: useMemo를 활용한 테이블 데이터 렌더링 최적화, useCallback으로 이벤트 핸들러 재생성 방지
• 고급 테이블 컴포넌트: 동적 컬럼 관리, 셀 호버 툴팁, 원클릭 데이터 복사, 데이터 타입별 자동 포맷팅
• 복잡한 레이아웃 설계: 12컬럼 CSS Grid 시스템 기반 위젯 배치로 기업용 대시보드 수준의 레이아웃 구성

React의 컴포넌트 철학과 완벽하게 일치하는 Victory.js를 선택하여 JSX로 선언적 차트 구성과 독립적 커스터마이징을 구현했습니다.`,
          challenges: [
            "대량 데이터 재계산으로 인한 성능 저하 - 매 렌더링마다 전체 JSX 재생성",
            "복잡한 비즈니스 메트릭 계산 로직 구현",
            "10개+ 차트와 4개 테이블의 복합 레이아웃 관리",
            "실시간 데이터 가공 시 UI 깜빡임 방지",
          ],
          solutions: [
            "useMemo를 활용한 테이블 데이터 렌더링 최적화로 대량 데이터 재계산 방지",
            "실시간 데이터 가공 로직을 별도 함수로 분리하여 KPI 계산 자동화",
            "12컬럼 CSS Grid 시스템 기반 레이아웃으로 위젯별 유연한 배치",
            "React Query를 활용한 비동기 데이터 처리 및 개인화된 설정 로컬 캐싱",
          ],
          codeSnippets: [
            {
              title: "실시간 비즈니스 메트릭 계산",
              code: `// 실시간 클릭률 계산
clickRate: ((item.clickCount / item.viewCount) * 100).toFixed(2)

// 시간 데이터 포맷팅
const modifiedCountTimeSummary = () => {
  const hour = Math.floor(originalTime / 3600).toString().padStart(2, '0');
  const minute = Math.floor((originalTime % 3600) / 60).toString().padStart(2, '0');
  return \`\${hour}:\${minute}:\${second}\`;
};

// 다국어 디바이스 타입 매핑
const deviceTypeMap = {
  PC: \`\${t('dashboard.pc')}\`, 
  MOBILE: \`\${t('dashboard.mobile')}\`
};`,
              language: "typescript",
            },
            {
              title: "성능 최적화된 테이블 컴포넌트",
              code: `const tableDataList = useMemo(
  () => tableData?.map((item, index) => (
    <ul css={styles.tableLine} key={\`data_\${index}\`}>
      {Object.entries(item).map(([key, value], columnIndex) => {
        if (key === 'date' || key === 'id') return null;
        const transformedValue = transformValue(value);
        const isColumnWide = key.includes('name') || key.includes('clientId');
        
        return (
          <li
            key={key}
            css={[styles.tableCell(columnIndex)]}
            style={{ width: tablePercent[key] }}
            onMouseEnter={(e) => handleMouseEnter(e, isColumnWide)}
            onMouseLeave={handleMouseLeave}
            onClick={() => copyTableValue(transformedValue)}
          >
            {transformedValue}
          </li>
        );
      })}
    </ul>
  )),
  [copyTableValue, handleMouseEnter, tableData, tablePercent, transformValue]
);`,
              language: "typescript",
            },
          ],
        },
        {
          title: "온보딩 페이지",
          description:
            "React Router v6 기반 중첩 라우팅, Custom Hook 기반 상태 관리, 실시간 브랜드 미리보기, TypeScript 기반 타입 안전성",
          color: "amber",
          details: `관리자 전용 온보딩 시스템으로 신규 가입자가 서비스 설정을 단계별로 완료할 수 있는 가이드형 페이지를 설계·구현했습니다.

• React Router v6 기반 중첩 라우팅: 각 단계를 독립적인 URL로 관리하여 브라우저 뒤로가기/앞으로가기 지원 및 특정 단계 직접 접근 가능
• Custom Hook 기반 상태 관리: API 호출과 네비게이션 로직을 추상화하여 컴포넌트 재사용성 향상 및 단계별 자동 라우팅 처리
• 실시간 브랜드 미리보기: 색상 선택 시 즉시 시각적 영역 배경색 변경으로 실제 브랜드 적용 모습 미리보기 제공
• TypeScript 기반 타입 안전성: Enum을 활용한 온보딩 단계와 비즈니스 카테고리 정의, Interface로 API 데이터 구조 명시

Private Router 하위에 배치하여 인증된 사용자만 접근 가능하도록 보안을 강화하고, 사용자 경험을 매끄럽게 만드는 온보딩 시스템을 완성했습니다.`,
          challenges: [
            "온보딩의 각 단계를 독립적인 URL로 관리하면서도 사용자 경험 유지",
            "API 호출과 네비게이션 로직의 복잡한 상태 관리",
            "실시간 미리보기로 인한 성능 최적화 필요",
            "타입 안전성을 보장하면서도 유연한 온보딩 플로우 구현",
          ],
          solutions: [
            "React Router v6 중첩 라우팅으로 단계별 독립적 URL 관리 및 브라우저 네비게이션 지원",
            "Custom Hook으로 API 호출과 네비게이션 로직 추상화하여 컴포넌트 재사용성 향상",
            "상태 변경 시 즉시 시각적 피드백 제공으로 사용자 선택 확신도 향상",
            "Enum과 Interface를 활용한 TypeScript 기반 타입 안전성으로 런타임 에러 방지",
          ],
          codeSnippets: [
            {
              title: "React Router v6 중첩 라우팅 구조",
              code: `{
  path: '/onboarding',
  children: [
    {
      path: '',
      element: <OnBoardingBegin />,
    },
    {
      path: '/onboarding/brand-info',
      element: <OnBoardingBrandInfo />,
    },
    {
      path: '/onboarding/move-to-link',
      element: <OnBoardingMoveToLink />,
    },
  ],
}`,
              language: "jsx",
            },
            {
              title: "Custom Hook 기반 상태 관리",
              code: `const {
  mutate: stepUpdateMutate,
  isLoading: isLoadingOnBoardingStepUpdate,
  isSuccess: isSuccessStepUpdate,
} = useMutation(stepUpdateAPI, {
  onSuccess: (response, value) => {
    switch (value.step) {
      case OnBoardingStepCase.SET_BRAND_VALUE:
        navigate('/onboarding/brand-info');
        break;
      case OnBoardingStepCase.SET_BUTTON_GROUP:
        navigate('/onboarding/move-to-link', {
          state: { mainColor: value.color },
        });
        break;
    }
  }
});`,
              language: "typescript",
            },
            {
              title: "TypeScript 기반 타입 안전성",
              code: `export enum OnBoardingStepCase {
  BEGIN = 'BEGIN',
  SET_BRAND_VALUE = 'SET_BRAND_VALUE',
  SET_BUTTON_GROUP = 'SET_BUTTON_GROUP',
  COMPLETE = 'COMPLETE',
}

export enum BusinessCategory {
  SHOPPING_MALL = 'SHOPPING_MALL',
  SERVICE = 'SERVICE',
  FINANCE = 'FINANCE',
}

export interface BrandInfo {
  businessCategory: BusinessCategory;
  serviceName: string;
  mainColor: string;
}`,
              language: "typescript",
            },
          ],
        },
        {
          title: "버튼 설치 가이드",
          description:
            "플로팅 버튼 설치 스크립트 제공, 호스팅사별 맞춤 안내, 정적 데이터 기반 성능 최적화, 다국어 지원",
          color: "rose",
          details: `사용자가 '헤이데어' 서비스의 플로팅 버튼과 같은 기능을 자신의 웹사이트에 쉽게 설치할 수 있도록 안내하는 페이지를 개발했습니다.

• 스크립트 제공: 웹사이트에 버튼을 설치하기 위한 기본 스크립트를 제공
• 호스팅사별 맞춤 안내: '카페24'와 같은 주요 호스팅사에 최적화된 맞춤 설치 스크립트와 가이드 제공
• 일관된 UI/UX: SettingLayout, ListContents 레이아웃 컴포넌트를 재사용하여 일관되고 예측 가능한 사용자 경험 제공
• 정적 데이터 활용: 서버 요청 없이 컴포넌트 내에 정적 배열로 데이터를 선언하여 즉각적인 렌더링 성능 확보

서비스 도입의 첫 관문으로, 사용자가 기술적인 장벽 없이 서비스를 시작할 수 있도록 돕는 핵심적인 역할을 수행했습니다.`,
          challenges: [
            "사용자 경험, 성능, 유지보수성 세 가지 요소를 최적으로 조화시키는 것",
            "다국어 지원(i18n)을 적용하면서도 서버 통신 없이 화면을 즉각적으로 렌더링",
            "정적인 콘텐츠를 효율적으로 관리하고 컴포넌트 재사용성을 극대화",
          ],
          solutions: [
            "공용 ListContents 컴포넌트를 재사용하여 UI의 일관성을 확보하고 개발 효율 향상",
            "정적 데이터 구조에 t() 함수를 적용하여 클라이언트 사이드에서 빠르게 다국어 텍스트 렌더링",
            "페이지에 필요한 데이터를 정적 배열로 선언하여 불필요한 네트워크 요청을 최소화하고 렌더링 성능 극대화",
          ],
          codeSnippets: [
            {
              title: "정적 데이터 기반 페이지 구조",
              code: `export default function ButtonInstall() {
  // 페이지 콘텐츠 데이터를 정적으로 선언
  const installTileContents = [
    {
      id: 1,
      name: t('setting.button_script'), // i18n 함수로 텍스트 처리
      visible: true,
      linkedList: '',
    },
    {
      id: 2,
      name: t('setting.hosting_company_script'), // i18n 함수로 텍스트 처리
      visible: true,
      linkedList: '',
    },
  ];

  return (
    <SettingLayout>
      {/* 공용 컴포넌트를 재사용하여 UI 일관성 유지 */}
      <ListContents
        listType={ListType.BUTTON_INSTALL}
        contentsList={installTileContents}
      />
    </SettingLayout>
  );
}`,
              language: "typescript",
            },
          ],
        },
        {
          title: "버튼 그룹 설정 기능 ",
          description:
            "다중 버튼 그룹 CRUD, 복잡한 상태 관리, Dirty Checking 성능 최적화, 관심사 분리 아키텍처",
          color: "teal",
          details: `여러 개의 버튼 그룹과 각 그룹에 속한 다수의 버튼을 한 화면에서 동시에 생성, 조회, 수정, 삭제(CRUD)할 수 있는 핵심 설정 페이지를 설계하고 개발했습니다.

• 통합 CRUD 기능: 버튼 그룹 목록 조회, 새로운 그룹 추가, 기존 그룹의 이름 및 순서 변경, 그룹 내 버튼 편집, 그룹 삭제 등 모든 데이터 관리 기능 제공
• 복잡한 상태 관리: 여러 버튼 그룹과 하위 버튼들의 상태(변경 여부, 신규 추가 여부, 유효성 등)를 클라이언트에서 정교하게 추적하고 관리
• 사용자 입력 유효성 검사: 저장 전, 각 그룹 및 버튼의 필수 값 입력 여부, 콘텐츠(스퀘어/카드) 연결 여부를 검사하고, 미흡한 부분은 모달을 통해 사용자에게 명확한 피드백 제공
• 데이터 유실 방지: 저장하지 않은 변경사항이 있을 때 useNavigationBlock 훅을 통해 경고창을 띄워 데이터 유실을 방지하는 안전장치 구현

복잡한 데이터 구조와 상태 변화를 클라이언트 사이드에서 정교하게 관리하여, 사용자에게는 직관적이면서도 강력한 편집 경험을 제공했습니다.`,
          challenges: [
            "다수의 중첩된 데이터 그룹을 동시에 편집할 때 발생하는 복잡성 관리",
            "사용자가 어떤 항목을 수정했고, 어떤 항목을 새로 추가했는지 클라이언트 단에서 효율적으로 추적",
            "API 통신, UI 상태와 명확히 분리하여 코드의 가독성과 유지보수성 확보",
            "불필요한 네트워크 요청을 줄여 성능을 최적화",
          ],
          solutions: [
            "관심사 분리를 통한 아키텍처 설계: 커스텀 훅과 Zustand를 조합하여 비즈니스 로직과 UI 상태 로직을 명확하게 분리",
            "Dirty Checking을 통한 성능 최적화: 사용자가 수정한 항목만 changedButtonGroups 객체에 추적하여 API 요청의 Payload 사이즈를 획기적으로 감소",
            "useButtonGroupSettingList 커스텀 훅으로 React-Query를 활용한 API 연동과 서버 데이터 동기화를 담당하여 컴포넌트가 UI 렌더링에만 집중",
            "다단계 유효성 검사와 자동 포커스 이동 기능으로 사용자 경험 향상",
          ],
          codeSnippets: [
            {
              title: "관심사 분리와 성능 최적화",
              code: `// 1. 커스텀 훅과 Zustand 스토어에서 필요한 상태와 함수를 가져옴
const {
  changedButtonGroups,
  saveButtonGroupsMutate,
  // ...
} = useButtonGroupSettingList(setIsBlock);

const {
  visibleChangedButtonGroups,
  buttonGroupInvalidTiles,
  // ...
} = useSettingListStore(/* ... */);

// 2. 저장 로직을 담당하는 함수
const submitButtonGroupSettingForm = () => {
  // 유효성 검사 로직 (콘텐츠 연결 여부, 필수값 등)
  // ...

  // 변경된 데이터('changedButtonGroups')만 추출하여 배열로 변환
  const changedButtonGroupArray = Object.values(changedButtonGroups);
  
  // API 명세에 맞게 데이터 가공 (e.g., 임시 플래그 'isNew' 제거)
  const convertChangedButtonGroupArray = changedButtonGroupArray.map(
    (buttonGroup) => {
      if (buttonGroup.isNew) {
        delete buttonGroup.id;
        delete buttonGroup.isNew;
      }
      // ... (하위 버튼 리스트도 동일하게 처리)
      return buttonGroup;
    },
  );

  // 3. React-Query의 Mutate 함수를 호출하여 서버에 최적화된 데이터 전송
  saveButtonGroupsMutate(
    {
      buttonGroupList: convertChangedButtonGroupArray,
      visibleList: visibleChangedButtonGroupsArray,
    },
    {
      onSuccess: (response) => { /* ... (성공 후처리: 상태 초기화 등) */ },
    },
  );
};`,
              language: "typescript",
            },
          ],
        },
        {
          title: "스퀘어 설정 기능",
          description:
            "검증된 아키텍처 재사용, 컴포넌트 생명주기 기반 상태 관리, 의존성 데이터 안전 처리, 선제적 UX 최적화",
          color: "fuchsia",
          details: `서비스의 또 다른 핵심 콘텐츠인 '스퀘어'를 생성하고 관리하는 페이지를 개발했습니다.

• 스퀘어 CRUD 기능: 스퀘어 목록의 조회, 신규 생성, 수정, 삭제 등 전체 관리 기능 제공
• 의존성 데이터 관리: 스퀘어 설정에 필수적인 '카드 맵(Card Map)' 데이터를 별도의 API로 조회하고, 전역 상태(Zustand useCardMapStore)로 관리하여 다른 컴포넌트에서도 데이터를 참조하고 활용할 수 있도록 설계
• 검증된 아키텍처 재사용: API 로직을 처리하는 커스텀 훅(useSquareSettingList)과 UI 상태를 관리하는 Zustand 스토어(useSettingListStore) 구조를 그대로 재사용하여 개발 시간을 단축하고 유지보수성을 높임
• 선제적인 UI 상태 동기화: 새 스퀘어를 생성하면 해당 스퀘어 편집창을 자동으로 열고 첫 번째 탭을 활성화시키는 등, 사용자의 다음 행동을 예측하여 편의성을 높이는 UX 구현

앞서 '버튼 그룹 설정'에서 성공적으로 검증된 아키텍처를 재사용하여 개발 생산성과 코드 일관성을 극대화했습니다.`,
          challenges: [
            "기존의 성공적인 아키텍처를 효과적으로 재사용하면서, 스퀘어 도메인만이 가지는 '카드 맵' 데이터 의존성을 안전하게 처리",
            "비동기적으로 가져온 '카드 맵' 데이터가 다른 페이지의 상태와 충돌하지 않도록 컴포넌트의 생명주기에 맞춰 상태를 생성하고 소멸시키는 예측 가능하고 안정적인 상태 관리 로직 구현",
            "공통 로직을 추상화하고 재활용 가능한 패턴으로 정립하여 프로젝트 전체의 코드 품질과 일관성 향상",
            "메모리 누수 방지와 데이터 충돌 가능성을 원천적으로 차단",
          ],
          solutions: [
            "성공적인 아키텍처의 재사용 및 확장: '버튼 그룹 설정'의 커스텀 훅 + Zustand 스토어 아키텍처를 적극적으로 재사용하여 개발 시간을 단축하고 프로젝트 전체의 코드 품질과 일관성을 향상",
            "컴포넌트 생명주기를 활용한 안전한 비동기 상태 관리: useEffect와 useCallback을 사용하여 컴포넌트 마운트 시 데이터 조회, 언마운트 시 클린업 함수로 상태 초기화",
            "useEffect의 클린업 함수: 컴포넌트 언마운트 시 Zustand 스토어의 clearCardMap 액션을 호출하여 관련 상태를 깨끗하게 초기화하여 메모리 누수 방지",
            "useCallback으로 API 호출 함수 메모이제이션: 불필요한 리렌더링 시 함수가 재생성되는 것을 방지하여 성능 최적화",
          ],
          codeSnippets: [
            {
              title: "컴포넌트 생명주기 기반 상태 관리",
              code: `export default function SquareSetting() {
  // ...
  const {
    saveSquaresMutate,
    // ...
  } = useSquareSettingList(setIsBlock);

  // 카드맵 데이터 관리를 위한 Zustand 스토어 액션을 가져옴
  const { setCardMap, clearCardMap } = useCardMapStore();

  // 카드맵 API 호출 함수를 useCallback으로 메모이제이션
  const getCardMap = useCallback(async () => {
    const res = await cardMapAPI();
    if (res.cardMap) {
      setCardMap(res.cardMap);
    }
  }, [setCardMap]);

  // 컴포넌트 생명주기에 맞춰 데이터 Fetch 및 상태 초기화 로직 실행
  useEffect(() => {
    // 컴포넌트 마운트 시 데이터 조회
    getCardMap();

    // 컴포넌트 언마운트 시 실행될 클린업 함수
    return () => clearCardMap();
  }, [clearCardMap, getCardMap]);

  // ...
}`,
              language: "typescript",
            },
          ],
        },
        {
          title: "카드 설정 기능",
          description:
            "데이터 기반 동적 UI 렌더링, 서버 응답 기반 타입 필터링, 팩토리 패턴 객체 생성, 확장 가능한 아키텍처",
          color: "lime",
          details: `이미지, 영상 등 다양한 형태의 콘텐츠를 담을 수 있는 '카드'를 생성하고 관리하는 설정 페이지를 개발했습니다.

• 동적 카드 생성: 사용자가 드롭다운 메뉴에서 '영상 카드', '이미지 카드' 등 원하는 종류의 카드를 선택하여 동적으로 생성
• 데이터 기반 타입 필터링: 서버로부터 현재 생성 가능한 카드 타입 목록(availableTypeList)을 받아와 프론트엔드 전체 카드 목록과 비교하여 사용 가능한 카드만 노출
• 일관된 아키텍처 적용: SettingLayout, ListContents 등 공용 컴포넌트를 재사용하고, useCardSettingList 커스텀 훅과 useSettingListStore를 통해 상태 관리
• 효율적인 데이터 저장: 사용자가 변경한 데이터만 추적하여 서버에 전송하는 최적화 로직 적용

비즈니스 요구사항에 따라 생성 가능한 카드의 종류가 계속해서 변할 수 있다는 점을 고려하여, 서버 데이터에 기반해 UI가 동적으로 렌더링되는 유연하고 확장 가능한 구조를 설계했습니다.`,
          challenges: [
            "다양한 종류의 카드를 하나의 인터페이스에서 일관된 방식으로 처리하면서 향후 새로운 카드 타입 추가에 유연하게 대응",
            "프론트엔드 코드를 수정하고 재배포하지 않아도 백엔드 설정 변경만으로 UI가 자동으로 업데이트되는 구조 구현",
            "변화가 잦은 관리자 페이지의 특성을 고려한 장기적인 유지보수 효율성 확보",
            "프로젝트 전체의 코드 일관성과 안정성 유지",
          ],
          solutions: [
            "데이터 기반의 동적 UI 렌더링: 서버에서 받은 availableTypeList를 기준으로 프론트엔드 CARD_CATEGORY를 필터링하여 사용 가능한 카드만 노출",
            "확장성 및 유지보수성 확보: 백엔드 API 응답값 변경만으로 새로운 카드 타입 추가에 유연하게 대응 가능한 구조 설계",
            "팩토리 패턴 개념을 활용한 객체 생성: onCreateCard 함수에서 선택된 타입에 맞는 초기 카드 객체를 생성하여 코드 구조 단순화",
            "일관된 아키텍처 적용: 다른 설정 페이지와 동일한 커스텀 훅 패턴과 상태 관리 구조로 프로젝트 전체 일관성 유지",
          ],
          codeSnippets: [
            {
              title: "데이터 기반 동적 UI 렌더링",
              code: `export default function CardSetting() {
  const t = useI18n();
  // 커스텀 훅을 통해 서버 상태(availableTypeList)와 상태 변경 함수(addNewCard)를 가져옴
  const {
    availableTypeList,
    addNewCard,
    // ...
  } = useCardSettingList(setIsBlock);

  // 사용자가 카드 타입을 선택했을 때 실행되는 함수
  const onCreateCard = (value: string) => {
    // 선택된 타입에 맞는 새 카드 데이터를 상태에 추가 (팩토리 역할)
    addNewCard(value as CardType);
    setOpenedCardIndex(0); // 새로 추가된 카드를 바로 열어주는 UX 처리
  };

  // 서버에서 받은 허용 목록(availableTypeList)을 기준으로
  // 프론트엔드 카드 목록을 필터링하여 UI에 노출할 카테고리 목록을 생성
  const cardCategories = CARD_CATEGORY.filter((type) => {
    return availableTypeList.includes(type.value);
  });

  return (
    <SettingLayout
      // 동적으로 필터링된 목록을 '아이템 추가' 컴포넌트에 전달
      additionalContentsList={cardCategories}
      onSelectAddItem={onCreateCard}
      // ...
    >
      {/* ... (카드 목록 렌더링) */}
    </SettingLayout>
  );
}`,
              language: "typescript",
            },
          ],
        },
      ],
      technicalChallenges: [
        {
          title: "실시간 알림 시스템",
          description: "웹소켓을 활용한 실시간 예약 알림 및 상태 업데이트",
          solution:
            "Socket.io 클라이언트 구현, 재연결 로직, 알림 우선순위 관리로 사용자 경험 향상",
          color: "blue",
        },
        {
          title: "다국어 지원",
          description: "i18next를 활용한 다국어 지원 및 동적 언어 전환",
          solution:
            "네임스페이스 기반 번역 관리, 동적 언어 감지, 폰트 최적화로 글로벌 서비스 준비",
          color: "green",
        },
      ],
      technicalDecisions: [
        {
          title: "CSS-in-JS 라이브러리 선택",
          problem:
            "스타일링 방식 선택 시 성능, 개발 경험, 팀 협업을 모두 고려해야 함",
          alternatives: [
            "Styled-components",
            "Emotion",
            "CSS Modules",
            "Tailwind CSS",
          ],
          chosenSolution: "Emotion",
          reasoning:
            "1) 런타임 성능이 우수 2) TypeScript 지원이 완벽 3) 서버사이드 렌더링 지원 4) 번들 크기가 작음 5) 팀원들의 학습 곡선이 낮음",
          outcome: "스타일링 개발 속도 40% 향상, 번들 크기 20% 감소",
        },
        {
          title: "상태 관리 전략",
          problem: "예약 시스템의 복잡한 상태 관리와 실시간 업데이트 요구사항",
          alternatives: ["Redux", "Zustand", "Context API", "Recoil"],
          chosenSolution: "Zustand + React Query 조합",
          reasoning:
            "1) Zustand로 클라이언트 상태 관리 2) React Query로 서버 상태 관리 3) 캐싱과 동기화 자동화 4) 개발자 경험 향상",
          outcome: "상태 관리 복잡도 50% 감소, 데이터 동기화 오류 0건",
        },
        {
          title: "실시간 통신 방식",
          problem: "예약 상태 실시간 업데이트와 알림 시스템 구현",
          alternatives: [
            "Polling",
            "Server-Sent Events",
            "WebSocket",
            "GraphQL Subscriptions",
          ],
          chosenSolution: "WebSocket (Socket.io)",
          reasoning:
            "1) 양방향 실시간 통신 2) 연결 안정성 보장 3) 재연결 로직 내장 4) 브라우저 호환성 우수",
          outcome: "실시간 알림 전송률 99.9%, 사용자 만족도 30% 향상",
        },
      ],
      codeSnippets: [
        {
          title: "실시간 알림 커스텀 훅",
          description: "Socket.io를 활용한 실시간 알림 시스템 구현",
          code: `const useRealtimeNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL);
    
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('reservation_update', (data) => {
      setNotifications(prev => [...prev, data]);
      showToast(data.message);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => socket.disconnect();
  }, []);

  return { notifications, isConnected };
};`,
          language: "typescript",
        },
      ],
      screenshots: [
        "/images/projects/heydear-dashboard.png",
        "/images/projects/heydear-booking.png",
        "/images/projects/heydear-settings.png",
      ],
    },
    // Side Projects
    {
      id: "3",
      title: "소분소분",
      description:
        "React와 TypeScript 기반의 협업 프로세스를 학습하며 프론트엔드 개발자로의 전환을 이끌어준 프로젝트입니다.",
      icon: "🔄",
      technologies: ["React", "TypeScript", "React Query", "SASS"],
      gradient: "bg-gradient-to-br from-green-400 to-emerald-400",
      link: "https://puzzled-spring-b65.notion.site/f56baa2824c349698999acd762c9955b",
      github: "https://github.com/SobunSobun/SobunSobun-FrontEnd",
      category: "side",
      role: "프론트엔드 개발자 (퍼블리셔에서 전환)",
      hasDetailPage: false,
      imagePath: "/images/projects/sobunsobun.png",
    },
    // Other Experience
    {
      id: "4",
      title: "펀드파트너스",
      description:
        "키보드 접근성과 WAI-ARIA 가이드를 준수하며 웹 접근성 중심의 인터랙티브 UI를 설계 및 구현했습니다.",
      icon: "💰",
      technologies: ["HTML5", "SCSS", "jQuery", "Slick Slider"],
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-400",
      link: "https://www.korfp.com/",
      category: "other",
      role: "퍼블리셔",
      hasDetailPage: false,
      imagePath: "/images/projects/fundpartners.png",
    },
    {
      id: "5",
      title: "Betree 홈페이지",
      description:
        "iframe을 활용한 VR 콘텐츠 뷰어를 연동하고, 다양한 디바이스에 대응하는 반응형 UI를 개발했습니다.",
      icon: "🌳",
      technologies: [
        "HTML5",
        "SCSS,",
        "JavaScript",
        "VR 콘텐츠 뷰어(iFrame 포함)",
        "크로스브라우징 대응",
      ],
      gradient: "bg-gradient-to-br from-teal-400 to-cyan-400",
      link: "https://betree.co.kr/kr",
      category: "other",
      role: "퍼블리셔",
      hasDetailPage: false,
      imagePath: "/images/projects/betree.png",
    },
    {
      id: "6",
      title: "켄싱턴 호텔 사이판",
      description:
        "PHP 템플릿 환경을 고려하여 유지보수가 용이한 마크업 구조를 설계하고, jQuery 기반의 동적 UI를 구현했습니다.",
      icon: "🏨",
      technologies: ["HTML5", "SCSS", "jQuery", "SCSS"],
      gradient: "bg-gradient-to-br from-indigo-400 to-purple-400",
      link: "https://www.kensingtonsaipan.com/kr/",
      category: "other",
      role: "퍼블리셔",
      hasDetailPage: false,
      imagePath: "/images/projects/kensington.png",
    },
  ];
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchProjects();
  return projects.filter((project) => project.featured);
}

export async function fetchProjectsByCategory(
  category: "main" | "side" | "other"
): Promise<Project[]> {
  const projects = await fetchProjects();
  return projects.filter((project) => project.category === category);
}
