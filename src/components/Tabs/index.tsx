import React, {FC, useState, ReactNode} from 'react';

import './Tabs.scss';

interface Tab {
  component: ReactNode;
  label: string;
}

interface ComponentProps {
  tabs: Tab[];
}

const Tabs: FC<ComponentProps> = ({tabs}) => {
  const [currentTab, setCurrentTab] = useState(0);

  const renderTabs = () => {
    return tabs.map((item, index) => (
      <div
        className={`Tabs__tabBtn ${currentTab === index && 'active'}`}
        key={index}
        onClick={() => setCurrentTab(index)}
        role="button"
        tabIndex={0}
      >
        {item.label}
      </div>
    ));
  };

  const renderTabContent = () => {
    if (tabs.length) {
      return tabs[currentTab].component;
    }
  };

  return (
    <div className="Tabs">
      <div className="Tabs__innerContainer">
        <div className="Tabs__tabs">{renderTabs()}</div>
        <div className="Tabs__tabContent">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Tabs;
