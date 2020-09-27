export interface ApplicationMethod {
  channel: 'github' | 'reddit' | 'slack';
  note?: string;
}

export interface Opening {
  applicationMethods: ApplicationMethod[];
  description: string;
  payNotes: string[];
  position: string;
  reportsTo: Reportee[];
  responsibilities: string[];
  technologyRequirements: string[];
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

export interface Reportee {
  githubUsername?: string;
  name: string;
}
