import React from 'react';

import BalanceSheetDiagram from './BalanceSheet.png';

import './BalanceSheet.scss';

const BalanceSheet = () => {
  return (
    <section className="BalanceSheet">
      <h1 className="page-title">Balance Sheet</h1>
      <p>
        The transaction ledger is a log of historical transactions across the entire network. The balance sheet is a
        record of all account balances. In the majority of diagrams, these are often labeled as the same object although
        they are technically two different objects. The fact that they are always both updated simultaneously is the
        reason they are often labeled as the same.{' '}
      </p>
      <div className="img-container">
        <img alt="balance sheet diagram" className="balance-sheet-diagram" src={BalanceSheetDiagram} />
      </div>
      <p>
        A key distinction between the architecture outlined above and the Bitcoin Blockchain (as well as many others) is
        that the entire transaction history of Bitcoin is maintained by it’s Blockchain, while in this network
        architecture it is not. But how then is the network able to verify the integrity of the balance sheet in order
        to validate transactions without access to the complete transaction history? The answer to this can be given
        through a simplified example.
      </p>
      <p>
        Imagine a very primitive economy that consisted of only three people. We can call them Amy, Bucky, and Carl. Now
        let’s give each of them $10. The first transaction is Amy buying a sandwich from Carl for $2. The resulting
        transactions and balance sheet would look like this.
      </p>

      <div className="table-title">Transactions</div>
      <table>
        <tr className="heavy">
          <td>Tx ID</td>
          <td>From</td>
          <td>To</td>
          <td>Description</td>
          <td>Amount</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Amy</td>
          <td>Carl</td>
          <td>ham sandwich</td>
          <td>$2</td>
        </tr>
      </table>

      <div className="table-title">Balance Sheet</div>
      <table>
        <tr className="heavy">
          <td>Last Tx Id</td>
          <td>User</td>
          <td>Balance</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Amy</td>
          <td>$8</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Bucky</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Carl</td>
          <td>$12</td>
        </tr>
      </table>

      <p>
        After the transaction takes place, all members of the economy (even those who were not involved in the
        transaction) are able to view both the transaction ledger and balance sheet to verify that everything is
        legitimate. Although Bucky was not involved in this transaction, he would still like to review the details to
        ensure that Amy is not attempting to spend more money than she has and that Carl's balance is not higher than it
        should be. It is in Bucky’s best interest to verify that the economy, in which he is a part of, is fair.
      </p>
      <p>
        After verifying all of the transactions are legitimate, Bucky makes a copy of the balance sheet in his notebook.
        The next day, after Bucky comes home from work he takes a look at the balance sheet again and notices some
        changes.
      </p>

      <div className="table-title">Balance Sheet</div>
      <table>
        <tr className="heavy">
          <td>Last Tx Id</td>
          <td>User</td>
          <td>Balance</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Amy</td>
          <td>$13</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Bucky</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Carl</td>
          <td>$7</td>
        </tr>
      </table>

      <p>
        Bucky is skeptical about the balances. He believes that the balances are not legitimate and suspects that Amy
        may have hacked the bank and changed her account balance. So Bucky views the transaction ledger and notices some
        changes there as well.
      </p>
    </section>
  );
};

export default BalanceSheet;
