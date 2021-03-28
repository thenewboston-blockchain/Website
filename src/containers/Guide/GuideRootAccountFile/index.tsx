import React, {FC} from 'react';

import {CalloutType, DocCallout, DocContainer, DocImage, DocList, DocSubHeader, TableBorderGrid} from 'components';

import RootAccountFileDiagram from './RootAccountFile.png';

const GuideRootAccountFile: FC = () => {
  return (
    <DocContainer className="GuideRootAccountFile" title="Root Account File" lastUpdated="27 Mar 2021">
      <p>
        The root account file is a historical snapshot of all account balances at any point in time. Every node in the
        network generates and maintains their own root account file. Different nodes can have different account files
        depending on when the snapshot was taken, which is usually when the node first comes online. Based on the
        architecture of the blockchain, all nodes in the network can download and verify every node account file
        regardless of when the snapshot was taken.
      </p>

      <DocImage alt="root account file" maxWidth={500} src={RootAccountFileDiagram} />

      <DocCallout type={CalloutType.important}>
        A key distinction between the architecture outlined above and the Bitcoin Blockchain (as well as many others) is
        that the Bitcoin Blockchain maintains its entire transaction history, while this network architecture does not.
      </DocCallout>
      <p>
        To understand how the network verifies the integrity of the account file to validate transactions without
        accessing the complete transaction history, let's look at a simplified example.
      </p>
      <DocSubHeader>Example</DocSubHeader>
      <p>
        Imagine a very primitive economy that comprises only three people, Amy, Bucky, and Carl. Now let's give each of
        them 10 coins. The first transaction is Amy buying a sandwich from Carl for 2 coins. The resulting transactions
        and account file will look like this:
      </p>

      <TableBorderGrid
        headers={['Tx ID', 'From', 'To', 'Description', 'Amount (coins)']}
        rows={[[1, 'Amy', 'Carl', 'ham sandwich', '2']]}
        title="Transaction Log"
      />
      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance (coins)']}
        rows={[
          [1, 'Amy', '8'],
          [1, 'Bucky', '10'],
          [1, 'Carl', '12'],
        ]}
        title="Account File"
      />
      <p>
        After the transaction takes place, all members of the economy (even those who did not take part in the
        transaction) can view both the transaction log and account file to verify that everything is legitimate.
        Although Bucky was not involved in this transaction, he would still like to review the details to ensure that
        Amy is not attempting to spend more money than she has and that Carl's balance is not higher than it should be.
        It is in Bucky's best interest to verify that the economy, in which he is a part of, is fair.
      </p>
      <p>
        After verifying that all the transactions are legitimate, Bucky makes a copy of the account file in his
        notebook. The next day, Bucky looks at the account file again and notices some changes.
      </p>
      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance (coins)']}
        rows={[
          [1, 'Amy', '13'],
          [1, 'Bucky', '10'],
          [1, 'Carl', '7'],
        ]}
        title="Account File"
      />
      <p>
        Bucky thinks the balances are not legitimate and suspects that Amy might have hacked the node and changed her
        account balance. So, Bucky views the transaction log and notices some changes there as well.
      </p>
      <TableBorderGrid
        headers={['Tx ID', 'From', 'To', 'Description', 'Amount (coins)']}
        rows={[
          [2, 'Amy', 'Carl', 'tuna sandwich', '1'],
          [3, 'Carl', 'Amy', 'gold watch', '6'],
        ]}
        title="Transaction Log"
      />
      <p>
        Unfortunately, the node has not updated its database in years and can only store up to two rows in the
        transaction table; it's a very primitive economy, after all. The historical log of the first transaction is
        lost, and Bucky never wrote it down. However, Bucky had already verified the first transaction and also made a
        copy of the account file at that point in time. So, he does not need to view the first transaction again to
        ensure that the economy is still fair. In fact, even if Bucky had a record of the first transaction, he would
        not use it because there is simply no use for it.
      </p>
      <p>If Bucky wants to verify the current account balances, the logic is simple.</p>

      <DocList variant="ol">
        <li>Start with the most recent verified account file (from his notebook).</li>
        <li>
          Beginning with the first unverified transaction (in this case Tx ID: 2), apply each transaction to the
          verified account file.
        </li>
        <li>Compare his results with the public account file.</li>
        <ul>
          <li>If all balances match, the economy is still fair.</li>
          <li>If they don't match, someone must be cheating.</li>
        </ul>
      </DocList>

      <p>
        Bucky concludes that after the second transaction, in which Amy bought a tuna sandwich from Carl for 1 coin, the
        account file must have been:
      </p>

      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance (coins)']}
        rows={[
          [2, 'Amy', '7'],
          [1, 'Bucky', '10'],
          [2, 'Carl', '13'],
        ]}
        title="Account File"
      />

      <p>
        Also, after the third transaction, in which Carl bought a gold watch from Amy for 6 coins, the account file
        would then be:
      </p>

      <TableBorderGrid
        headers={['Last Tx ID', 'User', 'Balance (coins)']}
        rows={[
          [3, 'Amy', '13'],
          [1, 'Bucky', '10'],
          [3, 'Carl', '7'],
        ]}
        title="Account File"
      />

      <p>
        Therefore, Bucky can conclude that the account file of the economy is correct. He makes an updated copy of the
        account file in his notebook and can now rest easy. Although a full transaction history does not exist, he had
        already verified the earlier transactions himself and made a copy of those verified balances in his notebook. In
        doing so, his copy of the account file has acted as a "snapshot" in which earlier transaction histories were no
        longer needed. Also, because Bucky has now verified all transactions up to Tx: 3, he does not need to maintain a
        historical log of those transactions now either.
      </p>
      <p>
        Although things turned out ok for Bucky and his primitive economy, there is one aspect of this system that needs
        some alteration before this concept can apply to a real modern day digital economy. That is the limitation of
        the historical transaction log. If there was just one more transaction (Tx: 4), because the public transaction
        log has a limit of two rows, it would only have been able to store Tx: 3 and 4. Bucky would not have been able
        to verify the new account file because he would miss Tx: 2.
      </p>
      <p>
        This is why, in the real network, it is important for all nodes to maintain a copy of the transaction history
        through the blockchain for as far back as they can. In practice, nodes will never need to maintain a record of
        transactions more than a few hours old. This is because every node in the system is always in constant
        communication with each other, and every node always verifies the transactions of others. Overall, the
        architecture is structured around a primary validator (PV). Despite this, if the account file or blockchain
        produced by that PV is ever deemed "invalid" by the nodes who continuously verify the data, all nodes will
        reject the updated balances, decrease trust in that PV, and switch over to a new PV as a replacement.
      </p>
    </DocContainer>
  );
};

export default GuideRootAccountFile;
