import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, Icon, IconType, PageTitle} from 'components';
import {TEAMS} from 'constants/teams';
import {PageDataObject} from 'types/page-data';
import {TeamMember, TeamName, TeamsUrlParams, TeamTabOptions} from 'types/teams';
import {getTeamMembers} from 'utils/data';

import InternalHowToSetUpPaymentBoard from './Resources/InternalHowToSetUpPaymentBoard';
import InternalNewUserOperations from './Resources/InternalNewUserOperations';
import InternalProductDevelopment from './Resources/InternalProductDevelopment';
import InternalTeamLeadOnboarding from './Resources/InternalTeamLeadOnboarding';
import TeamMemberCard from './TeamMemberCard';
import TeamOverview from './TeamOverview';
import TeamTabs from './TeamTabs';
import './Teams.scss';

const teamMembers = getTeamMembers();

const sortTeamMembers = (members: TeamMember[]): TeamMember[] => {
  const teamLeads = members
    .filter(({isLead}) => isLead)
    .sort((member1, member2) => (member1.displayName > member2.displayName ? 1 : -1));
  const otherMembers = members
    .filter(({isLead}) => !isLead)
    .sort((member1, member2) => (member1.displayName > member2.displayName ? 1 : -1));
  return teamLeads.concat(otherMembers);
};

const pageData: PageDataObject = {
  'how-to-set-up-payment-board': {
    content: <InternalHowToSetUpPaymentBoard />,
    name: 'How to set up payment boards',
  },
  'new-user-operations': {
    content: <InternalNewUserOperations />,
    name: 'How to onboard new users',
  },
  'product-development': {
    content: <InternalProductDevelopment />,
    name: 'How the product development process works',
  },
  'team-lead-onboarding': {
    content: <InternalTeamLeadOnboarding />,
    name: 'How to onboard team leads',
  },
};

const Teams: FC = () => {
  const history = useHistory();
  const {team: teamParam, tab: tabParam, resource: resourceParam} = useParams<TeamsUrlParams>();
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers);
  const [teamFilter, setTeamFilter] = useState<TeamName>(TeamName.all);

  useEffect(() => {
    const isAllTeams = teamParam === TeamName.all;
    if (teamParam && tabParam) {
      if (isAllTeams) {
        const isInvalidTabForAll = !(tabParam === TeamTabOptions.members || tabParam === TeamTabOptions.resources);
        if (isInvalidTabForAll) {
          history.replace(`/teams`);
        }
      } else {
        const isInvalidTabForSingleTeam = !(
          tabParam === TeamTabOptions.members || tabParam === TeamTabOptions.overview
        );
        if (isInvalidTabForSingleTeam) {
          history.replace(`/teams/${teamParam}`);
        }
      }
    } else if (teamParam && !tabParam) {
      if (isAllTeams) {
        history.replace(`/teams/${teamParam}/${TeamTabOptions.members}`);
      } else {
        history.replace(`/teams/${teamParam}/${TeamTabOptions.overview}`);
      }
    }
  }, [history, tabParam, teamParam]);

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
    const members = teamFilter === TeamName.all ? teamMembers : getFilteredMembers();
    const sortedMembers = sortTeamMembers(members);
    setFilteredMembers(sortedMembers);
  }, [teamFilter]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      if (option === TeamName.all) {
        history.push(`/teams/${option}/${TeamTabOptions.members}`);
      } else {
        history.push(`/teams/${option}/${TeamTabOptions.overview}`);
      }
    },
    [history],
  );

  const renderTeamFilter = (): ReactNode => {
    return <FlatNavLinks handleOptionClick={handleNavOptionClick} options={TEAMS} selectedOption={teamParam} />;
  };

  const renderTeamMembers = useCallback((): ReactNode => {
    if (!filteredMembers.length) return <EmptyPage />;
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
  }, [filteredMembers]);

  const renderResources = useCallback((): ReactNode => {
    return (
      <>
        {Object.entries(pageData).map(([key, value]) => (
          <Link className="Teams__resources-item" key={key} to={`/teams/${teamParam}/${tabParam}/${key}`}>
            {value.name}
          </Link>
        ))}
      </>
    );
  }, [teamParam, tabParam]);

  const handleBackClick = useCallback((): void => {
    history.replace(`/teams/${teamParam}/${tabParam}`);
  }, [history, teamParam, tabParam]);

  const renderResourceDoc = useCallback((): ReactNode => {
    if (resourceParam) {
      const resource = pageData[resourceParam]?.content || <EmptyPage />;
      return (
        <>
          <div className="Teams__back-container" onClick={handleBackClick} role="button" tabIndex={0}>
            <Icon className="Teams__back-icon" icon={IconType.arrowLeft} />
            <span className="Teams__back-text">Back</span>
          </div>
          {resource}
        </>
      );
    }
  }, [handleBackClick, resourceParam]);

  const renderTabPanel = useCallback(() => {
    switch (tabParam) {
      case TeamTabOptions.members: {
        return <div className="Teams__team-list">{renderTeamMembers()}</div>;
      }
      case TeamTabOptions.overview: {
        return <TeamOverview teamFilter={teamFilter} />;
      }
      case TeamTabOptions.resources: {
        return <div className="Teams__resources">{renderResources()}</div>;
      }
      default:
        return <EmptyPage />;
    }
  }, [renderResources, renderTeamMembers, tabParam, teamFilter]);

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
        <aside className="Teams__left-menu">{renderTeamFilter()}</aside>
        <section className="Teams__right-section">
          {resourceParam ? (
            <>{renderResourceDoc()}</>
          ) : (
            <>
              <h1 className="Teams__team-heading">{teamFilter === TeamName.all ? 'All' : teamFilter}</h1>
              <TeamTabs team={teamParam} tab={tabParam || ''} />
              <div className="Teams__tab-panel">{renderTabPanel()}</div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Teams;
