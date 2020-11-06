export interface AuthResponse {
  success: boolean;
  message: string;
  data?: Token;
}

export interface Token {
  token: string;
}
