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
            The project leader (or manager) has to provide a weekly report of the project’s progress by adding the
            report file with the name <strong>week-NUMBER.md</strong> (For example, <strong>week-1.md</strong> for the
            first week, <strong>week-2.md</strong> for the second week report, and so on.) to the{' '}
            <strong>Weekly Reports</strong> directory of the respective project’s folder in the{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals">Project-proposals</A> repository.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={3}
        text={
          <>
            <strong>Weekly Report</strong> can be in any form as long as it clearly describes the progress of the
            project and work done by members of the project for that week.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={4}
        text="Once we verify the report and progress of the project, we’ll send weekly payments."
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
            Currently, we are <strong>not rewarding for proposing only Idea</strong>. Instead, we are funding for
            working on ideas.
          </>
        }
      />
    </DocContainer>
  );
};

export default ProjectProposalsFunding;
