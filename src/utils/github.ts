import axios from 'axios';

import {AMOUNT_COLOR, REPOSITORIES} from 'constants/github';
import {Issue} from 'types/github';

export const fetchGithubIssues = async (): Promise<Issue[]> => {
  const promises = REPOSITORIES.map((repoName) =>
    axios.get(`https://api.github.com/repos/thenewboston-developers/${repoName}/issues`),
  );

  const results = await Promise.all(promises);
  const issues = results
    .reduce((acc: Issue[], {data}) => [...acc, ...data], [])
    .filter(({pull_request}: any) => !pull_request);

  return issues.map((issue) => {
    const amountLabels = issue.labels.filter(({color}: any) => color.toLowerCase() === AMOUNT_COLOR);
    return {
      ...issue,
      amount: amountLabels.length ? parseInt(amountLabels[0].name, 10) : 0,
      repositoryName: getRepositoryName(issue.repository_url),
    };
  });
};

const getRepositoryName = (repositoryUrl: string) => {
  return repositoryUrl.replace('https://api.github.com/repos/thenewboston-developers/', '');
};
