export interface ArcadeUrlParams {
  appId: string;
}

export interface App {
  pk: string;
  name: string;
  description: string;
  tagline: string;
  logo: string;
  website: string;
  images: [
    {
      uuid: string;
      created_date: string;
      modified_date: string;
      image: string;
      app: string;
    },
  ];
  created_date: string;
  modified_date: string;
}
