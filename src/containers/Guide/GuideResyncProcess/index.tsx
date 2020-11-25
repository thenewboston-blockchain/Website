import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, DocList, DocSubSection} from 'components';

import ResyncPrimaryValidatorUpdated from './ResyncPrimaryValidatorUpdated.png';
import ResyncUpgradeNotice from './ResyncUpgradeNotice.png';
import ResyncUpgradeRequest from './ResyncUpgradeRequest.png';

enum GuideResyncProcessNav {
  primaryValidatorUpdated = 'primary-validator-updated',
  upgradeNotice = 'upgrade-notice',
  upgradeRequest = 'upgrade-request',
}

const GuideResyncProcess: FC = () => {
  const renderPrimaryValidatorUpdated = (): ReactNode => (
    <>
      <p>
        The last step in the resync process is the notice that is sent from banks to their CV's to indicate that they
        are leaving the current network and switching to a new PV (a new network).
      </p>

      <DocImage alt="primary validator updated" maxWidth={580} src={ResyncPrimaryValidatorUpdated} />

      <p>
        Any confirmation validators that receive this request, who do not have the requesting bank set as their most
        trusted, will delete the requesting bank. This is because the bank is indicating that it is leaving the network,
        and therefore a connection is no longer needed. Any confirmation validators that have the requesting bank set as
        their most trusted bank will follow the guidance of that bank and sync to the new primary validator.
      </p>
    </>
  );

  const renderUpgradeNotice = (): ReactNode => (
    <>
      <p>
        After a confirmation validator has upgraded to the primary validator, it will send out an upgrade notice to all
        connected banks. This is a notice from a previous CV that they are now a PV. If the requesting validator is more
        trusted than the bank's current PV, the bank will switch to the new PV. This is because the banks always prefer
        the most trusted validator to be the PV for the network.
      </p>
      <p>
        If the requesting validator is less trusted than the bank's current PV, the bank will delete the requesting
        validator. This is because banks can only have one PV.
      </p>
      <DocImage alt="upgrade notice" maxWidth={400} src={ResyncUpgradeNotice} />
    </>
  );

  const renderUpgradeRequest = (): ReactNode => (
    <>
      <p>
        When a bank alters the trust levels of their validators and the results indicate that there are now confirmation
        validators that are more trusted than the bank's primary validator, the bank will send out a request to the
        confirmation validators requesting one of them to upgrade to a primary validator. This is because the banks
        always prefer the most trusted validator to be the primary validator for the network.
      </p>
      <p>
        A confirmation validator will accept the request if they themselves have the requesting bank set as their most
        trusted bank.{' '}
        <strong>Confirmation validators will always follow the guidance of their most trusted bank.</strong>
      </p>
      <p>
        In order to prevent multiple confirmation validators from upgrading to primary validators at the same time (in
        the case that multiple CV's view that bank as their most trusted), the bank will send out these requests one by
        one rather than sending out several requests to all CV's simultaneously.
      </p>

      <DocImage alt="upgrade request" maxWidth={1100} src={ResyncUpgradeRequest} />

      <p>
        Starting with the most trusted CV and continuing until their current PV is reached, the bank will send out a{' '}
        <strong>/upgrade_request</strong> where the following logic will be performed:
      </p>

      <DocList variant="ul">
        <li>
          If the CV does not have that bank set as their most trusted bank, the CV will respond "no" and the bank will
          continue along with their next most trusted CV.
        </li>
        <li>
          If the CV does have that bank set as their most trusted bank, the CV will respond "yes" and upgrade themselves
          to a PV (as shown above).
        </li>
      </DocList>

      <p>If and when a CV responds "yes," the requesting bank will:</p>
      <DocList variant="ul">
        <li>
          Break out of the loop (stop sending <strong>/upgrade_request</strong>)
        </li>
        <li>Set that CV as their new PV</li>
      </DocList>
    </>
  );

  return (
    <DocContainer className="GuideResyncProcess" title="Resync Process">
      <p>The resync process is the same no matter which resync trigger initiated the event.</p>
      <DocSubSection id={GuideResyncProcessNav.upgradeRequest} title="Upgrade Request">
        {renderUpgradeRequest()}
      </DocSubSection>
      <DocSubSection id={GuideResyncProcessNav.upgradeNotice} title="Upgrade Notice">
        {renderUpgradeNotice()}
      </DocSubSection>
      <DocSubSection id={GuideResyncProcessNav.primaryValidatorUpdated} title="Primary Validator Updated">
        {renderPrimaryValidatorUpdated()}
      </DocSubSection>
    </DocContainer>
  );
};

export default GuideResyncProcess;
