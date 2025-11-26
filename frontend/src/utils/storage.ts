export const setItem = <T>(key: string, value: T): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getItem = <T>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const removeItem = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
