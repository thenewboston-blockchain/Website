import React, {FC} from 'react';

import {A, DocContainer, StepIndicator} from 'components';

import './ProjectProposalsFunding.scss';

const ProjectProposalsFunding: FC = () => {
  return (
    <DocContainer className="ProjectProposalsFunding" title="Funding">
      <h2>How we fund projects?</h2>
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={1}
        text={
          <>
            All the members of approved projects will receive <strong>weekly payments</strong> with pay per day of{' '}
            <strong>2800</strong> coins.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={2}
        text={
          <>
            The project leader (or manager) has to provide a <strong>weekly report</strong> of the project’s progress
            and each team member's weekly contribution by raising an issue to{' '}
            <A href="https://github.com/thenewboston-developers/Activity-Reports/issues/new/choose">Activity-Reports</A>
            repository. To know more about activity reports please go through{' '}
            <A href="https://github.com/thenewboston-developers/Activity-Reports/blob/master/README.md">README.md</A>
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={3}
        text={
          <>
            A good <strong>Weekly Report</strong> consists of each member's tasks for that week and proof of the
            completion of each given task. The report should also have the contribution details of the project leader.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={4}
        text="Once we verify the report and progress of the project, we’ll send weekly payments to those members of the project who contributed."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={5}
        text={
          <>
            Failing to provide a weekly report may result in <strong>non-payment</strong>.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={6}
        text={
          <>
            We are rewarding <strong>3000</strong> coins for <strong>Idea Only</strong> proposals after receiving 1st
            approved weekly report from the team that is executing that project idea.
          </>
        }
      />
    </DocContainer>
  );
};

export default ProjectProposalsFunding;
