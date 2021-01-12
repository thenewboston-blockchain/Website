import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocList, TableVertical} from 'components';

import './GuideTransactionFees.scss';

const GuideTransactionFees: FC = () => {
  return (
    <DocContainer className="GuideTransactionFees" title="Transaction Fees" lastUpdated="07 Dec 2020">
      <p>
        Users are incentivized to maintain bank and validator nodes through the collection of transaction fees. The
        owners of the nodes set the fee amounts and fee structures entirely.
      </p>
      <p>
        As banks and validators join the network, they will announce their transaction fees. This is the amount (in
        coins) that nodes will charge per block processed. Nodes may charge a fixed transaction fee for all users, or
        offer tier-based fees based on trust levels. This is one way in which the network may reward more trusted user
        accounts and more trusted banks.
      </p>
      <p>
        Users will likely attempt to join the banks that offer the lowest transaction fees. There are also additional
        factors such as server reliability and other services the bank may provide, but the transaction fees will likely
        be a large consideration. When bank fees become too high, users will look for a new bank to join.
      </p>
      <p>
        In the following example, Amy is sending 100 coins to Brian. Before the block is even created, Amy's bank is
        aware of the validators transaction fee. The transaction fees of both the bank and the validator will be
        displayed on her user interface. When creating a transaction, Amy will first choose the desired recipient and
        then the amount of coins she wishes to send. A very simple UI that Amy may see at that point might look like
        this:
      </p>

      <TableVertical
        innerBorders
        rows={[
          [
            'Coins being sent to Brian',
            <span className="GuideTransactionFees__text-placeholder">Enter the amount of coins here...</span>,
          ],
          ['Bank fees', <span className="GuideTransactionFees__text-light">2 coins</span>],
          ['Validator fees', <span className="GuideTransactionFees__text-light">1 coin</span>],
        ]}
      />

      <p>
        After typing in the amount of coins, Amy is able to see the total cost of her transaction and verify that the
        amount is acceptable before signing and sending the block to her bank.
      </p>

      <TableVertical
        innerBorders
        rows={[
          ['Coins being sent to Brian', 100],
          ['Bank fees', <span className="TransactionFees__text-light">2 coins</span>],
          ['Validator fees', <span className="TransactionFees__text-light">1 coin</span>],
          ['Total', 103],
        ]}
      />

      <p>Once Amy has reviewed, signed, and sent the block to the bank, the following functions will be performed:</p>

      <DocList variant="ol">
        <li>Amy's bank will validate that:</li>
        <ol type="a">
          <li>The transaction (Tx) is formatted properly (according to network protocol).</li>
          <li>
            The Tx fees included in Amy's signed block are in agreement with the expected fee structure of the network.
          </li>
          <li>
            If any aspect of the block can not be validated, an error will be returned to Amy and the process will not
            continue.
          </li>
        </ol>
        <li>
          After initial validation by Amy's bank, the block will be forwarded to the primary validator where it will
          validate:
        </li>
        <ol type="a">
          <li>
            The block and all transactions are formatted properly (necessary to store the data on the blockchain and
            update account balances).
          </li>
          <li>The correct fees to the validator are included.</li>
          <li>Amy has enough funds to cover the total cost of all Txs.</li>
        </ol>
        <li>
          After the block is confirmed by the validator, the validator will add a confirmation block to the blockchain
          and update the coin balances for Amy, Brian, the bank, and the validator (itself).
        </li>
        <li>
          The validator will then send the confirmation block back to Amy's bank where the bank can then notify both
          users of the successful transaction. If the recipient (Brian) is using another bank, that bank will receive a
          confirmation block from the confirmation validators.
        </li>
      </DocList>

      <p>
        We will cover the exact role of confirmation validators in the{' '}
        <NavLink to="/guide/confirmation-validators">Confirmation Validators</NavLink> section of the documentation.
      </p>
    </DocContainer>
  );
};

export default GuideTransactionFees;
