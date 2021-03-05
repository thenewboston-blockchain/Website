import React, {FC, ReactNode, useState} from 'react';
import clsx from 'clsx';

import './Tabs.scss';

export interface Tab {
  component: ReactNode;
  label: string;
}

export interface TabsProps {
  defaultTab?: number;
  tabs: Tab[];
  latestReleaseNumber: number | null;
}

const Tabs: FC<TabsProps> = ({defaultTab = 0, tabs, latestReleaseNumber}) => {
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  const renderTabs = (): ReactNode => {
    return (
      <div className="Tabs__tabs-container" data-testid="Tabs__tabs-container">
        {tabs.map(({label}, index) => (
          <div
            className={clsx('Tabs__tab', {'Tabs__tab--active': activeTab === index})}
            data-testid="Tabs__tab"
            key={label}
            onClick={() => setActiveTab(index)}
            role="button"
            tabIndex={0}
          >
            {label}
          </div>
        ))}
      </div>
    );
  };

  const renderTabPanel = (): ReactNode => {
    return tabs[activeTab]?.component || null;
  };

  return (
    <div className="Tabs" data-testid="Tabs">
      {renderTabs()}
      <p
        className="Download__latest-version"
        data-testid="Download__latest-version"
      >{`Latest Version: 1.0.0-alpha.${latestReleaseNumber}`}</p>
      {renderTabPanel()}
    </div>
  );
};

export default Tabs;
