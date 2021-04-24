export type Project = {
  uuid: string;
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
};

export type Milestone = {
  uuid: string;
  created_date: string;
  modified_date: string;
  number: number;
  description: string;
  project: string;
};
