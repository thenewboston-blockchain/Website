import React from 'react';

import RootBalanceSheetDiagram from './RootBalanceSheet.png';

import './RootBalanceSheet.scss';

const RootBalanceSheet = () => {
  return (
    <section className="RootBalanceSheet">
      <h1 className="page-title">Root Balance Sheet</h1>
      <p>
        The root balance sheet is a historic snapshot of all account balances at a given point in time. Every validator
        in the network generates and maintains their own root balance sheet. Different validators may have different
        balance sheets depending on when the snapshot was taken (which is usually when the server first comes online).
        However, given the architecture of the blockchain, all validator balance sheets are able to be downloaded and
        verified by all other nodes in the network regardless of when the snapshot was taken.
      </p>
      <div className="img-container">
        <img alt="root balance sheet diagram" className="root-balance-sheet-diagram" src={RootBalanceSheetDiagram} />
      </div>
      <p>
        A key distinction between the architecture outlined above and the Bitcoin Blockchain (as well as many others) is
        that the entire transaction history of Bitcoin is maintained by it's Blockchain, while in this network
        architecture it is not. But how then is the network able to verify the integrity of the balance sheet in order
        to validate transactions without access to the complete transaction history? The answer to this can be given
        through a simplified example.
      </p>
      <p>
        Imagine a very primitive economy that consisted of only three people. We can call them Amy, Bucky, and Carl. Now
        let's give each of them $10. The first transaction is Amy buying a sandwich from Carl for $2. The resulting
        transactions and balance sheet would look like this.
      </p>

      <div className="table-title">Transaction Log</div>
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
        transaction) are able to view both the transaction log and balance sheet to verify that everything is
        legitimate. Although Bucky was not involved in this transaction, he would still like to review the details to
        ensure that Amy is not attempting to spend more money than she has and that Carl's balance is not higher than it
        should be. It is in Bucky's best interest to verify that the economy, in which he is a part of, is fair.
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
        may have hacked the bank and changed her account balance. So Bucky views the transaction log and notices some
        changes there as well.
      </p>

      <div className="table-title">Transaction Log</div>
      <table>
        <tr className="heavy">
          <td>Tx ID</td>
          <td>From</td>
          <td>To</td>
          <td>Description</td>
          <td>Amount</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Amy</td>
          <td>Carl</td>
          <td>tuna sandwich</td>
          <td>$1</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Carl</td>
          <td>Amy</td>
          <td>gold watch</td>
          <td>$6</td>
        </tr>
      </table>

      <p>
        Unfortunately, the bank has not updated it's database in years and is only able to store up to 2 rows in the
        transaction table (it's a very primitive economy after all). The historical log of the first transaction is lost
        and Bucky never wrote it down. However, since Bucky had already verified the first transaction and also made a
        copy of the balance sheet at that point in time, he does not need to view the first transaction again to ensure
        that the economy is still fair. In fact, even if Bucky did have a record of the first transaction, he would not
        use it because there is simply no use for it. If Bucky wants to verify the current account balances, the logic
        is simple.
      </p>

      <ol className="mb-20">
        <li>start with the most recent verified balance sheet (from his notebook)</li>
        <li>
          beginning with the first unverified transaction (in this case Tx ID: 2) apply each transaction to the verified
          balance sheet
        </li>
        <li>compare your results with the public transaction ledger</li>
        <ol type="a">
          <li>if all balances match, the economy is still fair</li>
          <li>if they don't match, someone must be cheating</li>
        </ol>
      </ol>

      <p>
        Bucky concludes that after the second transaction in which Amy bought a tuna sandwich from Carl for $1 that the
        balance sheet must have been:
      </p>

      <div className="table-title">Balance Sheet</div>
      <table>
        <tr className="heavy">
          <td>Last Tx Id</td>
          <td>User</td>
          <td>Balance</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Amy</td>
          <td>$7</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bucky</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Carl</td>
          <td>$13</td>
        </tr>
      </table>

      <p>
        Also, after the third transaction in which Carl bought a gold watch from Amy for $6 that the balance sheet would
        then be:
      </p>

      <div className="table-title">Balance Sheet</div>
      <table>
        <tr className="heavy">
          <td>Last Tx Id</td>
          <td>User</td>
          <td>Balance</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Amy</td>
          <td>$13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bucky</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Carl</td>
          <td>$6</td>
        </tr>
      </table>

      <p>
        Therefore, Bucky is able to conclude that the balance sheet of the economy is correct. He makes an updated copy
        of the balance sheet in his notebook and can now rest easy. Although a full transaction history does not exist,
        Bucky had already verified the earlier transactions himself and made a copy of those verified balances in his
        notebook. In doing so, his copy of the balance sheet acted as a "snapshot" in which earlier transaction
        histories were no longer needed. Also, since Bucky has now verified all transactions up to Tx: 3, he does not
        need to maintain a historical log of those transactions now either.
      </p>
      <p>
        Although things turned out ok for Bucky and his primitive economy, there is one aspect of this system that needs
        some alteration before this concept can be applied to an actual modern day economy. That is the limitation of
        the historical transaction ledger. If there was just one more transaction (Tx: 4), since the public transaction
        log has a limit of 2 rows it would only have been able to store Tx: 3 and 4. Bucky would not have been able to
        verify the new balance sheet because he would be missing Tx: 2.
      </p>
      <p>
        This is why in the real network, it is important for all nodes to maintain a copy of the transaction history
        (via the blockchain) for as far back as they are able to. In practice, nodes will never need to maintain a
        record of transactions more than a few hours old. This is because every node in the system is always in constant
        communication with each other, and every node is always verifying the transactions of others. Even though the
        architecture is structured around a central validator node, if the transaction ledger produced by that validator
        node is ever deemed "invalid" by the bank nodes who are continuously verifying the data, the banks will quickly
        lose trust in the validator, reject the updated balances, and find a new validator as a replacement.
      </p>
      <p>
        We will cover the concept of "trust" in much more detail later on, but for now we can simplify the concept down
        to some key ideas.
      </p>

      <ul>
        <li>nodes always want to connect to other nodes that they trust</li>
        <li>trust is increased when you can prove that a given node is telling the truth</li>
        <ul>
          <li>meaning that the data received from that node can be validated</li>
        </ul>
        <li>
          the further back in time a node is able to provide a transaction history via the blockchain, the more
          transactions you are able to verify (by comparing them against your own) and the more trust can be established
          between nodes
        </li>
      </ul>
    </section>
  );
};

export default RootBalanceSheet;
