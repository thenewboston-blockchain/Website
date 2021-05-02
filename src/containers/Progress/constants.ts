import {TeamName} from 'types/teams';

type TeamMilestoneDetails = {
  teamName: TeamName;
  responsibility: string;
  repositoryNames: string[];
};

export const teamMilestoneDetails: Record<Exclude<TeamName, 'All'>, TeamMilestoneDetails> = {
  Audit: {
    repositoryNames: ['Contributor-Payments', 'Projects'],
    responsibility: 'Ensures the accuracy and integrity of all government and team payments.',
    teamName: TeamName.audit,
  },
  'Back-End': {
    repositoryNames: ['Website-API'],
    responsibility: 'Architect, build, and maintain the backend architecture of TNB.',
    teamName: TeamName.backEnd,
  },
  Blockchain: {
    repositoryNames: ['thenewboston-node'],
    responsibility: 'Build and maintain the blockchain for TNB digital currency network.',
    teamName: TeamName.blockchain,
  },
  Community: {
    repositoryNames: ['Management'],
    responsibility: 'Create the strategy, standards and  oversee the overall TNB product.',
    teamName: TeamName.community,
  },
  Design: {
    repositoryNames: ['Design'],
    responsibility: 'Create and manage all designs within TNB website and applications.',
    teamName: TeamName.design,
  },
  DevOps: {
    repositoryNames: ['DevOps'],
    responsibility: 'Architect, maintain, and monitor our various computer systems.',
    teamName: TeamName.devOps,
  },
  'Front-End': {
    repositoryNames: ['Account-Manager', 'Website'],
    responsibility: 'Implement visual elements that users see and interact with on web.',
    teamName: TeamName.frontEnd,
  },
  Marketing: {
    repositoryNames: ['Marketing'],
    responsibility: 'Manage all marketing content including email, SEO, and media buys.',
    teamName: TeamName.marketing,
  },
};
