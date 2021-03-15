import React, {FC} from 'react';

import {DocContainer, DocList, TableVertical} from 'components';

import './GuideTransactionFees.scss';

const GuideTransactionFees: FC = () => {
  return (
    <DocContainer className="GuideTransactionFees" title="Transaction Fees" lastUpdated="06 Mar 2021">
      <p>
        Individuals are incentivized to maintain nodes through the collection of transaction fees. Node maintainers set
        their own transaction fee amounts. End users will likely use the nodes that offer the lowest transaction fees.
        There are also additional factors such as server reliability and other services the node may provide, but the
        transaction fees will likely be a large consideration. When transaction fees become too high, end users will
        look for a new node to use.
      </p>
      <p>
        In addition to the node transaction fee, there will also be an additional fee paid to the PV as well. This fee
        will be set by the government by majority vote rather than having each validator set it's own fee. This prevents
        nodes from needing to figure out a new PV fee after every validator change. This fee will be set directly on the
        blockchain resulting in one unified PV fee across the entire network.
      </p>
      <p>
        In the following example, Amy is sending 100 coins to Brian. Before the block is ever created, Amy's node is
        aware of the PV fee. The fees of both the node and the PV will be displayed on Amy's user interface. When
        creating a transaction, Amy will first choose the desired recipient and then the amount of coins she wishes to
        send. A very simple UI that Amy may see at that point might look like this:
      </p>

      <TableVertical
        innerBorders
        rows={[
          [
            'Coins being sent to Brian',
            <span className="GuideTransactionFees__text-placeholder">Enter the amount of coins here...</span>,
          ],
          ['Node fee', <span className="GuideTransactionFees__text-light">2 coins</span>],
          ['PV fee', <span className="GuideTransactionFees__text-light">1 coin</span>],
        ]}
      />

      <p>
        After typing in the amount of coins, Amy is able to see the total cost of her transaction and verify that the
        amount is acceptable before signing and sending the block to her node.
      </p>

      <TableVertical
        innerBorders
        rows={[
          ['Coins being sent to Brian', 100],
          ['Node fee', <span className="TransactionFees__text-light">2 coins</span>],
          ['PV fee', <span className="TransactionFees__text-light">1 coin</span>],
          ['Total', 103],
        ]}
      />

      <p>Once Amy has reviewed, signed, and sent the block to the node, the following functions will be performed:</p>

      <DocList variant="ol">
        <li>Amy's node will validate that:</li>
        <ol type="a">
          <li>The transaction (Tx) is formatted properly (according to network protocol).</li>
          <li>The fees included in Amy's signed block are in agreement with the expected fees of the network.</li>
          <li>
            If any aspect of the block can not be validated, an error will be returned to Amy and the process will not
            continue.
          </li>
        </ol>
        <li>After initial validation by Amy's node, the block will be forwarded to the PV where it will validate:</li>
        <ol type="a">
          <li>
            The block and all transactions are formatted properly (necessary to store the data on the blockchain and
            update account balances).
          </li>
          <li>The correct fees to the PV are included.</li>
          <li>Amy has enough funds to cover the total cost of all Txs.</li>
        </ol>
        <li>
          After the block is confirmed by the PV, the PV will add a confirmation to the blockchain and update the coin
          balances for Amy, Brian, the node, and the PV (itself).
        </li>
      </DocList>
    </DocContainer>
  );
};

export default GuideTransactionFees;
