import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import Overview from './GovernanceOverview.png';

const GovernanceOverview: FC = () => {
  return (
    <DocContainer className="GovernanceOverview" title="Overview" lastUpdated="15 Feb 2021">
      <DocImage alt="governance-overview" maxWidth={1200} src={Overview} />
    </DocContainer>
  );
};

export default GovernanceOverview;
