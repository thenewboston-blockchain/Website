import React, {FC} from 'react';

import ProgressHeader from './ProgressHeader';
import ProgressDropdownCard from './ProgressDropdownCard';
import {dummyMilestone, dummyIssues} from './constants';
import './Progress.scss';

const Progress: FC = () => {
  const startDate = '4/13';
  const endDate = '4/20';
  return (
    <div className="Progress">
      <ProgressHeader
        goal={dummyMilestone.description}
        startDate={startDate}
        endDate={endDate}
        weekNumber={dummyMilestone.number}
      />
      <ProgressDropdownCard
        name="Audit"
        responsibility="Ensures the accuracy and integrity of all government and team payments."
        issues={dummyIssues}
      />
      <ProgressDropdownCard
        name="Back-end"
        responsibility="Architect, build, and maintain the backend architecture of TNB."
        issues={dummyIssues}
      />
      <ProgressDropdownCard
        name="Blockchain"
        responsibility="Build and maintain the blockchain for TNB digital currency network."
        issues={dummyIssues}
      />
      <ProgressDropdownCard
        name="Community"
        responsibility="Create the strategy, standards and  oversee the overall TNB product."
        issues={dummyIssues}
      />
    </div>
  );
};

export default Progress;
