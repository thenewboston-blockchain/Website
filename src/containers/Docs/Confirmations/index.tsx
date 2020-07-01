import React from 'react';

import ConfirmationServicesSimple from './ConfirmationServicesSimple.png';
import ConfirmationServiceCycle from './ConfirmationServiceCycle.png';
import FullSystem from './FullSystem.png';

import './Confirmations.scss';

const Confirmations = () => {
  return (
    <section className="Confirmations">
      <h1 className="page-title">Confirmation</h1>
      <p>
        Confirmation validators are able to provide confirmation services to all banks in the network. These services
        are offered at a time based rate, which are determined by the validators themselves. Confirmation services are
        the confirmation validators method of confirming/re-validating blocks from the primary validator. An example
        rate that a confirmation validator might give to the banks may be "100 points per week". When a bank wishes to
        purchase confirmation services, the bank will send a transaction to the confirmation validators account for an
        amount based on the length of time they wish to purchase.
      </p>
      <p>
        Any transaction made from banks to confirmation validators (aside from registration costs) will be seen as a
        purchase of confirmation services. Therefore, transactions may be sent directly to the primary validator. When a
        confirmation validator receives that block including a transaction to their own account, they will inspect the
        sender and if the account number matches a registered bank then they will either:
      </p>

      <ul>
        <li>add that amount of additional time to the banks existing confirmation service</li>
        <ul>
          <li>
            this occurs when the sending bank already has an active confirmation service with that confirmation
            validator
          </li>
        </ul>
        <li>begin confirming blocks and forwarding them to that bank</li>
        <ul>
          <li>
            the amount of time this will continue for is based on the current rate of the validator how many points the
            bank spent
          </li>
        </ul>
      </ul>

      <p>
        Banks purchasing confirmation services from confirmation validators is very similar to buying gas for a car.
        Instead of buying gas, banks are purchasing time. Banks can purchase as little or as much as they want from each
        confirmation validator.
      </p>
      <p>
        After a bank has purchased confirmation services from a confirmation validator, that validator will then forward
        all validated blocks to that bank immediately after confirmation. Banks registered user accounts prefer when
        their banks purchase confirmation services from multiple confirmation validators (the more the better) because
        confirmations are a confirmation validator's way of saying "These transactions and updated account balances have
        been verified and backed up. If I ever become the primary validator then these balances remain secured".
      </p>

      <div className="img-container">
        <img
          alt="confirmations services simple"
          className="confirmations-services-simple"
          src={ConfirmationServicesSimple}
        />
      </div>

      <p>
        Another critical benefit to this system is that since confirmation validators verify all blocks generated from
        the primary validator and immediately forward those results to any bank who has purchased their confirmation
        services, this also acts as a way for the network to keep banks updated in real time of any new transactions so
        that the banks can notify their account owners. Given that the confirmation validators broadcast to the banks
        directly, there are no additional requests that need to be continually made from the banks to other banks, or
        banks to primary validator checking on the status of their transactions. A more detailed look at the
        confirmation cycle is outlined below.
      </p>

      <div className="img-container">
        <img alt="confirmation service cycle" className="confirmation-service-cycle" src={ConfirmationServiceCycle} />
      </div>

      <p>Confirmation service (step numbers referenced in the diagram above):</p>

      <ol className="mb-20">
        <li>Banks will send blocks with the bundled transactions to the primary validator</li>
        <li>
          Upon successful validation, the primary validate will forward the verified block to all confirmation
          validators
        </li>
        <li>
          The confirmation validators will re-verify the verified block, and upon successful validation forward that
          verified block to the bank as a confirmation.
        </li>
      </ol>

      <p>
        <strong>Technical Note:</strong> Confirmation validators do not send the original confirmed blocks back to the
        banks, but rather signed copies of the confirmed blocks. This offers nonrepudiation and allows banks to provide
        irrefutable proof to their members of the authentic confirmations. These signed copies are signed for a specific
        bank. This ensures non-paying banks are not able to listen in for "free confirmations". Members will lose trust
        in banks that only offer confirmations signed for other banks.
      </p>

      <div className="img-container">
        <img alt="full system" className="full-system" src={FullSystem} />
      </div>
    </section>
  );
};

export default Confirmations;
