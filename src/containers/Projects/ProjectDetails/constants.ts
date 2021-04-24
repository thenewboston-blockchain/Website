import {IconType} from '@thenewboston/ui';

/* eslint-disable */
export const projectDetailsTopic = {
  overview: {
    iconType: IconType.accountGroup,
    overview:
      'A brief summary, situation, plan, and outline about the project, bigger picture, functionality and the possible outcome from this project',
    title: 'Overview',
  },
  problem: {
    iconType: IconType.accountGroup,
    overview: 'A precise information about the problem that this project is going to solve.',
    title: 'Problem',
  },
  target_market: {
    iconType: IconType.accountGroup,
    overview: 'A description of the group of users to whom TNB wants to provide the service.',
    title: 'Target Market',
  },
  benefits: {
    iconType: IconType.accountGroup,
    overview:
      'A brief description, how this service would bring the people together and providing opportunities of interaction',
    title: 'Benefit to Network & Community',
  },
  centered_around_tnb: {
    iconType: IconType.accountGroup,
    overview: 'A brief description how this service would blend into the TNB services.',
    title: 'Centered around TNB',
  },
  estimated_completion_date: {
    iconType: IconType.accountGroup,
    overview: 'A specific date of project completion.',
    title: 'Estimated completion date',
  },
  roadmap: {
    iconType: IconType.accountGroup,
    overview: 'A schedule of a lengthy project by breaking into realistic achiveable milestones.',
    title: 'Roadmap',
  },
};

// temporary dummy data. TODO: remove when hooked up with api
export const dummyProject = {
  benefits:
    "This platform can be a bridge between buyers and sellers. There will be a spike in the number of people wanting to buy TNBC before it's officially released and this platform can work as an exchange for that period of time.",
  centered_around_tnb: 'This service is, particularly for thenewboston.',
  created_date: '2021-04-24T04:02:24.121458Z',
  description:
    'An escrow web-application for thenewboston. This application will act as a bridge between the escrow providers, the buyers, and the sellers.',
  estimated_completion_date: '2021-06-17T00:00:00Z',
  github_url: 'https://github.com/tnbCrow',
  logo: 'https://avatars.githubusercontent.com/u/79237675?s=200&v=4',
  modified_date: '2021-04-24T04:02:24.121481Z',
  overview:
    'An escrow web-application for thenewboston. This application will act as a bridge between the escrow providers, the buyers, and the sellers.',
  problem: 'The problem is to get trusted escrow and avoid the scams that may happen in the near future.',
  project_lead: 'cb5f1d92-40b5-4d39-ab78-12fef19adbd0',
  target_market:
    'Anyone who wants to buy/sell TNBC in exchange with other (crypto or international) currencies or products before the coin is in exchange.',
  title: 'tnbCrow',
  uuid: '3415a73f-6d23-4530-88df-fe28c10413a3',
};

export const dummyMilestones = [
  {
    created_date: '2021-04-24T03:42:45.721914Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    modified_date: '2021-04-24T03:42:45.721939Z',
    number: 1,
    project: '53b3f15c-262a-45f2-b3b7-86d82378ba64',
    uuid: 'f771e59b-46a4-40a7-97cb-967aa60c55a1',
  },
  {
    created_date: '2021-04-24T03:42:54.187805Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    modified_date: '2021-04-24T03:42:54.187831Z',
    number: 2,
    project: '53b3f15c-262a-45f2-b3b7-86d82378ba64',
    uuid: '1b5771b0-5613-434d-97ed-5e9a7f0194cf',
  },
  {
    created_date: '2021-04-24T03:43:02.728203Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    modified_date: '2021-04-24T03:43:02.728231Z',
    number: 3,
    project: '53b3f15c-262a-45f2-b3b7-86d82378ba64',
    uuid: 'c0ea44d1-bd07-46c8-b3fb-02d7968292ec',
  },
];
