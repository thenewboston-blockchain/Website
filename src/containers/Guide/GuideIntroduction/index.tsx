import React, {FC} from 'react';

import {DocContainer} from 'components';

const GuideIntroduction: FC = () => {
  return (
    <DocContainer className="GuideIntroduction" title="Introduction" lastUpdated="06 Mar 2021">
      <p>
        This documentation outlines an efficient and scalable peer-to-peer consensus mechanism that allows for highly
        performant transaction validation within a decentralized network.
      </p>
      <p>
        The architecture is based on the idea that when building a distributed payment ledger, it is not the transaction
        processing itself that requires distribution across multiple servers. This often results in duplicate work being
        done by several network nodes, causing an inherent inefficiency in the system. It is rather the ability to elect
        fairly a single validation server and consensual acceptance of the produced results that require distribution
        among peers.
      </p>
    </DocContainer>
  );
};

export default GuideIntroduction;
