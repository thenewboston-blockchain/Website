import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, DocList, DocSubHeader, TableVertical} from 'components';

import OverviewDiagram from './Overview.png';

const GuideComponents: FC = () => {
  const renderGlossary = (): ReactNode => (
    <TableVertical
      altColors
      rows={[
        ['Account', 'Anonymous digital identity on the network through which a user can send and receive coins'],
        ['Transfer Request', 'A users request to transfer of coins from one account to another'],
        ['Block', 'A change to the network'],
        ['Blockchain', 'Ordered list of blocks'],
        [
          'Signature',
          'Unique value that verifies authenticity of a digital document (included with every block to prove that the user has authorized the request)',
        ],
        [
          'Node',
          'Network server that has several responsibilities, such as checking that requests conform to network protocol and routing blocks',
        ],
        [
          'Node Signed Request',
          'Request data that has been signed by a node indicating that it conforms to network protocol',
        ],
        [
          'Primary Validator (PV)',
          'Elected node that accepts node signed requests from other nodes; after successful validation of each request, it creates a new block which is then forwarded to the other validators for verification',
        ],
        [
          'Validator',
          'Elected node that will receive blocks from the PV, validate those results, and if valid add that block to their blockchain',
        ],
        ['Confirmation', 'A block signed by a validator as indication that the block has been added to the blockchain'],
      ]}
    />
  );

  return (
    <DocContainer className="GuideComponents" title="Components" lastUpdated="22 Apr 2021">
      <p>
        The system has many components, each of which plays a specific role in secure transfer of coins (the currency of
        the system) between accounts. Other sections of our documentation discuss these elements in more detail, but for
        now, we examine a simplified network composed of the core components. A basic glossary follows:
      </p>

      {renderGlossary()}
      <p>All transactions on the network begin with a user account. A typical flow looks like this:</p>
      <DocImage alt="Overview Diagram" maxWidth={900} src={OverviewDiagram} />
      <DocList variant="ol">
        <li>
          The owner of the account creates a block (a group of transactions), indicating the number of coins they would
          like to send to each recipient
        </li>
        <li>The owner of the account sends this block to the node</li>
        <li>The node forwards that block (now a node block) to the primary validator</li>
        <li>
          If the transaction is successfully validated, the validator appends the block onto the blockchain and account
          balances are updated
        </li>
      </DocList>
      <p>
        Regarding the creation of a distributed public ledger, there are several key differences between this network
        structure and the traditional Blockchain architecture.
      </p>
      <DocSubHeader>Key benefits</DocSubHeader>
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

export default GuideComponents;
