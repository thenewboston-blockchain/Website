import React, {FC, useState, ReactNode} from 'react';

import './Tabbing.scss';

interface Item {
  tabLabel: string;
  tabComponent: ReactNode;
}

interface ComponentProps {
  tabsData: Item[];
}

const Tabbing: FC<ComponentProps> = ({tabsData}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const renderTabs = () => {
    return tabsData.map((item, index) => (
      <div
        className={`Tabbing__tabBtn ${currentTab === index && 'active'}`}
        key={index}
        onClick={() => setCurrentTab(index)}
        role="button"
        tabIndex={0}
      >
        {item.tabLabel}
      </div>
    ));
  };

  const renderTabContent = () => {
    if (tabsData.length) {
      return tabsData[currentTab].tabComponent;
    }
  };

  return (
    <div className="Tabbing">
      <div className="Tabbing__innerContainer">
        <div className="Tabbing__tabs">{renderTabs()}</div>
        <div className="Tabbing__tabContent">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Tabbing;
