export type Project = {
  pk: string;
  created_date: string;
  modified_date: string;
  title: string;
  description: string;
  logo: string;
  github_url: string;
  overview: string;
  problem: string;
  target_market: string;
  benefits: string;
  centered_around_tnb: string;
  estimated_completion_date: string;
  project_lead: string;
  project_lead_display_name: string;
  milestones: Milestone[];
  is_featured: boolean;
};

export type Milestone = {
  uuid: string;
  created_date: string;
  modified_date: string;
  number: number;
  description: string;
  project: string;
};

export type ProjectTopicMap = {
  [key: string]: ProjectTopic;
};

export type ProjectTopic = {
  anchor: ProjectTopicAnchor;
  position: number;
  title: ProjectTopicTitle;
};

export enum ProjectTopicTitle {
  Overview = 'Overview',
  Problem = 'Problem',
  TargetMarket = 'Target Market',
  Benefits = 'Benefit to Network & Community',
  CenteredAroundTNB = 'Centered around TNB',
  EstimatedCompletionDate = 'Estimated completion date',
}

export enum ProjectTopicAnchor {
  Overview = 'topic-overview',
  Problem = 'topic-problem',
  TargetMarket = 'topic-target-market',
  Benefits = 'topic-benefits',
  CenteredAroundTNB = 'topic-centered-around-tnb',
  EstimatedCompletionDate = 'topic-completion-date',
}
