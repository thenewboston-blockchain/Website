import React, {FC} from 'react';

import {DocContainer, DocSubHeader} from 'components';
import {NavLink} from 'react-router-dom';

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
      <DocSubHeader>Blockchain Optimizations</DocSubHeader>
      <p>
        Regarding the creation of a distributed public ledger, there are several key differences between this network
        structure and the traditional Blockchain architecture.
      </p>
      <p>
        An inherent defect in modern Blockchain architecture is the inefficient composition of blocks. For example,
        blocks in the Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that within
        every block, the earliest transactions experience significant delays, while later transactions continue to
        accumulate until the entire block gets verified. Focusing on the performance of the Blockchain and nothing else,
        in an ideal architecture, transactions must be validated immediately after they are received, instead of waiting
        for them to bundle along with additional unrelated transactions.
      </p>
      <p>
        By removing unrelated transactions from blocks, we can substantially reduce the average network block size. This
        is accomplished by constructing blocks that group related transactions only. Transactions now refer to groups of
        transactions that must be processed together. For details, see <NavLink to="/guide/blocks">Blocks</NavLink>.
      </p>
      <p>
        When implemented correctly, these improvements, along with others discussed throughout this documentation,
        reduce the overall energy consumption and processing power required by the network. This increased efficiency
        not only enables transactions between accounts to be verified within seconds (or less), but also enables
        developers to use more popular programming languages (Python, JavaScript, etc.) towards expediting early
        development, while encouraging rapid growth and innovation.
      </p>
    </DocContainer>
  );
};

export default GuideIntroduction;
