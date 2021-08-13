export const PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  'approved-projects': 'Approved Projects',
  architecture: 'Architecture - Deep Dive',
  developer: 'Developer',
  'principal-entities': 'Principal Entities on the Network',
  'principal-events': 'Principal Events and Processes on the Network',
  projects: 'Projects',
  rules: 'Rules & Guidelines',
  whitepaper: 'Living Whitepaper',
};

export enum ProjectRulesId {
  HowProposalsWork = 'how-proposals-work',
  MilestonesAndPayouts = 'milestones-and-payouts',
  ProjectsFaq = 'projects-faq',
  ProposalSubmissionProcess = 'proposal-submission-process',
  Rules = 'rules',
}

export const projectRulesPath = '/developer/projects/rules';

export const PATHNAME_TO_DROPDOWN_SELECTIONS: Record<string, {title: string; url: string}[]> = {
  projects: [
    {
      title: 'Rules & Guidelines',
      url: projectRulesPath,
    },
    {
      title: 'Approved Projects',
      url: '/developer/projects/approved-projects',
    },
  ],
  rules: [
    {
      title: 'How Proposals Work',
      url: `${projectRulesPath}#${ProjectRulesId.HowProposalsWork}`,
    },
    {
      title: 'Rules',
      url: `${projectRulesPath}#${ProjectRulesId.Rules}`,
    },
    {
      title: 'Proposal Submission Process',
      url: `${projectRulesPath}#${ProjectRulesId.ProposalSubmissionProcess}`,
    },
    {
      title: 'Milestones & Payouts',
      url: `${projectRulesPath}#${ProjectRulesId.MilestonesAndPayouts}`,
    },
    {
      title: 'Projects FAQ',
      url: `${projectRulesPath}#${ProjectRulesId.ProjectsFaq}`,
    },
  ],
};
