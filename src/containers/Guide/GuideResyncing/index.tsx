import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, DocList, DocSubSection, TableBorderGrid} from 'components';

import PrimaryValidatorUpgradeRequest from './PrimaryValidatorUpgradeRequest.png';

const GuideResyncing: FC = () => {
  const renderPrimaryValidatorUpdateNotice = (): ReactNode => (
    <>
      <p>
        This notice is sent from banks to confirmation validators to indicate that the requesting bank is leaving the
        current network and switching to a new primary validator (a new network).
      </p>
      <p>Banks will always set their primary validator to the validator that is the:</p>

      <DocList variant="ul">
        <li>most trusted</li>
        <li>online</li>
        <li>configured as a primary validator</li>
      </DocList>

      <p>
        When a bank changes primary validators, any confirmation validators who have that bank set as their most trusted
        need to be made aware of the change in order to correctly sync to the new primary validator.
      </p>
      <p>
        Any confirmation validators that receive this request who do not have the requesting bank set as their most
        trusted will delete the requesting bank. This is because the bank is indicating that it is leaving the network,
        and therefore a connection is no longer needed.
      </p>
    </>
  );

  const renderUpgradeRequest = (): ReactNode => (
    <>
      <p>
        When a bank alters the trust levels of their validators, if the results indicate that there are now confirmation
        validators that are more trusted than the banks primary validator, the bank will send out a request to the
        confirmation validators requesting one of them upgrade to a primary validator. This is because the banks always
        prefer the most trusted validator to be the primary validator for the network.
      </p>

      <TableBorderGrid
        headers={['Validator', 'Trust']}
        rows={[
          ['CV_001', '98.21'],
          ['CV_002', '93.87'],
          ['PV', '86.04'],
        ]}
      />

      <p>
        A confirmation validator will accept the request if they themselves have the requesting bank set as their most
        trusted bank. Confirmation validators will always follow the guidance of their most trusted bank.
      </p>
      <p>
        In order to prevent multiple confirmation validators from upgrading to primary validators at the same time (in
        the case that multiple CV's view that bank as their most trusted), the bank will send out these request one by
        one rather than sending out several requests to all CV's simultaneously.
      </p>

      <DocImage alt="primary validator update request" maxWidth={700} src={PrimaryValidatorUpgradeRequest} />

      <p>
        Starting with the most trusted CV and continuing until their current PV is reached, the bank will send out a{' '}
        <strong>/upgrade_request</strong> where the following logic will be performed:
      </p>

      <DocList variant="ul">
        <li>
          if the CV does not have that bank set as their most trusted bank, the CV will respond "no" to the upgrade
          request and the bank will continue along with their next most trusted CV
        </li>
        <li>
          if the CV does have that bank set as their most trusted bank, the CV will respond "yes" to the upgrade request
          and upgrade themselves to a PV
        </li>
      </DocList>

      <p>If and when a CV responds "yes", the requesting bank will:</p>
      <DocList variant="ul">
        <li>
          break out of the loop (stop sending <strong>/upgrade_request</strong>)
        </li>
        <li>wait for that CV to upgrade themselves to a PV</li>
        <li>switch to their new PV</li>
      </DocList>
    </>
  );

  return (
    <DocContainer className="GuideResyncing" title="Resyncing">
      <p>
        Confirmation validators will always sync to the primary validator of their most trusted bank. This means that
        confirmation validators need to remain aware whenever certain changes occur at their most trusted banks. These
        changes will be sent to them from their connected banks and include:
      </p>
      <DocSubSection title="Upgrade Request">{renderUpgradeRequest()}</DocSubSection>
      <DocSubSection title="Primary Validator Update Notice">{renderPrimaryValidatorUpdateNotice()}</DocSubSection>
    </DocContainer>
  );
};

export default GuideResyncing;
