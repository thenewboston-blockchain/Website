import React, {FC} from 'react';

import {Navigation} from 'components';
import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';

const ArchitectureDeepDive: FC = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper | Architecture Deep Dive">
      <div className="ArchitectureDeepDive">
        <div className="ArchitectureDeepDive__page-title">Architecture Deep Dive</div>
        <div className="ArchitectureDeepDive__navigation">
          <Navigation
            path="/developer/whitepaper/principal-entities"
            text="Principal Events and Processes on the Network"
            type="right"
          />
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default ArchitectureDeepDive;
