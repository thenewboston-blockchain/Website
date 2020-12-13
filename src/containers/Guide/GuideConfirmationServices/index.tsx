import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, DocList} from 'components';

import ConfirmationServicesSimple from './ConfirmationServicesSimple.png';
import ConfirmationServiceCycle from './ConfirmationServiceCycle.png';
import FullSystem from './FullSystem.png';

const GuideConfirmationServices: FC = () => {
  return (
    <DocContainer className="GuideConfirmationServices" title="Confirmation Services" lastUpdated="07 Dec 2020">
      <p>
        Confirmation validators are able to provide confirmation services to all banks in the network. These services
        are offered at a time based rate, which is determined by the confirmation validators themselves. Confirmation
        services are the confirmation validators method of confirming/re-validating blocks from the primary validator.
        An example rate that a confirmation validator might give to the banks may be "100 coins per week". When a bank
        wishes to purchase confirmation services, the bank will send a transaction to the confirmation validator's
        account for an amount based on the length of time they wish to purchase.
      </p>
      <p>
        Any transaction made from banks to confirmation validators will be seen as a purchase of confirmation services.
        Therefore, confirmation service payments from banks can be sent directly to the primary validator with no direct
        communication with the confirmation validator required. When a confirmation validator receives that block,
        including a transaction to their own account, they will inspect the sender. If the account number matches a
        connected bank, then they will either:
      </p>

      <DocList variant="ul">
        <li>Add that amount of additional time to the bank's existing confirmation service</li>
        <ul>
          <li>
            This occurs when the sending bank already has an active confirmation service with that confirmation
            validator.
          </li>
        </ul>
        <li>Begin forwarding confirmation blocks to that bank</li>
        <ul>
          <li>
            The amount of time this will continue for is based on the current rate of the validator and how many coins
            the bank spent.
          </li>
        </ul>
      </DocList>

      <p>
        When banks purchase confirmation services from confirmation validators, it is very similar to buying gas for a
        car. Instead of buying gas, banks are purchasing time. Banks can purchase as little or as much as they want from
        each confirmation validator.
      </p>
      <p>
        After a bank has purchased confirmation services from a confirmation validator, that validator will then forward
        all validated blocks to that bank immediately after confirmation. Account owners prefer that their banks
        purchase confirmation services from multiple confirmation validators (the more the better). The reason is
        because confirmations are a confirmation validator's way of saying, "These transactions and updated account
        balances have been verified and backed up. If I ever become the primary validator, then these balances remain
        secured." Because of this, banks will typically purchase confirmation services from the confirmation validators
        who are "next in line." Since lineage is dependent on trust, this will also indirectly reward the most trusted
        confirmation validators.
      </p>

      <DocImage alt="confirmations services simple" maxWidth={740} src={ConfirmationServicesSimple} />

      <p>
        Another critical benefit to this system is that confirmation validators verify all blocks generated from the
        primary validator and immediately forward those results to any bank who has purchased their confirmation
        services. This also acts as a way for the network to keep banks updated in real time of any new transactions so
        that the banks can notify their account owners. Given that the confirmation validators broadcast to the banks
        directly, there are no additional requests that need to be continually made from the banks to other banks, or
        banks to primary validator checking on the status of their transactions.
      </p>
      <p>Confirmation service overview (step numbers referenced in the diagram below):</p>

      <DocList variant="ol">
        <li>Banks will send blocks with the bundled transactions to the primary validator.</li>
        <li>
          Upon successful validation, the primary validator will forward the verified block to all confirmation
          validators.
        </li>
        <li>
          The confirmation validators will re-verify the verified block, and upon successful validation forward that
          verified block to the bank as a confirmation.
        </li>
      </DocList>

      <DocImage alt="confirmation service cycle" maxWidth={640} src={ConfirmationServiceCycle} />

      <p>
        <strong>Technical Note:</strong> Confirmation validators do not send the original confirmed blocks back to the
        banks, but rather signed copies of the confirmed blocks. This offers nonrepudiation and allows banks to provide
        irrefutable proof to the account owners of the authentic confirmations. These signed copies are signed for a
        specific bank. This ensures non-paying banks are not able to listen in for "free confirmations." Users will lose
        trust in banks that do not provide confirmations signed by their own banks.
      </p>
      <p>
        A note mentioned earlier in the <NavLink to="/guide/banks">Banks</NavLink> section that is worth repeating:
      </p>

      <DocList variant="ul">
        <li>Users choose their banks</li>
        <li>Banks choose their primary validators</li>
        <li>
          The bank's confirmation validators will tell the bank when to switch primary validators (if/when the primary
          validator becomes untrustworthy)
        </li>
      </DocList>

      <DocImage alt="full system" maxWidth={1400} src={FullSystem} />
    </DocContainer>
  );
};

export default GuideConfirmationServices;
