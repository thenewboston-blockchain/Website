export interface Opening {
  description: string;
  position: string;
  responsibilities: string[];
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
