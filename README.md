# Yunji Space - Frontend Developer Portfolio

> 🌐 **Live Demo**: [https://yunji-space.vercel.app](https://yunji-space.vercel.app)

프론트엔드 개발자 조윤지의 포트폴리오입니다. 사용자 경험과 코드 품질을 중시하며, 지속적인 리팩토링과 최적화를 통해 발전시킨 프로젝트입니다.

## 🛠️ 기술적 구현 & 의사결정

### Core Stack
- **Next.js 14 (App Router)** - SSR/SSG 최적화와 파일 기반 라우팅
- **TypeScript** - 타입 안정성과 개발 경험 향상
- **Tailwind CSS** - 일관된 디자인 시스템과 빠른 스타일링
- **Lucide React** - 일관성 있는 아이콘 시스템

### 주요 기술적 도전과 해결

#### 1. 타입 안전성 개선
**문제**: 초기 코드에 `any` 타입 남용, 런타임 에러 위험
```typescript
// Before
const [selectedWork, setSelectedWork] = useState<any>(null);

// After: 구체적인 인터페이스 정의
interface DetailedWork {
  title: string;
  description: string;
  color: string;
  details?: string;
  challenges?: string[];
  solutions?: string[];
}
```

#### 2. 컴포넌트 분리 및 관심사 분리
**문제**: 344줄의 거대한 ProjectDetailPage 컴포넌트
**해결**: 역할별 컴포넌트 분리로 143줄까지 축소
- `ProjectHeader` - 프로젝트 기본 정보
- `ProjectWork` - 담당 업무 영역  
- `ProjectGallery` - 이미지 갤러리
- `ProjectAchievements` - 성과 및 학습

#### 3. 에러 처리 및 사용자 경험
Next.js Error Boundary를 활용한 계층적 에러 처리:
```typescript
// app/error.tsx - 전역 에러
// app/projects/error.tsx - 프로젝트 섹션 에러
// app/projects/[id]/error.tsx - 상세 페이지 에러
```

#### 4. 웹 접근성 (a11y) 개선
- **포커스 트랩**: 모달에서 ESC 키와 Tab 순환 구현
- **Skip Navigation**: 키보드 사용자를 위한 바로가기 링크
- **ARIA 라벨**: 스크린 리더 지원

#### 5. 성능 최적화
- **진정한 Lazy Loading**: 사용자가 모달을 클릭할 때만 컴포넌트 로딩
```typescript
const handleWorkClick = async (work: DetailedWork) => {
  setSelectedWork(work);
  setIsModalOpen(true);
  
  // 모달이 아직 로드되지 않았다면 동적으로 로드
  if (!ModalComponent) {
    setIsModalLoading(true);
    const { default: Modal } = await import("@/components/WorkDetailModal");
    setModalComponent(() => Modal);
    setIsModalLoading(false);
  }
};
```

## 🔧 리팩토링 과정

### 완료된 개선사항
- ✅ TypeScript 타입 완전성 확보
- ✅ 컴포넌트 단일 책임 원칙 적용
- ✅ Error Boundary 3계층 구조 구현
- ✅ 웹 접근성 WCAG 2.1 AA 수준 준수
- ✅ 성능 최적화 (Bundle 분할, Lazy Loading)
- ✅ SEO 최적화 (Open Graph, 구조화된 메타데이터)
- ✅ 코드 중복 제거 및 재사용성 향상

### 아키텍처 설계 원칙
1. **타입 우선 설계** - TypeScript 인터페이스 먼저 정의
2. **컴포넌트 합성** - 큰 컴포넌트를 작은 단위로 분해
3. **선언적 프로그래밍** - 명령형보다는 선언형 스타일 선호
4. **에러 경계 설정** - 예상 가능한 실패 지점에 대비

## 🎯 기술적 특징

- **Type Safety**: 런타임 에러를 컴파일 타임에 방지
- **Component Architecture**: 재사용 가능하고 테스트하기 쉬운 구조
- **User Experience**: 로딩, 에러, 성공 상태 모두 고려한 UX
- **Performance**: Core Web Vitals 최적화
- **Accessibility**: 모든 사용자가 접근 가능한 인터페이스

## 🚀 실행 방법

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run lint     # 코드 품질 검사
```

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
├── components/          # 재사용 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── project/        # 프로젝트 관련 컴포넌트
├── types/              # TypeScript 타입 정의
├── data/               # 정적 데이터
└── lib/                # 유틸리티 함수
```

---

**이 프로젝트를 통해 보여드리고 싶은 것:**
- 체계적인 리팩토링 능력
- 사용자 중심 사고와 기술적 구현력의 균형
- 확장 가능하고 유지보수하기 좋은 코드 작성
- 웹 표준과 접근성에 대한 이해
