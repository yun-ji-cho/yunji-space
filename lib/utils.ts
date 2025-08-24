// 날짜 포맷팅
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

// 숫자 포맷팅
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("ko-KR").format(num);
}

// 이메일 검증
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 비밀번호 강도 검증
export function validatePassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("비밀번호는 최소 8자 이상이어야 합니다.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("대문자를 포함해야 합니다.");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("소문자를 포함해야 합니다.");
  }

  if (!/\d/.test(password)) {
    errors.push("숫자를 포함해야 합니다.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// 로컬 스토리지 유틸리티
export const storage = {
  get: (key: string) => {
    if (typeof window === "undefined") return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: (key: string, value: any) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // 에러 처리
    }
  },

  remove: (key: string) => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },
};

// 디바운스 유틸리티
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
