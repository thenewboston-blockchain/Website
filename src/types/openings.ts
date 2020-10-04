import {SocialMedia} from 'types/social-media';

export interface ApplicationMethod {
  channel: SocialMedia;
  note?: string;
}

export interface OpeningBasicDetails {
  categories: OpeningCategory[];
  description: string;
  position: string;
  slug: string;
}

export interface Opening {
  applicationMethods: ApplicationMethod[];
  categories: OpeningCategory[];
  description: string;
  payNotes: string[];
  position: string;
  reportsTo: Reportee[];
  responsibilities: string[];
  slug: string;
  technologyRequirements: string[];
}

export enum OpeningCategory {
  all = 'All',
  accounting = 'Accounting',
  community = 'Community',
  design = 'Design',
  engineering = 'Engineering',
  marketing = 'Marketing',
}

export interface OpeningCategoryUrlParams {
  category: OpeningCategory;
}

export interface OpeningsUrlParams {
  category: OpeningCategory;
  slug: string;
}

export interface Reportee {
  githubUsername?: string;
  name: string;
}
