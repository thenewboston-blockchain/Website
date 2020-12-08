import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, PageTitle} from 'components';
import {getTeamMembers} from 'utils/data';
import {NavOption} from 'types/option';
import {TeamMember, TeamName, TeamsUrlParams} from 'types/teams';

import TeamMemberCard from './TeamMemberCard';
import './Teams.scss';

export const TEAMS: NavOption[] = [
  {pathname: 'all', title: TeamName.all},
  {pathname: 'back-end-developers', title: TeamName.backEndDevelopers},
  {pathname: 'community', title: TeamName.community},
  {pathname: 'design', title: TeamName.design},
  {pathname: 'dev-ops', title: TeamName.devOps},
  {pathname: 'discord-managers', title: TeamName.discordManagers},
  {pathname: 'dot-net-core', title: TeamName.dotnetCore},
  {pathname: 'front-end-developers', title: TeamName.frontEndDevelopers},
  {pathname: 'kotlin-sdk', title: TeamName.kotlinSDK},
  {pathname: 'marketing', title: TeamName.marketing},
  {pathname: 'new-user-operations', title: TeamName.newUserOperations},
  {pathname: 'payments', title: TeamName.payments},
  //   {pathname: 'penetration-testing', title: TeamName.penetrationTesting},
  {pathname: 'project-proposals', title: TeamName.projectProposals},
  {pathname: 'qa', title: TeamName.qa},
  {pathname: 'reddit-moderators', title: TeamName.redditModerators},
  {pathname: 'research', title: TeamName.research},
  {pathname: 'security', title: TeamName.security},
  {pathname: 'youtube', title: TeamName.youtube},
];

const teamMembers = getTeamMembers();

const Teams: FC = () => {
  const history = useHistory();
  const {team: teamParam} = useParams<TeamsUrlParams>();
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers);
  const [teamFilter, setTeamFilter] = useState<TeamName>(TeamName.all);

  useEffect(() => {
    const team = TEAMS.find(({pathname}) => pathname === teamParam);
    if (team) {
      setTeamFilter(team.title as TeamName);
    } else {
      history.push(`/teams`);
    }
  }, [history, teamParam]);

  useEffect(() => {
    const getFilteredMembers = (): TeamMember[] => {
      const teamLeads: TeamMember[] = [];
      const otherMembers: TeamMember[] = [];
      teamMembers.forEach((member) => {
        const {teams} = member;
        const matchingTeam = teams.find(({title}) => title.toLowerCase() === teamFilter.toLowerCase());
        if (matchingTeam) {
          if (matchingTeam.isLead) {
            teamLeads.push({...member, isLead: true});
          } else {
            otherMembers.push({...member, isLead: false});
          }
        }
      });
      return teamLeads.concat(otherMembers);
    };

    setFilteredMembers(teamFilter === TeamName.all ? teamMembers : getFilteredMembers());
  }, [teamFilter]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      history.push(`/teams/${option}`);
    },
    [history],
  );

  const renderTeamFilter = (): ReactNode => {
    return <FlatNavLinks handleOptionClick={handleNavOptionClick} options={TEAMS} selectedOption={teamParam} />;
  };

  const renderTeamMembers = (): ReactNode => {
    return filteredMembers.map(
      ({contributorId, displayName, githubUsername, isLead, payPerDay, profileImage, slackUsername, titles}) => (
        <TeamMemberCard
          displayName={displayName}
          githubUsername={githubUsername}
          isLead={isLead}
          key={contributorId}
          payPerDay={payPerDay}
          profileImage={profileImage}
          slackUsername={slackUsername}
          titles={titles}
        />
      ),
    );
  };

  return (
    <>
      <PageTitle title="Teams" />
      <div className="Teams">
        <BreadcrumbMenu
          className="Teams__BreadcrumbMenu"
          menuItems={renderTeamFilter()}
          pageName={teamFilter}
          sectionName="Team"
        />
        <div className="Teams__left-menu">{renderTeamFilter()}</div>
        <div className="Teams__right-list">
          <h1 className="Teams__team-heading">{teamFilter === TeamName.all ? 'All Contributors' : teamFilter}</h1>
          {!filteredMembers.length && <EmptyPage />}
          <div className="Teams__team-list">{renderTeamMembers()}</div>
        </div>
      </div>
    </>
  );
};

export default Teams;
