import parse from 'date-fns/parse';

import {TEAMS} from 'constants/teams';
import {RawTask, Task, TaskDict} from 'types/github';
import {Opening} from 'types/openings';
import {NavOption} from 'types/option';
import {TeamMember, TeamName, TeamPlatform, TeamResponsibility} from 'types/teams';

import openings from 'data/openings.json';
import tasks from 'data/tasks.json';
import teams from 'data/teams.json';

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

export const getTeamMemberByGithubUsername = (githubParam: string): TeamMember | null => {
  teams.forEach((team) => {
    const {contributors} = team;
    contributors.forEach((teamMember) => {
      const {githubUsername} = teamMember.contributor;
      if (githubUsername === githubParam) {
        const {contributor} = teamMember;

        return {
          ...contributor,
          contributorId: parseInt(contributor.contributorId, 10),
        } as TeamMember;
      }
    });
  });

  return null;
};

export const getTeamMembers = (): TeamMember[] => {
  const teamMembers: TeamMember[] = [];

  teams.forEach((team) => {
    team.contributors.forEach((teamMember) => {
      const {title, isLead, contributor, hourlyRate} = teamMember;
      teamMembers.push({
        ...contributor,
        contributorId: parseInt(contributor.contributorId, 10),
        hourlyRate,
        isLead,
        team: team.title,
        title,
      });
    });
  });

  return teamMembers.sort((memberA, memberB) => memberA.contributorId - memberB.contributorId);
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
