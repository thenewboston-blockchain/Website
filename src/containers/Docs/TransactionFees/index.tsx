import React from 'react';

import './TransactionFees.scss';

const TransactionFees = () => {
  return (
    <section className="TransactionFees">
      <h1 className="page-title">Transaction Fees</h1>
      <p>
        Users are incentivized to maintain bank and validator nodes through the collection of transaction fees. The fee
        amounts and fee structures are set entirely by the owners of the nodes. Users may also choose to set their
        transactions fees to 0 to allow for free usage of their nodes. It is recommended however for nodes to set a
        small fee to deter malicious users from attacking the network and bloating the transaction log by sending a
        large amount of useless transactions between accounts.
      </p>
      <p>
        As banks and validators join the network, they will announce their transaction fees. This is the amount (in
        points) that nodes will charge per transaction. Nodes may charge a fixed transaction fee for all users, or offer
        tier based fees based on trust levels. This is one way in which more trusted bank members and more trusted banks
        may be rewarded by the network.{' '}
      </p>
      <p>
        Users will always attempt to join banks that offer the lowest transaction fees. There are also additional
        factors such as server reliability and other services the bank may provide, but the transaction fees will likely
        be a large consideration. When bank fees become too high, the members will look for a new bank to join.
      </p>
      <p>
        In the following example, Amy is sending 100 points to Brian. Before the transaction is even created, Amy’s bank
        is aware of the validators transaction fee. The transaction fees of both the bank and the validator will be
        displayed in the user interface. When creating a transaction, Amy will first choose the desired recipient and
        then the amount of points she wishes to send. A very simple UI that Amy may see at that point might look like
        this:
      </p>
      <table>
        <tr>
          <td>Points being sent to Brian</td>
          <td className="light placeholder">Enter the amount of points here...</td>
        </tr>
        <tr>
          <td>Bank fees</td>
          <td className="light">2 points</td>
        </tr>
        <tr>
          <td>Validator fees</td>
          <td className="light">1 point</td>
        </tr>
        <tr>
          <td>Total</td>
          <td />
        </tr>
      </table>
      <p>
        After typing in the amount of points, Amy is able to see the total cost of her transaction and verify that the
        amount is acceptable before signing and sending the transaction.
      </p>
      <table>
        <tr>
          <td>Points being sent to Brian</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Bank fees</td>
          <td className="light">2 points</td>
        </tr>
        <tr>
          <td>Validator fees</td>
          <td className="light">1 point</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>103</td>
        </tr>
      </table>
      <p>
        Once the transaction has been reviewed, signed, and sent to the bank by Amy, the following functions will be
        performed:
        <ol>
          <li>Amy’s bank will validate that:</li>
          <ol type="a">
            <li>The transaction (Tx) is formatted properly (according to network protocol)</li>
            <li>
              The fees included in Amy’s signed Tx are in agreement with the expected fee structure of the network
            </li>
            <li>
              If any aspect of the transaction can not be validated, an error will be returned to Amy and the Tx will
              not continue
            </li>
          </ol>
          <li>
            After initial validation by Amy’s bank, the Tx will be forwarded to the primary validator where it will
            validate:
          </li>
          <ol type="a">
            <li>
              The transaction (Tx) is formatted properly (necessary to store the data on the ledger and balance sheet)
            </li>
            <li>The correct fees to the validator are included</li>
            <li>Amy has enough funds to cover the total Tx cost</li>
          </ol>
          <li>
            After the transaction is confirmed by the validator, the validator will add that transaction to the ledger
            and update the balance sheet for both Amy and Brian.
          </li>
          <li>
            The validator will then send the response back to Amy’s bank where it can then notify both users of the
            successful transaction.
          </li>
        </ol>
      </p>
      <p>
        A more technical point worth noting (for developers) is that although this process is seen from the users
        perspective as a single transaction, it is technically three separate yet related transactions. This is because
        transactions only allow for the transfer of points from one account to another. Since the bank and validator
        also receive points, the entire set of transactions involved would more closely resemble this:
      </p>
      <table>
        <tr className="heavy">
          <td>From</td>
          <td>To</td>
          <td>Amount of Points</td>
        </tr>
        <tr>
          <td>Amy</td>
          <td>Brian</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Amy</td>
          <td>Bank</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Amy</td>
          <td>Validator</td>
          <td>1</td>
        </tr>
      </table>
      <p>
        Additionally, the balance sheet would also be updated to reflect the new point balances of all four parties
        involved. For more details, see the Blocks section of this paper.
      </p>
    </section>
  );
};

export default TransactionFees;
