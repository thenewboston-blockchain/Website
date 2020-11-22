import parse from 'date-fns/parse';
import {Contributor, RawTask, Task, TaskDict} from 'types/github';
import {Opening} from 'types/openings';
import {TeamMember} from 'types/teams';

import contributors from 'data/contributors.json';
import openings from 'data/openings.json';
import tasks from 'data/tasks.json';
import teams from 'data/teams.json';

export const getContributors = (): Contributor[] => {
  return contributors;
};

export const getOpenings = (): Opening[] => {
  return openings as Opening[];
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

export const getTeamMembers = (): TeamMember[] => {
  const members: any = {};
  teams.forEach((team) => {
    const {title: teamTitle, contributors: teamContributors} = team;
    teamContributors.forEach((teamMember) => {
      const {title: userTitle, isLead, payPerDay, createdDate, contributor} = teamMember;
      const {contributorId, ...otherProps} = contributor;
      if (!members[contributorId]) {
        members[contributorId] = {
          contributorId,
          createdDate,
          isLead,
          payPerDay,
          teams: [{isLead, title: teamTitle}],
          titles: [userTitle],
          ...otherProps,
        };
      } else {
        const member = members[contributorId];
        const {teams: addedTeams, titles, isLead: isLeadForAddedTeams} = member;
        const teamNameExists =
          addedTeams.findIndex(({title}: {title: string}) => title.toLowerCase() === teamTitle.toLowerCase()) !== -1;
        const titleExists = titles.findIndex((title: string) => title.toLowerCase() === userTitle.toLowerCase()) !== -1;
        members[contributorId] = {
          ...member,
          isLead: isLeadForAddedTeams || isLead,
          teams: teamNameExists ? addedTeams : addedTeams.concat([{isLead, title: teamTitle}]),
          titles: titleExists ? titles : titles.concat([userTitle]),
        };
      }
    });
  });

  return Object.entries(members)
    .sort(([, a]: [string, any], [, b]: [string, any]) => a.contributorId - b.contributorId)
    .map(([, member]) => member) as TeamMember[];
};
