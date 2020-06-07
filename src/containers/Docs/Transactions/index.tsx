import React from 'react';

const Transactions = () => (
  <section>
    <span>Transactions</span>
    <p>
      Transactions refer to the transfer of points from one account to another. Transactions are created through the use
      of an account manager application and then forwarded to a bank. The bank will then forward the transaction along
      to the validator where it will perform validation of the transaction.
    </p>
    <p>
      A transaction may fail for several reasons. These may include improperly formatted data, insufficient funds, or
      various other reasons that will be discussed in later sections. When this occurs, the validator will respond with
      an error status along with the reason for the error to the bank, and the bank will then return that response to
      the original sender.
    </p>
    <p>
      When a transaction is verified and accepted by the validator, the validator will first append that transaction
      onto the transaction ledger and also update the balance sheet. The validator will then respond with a success
      status to the bank. The bank will then return that response to the original sender. If the recipient of that
      transaction is also a member of that same bank, the bank will send the recipient a notification of the successful
      transaction as well.
    </p>
    <p>
      If the recipient of the transaction is a member at a different bank, the senders bank will forward the successful
      transaction along to the recipient's bank. The recipient's bank can then send the recipient a notification
      regarding the successful transfer.
    </p>
  </section>
);

export default Transactions;
