import {ProjectTopicAnchor, ProjectTopicMap, ProjectTopicTitle} from 'types/projects';
import {sortByNumberKey} from 'utils/sort';
import {ProjectIconType} from '../ProjectIcons';

export const projectDetailsTopic: ProjectTopicMap = {
  benefits: {
    anchor: ProjectTopicAnchor.Benefits,
    iconType: ProjectIconType.Benefits,
    position: 3,
    title: ProjectTopicTitle.Benefits,
  },
  centered_around_tnb: {
    anchor: ProjectTopicAnchor.CenteredAroundTNB,
    iconType: ProjectIconType.Integration,
    position: 4,
    title: ProjectTopicTitle.CenteredAroundTNB,
  },
  estimated_completion_date: {
    anchor: ProjectTopicAnchor.EstimatedCompletionDate,
    iconType: ProjectIconType.Timeline,
    position: 5,
    title: ProjectTopicTitle.EstimatedCompletionDate,
  },
  overview: {
    anchor: ProjectTopicAnchor.Overview,
    iconType: ProjectIconType.Overview,
    position: 0,
    title: ProjectTopicTitle.Overview,
  },
  problem: {
    anchor: ProjectTopicAnchor.Problem,
    iconType: ProjectIconType.Problem,
    position: 1,
    title: ProjectTopicTitle.Problem,
  },
  target_market: {
    anchor: ProjectTopicAnchor.TargetMarket,
    iconType: ProjectIconType.Target,
    position: 2,
    title: ProjectTopicTitle.TargetMarket,
  },
};

export const orderedProjectDetailsTopic = Object.values(projectDetailsTopic).sort(sortByNumberKey('position'));
