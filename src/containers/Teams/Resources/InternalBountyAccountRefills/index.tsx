import React, {FC} from 'react';

import {A, DocContainer} from 'components';
import 'containers/Teams/Resources/Resources.scss';

const InternalBountyAccountRefills: FC = () => {
  return (
    <DocContainer className="Resource" title="Bounty Account Refills">
      <p>
        For any teams that use the bounty system, the related team lead will manage a bounty account. This will be an
        account where coins will be sent from the governors. These coins will be used by the team lead for sending
        reward payments when bounties are completed. These payments will also be monitored by the auditing team.
      </p>
      <p>
        When the funds in a team's bounty account are depleted the team lead may request additional funding via a GitHub
        issue in the <A href="https://github.com/thenewboston-developers/Contributor-Payments">Contributor-Payments</A>{' '}
        repository. When the majority of auditors approve the request (after verifying that all previous funds have been
        used properly) the issue will be labeled as <strong>Approved</strong>. At that time, the governors will send the
        coins and label the issue as <strong>Paid</strong>. Once a ticket has been paid the GitHub issue may be closed.
      </p>
      <p>Note that bounties will now be paid out by the team lead to contributors as they are completed.</p>
    </DocContainer>
  );
};

export default InternalBountyAccountRefills;
