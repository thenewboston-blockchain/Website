export interface AppStoreUrlParams {
  appId: string;
}

export interface App {
  pk: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  images: [
    {
      uuid: string;
      created_date: string;
      modified_date: string;
      date: string;
      value: number;
      analytics: string;
    },
  ];
  created_date: string;
  modified_date: string;
}
