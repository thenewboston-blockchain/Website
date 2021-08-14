export interface AnalyticsUrlParams {
  type?: string;
}

export interface Analytics {
  data: AnalyticsData[];
  pk: string;
  title: string;
}

export interface AnalyticsCategory {
  key: string;
  title: string;
  analytics: Analytics[];
}

export interface AnalyticsData {
  date: string;
  value: number;
}
