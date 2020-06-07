import React from 'react';

const Overview = () => (
  <section>
    <span>Overview</span>
    <ul>
      <li>
        <strong>Transaction -</strong> the transfer of points from one account to another
      </li>
      <li>
        <strong>Block -</strong> a signed list of one or more transactions
      </li>
      <li>
        <strong>Confirmation -</strong> a block that has been signed by a validator as confirmation it has been added to
        their blockchain
      </li>
      <li>
        <strong>Signature -</strong> a unique value used to verify the authenticity of a block
      </li>
      <li>
        <strong>Bank -</strong> a network server that has several responsibilities such as electing a validator and
        routing member transactions
      </li>
      <li>
        <strong>Member -</strong> a user belonging to a bank
      </li>
      <li>
        <strong>Validator -</strong> a central server that accepts transactions from multiple banks, and after final
        validation adds those transactions to the transaction ledger (commonly referred to as “the ledger”) and updates
        account balances
      </li>
      <li>
        <strong>Base Balance Sheet -</strong> a historical record of all account balances at the time the primary
        validator was first elected (never changes)
      </li>
      <li>
        <strong>Live Balance Sheet -</strong> a current record of all account balances
      </li>
    </ul>
    <p>
      All transactions on the network will begin with a user account. The owner of the account will create a
      transaction, indicating the amount of points they would like to send along with the recipient, and send that
      transaction to their bank. The bank will then forward the transaction along to the validator and upon successful
      validation of the transaction, append it onto the transaction ledger and update the network balance sheet. There
      are several key differences between the network structure outlined above and the traditional Blockchain
      architecture regarding the creation of a distributed public ledger.
    </p>
    <p>
      An inherent defect in the modern Blockchain architecture is the inefficient composition of blocks. Blocks in the
      Bitcoin Blockchain are composed of <strong>multiple unrelated transactions</strong>. This indicates that within
      any given block, the earliest transactions would have experienced significant delays as later transactions
      continued to accumulate until the entire block was verified. If one was only considering performance of the
      Blockchain and nothing else, they would arrive at the conclusion that the fastest Blockchain would not have any
      blocks. Transactions would instead be validated immediatley as they were received rather than waiting to be
      bundled along with additional unrelated transactions.
    </p>
    <p>
      By removing the inclusion of unrelated transactions into blocks we are able to substantially reduce the average
      network block size. This is accomplished through constructing blocks that group{' '}
      <strong>related transactions only</strong>. Related transactions refer to a set of transactions that must be
      processed together. This is discussed in more detail in the <strong>Blocks</strong> section of the paper.
    </p>
    <p>
      These improvements, along with others discussed throughout this paper, when implemented correctly reduce the
      overall energy consumption and processing power required by the network. This increased efficiency not only
      enables transactions between users to be verified within seconds (or less), but allows developers to utilize more
      popular programming languages (Python, JavaScript, etc...) towards expediting early development while encouraging
      rapid growth and innovation.
    </p>
  </section>
);

export default Overview;
