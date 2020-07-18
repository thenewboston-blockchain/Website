import React from 'react';
import {NavLink} from 'react-router-dom';

import OverviewDiagram from './Overview.png';

import './Introduction.scss';

const Introduction = () => {
  const renderGlossary = () => (
    <table className="glossary">
      <tbody>
        <tr>
          <td>Account</td>
          <td>an anonymous digital identity on the network where points may be sent to and from</td>
        </tr>
        <tr>
          <td>Transaction</td>
          <td>the transfer of points from one account to another</td>
        </tr>
        <tr>
          <td>Block</td>
          <td>a group of one or more transactions along with the senders account number and a signature</td>
        </tr>
        <tr>
          <td>Signature</td>
          <td>
            unique value used to verify the authenticity of a digital document (included with every block to prove that
            the related transactions have been authorized by the account owner)
          </td>
        </tr>
        <tr>
          <td>Bank</td>
          <td>a network server that has several responsibilities such as electing a validator and routing blocks</td>
        </tr>
        <tr>
          <td>Bank Block</td>
          <td>a block that has been signed by a bank</td>
        </tr>
        <tr>
          <td>Validator</td>
          <td>
            a central server that accepts blocks from multiple banks and after successful validation/confirmation of
            each block, creates a new confirmation block which is added to the blockchain
          </td>
        </tr>
        <tr>
          <td>Confirmation Block</td>
          <td>
            often referred to as a "confirmation", a block that has been signed by a validator as confirmation it has
            been added to their blockchain, indicating that the transactions have been validated and that the points
            have been successfully transferred
          </td>
        </tr>
        <tr>
          <td>Blockchain</td>
          <td>an ordered list of confirmation blocks</td>
        </tr>
        <tr>
          <td>Root Balance Sheet</td>
          <td>a historic record (snapshot) of all account balances at a given point in time</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <section className="Introduction">
      <h1 className="page-title">Introduction</h1>
      <p>
        This documentation will outline the foundation of a trust based distributed architecture in which our network is
        built upon. This architecture offers an efficient yet scalable peer-to-peer consensus mechanism through the
        election of a primary validation node by a distributed network of trusted nodes, where the amount of trust is
        quantified solely by human judgement.
      </p>
      <p style={{marginBottom: 32}}>
        The architecture is based on the idea that when building a distributed payment ledger, it is not the transaction
        processing itself that requires distribution across multiple servers, for this often results in duplicate work
        being done by several network nodes causing an inherent inefficiency in the system. It is rather the ability to
        fairly elect a single validation server and consensual acceptance of the produced results that requires
        distribution among peers. This allows for highly performant transaction validation within a decentralized
        network.
      </p>

      <h1 className="page-title">Overview</h1>
      <p>
        The system is composed of many components, each of which play a specific role in allowing the transfer of points
        (the currency of the system) securely between accounts. Each of these elements will be discussed in more detail
        in future sections, but for now we will examine a simplified network composed of the core components.
      </p>

      {renderGlossary()}

      <div className="img-container">
        <img alt="overview diagram" className="overview-diagram" src={OverviewDiagram} />
      </div>

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
    </section>
  );
};

export default Introduction;
