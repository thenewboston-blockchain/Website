import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, DocList, TableBorderGrid} from 'components';
import ResyncTriggerNetworkError from './ResyncTriggerNetworkError.png';
import ResyncTriggers from './ResyncTriggers.png';

const GuideResyncTriggers: FC = () => {
  const renderOverview = (): ReactNode => (
    <>
      <p>Banks will always set their primary validator to the validator that is:</p>
      <DocList variant="ul">
        <li>The most trusted</li>
        <li>Online</li>
        <li>Configured as a primary validator</li>
      </DocList>

      <p>Confirmation validators will always:</p>
      <DocList variant="ul">
        <li>Follow the guidance of their most trusted bank</li>
      </DocList>
    </>
  );

  const renderResyncTriggers = (): ReactNode => (
    <>
      <p>
        A resync may be triggered by a bank when the trust levels of its validators are changed. Each of the following
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
          Weighted trust is the measure of influence that a CV has on a bank's decision{' '}
          <strong>whether or not to switch primary validators</strong>
        </li>
        <li>
          The weighted trust of a CV is calculated as a ratio and is equal to the trust of that CV vs the total trust of
          all CV's
        </li>
        <li>For example, if a bank was connected to four CV's, then the weighted trust for each may look like this:</li>
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
        error. The most common is when the primary validator goes offline, but can also occur if the primary validator
        becomes misconfigured in any way. When this occurs and the bank becomes unable to communicate with their primary
        validator, the bank will automatically set the trust level of the primary validator to 0 and initiate the resync
        process to choose a new primary validator.
      </p>

      <DocImage alt="resync trigger network error" maxWidth={900} src={ResyncTriggerNetworkError} />
    </>
  );

  return (
    <DocContainer className="GuideResyncTriggers" title="Resync Triggers" lastUpdated="07 Dec 2020">
      <p>
        The process in which banks switch to a new primary validator is referred to as a <strong>resync</strong>. In
        reviewing the resync process, it is important to keep in mind the following notes:
      </p>
      {renderOverview()}
      {renderResyncTriggers()}
    </DocContainer>
  );
};

export default GuideResyncTriggers;
