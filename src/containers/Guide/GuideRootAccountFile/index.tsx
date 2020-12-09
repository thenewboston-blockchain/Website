import React, {FC} from 'react';

import {DocContainer, DocImage, DocList, TableBorderGrid} from 'components';

import RootAccountFileDiagram from './RootAccountFile.png';

const GuideRootAccountFile: FC = () => {
  return (
    <DocContainer className="GuideRootAccountFile" title="Root Account File" lastUpdated="07 Dec 2020">
      <p>
        The root account file is a historic snapshot of all account balances at a given point in time. Every validator
        in the network, both primary and confirmation validators, generate and maintain their own root account file.
        Different validators may have different account files depending on when the snapshot was taken (which is usually
        when the node first comes online). However, given the architecture of the blockchain, all other nodes in the
        network can download and verify all validator account files regardless of when the snapshot was taken.
      </p>

      <DocImage alt="root account file" maxWidth={440} src={RootAccountFileDiagram} />

      <p>
        A key distinction between the architecture outlined above and the Bitcoin Blockchain (as well as many others) is
        that the entire transaction history of Bitcoin is maintained by its Blockchain, while in this network
        architecture it is not. But how then is the network able to verify the integrity of the account file in order to
        validate transactions without access to the complete transaction history? The answer to this can be given
        through a simplified example.
      </p>
      <p>
        Imagine a very primitive economy that consisted of only three people. We can call them Amy, Bucky, and Carl. Now
        let's give each of them $10. The first transaction is Amy buying a sandwich from Carl for $2. The resulting
        transactions and account file would look like this:
      </p>

      <TableBorderGrid
        headers={['Tx ID', 'From', 'To', 'Description', 'Amount']}
        rows={[[1, 'Amy', 'Carl', 'ham sandwich', '$2']]}
        title="Transaction Log"
      />
      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance']}
        rows={[
          [1, 'Amy', '$8'],
          [1, 'Bucky', '$10'],
          [1, 'Carl', '$12'],
        ]}
        title="Account File"
      />
      <p>
        After the transaction takes place, all members of the economy (even those who were not involved in the
        transaction) are able to view both the transaction log and account file to verify that everything is legitimate.
        Although Bucky was not involved in this transaction, he would still like to review the details to ensure that
        Amy is not attempting to spend more money than she has and that Carl's balance is not higher than it should be.
        It is in Bucky's best interest to verify that the economy, in which he is a part of, is fair.
      </p>
      <p>
        After verifying that all of the transactions are legitimate, Bucky makes a copy of the account file in his
        notebook. The next day, after Bucky comes home from work, he takes a look at the account file again and notices
        some changes.
      </p>
      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance']}
        rows={[
          [1, 'Amy', '$13'],
          [1, 'Bucky', '$10'],
          [1, 'Carl', '$7'],
        ]}
        title="Account File"
      />
      <p>
        Bucky is skeptical about the balances. He believes that the balances are not legitimate and suspects that Amy
        may have hacked the bank and changed her account balance. So Bucky views the transaction log and notices some
        changes there as well.
      </p>
      <TableBorderGrid
        headers={['Tx ID', 'From', 'To', 'Description', 'Amount']}
        rows={[
          [2, 'Amy', 'Carl', 'tuna sandwich', '$1'],
          [3, 'Carl', 'Amy', 'gold watch', '$6'],
        ]}
        title="Transaction Log"
      />
      <p>
        Unfortunately, the bank has not updated its database in years and is only able to store up to two rows in the
        transaction table; it's a very primitive economy after all. The historical log of the first transaction is lost,
        and Bucky never wrote it down. However, since Bucky had already verified the first transaction and also made a
        copy of the account file at that point in time, he does not need to view the first transaction again to ensure
        that the economy is still fair. In fact, even if Bucky did have a record of the first transaction, he would not
        use it because there is simply no use for it. If Bucky wants to verify the current account balances, the logic
        is simple.
      </p>

      <DocList variant="ol">
        <li>Start with the most recent verified account file (from his notebook).</li>
        <li>
          Beginning with the first unverified transaction (in this case Tx ID: 2), apply each transaction to the
          verified account file.
        </li>
        <li>Compare his results with the public account file.</li>
        <ol type="a">
          <li>If all balances match, the economy is still fair.</li>
          <li>If they don't match, someone must be cheating.</li>
        </ol>
      </DocList>

      <p>
        Bucky concludes that after the second transaction, in which Amy bought a tuna sandwich from Carl for $1, the
        account file must have been:
      </p>

      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance']}
        rows={[
          [2, 'Amy', '$7'],
          [1, 'Bucky', '$10'],
          [2, 'Carl', '$13'],
        ]}
        title="Account File"
      />

      <p>
        Also, after the third transaction, in which Carl bought a gold watch from Amy for $6, the account file would
        then be:
      </p>

      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance']}
        rows={[
          [3, 'Amy', '$13'],
          [1, 'Bucky', '$10'],
          [3, 'Carl', '$7'],
        ]}
        title="Account File"
      />

      <p>
        Therefore, Bucky is able to conclude that the account file of the economy is correct. He makes an updated copy
        of the account file in his notebook and can now rest easy. Although a full transaction history does not exist,
        Bucky had already verified the earlier transactions himself and made a copy of those verified balances in his
        notebook. In doing so, his copy of the account file acted as a "snapshot" in which earlier transaction histories
        were no longer needed. Also, since Bucky has now verified all transactions up to Tx: 3, he does not need to
        maintain a historical log of those transactions now either.
      </p>
      <p>
        Although things turned out ok for Bucky and his primitive economy, there is one aspect of this system that needs
        some alteration before this concept can be applied to an actual modern day digital economy. That is the
        limitation of the historical transaction log. If there was just one more transaction (Tx: 4), since the public
        transaction log has a limit of 2 rows it would only have been able to store Tx: 3 and 4. Bucky would not have
        been able to verify the new account file because he would be missing Tx: 2.
      </p>
      <p>
        This is why in the real network, it is important for all nodes to maintain a copy of the transaction history
        (via the blockchain) for as far back as they can. In practice, nodes will never need to maintain a record of
        transactions more than a few hours old. This is because every node in the system is always in constant
        communication with each other, and every node is always verifying the transactions of others. Overall, the
        architecture is structured around a central primary validator. Despite this, if the account file or blockchain
        produced by that validator is ever deemed "invalid" by the confirmation validators who are continuously
        verifying the data, all nodes will reject the updated balances, decrease trust in that validator, and switch
        over to a new primary validator as a replacement.
      </p>
      <p>
        We will cover the concept of "trust" in much more detail later on, but for now we can simplify the concept down
        to some key ideas.
      </p>

      <DocList variant="ul">
        <li>Nodes always want to connect to other nodes that they trust.</li>
        <li>Trust is increased when you can prove that a given node is telling the truth.</li>
        <ul>
          <li>Meaning that the data received from that node can be validated</li>
        </ul>
        <li>
          The further back in time a node is able to provide a transaction history via the blockchain, the more
          transactions are able to be verified (by comparing them against your own) and the more trust can be
          established between nodes.
        </li>
      </DocList>
    </DocContainer>
  );
};

export default GuideRootAccountFile;
