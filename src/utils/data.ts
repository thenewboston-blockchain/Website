import parse from 'date-fns/parse';
import {Contributor, RawTask, Task, TaskDict} from 'types/github';

import contributors from 'data/contributors.json';
import tasks from 'data/tasks.json';

export const getContributors = (): Contributor[] => {
  return contributors;
};

export const getTasks = (): TaskDict => {
  const results: any = {};

  Object.entries(tasks).forEach(([githubUsername, taskList]) => {
    results[githubUsername] = (taskList as RawTask[]).map(
      (task: RawTask): Task => ({
        ...task,
        completed_date: parse(task.completed_date, 'L/d/yy', new Date()),
      }),
    );
  });

  return results;
};
