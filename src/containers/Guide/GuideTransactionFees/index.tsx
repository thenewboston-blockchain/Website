import React, {FC} from 'react';

import {DocContainer, DocList, DocSubHeader, TableVertical} from 'components';

import './GuideTransactionFees.scss';

const GuideTransactionFees: FC = () => {
  return (
    <DocContainer className="GuideTransactionFees" title="Transaction Fees" lastUpdated="24 Mar 2021">
      <p>
        Through the collection of transaction fees, individuals are motivated to maintain nodes. Node maintainers set
        their own transaction fee amounts. End users will probably use the nodes that offer the lowest transaction fees.
        There are some additional factors, such as server reliability and other services the node can provide, but the
        transaction fees will probably be a large consideration. If transaction fees become too high, end users will
        look for a new node to use.
      </p>
      <p>
        Besides the node transaction fee, there is an additional fee paid to the Primary Validator (PV). The government
        (the group of individuals elected by registered users to govern) will set this fee by majority vote, rather than
        having each validator set its own fee. This prevents nodes from having to figure out a new PV fee after every
        validator changes. This fee will be set directly on the blockchain, resulting in one unified PV fee across the
        entire network.
      </p>
      <DocSubHeader>Example</DocSubHeader>
      <p>
        In the following example, Amy sends 100 coins to Brian. Before the block is ever created, Amy's node is aware of
        the PV fee. The fees of both the node and the PV will be displayed on Amy's user interface. When creating a
        transaction, Amy will first choose the recipient, and then the amount of coins she wants to send. A very simple
        UI that Amy may see at that point looks like this:
      </p>

      <TableVertical
        innerBorders
        rows={[
          [
            'Coins being sent to Brian',
            <span className="GuideTransactionFees__text-placeholder">Enter the amount of coins here...</span>,
          ],
          ['Node fee (coins)', <span className="GuideTransactionFees__text-light">2</span>],
          ['PV fee (coins)', <span className="GuideTransactionFees__text-light">1</span>],
        ]}
      />

      <p>
        After typing in the amount of coins, Amy can see the total cost of her transaction and verify that the amount is
        acceptable before signing and sending the block to her node.
      </p>

      <TableVertical
        innerBorders
        rows={[
          ['Coins being sent to Brian', 100],
          ['Node fee (coins)', <span className="TransactionFees__text-light">2</span>],
          ['PV fee (coins)', <span className="TransactionFees__text-light">1</span>],
          ['Total cost (coins)', 103],
        ]}
      />

      <p>As soon as Amy reviews, signs, and sends the block to the node, this sequence follows:</p>

      <DocList variant="ol">
        <li>Amy's node validates the following:</li>
        <ul>
          <li>The transaction (Tx) is formatted properly (according to network protocol).</li>
          <li>The fees included in Amy's signed block are in agreement with the expected fees of the network.</li>
          <li>
            All aspects of the block can be validated, otherwise an error will be returned to Amy and the process will
            stop.
          </li>
        </ul>
        <li>The block is forwarded to the PV.</li>
        <li>The PV validates that:</li>
        <ul>
          <li>
            The block and all transactions are formatted properly (a necessary step before storing the data on the
            blockchain and updating account balances).
          </li>
          <li>The correct fees to the PV are included.</li>
          <li>Amy has enough funds to cover the total cost of all Txs.</li>
        </ul>
        <li>If the block is confirmed, the PV adds a confirmation block to the blockchain.</li>
        <li>The PV adds update the coin balances for Amy, Brian, the node, and the PV (itself).</li>
      </DocList>
    </DocContainer>
  );
};

export default GuideTransactionFees;
