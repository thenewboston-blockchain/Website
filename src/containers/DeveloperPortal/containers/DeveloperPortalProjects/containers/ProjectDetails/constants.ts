import {ProjectTopicAnchor, ProjectTopicMap, ProjectTopicTitle} from 'types/projects';
import {sortByNumberKey} from 'utils/sort';

export const projectDetailsTopic: ProjectTopicMap = {
  benefits: {
    anchor: ProjectTopicAnchor.Benefits,
    position: 3,
    title: ProjectTopicTitle.Benefits,
  },
  centered_around_tnb: {
    anchor: ProjectTopicAnchor.CenteredAroundTNB,
    position: 4,
    title: ProjectTopicTitle.CenteredAroundTNB,
  },
  estimated_completion_date: {
    anchor: ProjectTopicAnchor.EstimatedCompletionDate,
    position: 5,
    title: ProjectTopicTitle.EstimatedCompletionDate,
  },
  overview: {
    anchor: ProjectTopicAnchor.Overview,
    position: 0,
    title: ProjectTopicTitle.Overview,
  },
  problem: {
    anchor: ProjectTopicAnchor.Problem,
    position: 1,
    title: ProjectTopicTitle.Problem,
  },
  target_market: {
    anchor: ProjectTopicAnchor.TargetMarket,
    position: 2,
    title: ProjectTopicTitle.TargetMarket,
  },
};

export const orderedProjectDetailsTopic = Object.values(projectDetailsTopic).sort(sortByNumberKey('position'));
