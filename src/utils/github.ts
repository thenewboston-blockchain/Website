import {AMOUNT_COLOR, REPOSITORIES} from 'constants/github';
import {BaseRelease, FetchGithubReleasesParams, Issue, Release} from 'types/github';
import {REGEX} from 'constants/regex';
import * as api from 'apis/github';

const parseGithubLabel = (label: string): number => {
  const labelHasWeightedStoryAndBounty = REGEX.githubWeightedLabel.test(label);
  const labelHasNumberAsBounty = REGEX.containsNumber.test(label);

  if (labelHasWeightedStoryAndBounty && labelHasNumberAsBounty) {
    const weightedBounty = label.replace(REGEX.githubWeightedLabel, '');
    return weightedBounty ? parseInt(weightedBounty, 10) : 0;
  }
  // supports previous GH labels (without story points)
  if (!labelHasWeightedStoryAndBounty && labelHasNumberAsBounty) {
    return parseInt(label.replace(REGEX.excludingNumber, ''), 10);
  }
  return 0;
};

export const fetchGithubIssues = async (): Promise<Issue[]> => {
  const promises = REPOSITORIES.map((repoName) => api.getIssuesForRepo(repoName.pathname));

  const issuesResponse = await Promise.all(promises);
  const issues = issuesResponse
    .reduce((acc: Issue[], currentIssues) => [...acc, ...currentIssues], [])
    .filter(({pull_request}: any) => !pull_request);

  return issues.map((issue) => {
    const amountLabels = issue.labels.filter(({color}: any) => color.toLowerCase() === AMOUNT_COLOR);

    return {
      ...issue,
      amount: amountLabels.length ? parseGithubLabel(amountLabels[0].name) : 0,
      repositoryName: getRepositoryName(issue.repository_url),
    };
  });
};

export const fetchGithubReleases = async (queryParams: FetchGithubReleasesParams): Promise<Release[]> => {
  const releases = await api.getAccountManagerReleases(queryParams);

  return releases.map((release: BaseRelease) => {
    const {tag_name: tagName} = release;
    const alphaVersion = tagName.replace('v1.0.0-alpha.', '');
    return {
      ...release,
      alphaVersion: parseInt(alphaVersion, 10),
    };
  });
};

const getRepositoryName = (repositoryUrl: string) => {
  return repositoryUrl.replace('https://api.github.com/repos/thenewboston-developers/', '');
};

export const getRepositoryUrl = (repoName: string) => {
  return `https://github.com/thenewboston-developers/${repoName}`;
};
