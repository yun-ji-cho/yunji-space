import type { DetailedWork } from "@/types/project";

export const heyThereDetailedWork: DetailedWork[] = [
  {
    title: "01. 확장성과 보안을 고려한 프로젝트 기반 시스템 설계",
    description:
      "여러 애플리케이션이 공존하는 복잡한 환경에서 지속 가능한 확장성을 확보하기 위해 모노레포 스타일 아키텍처와 이중 토큰 기반의 표준 인증 시스템을 설계하고 구축했습니다.",
    color: "blue",
    keyResults: [
      "✅ **모노레포 스타일 아키텍처**: 여러 앱(고객용, 관리자용, 내부용)이 공통 코드(컴포넌트, 훅, 유틸)를 재사용하는 `확장 가능하고 응집도 높은 구조`를 설계했습니다.",
      "✅ **이중 토큰 인증 시스템**: Access(15분)와 Refresh(7일) 토큰을 분리하고, `Axios Interceptor로 자동 갱신 로직을 구현`하여 `보안과 사용자 편의성`을 모두 확보했습니다.",
      "✅ **표준화된 개발 환경**: `중앙화된 API 요청 레이어, 인증 기반 라우팅 시스템, 공통 UI 컴포넌트 라이브러리를 구축`하여 개발 생산성과 코드 일관성을 높였습니다.",
      "✅ **서버 상태 관리 최적화**: `React Query를 도입`하여 비동기 데이터 처리 로직을 표준화하고 `캐싱을 통해 불필요한 API 호출을 최소화`했습니다.",
    ],
    problemSolving: [
      {
        challenge:
          "프로젝트 규모 확장 시 여러 앱(고객용, 관리자용) 간에 `권한 체계가 충돌`하고 `공통 코드의 관리가 파편화되`는 문제",
        solution:
          "`모노레포(Monorepo) 아키텍처`를 도입하여 앱별로 독립적인 토큰 키를 관리하도록 하고, 최상위 레벨에서 공유 컴포넌트와 훅을 재사용하여 `코드 중복을 원천적으로 방지하고 유지보수 비용을 절감`하며 지속 가능한 확장성을 확보했습니다.",
      },
      {
        challenge:
          "보안을 위해 Access Token의 만료 시간을 짧게 설정할 경우, 사용자가 로그인을 반복해야 하거나 작업 흐름이 끊기는 문제",
        solution:
          "Axios Interceptor를 활용하여 API 응답이 `401 에러일 경우 자동으로 감지`하도록 설계했습니다. 감지된 에러에 대해 `Refresh Token을 사용해 백그라운드에서 조용히(Silently) 새로운 Access Token을 재발급`하고, 실패했던 요청을 사용자가 인지하지 못하는 사이에 재시도하는 로직을 구현하여 `끊김 없는 사용자 경험`을 제공했습니다.",
      },
      {
        challenge:
          "프로젝트 초기에 아키텍처를 제대로 잡지 않으면 기능 수정이 `다른 부분에 미치는 영향(Side Effect)을 예측`하기 어려운 문제",
        solution:
          "역할 기반 폴더 구조를 도입하고 `Public/Private 라우트 가드`를 통해 페이지 접근 권한을 명확히 분리하여, 코드의 응집도를 높이고 시스템의 안정성을 향상시켰습니다.",
      },
    ],
    codeSnippets: [
      {
        title: "프로젝트 아키텍처 구조",
        description:
          "여러 애플리케이션이 공통 코드를 공유하는 Monorepo 스타일 구조",
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
      {
        title: "Axios Interceptor 자동 토큰 관리",
        description:
          "401 에러 발생 시 자동으로 토큰을 갱신하고 실패한 요청을 재시도하는 Silent Refresh 로직",
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
    ],
  },
  {
    title: "02. 사용자 유입부터 활성화까지 고려한 핵심 기능 및 UX 설계",
    description:
      "신규 사용자가 서비스를 처음 접하는 회원가입부터 서비스 가치를 체험하는 온보딩, 실제 웹사이트에 기능을 설치하는 핵심 여정 전체를 설계하고 개발하여 사용자 이탈을 방지하고 성공적인 서비스 도입을 유도했습니다.",
    color: "orange",
    keyResults: [
      "✅ **핵심 사용자 플로우 구축**: 회원가입, 온보딩, 버튼 설치 가이드 등 사용자의 핵심 여정을 A부터 Z까지 책임지고 개발했습니다.",
      "✅ **UX 최적화**: 실시간 폼 검증, 중첩 라우팅을 통한 단계별 온보딩, 호스팅사별 맞춤 안내 등 사용자 경험을 크게 개선했습니다.",
      "✅ **재사용 가능한 로직 설계**: Custom Hook(`useLogin`, `useSignup` 등)과 공통 레이아웃 컴포넌트를 활용하여 비즈니스 로직을 분리하고 개발 효율성을 높였습니다.",
      "✅ **안정성 및 법적 요구사항 충족**: 사용자 친화적 에러 처리, 재사용 가능한 약관 동의 컴포넌트 구현 등을 통해 서비스의 안정성과 신뢰도를 확보했습니다.",
    ],
    problemSolving: [
      {
        challenge:
          "회원가입, 온보딩, 기능 설치 등 각기 다른 페이지에 폼(Form)과 상태 관리 로직이 중복되어 비효율적이고 일관성이 저하되는 문제",
        solution:
          "`useLogin`, `useSignup` 등 인증 관련 로직과 온보딩 단계별 상태 관리 로직을 각각의 커스텀 훅으로 추상화하여, 컴포넌트는 UI에만 집중하고 로직은 재사용될 수 있도록 설계했습니다.",
      },
      {
        challenge:
          "여러 단계로 구성된 온보딩 과정에서 사용자가 이탈하거나, 브라우저의 '뒤로가기' 버튼을 눌렀을 때 경험이 끊기는 문제",
        solution:
          "React Router v6의 중첩 라우팅(Nested Routes)을 도입하여 온보딩의 각 단계를 고유한 URL로 관리했습니다. 이를 통해 사용자는 브라우저 네비게이션을 자연스럽게 사용할 수 있고, 어느 단계를 진행 중인지 명확히 인지할 수 있도록 UX를 개선했습니다.",
      },
      {
        challenge:
          "폼 제출 시점에만 유효성을 검사할 경우, 사용자가 잘못된 정보를 여러 번 반복해서 입력해야 하는 불편함",
        solution:
          "이메일 형식, 비밀번호 복잡도 등을 사용자가 입력하는 즉시 검증하는 '실시간 폼 검증' 로직을 구현하여, 사용자가 오류를 바로 인지하고 수정할 수 있도록 피드백 사이클을 단축했습니다.",
      },
      {
        challenge:
          "개발 지식이 없는 사용자가 자신의 웹사이트(특히 카페24 등 특정 호스팅사)에 스크립트를 설치하는 데 겪는 어려움",
        solution:
          "기본 설치 스크립트뿐만 아니라, 주요 호스팅사별로 최적화된 맞춤 스크립트와 상세 가이드를 정적 데이터 기반 페이지로 제공하여, 서버 요청 없이 빠르고 쉽게 정보를 확인할 수 있도록 구성했습니다.",
      },
    ],
    codeSnippets: [
      {
        title: "커스텀 훅을 활용한 로직 추상화",
        description:
          "로그인, 회원가입 등 복잡한 비즈니스 로직을 각각의 훅으로 분리하여 컴포넌트의 가독성과 재사용성을 높인 패턴",
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
      {
        title: "React Router v6 중첩 라우팅 구조",
        description:
          "온보딩의 각 단계를 독립적인 URL로 관리하여 브라우저 네비게이션을 지원하고 사용자 경험을 향상시킨 구조",
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
    ],
    screenshots: [
      "/images/projects/heythereDetail/heythere_2_1.png",
      "/images/projects/heythereDetail/heythere_2_2.png",
      "/images/projects/heythereDetail/heythere_2_3.png",
      "/images/projects/heythereDetail/heythere_2_4.png",
    ],
  },
  {
    title: "03. 확장 가능한 설정 페이지 아키텍처 설계 및 적용",
    description:
      "버튼 그룹, 스퀘어, 카드 등 복잡하고 유사한 다수의 설정 페이지를 효율적으로 개발하기 위해, Custom Hook과 Zustand 기반의 재사용 가능한 CRUD 아키텍처를 설계하고 적용했습니다.",
    color: "green",
    keyResults: [
      "✅ **재사용 아키텍처 구축**: 유사한 CRUD 기능 개발 시간을 60% 이상 단축하고 코드 일관성을 확보했습니다.",
      "✅ **Dirty Checking 최적화**: 변경된 항목만 추적하여 API Payload 사이즈를 획기적으로 감소시켰습니다.",
      "✅ **서버 데이터 기반 동적 UI**: 백엔드 설정값(availableTypeList)에 따라 프론트엔드 UI가 자동으로 변경되는 유연한 구조를 설계했습니다.",
      "✅ **데이터 유실 방지**: useNavigationBlock 훅을 통해 저장하지 않은 변경사항이 있을 경우 사용자에게 경고하여 데이터 유실을 방지했습니다.",
    ],
    problemSolving: [
      {
        challenge:
          "유사하지만 미묘하게 다른 여러 설정(버튼, 스퀘어, 카드) 페이지를 개발할 때 발생하는 코드 중복과 비효율성 문제",
        solution:
          "관심사 분리 원칙에 따라, API 연동(Custom Hook)과 UI 상태 관리(Zustand) 로직을 분리한 표준 아키텍처를 설계하여, 어떤 도메인이든 최소한의 노력으로 새로운 설정 페이지를 구현할 수 있도록 만들었습니다.",
      },
      {
        challenge:
          "사용자가 어떤 항목을 수정/추가했는지 클라이언트 단에서 효율적으로 추적하여 서버 부하를 최소화해야 하는 문제",
        solution:
          "원본 데이터와 현재 데이터를 비교하는 'Dirty Checking' 로직을 구현하여, 사용자가 실제로 변경한 데이터만 'changedItems' 객체로 관리하고 저장 시 이 데이터만 서버로 전송하도록 최적화했습니다.",
      },
      {
        challenge:
          "향후 백엔드에서 새로운 카드 타입이 추가될 때마다 프론트엔드 코드 수정 및 재배포가 필요한 비효율적인 구조",
        solution:
          "서버로부터 받은 '사용 가능한 타입 목록'을 기준으로 UI를 동적으로 렌더링하도록 설계하여, 백엔드 설정 변경만으로 프론트엔드에 새로운 기능이 자동 반영되도록 확장성을 확보했습니다.",
      },
    ],
    codeSnippets: [
      {
        title: "재사용 가능한 CRUD 아키텍처 (버튼 그룹 설정 예시)",
        description:
          "커스텀 훅과 Zustand를 조합하여 API 연동과 UI 상태 로직을 명확하게 분리한 구조. 이 패턴은 스퀘어, 카드 설정 등 여러 페이지에 동일하게 적용되었습니다.",
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
    screenshots: [
      "/images/projects/heythereDetail/heythere_3_0.png",
      "/images/projects/heythereDetail/heythere_3_1.png",
      "/images/projects/heythereDetail/heythere_3_2.png",
      "/images/projects/heythereDetail/heythere_3_3.png",
      "/images/projects/heythereDetail/heythere_3_4.png",
      "/images/projects/heythereDetail/heythere_3_5.png",
      "/images/projects/heythereDetail/heythere_3_6.png",
      "/images/projects/heythereDetail/heythere_3_7.png",
    ],
  },
  {
    title: "04. 리포트 & 대시보드",
    description:
      "Victory.js 기반 복합 데이터 시각화, 실시간 데이터 가공 및 비즈니스 메트릭 계산, 성능 최적화, 고급 테이블 컴포넌트 개발을 담당했습니다.",
    color: "purple",
    keyResults: [
      "**Victory.js 기반 복합 데이터 시각화**: 스택바, 바차트, 파이차트 등 10개+ 차트 구현 및 커스텀 툴팁 적용",
      "**실시간 데이터 가공**: API 응답 데이터를 실시간으로 가공하여 CTR, 체류시간 등 KPI 제공",
      "**성능 최적화**: `useMemo`를 활용한 테이블 데이터 렌더링 최적화, `useCallback`으로 이벤트 핸들러 재생성 방지",
      "**고급 테이블 컴포넌트**: 동적 컬럼 관리, 셀 호버 툴팁, 원클릭 데이터 복사, 데이터 타입별 자동 포맷팅",
      "**모듈형 그리드 시스템 설계**: 12컬럼 CSS Grid를 기반으로, 다양한 데이터 위젯을 유연하게 추가하고 배치할 수 있는 모듈형 대시보드 레이아웃 구성",
    ],
    problemSolving: [
      {
        challenge:
          "대량 데이터 재계산으로 인한 성능 저하 - 매 렌더링마다 전체 JSX 재생성",
        solution:
          "`useMemo`를 활용한 테이블 데이터 렌더링 최적화로 대량 데이터 재계산 방지",
      },
      {
        challenge: "복잡한 비즈니스 메트릭 계산 로직 구현",
        solution:
          "실시간 데이터 가공 로직을 별도 함수로 분리하여 KPI 계산 자동화",
      },
      {
        challenge: "10개+ 차트와 4개 테이블의 복합 레이아웃 관리",
        solution: "12컬럼 CSS Grid 시스템 기반 레이아웃으로 위젯별 유연한 배치",
      },
      {
        challenge: "실시간 데이터 가공 시 UI 깜빡임 방지",
        solution:
          "React Query를 활용한 비동기 데이터 처리 및 개인화된 설정 로컬 캐싱",
      },
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
    screenshots: ["/images/projects/heythereDetail/heythere_4_1.png"],
  },
];
