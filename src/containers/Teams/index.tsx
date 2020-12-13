import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, PageTitle} from 'components';
import {TeamPathname} from 'constants/teams';
import {getTeamMembers} from 'utils/data';
import {NavOption} from 'types/option';
import {TeamMember, TeamName, TeamsUrlParams} from 'types/teams';

import TeamMemberCard from './TeamMemberCard';
import './Teams.scss';

export const TEAMS: NavOption[] = [
  {pathname: TeamPathname.all, title: TeamName.all},
  {pathname: TeamPathname.backEndDevelopers, title: TeamName.backEndDevelopers},
  {pathname: TeamPathname.community, title: TeamName.community},
  {pathname: TeamPathname.design, title: TeamName.design},
  {pathname: TeamPathname.devOps, title: TeamName.devOps},
  {pathname: TeamPathname.discordManagers, title: TeamName.discordManagers},
  {pathname: TeamPathname.dotnetCore, title: TeamName.dotnetCore},
  {pathname: TeamPathname.frontEndDevelopers, title: TeamName.frontEndDevelopers},
  {pathname: TeamPathname.kotlinSDK, title: TeamName.kotlinSDK},
  {pathname: TeamPathname.marketing, title: TeamName.marketing},
  {pathname: TeamPathname.newUserOperations, title: TeamName.newUserOperations},
  {pathname: TeamPathname.payments, title: TeamName.payments},
  //   {pathname: TeamPathname.penetrationTesting, title: TeamName.penetrationTesting},
  {pathname: TeamPathname.projectProposals, title: TeamName.projectProposals},
  {pathname: TeamPathname.qa, title: TeamName.qa},
  {pathname: TeamPathname.redditModerators, title: TeamName.redditModerators},
  {pathname: TeamPathname.research, title: TeamName.research},
  {pathname: TeamPathname.security, title: TeamName.security},
  {pathname: TeamPathname.youtube, title: TeamName.youtube},
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
