import React, {ReactNode, useState} from 'react';
import {SFC} from 'types/generic';

import * as S from './Styles';

export interface Tab {
  component: ReactNode;
  label: string;
}

export interface TabsProps {
  defaultTab?: number;
  tabs: Tab[];
  latestReleaseNumber: number | null;
}

const Tabs: SFC<TabsProps> = ({className, defaultTab = 0, tabs, latestReleaseNumber}) => {
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  const renderTabs = (): ReactNode => {
    return (
      <S.TabsContainer className={className && `${className}__tabs-container`} data-testid="Tabs__tabs-container">
        {tabs.map(({label}, index) => {
          const isActive = index === activeTab;
          return (
            <S.Tab
              isActive={isActive}
              className={className && `${className}__tab ${isActive ? `${className}__tab--active` : ''}`}
              data-testid="Tabs__tab"
              key={label}
              onClick={() => setActiveTab(index)}
              role="button"
              tabIndex={0}
            >
              {label}
            </S.Tab>
          );
        })}
      </S.TabsContainer>
    );
  };

  const renderTabPanel = (): ReactNode => {
    return tabs[activeTab]?.component || null;
  };

  return (
    <div className={className} data-testid="Tabs">
      {renderTabs()}
      {/* TODO: refactor this to make tabs reusable */}
      <p
        className="Download__latest-version"
        data-testid="Download__latest-version"
      >{`Latest Version: 1.0.0-alpha.${latestReleaseNumber}`}</p>
      {renderTabPanel()}
    </div>
  );
};

export default Tabs;
