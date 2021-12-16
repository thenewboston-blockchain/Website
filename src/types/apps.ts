export interface AppUrlParams {
  slug: string;
}

export interface AppCategory {
  uuid: string;
  name: string;
  created_date: string;
  modified_date: string;
}

export interface App {
  pk: string;
  slug: string;
  name: string;
  category: AppCategory;
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
