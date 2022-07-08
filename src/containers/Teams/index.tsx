import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {api as teamsApi, CoreTeamResponse} from 'apis/teams';
import {BreadcrumbMenu, Container, EmptyPage, FlatNavLinks, Loader, PageTitle} from 'components';
import {allTeamsFilter} from 'constants/teams';
import {ROUTES} from 'constants/routes';
import {APIProgress, APIState, INITIAL_API_STATE} from 'types/api';
import {PageDataObject} from 'types/page-data';
import {TeamsUrlParams, TeamTabOptions} from 'types/teams';

import InternalTeamMemberPayments from './Resources/InternalTeamMemberPayments';
import InternalBountyAccountRefills from './Resources/InternalBountyAccountRefills';
import TeamTabs from './TeamTabs';
import './Teams.scss';

const pageData: PageDataObject = {
  'bounty-account-refills': {
    content: <InternalBountyAccountRefills />,
    name: 'Bounty Account Refills',
  },
  'team-member-payments': {
    content: <InternalTeamMemberPayments />,
    name: 'Team Member Payments',
  },
};

const Teams: FC = () => {
  const history = useHistory();
  const {team: teamParam, tab: tabParam, resource: resourceParam} = useParams<TeamsUrlParams>();
  const [teamFilter, setTeamFilter] = useState<string>('');
  const [teams, setTeams] = useState<CoreTeamResponse[]>([]);
  const [apiState, setAPIState] = useState<APIState>(INITIAL_API_STATE);

  useEffect(() => {
    const isAllTeams = teamParam === allTeamsFilter.pathname;
    if (teamParam && tabParam) {
      if (isAllTeams) {
        const isInvalidTabForAll = !(tabParam === TeamTabOptions.members || tabParam === TeamTabOptions.resources);
        if (isInvalidTabForAll) {
          history.replace(ROUTES.teams);
        }
      } else {
        const isInvalidTabForSingleTeam = !(
          tabParam === TeamTabOptions.members || tabParam === TeamTabOptions.overview
        );
        if (isInvalidTabForSingleTeam) {
          history.replace(`${ROUTES.teams}/${teamParam}`);
        }
      }
    } else if (teamParam && !tabParam) {
      if (isAllTeams) {
        history.replace(`${ROUTES.teams}/${teamParam}/${TeamTabOptions.members}`);
      } else {
        history.replace(`${ROUTES.teams}/${teamParam}/${TeamTabOptions.overview}`);
      }
    }
  }, [history, tabParam, teamParam]);

  useEffect(() => {
    const fetchAndProcessTeams = async () => {
      try {
        setAPIState({...apiState, progress: APIProgress.REQ});
        const coreTeams = await teamsApi.getCoreTeams();
        const sortedCoreTeams = coreTeams.sort((team1, team2) => (team1.title > team2.title ? 1 : -1));
        setTeams(sortedCoreTeams);
        setAPIState({...apiState, progress: APIProgress.SUCCESS});
      } catch (err) {
        setAPIState({error: err.message, progress: APIProgress.ERR});
      }
    };
    fetchAndProcessTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (apiState.progress !== APIProgress.SUCCESS) {
      return;
    }

    if (teamParam === allTeamsFilter.pathname) {
      setTeamFilter(allTeamsFilter.title);
      return;
    }

    const team = teams.find(({title}) => title === teamParam);
    if (team) {
      setTeamFilter(team.title);
    } else {
      history.push(ROUTES.teams);
    }
  }, [history, teamParam, teams, apiState]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      if (option === allTeamsFilter.pathname) {
        history.push(`${ROUTES.teams}/${option}/${TeamTabOptions.members}`);
      } else {
        history.push(`${ROUTES.teams}/${option}/${TeamTabOptions.overview}`);
      }
    },
    [history],
  );

  const renderTeamFilter = (): ReactNode => {
    const navLinkOptions = [{...allTeamsFilter}, ...teams.map((team) => ({pathname: team.title, title: team.title}))];
    return (
      <FlatNavLinks handleOptionClick={handleNavOptionClick} options={navLinkOptions} selectedOption={teamParam} />
    );
  };

  const handleBackClick = useCallback((): void => {
    history.replace(`${ROUTES.teams}/${teamParam}/${tabParam}`);
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
    return null;
  }, []);

  const isReadyToDisplay = apiState.progress === APIProgress.SUCCESS && teamFilter;

  if (apiState.progress === APIProgress.ERR) {
    return (
      <div className="Teams__error">
        <h1>Core Team</h1>
        <h3>{apiState.error}</h3>
      </div>
    );
  }

  return (
    <Container className="Teams">
      <PageTitle
        ogDescription={teamFilter === 'All' ? 'All Teams' : `${teamFilter} Team`}
        title={teamFilter === 'All' ? 'All Teams' : `${teamFilter} Team`}
      />
      {!isReadyToDisplay ? (
        <div className="Teams__loader-container">
          <Loader />
        </div>
      ) : (
        <>
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
                <h1 className="Teams__team-heading">
                  {teamFilter === allTeamsFilter.title ? allTeamsFilter.title : teamFilter}
                </h1>
                <TeamTabs team={teamParam} tab={tabParam || ''} />
                <div className="Teams__tab-panel">{renderTabPanel()}</div>
              </>
            )}
          </section>
        </>
      )}
    </Container>
  );
};

export default Teams;
