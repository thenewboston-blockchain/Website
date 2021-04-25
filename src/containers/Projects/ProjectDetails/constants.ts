import {IconType} from '@thenewboston/ui';

import {ProjectTopicAnchor, ProjectTopicMap, ProjectTopicTitle} from 'types/projects';

/* eslint-disable */
export const projectDetailsTopic: ProjectTopicMap = {
  overview: {
    anchor: ProjectTopicAnchor.Overview,
    iconType: IconType.accountGroup,
    overview:
      'A brief summary, situation, plan, and outline about the project, bigger picture, functionality and the possible outcome from this project',
    title: ProjectTopicTitle.Overview,
  },
  problem: {
    anchor: ProjectTopicAnchor.Problem,
    iconType: IconType.accountGroup,
    overview: 'A precise information about the problem that this project is going to solve.',
    title: ProjectTopicTitle.Problem,
  },
  target_market: {
    anchor: ProjectTopicAnchor.TargetMarket,
    iconType: IconType.accountGroup,
    overview: 'A description of the group of users to whom TNB wants to provide the service.',
    title: ProjectTopicTitle.TargetMarket,
  },
  benefits: {
    anchor: ProjectTopicAnchor.Benefits,
    iconType: IconType.accountGroup,
    overview:
      'A brief description, how this service would bring the people together and providing opportunities of interaction',
    title: ProjectTopicTitle.Benefits,
  },
  centered_around_tnb: {
    anchor: ProjectTopicAnchor.CenteredAroundTNB,
    iconType: IconType.accountGroup,
    overview: 'A brief description how this service would blend into the TNB services.',
    title: ProjectTopicTitle.CenteredAroundTNB,
  },
  estimated_completion_date: {
    anchor: ProjectTopicAnchor.EstimatedCompletionDate,
    iconType: IconType.accountGroup,
    overview: 'A specific date of project completion.',
    title: ProjectTopicTitle.EstimatedCompletionDate,
  },
  roadmap: {
    anchor: ProjectTopicAnchor.Roadmap,
    iconType: IconType.accountGroup,
    overview: 'A schedule of a lengthy project by breaking into realistic achiveable milestones.',
    title: ProjectTopicTitle.Roadmap,
  },
};
