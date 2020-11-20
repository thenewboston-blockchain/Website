import axios from 'axios';

import {AMOUNT_COLOR, REPOSITORIES} from 'constants/github';
import {BaseRelease, Issue, Release} from 'types/github';
import {REGEX} from 'constants/regex';

export const fetchGithubIssues = async (): Promise<Issue[]> => {
  const promises = REPOSITORIES.map((repoName) =>
    axios.get(`https://api.github.com/repos/thenewboston-developers/${repoName.pathname}/issues`),
  );

  const results = await Promise.all(promises);
  const issues = results
    .reduce((acc: Issue[], {data}) => [...acc, ...data], [])
    .filter(({pull_request}: any) => !pull_request);

  return issues.map((issue) => {
    const amountLabels = issue.labels.filter(({color}: any) => color.toLowerCase() === AMOUNT_COLOR);
    return {
      ...issue,
      amount: amountLabels.length ? parseInt(amountLabels[0].name.replace(REGEX.excludingNumber, ''), 10) : 0,
      repositoryName: getRepositoryName(issue.repository_url),
    };
  });
};

export const fetchGithubReleases = async (): Promise<Release[]> => {
  const {data} = await axios.get<BaseRelease[]>(
    'https://api.github.com/repos/thenewboston-developers/Account-Manager/releases',
  );
  return data.map((release: BaseRelease) => {
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
