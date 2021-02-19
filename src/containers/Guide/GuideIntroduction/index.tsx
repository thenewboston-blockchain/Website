import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, DocList, DocSubHeader, TableVertical} from 'components';

import OverviewDiagram from './Overview.png';

const GuideIntroduction: FC = () => {
  const renderGlossary = (): ReactNode => (
    <TableVertical
      altColors
      rows={[
        ['Account', 'Anonymous digital identity on the network through which one can send and receive coins'],
        ['Transaction', 'Transfer of coins from one account to another'],
        ['Block', "Group of one or more transactions along with the sender's account number and a signature"],
        [
          'Signature',
          'Unique value that verifies the authenticity of a digital document (included with every block to prove that the account owner has authorized the related transactions)',
        ],
        ['Bank', 'A network server that has several responsibilities, such as electing a validator and routing blocks'],
        ['Bank Block', 'A block that the bank has signed'],
        [
          'Validator',
          'A central server that accepts blocks from multiple banks and, after successful validation/confirmation of each block, creates a new confirmation block which is added to the blockchain',
        ],
        ['Node', 'Any network server (Bank or Validator)'],
        [
          'Confirmation Block',
          'Often referred to as a "confirmation," a block that a validator signs as confirmation that it has been added to their blockchain; shows that the transactions have been validated and that the coins have been successfully transferred',
        ],
        ['Blockchain', 'An ordered list of confirmation blocks'],
        ['Root Account File', 'A historical record (snapshot) of all account balances at a given point in time'],
      ]}
    />
  );

  const renderIntro = (): ReactNode => {
    return (
      <>
        <p>
          This documentation outlines the trust-based distributed architecture of our network. The architecture offers
          an efficient and scalable peer-to-peer consensus mechanism using the election of a primary validation node by
          a distributed network of trusted nodes. The amount of trust in the network is quantified solely by human
          judgment. Here is why.
        </p>
        <DocSubHeader>Enabling humans to do what they do best</DocSubHeader>
        <p>
          There is no formula or function that judges human value in the way which we truly need to. Computers are great
          at solving questions where there is only one definitive answer, but to determine and accurately judge
          something as intangible as the work produced by a human being, they are still a long way off.
        </p>
        <DocSubHeader>Incentives</DocSubHeader>
        <p>
          This leaves us with the challenge of humans themselves. Humans, unlike computer algorithms, can be corrupted.
          However, because of how we want to reward our community members, we believe that there is no better system
          than human judgement for quantifying a wide variety of work (knowing that many jobs are still unknown).
          Choosing a government who truly has the best interest of the community at heart can ensure prosperity, as it
          happens in actual life, in enterprises, institutions, organizations, or countries around the globe. No matter
          how many checks and balances we put in place, no matter how many restrictions or regulations we write, we will
          be always getting back to the variable of human judgement.
        </p>
        <DocSubHeader>Value and work put into the community</DocSubHeader>
        <p>
          We want to ensure that everyone (not just developers and DevOps) can receive the value of their work put into
          making our network and community better. In the long run, this is the only way to guarantee success for our
          community as a group of people working toward common goals. In fact, we see thenewboston as an everlasting
          project because only work put into it generates value.  Every
          unit of thenewboston will forever represent real human effort put into it, and in every trade of thenewboston
          this human effort will add to the cryptocurrency's value. This also demystifies how every single coin becomes
          valuable at the moment we generate it.
        </p>
        <DocSubHeader>Distribution model deriving from the real world</DocSubHeader>
        <p>
          We do not base our distribution model on Proof of Work (PoW) or Proof of Stake (PoS) like most other
          cryptocurrencies. With Bitcoin's PoW, for example, the monetary incentive ties to mining blocks, which results
          in significant loss of time and energy attempting to mine blocks faster, rather than dealing with actual
          problems that must be solved. This includes building mobile apps, developing payment libraries, design,
          marketing, research, and so on.
        </p>
        <DocSubHeader>Efficiency</DocSubHeader>
        <p>
          When building a distributed payment ledger, it is not the transaction processing itself that requires
          distribution across multiple servers. This often results in duplicate work being done by several network
          nodes, causing an inherent inefficiency in the system. It is rather the ability to elect fairly a single
          validation server and consensual acceptance of the produced results that require distribution among peers.
          This allows for highly performant transaction validation within a decentralized network.
        </p>
      </>
    );
  };

  return (
    <DocContainer
      className="GuideIntroduction"
      introSection={renderIntro()}
      introTitle="Introduction"
      title="Overview"
      lastUpdated="15 Feb 2021"
    >
      <p>
        The system has many components, each of which plays a specific role in allowing the transfer of coins (the
        currency of the system) securely between accounts. Other sections discuss each of these elements in more detail,
        but for now, we examine a simplified network comprising the core components. Here is a glossary of key concepts.
      </p>

      {renderGlossary()}
      <p>All transactions on the network begin with a user account. A typical flow follows:</p>
      <DocImage alt="Overview Diagram" maxWidth={720} src={OverviewDiagram} />
      <DocList variant="ol">
        <li>
          The owner of the account creates a block (a group of transactions), indicating the number of coins they would
          like to send to a recipient
        </li>
        <li>The block is sent to the bank</li>
        <li>The bank forwards that block (now a bank block) along to the validator</li>
        <li>The transaction is successfully validated</li>
        <li>The validator appends the block onto the blockchain and updates account balances</li>
      </DocList>
      <p>
        There are several key differences between this network structure and the traditional Blockchain architecture
        regarding the creation of a distributed public ledger.
      </p>
      <DocSubHeader>Composition of blocks</DocSubHeader>
      <p>
        An inherent defect in modern Blockchain architecture is the inefficient composition of blocks. Blocks in the
        Bitcoin Blockchain, for example, comprise multiple unrelated transactions. So, within any block, the earliest
        transactions experience significant delays as later transactions will continue to accumulate until the entire
        block is verified. Focusing solely on the performance of the Blockchain and nothing else, one can conclude that
        in an ideal architecture, transactions would be validated immediately as they are received, rather than waiting
        to be bundled along with additional unrelated transactions.
      </p>
      <p>
        By removing unrelated transactions from blocks, we substantially reduce the average network block size. To do
        so, we construct blocks that group related transactions only. (Transactions here refer to sets of transactions
        that must be processed together.) For details, see <NavLink to="/guide/blocks">Blocks</NavLink>.
      </p>
      <DocSubHeader>Why it matters</DocSubHeader>
      <p>
        When implemented correctly, these improvements, along with others discussed throughout this documentation,
        reduce the overall energy consumption and processing power required by the network. This increased efficiency
        not only enables transactions between accounts to be verified within seconds (or less), but allows developers to
        use more popular programming languages (Python, JavaScript, and so on) towards expediting early development
        while encouraging rapid growth and innovation.
      </p>
    </DocContainer>
  );
};

export default GuideIntroduction;
