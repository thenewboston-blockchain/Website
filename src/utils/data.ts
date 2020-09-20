import parse from 'date-fns/parse';
import {Contributor, FormattedTask, FormattedTaskDict, RawTask} from 'types/github';

import contributors from 'data/contributors.json';
import tasks from 'data/tasks.json';

export const getContributors = (): Contributor[] => {
  return contributors;
};

export const getTasks = (): FormattedTaskDict => {
  const results: any = {};

  Object.entries(tasks).forEach(([githubUsername, taskList]) => {
    results[githubUsername] = (taskList as RawTask[]).map(
      (task: RawTask): FormattedTask => ({
        ...task,
        completed_date: parse(task.completed_date, 'L/d/yy', new Date()),
      }),
    );
  });

  return results;
};
