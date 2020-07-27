import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, TableVertical} from 'components';

import OverviewDiagram from './Overview.png';

const GuideIntroduction: FC = () => {
  const renderGlossary = (): ReactNode => (
    <TableVertical
      altColors
      rows={[
        ['Account', 'an anonymous digital identity on the network where points may be sent to and from'],
        ['Transaction', 'the transfer of points from one account to another'],
        ['Block', 'a group of one or more transactions along with the senders account number and a signature'],
        [
          'Signature',
          'unique value used to verify the authenticity of a digital document (included with every block to prove that the related transactions have been authorized by the account owner)',
        ],
        ['Bank', 'a network server that has several responsibilities such as electing a validator and routing blocks'],
        ['Bank Block', 'a block that has been signed by a bank'],
        [
          'Validator',
          'a central server that accepts blocks from multiple banks and after successful validation/confirmation of each block, creates a new confirmation block which is added to the blockchain',
        ],
        [
          'Confirmation Block',
          'often referred to as a "confirmation", a block that has been signed by a validator as confirmation it has been added to their blockchain, indicating that the transactions have been validated and that the points have been successfully transferred',
        ],
        ['Blockchain', 'an ordered list of confirmation blocks'],
        ['Root Account File', 'a historic record (snapshot) of all account balances at a given point in time'],
      ]}
    />
  );

  const renderIntro = (): ReactNode => {
    return (
      <>
        <p>
          This documentation will outline the foundation of a trust based distributed architecture in which our network
          is built upon. This architecture offers an efficient yet scalable peer-to-peer consensus mechanism through the
          election of a primary validation node by a distributed network of trusted nodes, where the amount of trust is
          quantified solely by human judgement.
        </p>
        <p>
          The architecture is based on the idea that when building a distributed payment ledger, it is not the
          transaction processing itself that requires distribution across multiple servers, for this often results in
          duplicate work being done by several network nodes causing an inherent inefficiency in the system. It is
          rather the ability to fairly elect a single validation server and consensual acceptance of the produced
          results that requires distribution among peers. This allows for highly performant transaction validation
          within a decentralized network.
        </p>
      </>
    );
  };

  return (
    <DocContainer className="GuideIntroduction" introSection={renderIntro()} introTitle="Introduction" title="Overview">
      <p>
        The system is composed of many components, each of which play a specific role in allowing the transfer of points
        (the currency of the system) securely between accounts. Each of these elements will be discussed in more detail
        in future sections, but for now we will examine a simplified network composed of the core components.
      </p>

      {renderGlossary()}

      <DocImage alt="overview diagram" maxWidth={720} src={OverviewDiagram} />

      <p>
        All transactions on the network will begin with a user account. The owner of the account will create a block
        (group of transactions) indicating the amount of points they would like to send to each recipient and then send
        that block to their bank. The bank will then forward the block (now a bank block) along to the validator which
        upon successful validation of the transaction, appends it onto blockchain while updating account balances. There
        are several key differences between the network structure outlined above and the traditional Blockchain
        architecture regarding the creation of a distributed public ledger.
      </p>
      <p>
        An inherent defect in the modern Blockchain architecture is the inefficient composition of blocks. Blocks in the
        Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that within any given block,
        the earliest transactions would have experienced significant delays as later transactions continued to
        accumulate until the entire block was verified. If one was only considering the performance of the Blockchain
        and nothing else, they would arrive at the conclusion that in an ideal architecture transactions would be
        validated immediately as they were received rather than waiting to be bundled along with additional unrelated
        transactions.
      </p>
      <p>
        By removing the inclusion of unrelated transactions into the blocks we are able to substantially reduce the
        average network block size. This is accomplished through constructing blocks that group related transactions
        only. Related transactions refer to a set of transactions that must be processed together. This is discussed in
        more detail in the <NavLink to="/guide/blocks">Blocks</NavLink> section of the guide.
      </p>
      <p>
        These improvements, along with others discussed throughout this documentation, when implemented correctly,
        reduce the overall energy consumption and processing power required by the network. This increased efficiency
        not only enables transactions between accounts to be verified within seconds (or less), but allows developers to
        utilize more popular programming languages (Python, JavaScript, etc...) towards expediting early development
        while encouraging rapid growth and innovation.
      </p>
    </DocContainer>
  );
};

export default GuideIntroduction;
