import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <h1>1 - Introduction</h1>
          <p>
            This paper will outline the foundation for a trust based distributed network architecture. This architecture
            offers an efficient yet scalable peer-to-peer consensus mechanism through the election of a centralized
            validation node by a distributed network of trusted nodes, where the amount of trust is quantified solely by
            human judgement.
          </p>
          <p>
            The architecture is built on the idea that when building a distributed public ledger, it is not the
            transaction processing itself that requires distribution across multiple nodes, for this often results in
            duplicate work being done by several nodes causing an inherent inefficiency in the system. It is rather the
            ability to elect an appointed validator and consensual acceptance of the produced results that requires
            distribution among peers. This allows for highly performant centralized validation within a decentralized
            network.
          </p>
        </section>
        <section>
          <h1>2 - Overview</h1>
          <ul>
            <li>
              <strong>Transaction -</strong> the transfer of points from one account to another
            </li>
            <li>
              <strong>Block -</strong> a signed list of one or more transactions
            </li>
            <li>
              <strong>Confirmation -</strong> a block that has been signed by a validator as confirmation it has been
              added to their blockchain
            </li>
            <li>
              <strong>Signature -</strong> a unique value used to verify the authenticity of a block
            </li>
            <li>
              <strong>Bank -</strong> a network server that has several responsibilities such as electing a validator
              and routing member transactions
            </li>
            <li>
              <strong>Member -</strong> a user belonging to a bank
            </li>
            <li>
              <strong>Validator -</strong> a central server that accepts transactions from multiple banks, and after
              final validation adds those transactions to the transaction ledger (commonly referred to as “the ledger”)
              and updates account balances
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
            transaction to their bank. The bank will then forward the transaction along to the validator and upon
            successful validation of the transaction, append it onto the transaction ledger and update the network
            balance sheet. There are several key differences between the network structure outlined above and the
            traditional Blockchain architecture regarding the creation of a distributed public ledger.
          </p>
          <p>
            An inherent defect in the modern Blockchain architecture is the inefficient composition of blocks. Blocks in
            the Bitcoin Blockchain are composed of <strong>multiple unrelated transactions</strong>. This indicates that
            within any given block, the earliest transactions would have experienced significant delays as later
            transactions continued to accumulate until the entire block was verified. If one was only considering
            performance of the Blockchain and nothing else, they would arrive at the conclusion that the fastest
            Blockchain would not have any blocks. Transactions would instead be validated immediatley as they were
            received rather than waiting to be bundled along with additional unrelated transactions.
          </p>
          <p>
            By removing the inclusion of unrelated transactions into blocks we are able to substantially reduce the
            average network block size. This is accomplished through constructing blocks that group{' '}
            <strong>related transactions only</strong>. Related transactions refer to a set of transactions that must be
            processed together. This is discussed in more detail in the <strong>Blocks</strong> section of the paper.
          </p>
          <p>
            These improvements, along with others discussed throughout this paper, when implemented correctly reduce the
            overall energy consumption and processing power required by the network. This increased efficiency not only
            enables transactions between users to be verified within seconds (or less), but allows developers to utilize
            more popular programming languages (Python, JavaScript, etc...) towards expediting early development while
            encouraging rapid growth and innovation.
          </p>
        </section>
        <section>
          <h1>3 - Accounts</h1>
          <p>
            <strong>Account managers</strong> are software applications (such as a mobile application or desktop
            software) that are used by users to send, receive, and store points. To send points, users enter the amount
            they wish to send along with the account number of the recipient and submit it to the network for
            processing. To receive points, users share their own account number with other users on the network who will
            then be able to form transactions themselves.
          </p>
          <p>
            When users first download an account manager, it will take the user through the process of creating a{' '}
            <strong>key pair</strong>. A key pair consists of two keys, a <strong>signing key</strong> and an{' '}
            <strong>account number</strong>. These keys serve many different purposes in the network.
          </p>
          <p>
            The account number of the account is similar to a username, but is unique across the entire network (rather
            than a single website). All accounts are secured through the use of signing keys. Signing keys can be used
            to prove ownership of points. They are also used in the process of “signing” a transaction. This allows for
            the ability of users to create secure transactions that can further be validated by the network without
            revealing the signing key itself. The signing key should always remain private to the account owner.
          </p>
          <p>A simplified overview of each key is as follows:</p>
          <p>
            <strong>Signing key</strong>
            <ul>
              <li>must remain private to the owner</li>
              <li>allows the owner to securely sign (authorize) the sending of points</li>
            </ul>
          </p>
          <p>
            <strong>Account number</strong>
            <ul>
              <li>is made public to the network</li>
              <li>acts as a receiving address</li>
              <ul>
                <li>other users are able to send points to you using your account number</li>
              </ul>
              <li>used in verifying the sender when validating transactions</li>
              <ul>
                <li>
                  the account number can be used to prove ownership of the signing key, and therefore the owner, without
                  revealing the signing key itself
                </li>
                <li>
                  this is done through the use of asymmetric cryptography (specifically digital signatures) which we
                  will cover in a later section
                </li>
              </ul>
            </ul>
          </p>
          <p>
            <strong>Important Note:</strong> Users are not limited to a single account. Users are able to create and
            manage several accounts (key pairs) through the same account manager application. This can be thought of as
            an individual having multiple email addresses, but managing all of their email accounts from a single app.
          </p>
          <p>
            Account manager applications can manage multiple accounts (key pairs) for a single user. A more accurate
            representation of user transactions can be seen in the following diagram.
          </p>
          <p>The terms “account” and “user account” are used interchangeably throughout this paper.</p>
        </section>
        <section>
          <h1>4 - Transactions</h1>
          <p>
            Transactions refer to the transfer of points from one account to another. Transactions are created through
            the use of an account manager application and then forwarded to a bank. The bank will then forward the
            transaction along to the validator where it will perform validation of the transaction.
          </p>
          <p>
            A transaction may fail for several reasons. These may include improperly formatted data, insufficient funds,
            or various other reasons that will be discussed in later sections. When this occurs, the validator will
            respond with an error status along with the reason for the error to the bank, and the bank will then return
            that response to the original sender.
          </p>
          <p>
            When a transaction is verified and accepted by the validator, the validator will first append that
            transaction onto the transaction ledger and also update the balance sheet. The validator will then respond
            with a success status to the bank. The bank will then return that response to the original sender. If the
            recipient of that transaction is also a member of that same bank, the bank will send the recipient a
            notification of the successful transaction as well.
          </p>
          <p>
            If the recipient of the transaction is a member at a different bank, the senders bank will forward the
            successful transaction along to the recipient's bank. The recipient's bank can then send the recipient a
            notification regarding the successful transfer.
          </p>
        </section>
        <section>
          <h1>5 - Transaction Fees</h1>
          <p>
            Users are incentivized to maintain bank and validator nodes through the collection of transaction fees. The
            fee amounts and fee structures are set entirely by the owners of the nodes. Users may also choose to set
            their transactions fees to 0 to allow for free usage of their nodes. It is recommended however for nodes to
            set a small fee to deter malicious users from attacking the network and bloating the transaction log by
            sending a large amount of useless transactions between accounts.
          </p>
          <p>
            As banks and validators join the network, they will announce their transaction fees. This is the amount (in
            points) that nodes will charge per transaction. Nodes may charge a fixed transaction fee for all users, or
            offer tier based fees based on trust levels. This is one way in which more trusted bank members and more
            trusted banks may be rewarded by the network.{' '}
          </p>
          <p>
            Users will always attempt to join banks that offer the lowest transaction fees. There are also additional
            factors such as server reliability and other services the bank may provide, but the transaction fees will
            likely be a large consideration. When bank fees become too high, the members will look for a new bank to
            join.
          </p>
          <p>
            In the following example, Amy is sending 100 points to Brian. Before the transaction is even created, Amy’s
            bank is aware of the validators transaction fee. The transaction fees of both the bank and the validator
            will be displayed in the user interface. When creating a transaction, Amy will first choose the desired
            recipient and then the amount of points she wishes to send. A very simple UI that Amy may see at that point
            might look like this:
          </p>
          <table>
            <tr>
              <td>
                <strong>Points being sent to Brian</strong>
              </td>
              <td>Enter the amount of points here...</td>
            </tr>
            <tr>
              <td>
                <strong>Bank fees</strong>
              </td>
              <td>2 poitns</td>
            </tr>
            <tr>
              <td>
                <strong>Validator fees</strong>
              </td>
              <td>1 point</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td />
            </tr>
          </table>
          <p>
            After typing in the amount of points, Amy is able to see the total cost of her transaction and verify that
            the amount is acceptable before signing and sending the transaction.
          </p>
          <table>
            <tr>
              <td>
                <strong>Points being sent to Brian</strong>
              </td>
              <td>100.00</td>
            </tr>
            <tr>
              <td>
                <strong>Bank fees</strong>
              </td>
              <td>2 points</td>
            </tr>
            <tr>
              <td>
                <strong>Validator fees</strong>
              </td>
              <td>1 point</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>103.00</td>
            </tr>
          </table>
          <p>
            Once the transaction has been reviewed, signed, and sent to the bank by Amy, the following functions will be
            performed:
            <ol>
              <li>Amy’s bank will validate that:</li>
              <ol>
                <li>The transaction (Tx) is formatted properly (according to network protocol)</li>
                <li>
                  The fees included in Amy’s signed Tx are in agreement with the expected fee structure of the network
                </li>
                <li>
                  If any aspect of the transaction can not be validated, an error will be returned to Amy and the Tx
                  will not continue
                </li>
              </ol>
              <li>
                After initial validation by Amy’s bank, the Tx will be forwarded to the primary validator where it will
                validate:
              </li>
              <ol>
                <li>
                  The transaction (Tx) is formatted properly (necessary to store the data on the ledger and balance
                  sheet)
                </li>
                <li>The correct fees to the validator are included</li>
                <li>Amy has enough funds to cover the total Tx cost</li>
              </ol>
              <li>
                After the transaction is confirmed by the validator, the validator will add that transaction to the
                ledger and update the balance sheet for both Amy and Brian.
              </li>
              <li>
                The validator will then send the response back to Amy’s bank where it can then notify both users of the
                successful transaction.
              </li>
            </ol>
          </p>
          <p>
            A more technical point worth noting (for developers) is that although this process is seen from the users
            perspective as a single transaction, it is technically three separate yet related transactions. This is
            because transactions only allow for the transfer of points from one account to another. Since the bank and
            validator also receive points, the entire set of transactions involved would more closely resemble this:
          </p>
          <table>
            <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Amount of Points</th>
            </tr>
            </thead>
            <tbody>
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
              <td>100</td>
              <td>2</td>
              <td>1</td>
            </tr>
            </tbody>
          </table>
          <p>
            Additionally, the balance sheet would also be updated to reflect the new point balances of all four parties
            involved. For more details, see the <strong>Blocks</strong> section of this paper.
          </p>
        </section>
      </div>
    </Router>
  );
}

export default App;
