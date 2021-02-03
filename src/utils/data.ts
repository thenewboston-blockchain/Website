import parse from 'date-fns/parse';
import {TEAMS} from 'constants/teams';
import {Contributor, RawTask, Task, TaskDict} from 'types/github';
import {Opening} from 'types/openings';
import {NavOption} from 'types/option';
import {TeamMember, TeamName, TeamPlatform, TeamResponsibility} from 'types/teams';

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

export const getTeamMemberByGithubUsername = (github_username: string): TeamMember | undefined => {
  let member: TeamMember | undefined;

  teams.forEach((team) => {
    const {title: teamTitle, contributors: teamContributors} = team;
    teamContributors.forEach((teamMember: any) => {
      if (teamMember.contributor.githubUsername === github_username) {
        const {title: userTitle, isLead, payPerDay, contributor} = teamMember;
        const {contributorId, ...otherProps} = contributor;
        if (!member) {
          member = {
            contributorId,
            isLead,
            payPerDay,
            teams: [{isLead, title: teamTitle}],
            titles: [userTitle],
            ...otherProps,
          };
        } else {
          const {teams: addedTeams, titles, isLead: isLeadForAddedTeams} = member;
          const teamNameExists =
            addedTeams.findIndex(({title}: {title: string}) => title.toLowerCase() === teamTitle.toLowerCase()) !== -1;
          const titleExists =
            titles.findIndex((title: string) => title.toLowerCase() === userTitle.toLowerCase()) !== -1;
          member = {
            ...member,
            isLead: isLeadForAddedTeams || isLead,
            teams: teamNameExists ? addedTeams : addedTeams.concat([{isLead, title: teamTitle}]),
            titles: titleExists ? titles : titles.concat([userTitle]),
          };
        }
      }
    });
  });

  return member;
};

export const getTeamMembers = (): TeamMember[] => {
  const members: any = {};
  teams.forEach((team) => {
    team.contributors.forEach((teamMember: any) => {
      const {title: userTitle, isLead, payPerDay, createdDate, contributor} = teamMember;
      const {contributorId, ...otherProps} = contributor;
      if (!members[contributorId]) {
        members[contributorId] = {
          contributorId,
          createdDate,
          isLead,
          payPerDay,
          teams: [{isLead, title: team.title}],
          titles: [userTitle],
          ...otherProps,
        };
      } else {
        const member = members[contributorId];
        const {teams: addedTeams, titles, isLead: isLeadForAddedTeams} = member;
        const teamNameExists =
          addedTeams.findIndex(({title}: {title: string}) => title.toLowerCase() === team.title.toLowerCase()) !== -1;
        const titleExists = titles.findIndex((title: string) => title.toLowerCase() === userTitle.toLowerCase()) !== -1;
        members[contributorId] = {
          ...member,
          isLead: isLeadForAddedTeams || isLead,
          teams: teamNameExists ? addedTeams : addedTeams.concat([{isLead, title: team.title}]),
          titles: titleExists ? titles : titles.concat([userTitle]),
        };
      }
    });
  });

  return Object.entries(members)
    .sort(([, a]: [string, any], [, b]: [string, any]) => a.contributorId - b.contributorId)
    .map(([, member]) => member) as TeamMember[];
};

export const getTeamData = (
  teamTitle: TeamName,
): {description: string; platforms: TeamPlatform[]; responsibilities: TeamResponsibility[]} => {
  const team = teams.find(({title}) => title === teamTitle);
  if (team) {
    return {description: team.description, platforms: team.platforms, responsibilities: team.responsibilities};
  }
  return {description: '', platforms: [], responsibilities: []};
};

export const getTeamPathname = (teamTitle: string): string => {
  const pathname = TEAMS.find((team: NavOption) => team.title === teamTitle)?.pathname;
  return pathname || '';
};
