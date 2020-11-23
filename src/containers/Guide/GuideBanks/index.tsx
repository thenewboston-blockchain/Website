import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, DocList} from 'components';

import ValidatorElection from './ValidatorElection.png';

const GuideBanks: FC = () => {
  return (
    <DocContainer className="GuideBanks" title="Banks">
      <p>
        Banks play a critical role regarding several aspects of the network. They act as the bond between end users and
        the network and have several responsibilities to each. Regarding network-related responsibilities, banks are
        responsible for assigning trust levels to validators. Banks automatically set their primary validator to the
        connected node that is the:
      </p>

      <DocList variant="ul">
        <li>Most trusted</li>
        <li>Online</li>
        <li>Configured as a primary validator</li>
      </DocList>

      <p>
        Therefore, setting the trust level of validators will determine the line of succession from their list of
        confirmation validators in the event that their primary validator was to go offline. Given the architecture of a
        peer-to-peer network, all bank nodes are always in constant communication with one another. This will allow them
        to view each other's trust levels of all validators on the network. All banks in the network are responsible for
        assigning their own trust levels to each validator.
      </p>
      <p>Only one primary validator is allowed per bank.</p>

      <DocImage alt="validator election" maxWidth={740} src={ValidatorElection} />

      <p>
        In addition to the responsibilities to the network, banks also have responsibilities to their users (account
        owners). When users first download account manager applications and create their accounts, they will then select
        a bank which they wish to use. They are then able to connect to the network through that bank and may begin
        sending blocks. Users are able to send blocks through any bank of their choosing at any time. However, due to
        the fact that banks will typically only keep the transaction history of the accounts who have sent transactions
        through them, users will generally use the same bank for extended periods of time.
      </p>
      <p>
        Banks prevent users from the need to set up and maintain their own network servers. Banks will also assign trust
        levels to all known accounts, similar to how trust levels are assigned to validators. The specific method of
        assigning trust levels to the known accounts is entirely up to the bank itself, but in general banks will often
        assign trust levels based on several factors including:
      </p>

      <DocList variant="ul">
        <li>Time (older accounts are generally more trusted)</li>
        <li>Previous attempts to pay with insufficient funds</li>
        <li>Improper formatting of Txs</li>
      </DocList>

      <p>
        Lastly, banks will collect transaction fees from all blocks sent through them. The transaction fees are
        determined by the individual banks. This will give users the ability to choose banks with the most reliable
        service and who offer the lowest transaction fees. Transaction fees are also determined on a per account basis,
        allowing the banks to reward their most trustworthy users. Transaction fees charged to user accounts will often
        be tier based, as determined by the user's trust level, rather than determining the fees for each individual
        account one by one.
      </p>
      <p>
        <strong>Important Note:</strong> If and when a bank server goes down, the coins of all accounts using that bank
        will always remain secure. This is because unlike a real-world bank, network banks do not store coins. All
        account balances are maintained and updated by the primary validator. Both the root balance sheet and blockchain
        are continuously backed up by several confirmation validators, in the case where the primary validator goes
        down. Banks act simply as routers and initial validation mechanisms to enhance the performance of the network by
        distributing the processing power that would otherwise be required by a single node.
      </p>
      <p>
        This architecture does not imply that a single individual should only ever have one account. It is perfectly
        acceptable and even encouraged for individuals to have multiple accounts.
      </p>
      <p>
        Although the documentation has not yet covered the topic of{' '}
        <NavLink to="/guide/confirmation-validators">Confirmation Validators</NavLink>, it is important to remember
        these key ideas:
      </p>

      <DocList variant="ul">
        <li>Users choose their banks</li>
        <li>Banks choose their primary validators</li>
        <li>
          The bank's confirmation validators will tell the bank when to switch primary validators (if/when the primary
          validator becomes untrustworthy)
        </li>
      </DocList>

      <p>
        Given that the banks are essentially representatives of the users, and that users will reward the banks through
        transaction fees for selecting the primary validator that is both the most performant and most trustworthy, the
        ability to determine the network as a whole is ultimately in the hands of the people.
      </p>
    </DocContainer>
  );
};

export default GuideBanks;
