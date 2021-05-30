import {ProjectTopicAnchor, ProjectTopicMap, ProjectTopicTitle} from 'types/projects';
import {sortByNumberKey} from 'utils/sort';
import {ProjectIconType} from '../ProjectIcons';

export const projectDetailsTopic: ProjectTopicMap = {
  benefits: {
    anchor: ProjectTopicAnchor.Benefits,
    iconType: ProjectIconType.Benefits,
    overview:
      'A brief description, how this service would bring the people together and providing opportunities of interaction',
    position: 3,
    title: ProjectTopicTitle.Benefits,
  },
  centered_around_tnb: {
    anchor: ProjectTopicAnchor.CenteredAroundTNB,
    iconType: ProjectIconType.Integration,
    overview: 'A brief description how this service would blend into the TNB services.',
    position: 4,
    title: ProjectTopicTitle.CenteredAroundTNB,
  },
  estimated_completion_date: {
    anchor: ProjectTopicAnchor.EstimatedCompletionDate,
    iconType: ProjectIconType.Timeline,
    overview: 'A specific date of project completion.',
    position: 5,
    title: ProjectTopicTitle.EstimatedCompletionDate,
  },
  overview: {
    anchor: ProjectTopicAnchor.Overview,
    iconType: ProjectIconType.Overview,
    overview:
      'A brief summary, situation, plan, and outline about the project, bigger picture, functionality and the possible outcome from this project',
    position: 0,
    title: ProjectTopicTitle.Overview,
  },
  problem: {
    anchor: ProjectTopicAnchor.Problem,
    iconType: ProjectIconType.Problem,
    overview: 'A precise information about the problem that this project is going to solve.',
    position: 1,
    title: ProjectTopicTitle.Problem,
  },
  roadmap: {
    anchor: ProjectTopicAnchor.Roadmap,
    iconType: ProjectIconType.Roadmap,
    overview: 'A schedule of a lengthy project by breaking into realistic achievable milestones.',
    position: 6,
    title: ProjectTopicTitle.Roadmap,
  },
  target_market: {
    anchor: ProjectTopicAnchor.TargetMarket,
    iconType: ProjectIconType.Target,
    overview: 'A description of the group of users to whom TNB wants to provide the service.',
    position: 2,
    title: ProjectTopicTitle.TargetMarket,
  },
};

export const orderedProjectDetailsTopic = Object.values(projectDetailsTopic).sort(sortByNumberKey('position'));
