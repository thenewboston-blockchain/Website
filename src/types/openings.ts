import {SocialMedia} from 'types/social-media';

export interface ApplicationMethod {
  channel: SocialMedia;
  note?: string;
}

export interface Opening {
  applicationMethods: ApplicationMethod[];
  category: OpeningCategory;
  description: string;
  openingId: string;
  payNotes: string[];
  position: string;
  reportsTo: Reportee[];
  responsibilities: string[];
  technologyRequirements: string[];
}

export enum OpeningCategory {
  all = 'All',
  community = 'Community',
  design = 'Design',
  engineering = 'Engineering',
  marketing = 'Marketing',
  restaurants_self_order_app = 'Restaurants Self Order App',
  tnb_forum = 'TNB Forum',
}

export interface OpeningsUrlParams {
  category: OpeningCategory;
  openingId: string;
}

export interface Reportee {
  githubUsername?: string;
  name: string;
}
