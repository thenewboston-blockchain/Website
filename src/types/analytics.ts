export interface AnalyticsUrlParams {
  type?: string;
}

export interface Analytics {
  test: string;
}

export interface AnalyticsCategory {
  key: string;
  title: string;
  analytics: Analytics[];
}
