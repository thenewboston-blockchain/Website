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
