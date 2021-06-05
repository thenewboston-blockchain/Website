import React, {FC} from 'react';

import {A, DocContainer, DocImage, DocList} from 'components';
import 'containers/Teams/Resources/Resources.scss';
import TeamPaymentProcess from './TeamPaymentProcess.png';

const InternalTeamMemberPayments: FC = () => {
  return (
    <DocContainer className="Resource" title="Team Member Payments">
      <p>
        All team members are eligible to submit a timesheet each day via a GitHub issue in the{' '}
        <A href="https://github.com/thenewboston-developers/Contributor-Payments">Contributor-Payments</A> repository.
        This will be a record of all tasks that the team member worked on that day including:
      </p>
      <DocList variant="ul">
        <li>a short description of the task</li>
        <li>proof of work</li>
        <li>estimated time spent on each task (half hour increments)</li>
        <ul>
          <li>0.5 hours</li>
          <li>1.5 hours</li>
        </ul>
      </DocList>
      <p>
        In addition to the individual tasks the submitter will also include their account number and the total time (sum
        of all estimates). This is preferred rather than having another team maintain a log of account numbers for users
        to ensure the most up to date account number for the recipient is always used.
      </p>
      <p>
        All timesheet items must include a proof of work. This can either be a pull request, public GitHub branch,
        graphics, wireframes, screenshots, etc... For recording meetings, there should be a link to the notes from that
        meeting. For certain types of work that is more difficult to produce an auditable proof of work such as
        auditing, product management (messaging various team members, etc...), or others those team members can include
        a detailed description/summary of the work. We understand that not all work is easily trackable and for these
        items both the core team and the community will monitor to verify as best as possible that work is being
        completed.
      </p>
      <p>
        Once a timesheet has been completed, the team member will label the issue as <strong>Ready for Review</strong>.
        This is to allow them to edit the issue while they are still working. The audit team will then review it to
        validate all proof of work. They may also respond with a comment if any questions arise or additional
        clarification from the submitter is needed. Once the majority of auditors have validated the work it will be
        labeled as <strong>Approved</strong>. At that time, the governors will send payment and label the issue as{' '}
        <strong>Paid</strong>. Once a ticket has been paid the GitHub issue may be closed.
      </p>
      <p>
        The deadline for timesheet submission is 24 hours after 11:59PM PST for the given work day. Timesheets submitted
        after the deadline will not be paid.
      </p>
      <DocImage alt="team payment process" maxWidth={720} src={TeamPaymentProcess} />
    </DocContainer>
  );
};

export default InternalTeamMemberPayments;
