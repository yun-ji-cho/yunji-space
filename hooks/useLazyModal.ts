import { useState, useCallback, type ComponentType } from "react";

interface UseLazyModalReturn<T> {
  Component: ComponentType<T> | null;
  isLoading: boolean;
  loadComponent: () => Promise<void>;
  resetComponent: () => void;
}

/**
 * 모달 컴포넌트를 지연 로딩하는 훅
 * @param importFn - 동적 import 함수
 * @returns 모달 컴포넌트와 로딩 상태, 로드 함수
 */
export function useLazyModal<T = any>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
): UseLazyModalReturn<T> {
  const [Component, setComponent] = useState<ComponentType<T> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadComponent = useCallback(async () => {
    // 이미 로드되었으면 다시 로드하지 않음
    if (Component) return;

    setIsLoading(true);
    try {
      const importedModule = await importFn();
      setComponent(() => importedModule.default);
    } catch (error) {
      console.error("Failed to load modal component:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [Component, importFn]);

  const resetComponent = useCallback(() => {
    setComponent(null);
  }, []);

  return {
    Component,
    isLoading,
    loadComponent,
    resetComponent,
  };
}
