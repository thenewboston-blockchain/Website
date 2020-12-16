import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import clsx from 'clsx';

import './TeamTabs.scss';
import {TeamName} from 'types/teams';

interface ComponentProps {
  team: string;
  tab: string;
}

const TeamTabs: FC<ComponentProps> = ({team, tab}) => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState<string>();

  const tabs = useMemo(() => (team === TeamName.all ? ['Members', 'Resources'] : ['Overview', 'Members']), [team]);

  useEffect(() => {
    setActiveTab(tab);
  }, [team, tab]);

  const renderTabs = (): ReactNode => {
    return (
      <div className="TeamsTabs__tabs-container">
        {tabs.map((tabView) => (
          <div
            className={clsx('TeamsTabs__tab', {'TeamsTabs__tab--active': activeTab === tabView})}
            key={tabView}
            onClick={() => history.push(`/teams/${team}/${tabView}`)}
            role="button"
            tabIndex={0}
          >
            {tabView}
          </div>
        ))}
      </div>
    );
  };

  return <div className="TeamsTabs">{renderTabs()}</div>;
};

export default TeamTabs;
