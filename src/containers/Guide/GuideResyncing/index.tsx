import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, DocList, DocSubSection, TableBorderGrid} from 'components';

import ResyncPrimaryValidatorUpdated from './ResyncPrimaryValidatorUpdated.png';
import ResyncTriggerNetworkError from './ResyncTriggerNetworkError.png';
import ResyncTriggers from './ResyncTriggers.png';
import ResyncUpgradeNotice from './ResyncUpgradeNotice.png';
import ResyncUpgradeRequest from './ResyncUpgradeRequest.png';

const GuideResyncing: FC = () => {
  const renderOverview = (): ReactNode => (
    <>
      <p>Banks will always set their primary validator to the validator that is:</p>
      <DocList variant="ul">
        <li>the most trusted</li>
        <li>online</li>
        <li>configured as a primary validator</li>
      </DocList>

      <p>Confirmation validators will always:</p>
      <DocList variant="ul">
        <li>follow the guidance of their most trusted bank</li>
      </DocList>
    </>
  );

  const renderPrimaryValidatorUpdated = (): ReactNode => (
    <>
      <p>
        The last step in the resync process is the notice that is sent from banks to their CV's to indicate that they
        are leaving the current network and switching to a new PV (a new network).
      </p>

      <DocImage alt="primary validator updated" maxWidth={580} src={ResyncPrimaryValidatorUpdated} />

      <p>
        Any confirmation validators that receive this request who do not have the requesting bank set as their most
        trusted will delete the requesting bank. This is because the bank is indicating that it is leaving the network,
        and therefore a connection is no longer needed. Any confirmation validators that do have the requesting bank set
        as their most trusted bank will follow the guidance of that bank and sync to the new primary validator.
      </p>
    </>
  );

  const renderResyncProcess = (): ReactNode => (
    <>
      <h1 className="DocContainer__page-title GuideIntroduction__page-title">Resync Process</h1>
      <p>The resync process is the same no matter which resync trigger initiated the event.</p>
    </>
  );

  const renderResyncTriggers = (): ReactNode => (
    <>
      <p>
        A resync may be triggered by a bank when the trust levels of it's validators are changed. Each of the following
        actions may result in a change in trust.
      </p>

      <p>
        <strong>Manual Update</strong>
      </p>
      <p>
        The bank owner may choose to update the trust manually for any of their validators at any time. This is done by
        simply making a signed request to the bank with the updated trust level and the target validator.
      </p>

      <p>
        <strong>Invalid Blocks</strong>
      </p>
      <p>
        Invalid blocks are blocks sent from confirmation validators to their banks as an indication that a block that
        had been received from the primary validator was unable to be validated. This may be due to improper formatting,
        an invalid signature, incorrect calculations, or an intentional attempt by the primary validator to cheat the
        system by providing inaccurate account balances.
      </p>
      <p>
        As banks receive these invalid block notices from their confirmation validators, they will automatically
        decrease the trust of their primary validator. The amount by which the primary validators trust is decreased is
        calculated based on the weighted trust of the sending confirmation validator.
      </p>

      <DocImage alt="resync triggers" maxWidth={740} src={ResyncTriggers} />

      <p>An overview of weighted trust is as follows:</p>

      <DocList variant="ul">
        <li>
          weighted trust is the measure of influence that a CV has on a banks decision{' '}
          <strong>whether or not to switch primary validators</strong>
        </li>
        <li>
          the weighted trust of a CV is calculated as a ratio and is equal to the trust of that CV vs. the total trust
          of all CV's
        </li>
        <li>for example, if a Bank was connected to four CV's then the weighted trust for each may look like this:</li>
      </DocList>

      <TableBorderGrid
        headers={['NID', 'trust', 'weighted_trust (trust/total_trust)']}
        rows={[
          ['CV_001', '100', '50'],
          ['CV_002', '50', '25'],
          ['CV_003', '25', '12.5'],
          ['CV_004', '25', '12.5'],
          ['Total:', '200', '100'],
        ]}
      />

      <p>Note that the weighted trust of all nodes in the group will always add up to 100.</p>

      <p>
        <strong>Network Error</strong>
      </p>
      <p>
        The last remaining event that may trigger an automated decrease in the primary validator trust is a network
        error. The most common of which is when the primary validator goes offline, but can also occur if the primary
        validator becomes misconfigured in any way. When this occurs and the bank becomes unable to communicate with
        their primary validator, the bank will automatically set the trust level of the primary validator to 0 and
        initiate the resync process to choose a new primary validator.
      </p>

      <DocImage alt="resync trigger network error" maxWidth={900} src={ResyncTriggerNetworkError} />
    </>
  );

  const renderUpgradeNotice = (): ReactNode => (
    <>
      <p>
        After a confirmation validator has upgraded to the primary validator, it will send out an upgrade notice to all
        connected banks. This is a notice from a previous CV that they are now a PV. If the requesting validator is more
        trusted than the banks current PV, the bank will switch to the new PV. This is because the banks always prefer
        the most trusted validator to be the PV for the network.
      </p>
      <p>
        If the requesting validator is less trusted than the banks current PV, the bank will delete the requesting
        validator. This is because banks can only have one PV.
      </p>
      <DocImage alt="upgrade notice" maxWidth={400} src={ResyncUpgradeNotice} />
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
      <p>
        A confirmation validator will accept the request if they themselves have the requesting bank set as their most
        trusted bank. Confirmation validators will always follow the guidance of their most trusted bank.
      </p>
      <p>
        In order to prevent multiple confirmation validators from upgrading to primary validators at the same time (in
        the case that multiple CV's view that bank as their most trusted), the bank will send out these request one by
        one rather than sending out several requests to all CV's simultaneously.
      </p>

      <DocImage alt="upgrade request" maxWidth={1100} src={ResyncUpgradeRequest} />

      <p>
        Starting with the most trusted CV and continuing until their current PV is reached, the bank will send out a{' '}
        <strong>/upgrade_request</strong> where the following logic will be performed:
      </p>

      <DocList variant="ul">
        <li>
          if the CV does not have that bank set as their most trusted bank, the CV will respond "no" and the bank will
          continue along with their next most trusted CV
        </li>
        <li>
          if the CV does have that bank set as their most trusted bank, the CV will respond "yes" and upgrade themselves
          to a PV
        </li>
      </DocList>

      <p>If and when a CV responds "yes", the requesting bank will:</p>
      <DocList variant="ul">
        <li>
          break out of the loop (stop sending <strong>/upgrade_request</strong>)
        </li>
        <li>set that CV as their new PV</li>
      </DocList>
    </>
  );

  return (
    <DocContainer className="GuideResyncing" title="Resyncing">
      <p>
        The process in which banks switch to a new primary validator is referred to as a <strong>resync</strong>. In
        reviewing the resync process, it is important to keep in mind the following notes.
      </p>
      {renderOverview()}
      <DocSubSection title="Resync Triggers">{renderResyncTriggers()}</DocSubSection>
      {renderResyncProcess()}
      <DocSubSection title="Upgrade Request">{renderUpgradeRequest()}</DocSubSection>
      <DocSubSection title="Upgrade Notice">{renderUpgradeNotice()}</DocSubSection>
      <DocSubSection title="Primary Validator Updated">{renderPrimaryValidatorUpdated()}</DocSubSection>
    </DocContainer>
  );
};

export default GuideResyncing;
