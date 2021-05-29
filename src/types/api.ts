export interface APIModel {
  pk: string;
}

export interface AuthResponse {
  data?: Token;
  message: string;
  success: boolean;
}

export interface Token {
  token: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}
