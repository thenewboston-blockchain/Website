import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {CalloutType, DocCallout, DocContainer, DocList, DocSubHeader, TableVertical} from 'components';

import './GuideTransactionFees.scss';

const GuideTransactionFees: FC = () => {
  return (
    <DocContainer className="GuideTransactionFees" title="Transaction Fees" lastUpdated="07 Mar 2021">
      <p>
        We motivate users to maintain bank and validator nodes through the collection of transaction fees. The owners of
        the nodes set the fee amounts and fee structures entirely.
      </p>
      <p>
        When banks and validators join the network, they announce their <strong>transaction fees</strong>. This is the
        amount (in coins) that nodes will charge for each block they process. Nodes can charge a fixed transaction fee
        for all users, or offer tier-based fees based on trust levels. This is one way in which the network can reward
        more trusted user accounts and more trusted banks.
      </p>
      <p>
        Users will probably join the banks that offer the lowest transaction fees. There are also additional factors,
        such as server reliability and other services the bank might provide, but the transaction fees will likely be a
        large consideration for users. If bank fees become too high, users will look for a new bank to join.
      </p>
      <DocSubHeader>Example</DocSubHeader>
      <p>
        In the following example, Amy sends 100 coins to Brian. Before the block is even created, Amy's bank is aware of
        the validators transaction fees. The transaction fees of both the bank and the validator will display on her
        user interface. When creating a transaction, Amy will first choose the recipient she chooses, and then the
        amount of coins she wishes to send. A very simple UI that Amy will see at that point looks like this:
      </p>

      <TableVertical
        innerBorders
        rows={[
          [
            'Coins being sent to Brian',
            <span className="GuideTransactionFees__text-placeholder">Enter the amount of coins here...</span>,
          ],
          ['Bank fees (coins)', 2],
          ['Validator fees (coins)', 1],
        ]}
      />

      <p>
        After typing in the amount of coins, Amy can see the total cost of her transaction and verify that the amount is
        acceptable before signing and sending the block to her bank.
      </p>

      <TableVertical
        innerBorders
        rows={[
          ['Coins being sent to Brian', 100],
          ['Bank fees (coins)', 2],
          ['Validator fees (coins)', 1],
          [<strong>Total cost (coins)</strong>, 103],
        ]}
      />

      <p>As soon as Amy reviews, signs, and sends the block to the bank, this sequence follows:</p>

      <DocList variant="ol">
        <li>Amy's bank validates that:</li>
        <ol type="a">
          <li>The transaction (Tx) is formatted properly (according to network protocol)</li>
          <li>The Tx fees included in Amy's signed block follow the expected fee structure of the network</li>
          <li>
            All aspects of the block can be validated, otherwise an error will be returned to Amy and the process will
            stop
          </li>
        </ol>
        <li>The block is forwarded to the primary validator</li>
        <li>The primary validator confirms that:</li>
        <ol type="a">
          <li>
            The block and all transactions are formatted properly (a prerequisite step before storing data on the
            blockchain and updating account balances)
          </li>
          <li>The correct fees to the validator are included.</li>
          <li>Amy has enough funds to cover the total cost of all Txs</li>
        </ol>
        <li>If the block is confirmed, the validator adds a confirmation block to the blockchain</li>
        <li>The validator updates the coin balances for Amy, Brian, the bank, and the validator (itself)</li>
        <li>The validator sends the confirmation block back to Amy's bank</li>
        <li>Amy's bank notifies both users of the successful transaction</li>
      </DocList>

      <DocCallout type={CalloutType.note}>
        If the recipient (Brian) uses another bank, that bank will receive a confirmation block from the confirmation
        validators. See <NavLink to="/guide/confirmation-validators">Confirmation Validators</NavLink> for details on
        their role.
      </DocCallout>
    </DocContainer>
  );
};

export default GuideTransactionFees;
