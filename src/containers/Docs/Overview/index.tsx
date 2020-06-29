import React from 'react';

import OverviewDiagram from './Overview.png';

import './Overview.scss';

const Overview = () => {
  const renderGlossary = () => (
    <table className="glossary">
      <tr>
        <td>Transaction</td>
        <td>the transfer of points from one account to another</td>
      </tr>
      <tr>
        <td>Block</td>
        <td>a list of one or more transactions, signed (authorized) by the account owner</td>
      </tr>
      <tr>
        <td>Signature</td>
        <td>a unique value used to verify the authenticity of a block</td>
      </tr>
      <tr>
        <td>Bank</td>
        <td>a network server that has several responsibilities such as electing a validator</td>
      </tr>
      <tr>
        <td>Validator</td>
        <td>
          a central server that accepts blocks from multiple banks and after validation adds those blocks to the
          blockchain while updating account balances
        </td>
      </tr>
      <tr>
        <td>Confirmation</td>
        <td>
          a block that has been signed by a validator as confirmation it has been added to their blockchain, indicating
          that the transactions have been authorized and the points have been successfully transferred
        </td>
      </tr>
      <tr>
        <td>Root Balance Sheet</td>
        <td>a historic record of all account balances at a given point in time</td>
      </tr>
      <tr>
        <td>Blockchain</td>
        <td>a validators log of all of confirmed transactions since the creation of the balance sheet (or earlier)</td>
      </tr>
    </table>
  );

  return (
    <section className="Overview">
      <h1 className="page-title">Overview</h1>
      <p>
        The system is composed of many components, each of which play a specific role in allowing the transfer of points
        (the currency of the system) between users. Each of these nodes will be discussed in more detail in future
        sections, but for now we will examine a simplified network composed of the core components.
      </p>
      {renderGlossary()}
      <div className="img-container">
        <img alt="overview diagram" className="overview-diagram" src={OverviewDiagram} />
      </div>
      <p>
        All transactions on the network will begin with a user account. The owner of the account will create a block
        (list of transactions) indicating the amount of points they would like to send to each recipient and then send
        that block to their bank. The bank will then forward the block along to the validator and upon successful
        validation of the transaction, append it onto blockchain while updating account balances. There are several key
        differences between the network structure outlined above and the traditional Blockchain architecture regarding
        the creation of a distributed public ledger.
      </p>
      <p>
        An inherent defect in the modern Blockchain architecture is the inefficient composition of blocks. Blocks in the
        Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that within any given block,
        the earliest transactions would have experienced significant delays as later transactions continued to
        accumulate until the entire block was verified. If one was only considering performance of the Blockchain and
        nothing else, they would arrive at the conclusion that in an ideal architecture transactions would be validated
        immediately as they were received rather than waiting to be bundled along with additional unrelated
        transactions.
      </p>
      <p>
        By removing the inclusion of unrelated transactions into blocks we are able to substantially reduce the average
        network block size. This is accomplished through constructing blocks that group related transactions only.
        Related transactions refer to a set of transactions that must be processed together. This is discussed in more
        detail in the Blocks section of the paper.
      </p>
      <p>
        These improvements, along with others discussed throughout this documentation, when implemented correctly reduce
        the overall energy consumption and processing power required by the network. This increased efficiency not only
        enables transactions between users to be verified within seconds (or less), but allows developers to utilize
        more popular programming languages (Python, JavaScript, etc...) towards expediting early development while
        encouraging rapid growth and innovation.
      </p>
    </section>
  );
};

export default Overview;
