export type Opening = {
  active: boolean;
  created_date: string;
  description: string;
  eligible_for_task_points: boolean;
  modified_date: string;
  pay_per_day: number;
  pk: string;
  reports_to: string;
  responsibilities: Responsibility[];
  skills: Skill[];
  team: string;
  title: string;
  visible: boolean;
  application_form: string;
  category: OpeningCategory;
};

type Responsibility = {
  uuid: string;
  created_date: string;
  modified_date: string;
  title: string;
};

type Skill = {
  uuid: string;
  created_date: string;
  modified_date: string;
  title: string;
};

export enum OpeningCategory {
  all = 'All',
  community = 'Community',
  design = 'Design',
  engineering = 'Engineering',
  marketing = 'Marketing',
}

export interface OpeningsUrlParams {
  category: OpeningCategory;
  openingId: string;
}

export interface ProjectProposal {
  name: string;
  url?: string;
}
