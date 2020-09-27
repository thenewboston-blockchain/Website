export interface Opening {
  description: string;
  position: string;
  reportsTo: Reportee[];
  responsibilities: string[];
  technologyRequirements: string[];
}

export interface Reportee {
  githubUsername?: string;
  name: string;
}

export enum OpeningCategory {
  all = 'All',
  accounting = 'Accounting',
  community = 'Community',
  engineering = 'Engineering',
  marketing = 'Marketing',
}

export interface OpeningCategoryUrlParams {
  category: OpeningCategory;
}
