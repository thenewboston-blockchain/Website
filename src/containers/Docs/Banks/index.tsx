import React from 'react';

import ValidatorElection from './ValidatorElection.png';

import './Banks.scss';

const Banks = () => {
  return (
    <section className="Banks">
      <h1 className="page-title">Banks</h1>
      <p>
        Banks play a critical role regarding several aspects of the network. They act as the bond between end users and
        the network, and have several responsibilities to each. Regarding network related responsibilities, banks are
        responsible for assigning trust levels to validators. Banks automatically set their primary validator to the
        connected node that is the:
      </p>

      <ul className="mb-20">
        <li>most trusted</li>
        <li>online</li>
        <li>configured as a primary validator</li>
      </ul>

      <p>
        Therefore, setting the trust level of validators will determine the line of succession from their list of
        confirmation validators in the event that their primary validator was to go offline. Given the architecture of a
        peer-to-peer network, all bank nodes are always in constant communication with one another. This will allow them
        to view each other's trust levels of all validators on the network. All banks in the network are responsible for
        assigning their own trust levels to each validator.
      </p>
      <p>Only one primary validator is allowed per bank.</p>

      <div className="img-container">
        <img alt="validator election" className="validator-election" src={ValidatorElection} />
      </div>

      <p>
        In addition to the responsibilities to the network, banks also have responsibilities to their users (account
        owners). When users first download account manager applications and create their accounts, they will then select
        a bank in which they wish to use. They are then able to connect to the network through that bank and may begin
        sending blocks. Users are able to send blocks through any bank of their choosing at any time, however due to the
        fact that banks will typically only keep the transaction history of the accounts who have sent transactions
        through them, users will generally use the same bank for extended periods of time.
      </p>
      <p>
        Banks prevent users from the need to set up and maintain their own network servers. Banks will also assign trust
        levels to all known accounts, similar to how trust levels are assigned to validators. The specific method of
        assigning trust levels to the known accounts is entirely up to the bank itself, but in general banks will often
        assign trust levels based on several factors including:
      </p>

      <ul className="mb-20">
        <li>time (older accounts are generally more trusted)</li>
        <li>previous attempts to pay with insufficient funds</li>
        <li>improper formatting of Txs</li>
      </ul>

      <p>
        Lastly, banks will collect transaction fees from all blocks sent through them. The transaction fees are
        determined by the individual banks. This will give users the ability to choose banks with the most reliable
        service and who offer the lowest transaction fees. Transaction fees are also determined on a per account basis,
        allowing the banks to reward their most trustworthy users. Transaction fees charged to user accounts will often
        be tier based, as determined by the users trust level, rather than determining the fees for each individual
        account one by one.
      </p>
      <p>
        <strong>Important Note:</strong> If and when a bank server goes down, the points of all accounts using that bank
        will always remain secure. This is because unlike a real-world bank, network banks do not store points. All
        account balances are maintained and updated by the primary validator and both the root balance sheet and
        blockchain are continuously backed up by several confirmation validators in the case where the primary validator
        goes down. Banks act simply as routers and initial validation mechanisms to enhance the performance of the
        network by distributing the processing power that would otherwise be required by a single node. When a bank
        server fails, the network will become aware of the failed server and acknowledge that those accounts are now
        free to join a new bank without incurring any trust penalty.
      </p>
      <p>
        This architecture does not imply that a single human individual should only ever have one account. It is
        perfectly acceptable and even encouraged for individuals to have multiple accounts.
      </p>
    </section>
  );
};

export default Banks;
