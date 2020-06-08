import React from 'react';

import TransactionDiagram from './Transaction.png';
import TransactionFailedDiagram from './TransactionFailed.png';
import TransactionSuccessDiagram from './TransactionSuccess.png';

import './Transactions.scss';

const Transactions = () => {
  return (
    <section className="Transactions">
      <h1 className="page-title">Transactions</h1>
      <p>
        Before reviewing transaction logic, it is important to note that individual transactions are never sent alone
        over the network. They are always bundled inside blocks. However, for the purpose of demonstrating how points
        can be transferred between accounts, transactions can be viewed and diagramed independently of their containing
        blocks. The exact structure of a block will be discussed in a future section.
      </p>
      <p>
        Transactions refer to the transfer of points from one account to another. Transactions are created through the
        use of an account manager application and then forwarded to a bank. The bank will then forward the transaction
        along to the validator where it will perform validation of the transaction.
      </p>
      <div className="img-container">
        <img alt="transaction diagram" className="transaction-diagram" src={TransactionDiagram} />
      </div>
      <p>
        A transaction may fail for several reasons. These may include improperly formatted data, insufficient funds, or
        various other reasons that will be discussed in later sections. When this occurs, the validator will respond
        with an error status along with the reason for the error to the bank, and the bank will then return that
        response to the original sender.
      </p>
      <div className="img-container">
        <img alt="transaction failed diagram" className="transaction-failed-diagram" src={TransactionFailedDiagram} />
      </div>
      <p>
        When a transaction is verified and accepted by the validator, the validator will first append that transaction
        onto the transaction ledger and also update the balance sheet. The validator will then respond with a success
        status to the bank. The bank will then return that response to the original sender. If the recipient of that
        transaction is also a member of that same bank, the bank will send the recipient a notification of the
        successful transaction as well.
      </p>
      <div className="img-container">
        <img
          alt="transaction success diagram"
          className="transaction-success-diagram"
          src={TransactionSuccessDiagram}
        />
      </div>
      <p>
        If the recipient of the transaction is a member at a different bank, a backup validator will forward the
        successful transaction along to the recipient's bank. This logic will be covered later in the{' '}
        <a href="">Backup Validators</a> section. The recipient's bank can then send the recipient a notification
        regarding the successful transfer.
      </p>
    </section>
  );
};

export default Transactions;
