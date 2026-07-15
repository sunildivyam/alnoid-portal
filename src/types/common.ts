export type Theme = "light" | "dark" | "system";

export type Locale = "en" | "hi";

export interface SelectOption<T = string> {
  label: string;
  value: T;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
