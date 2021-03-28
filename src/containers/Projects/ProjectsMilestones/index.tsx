import React, {FC} from 'react';

import {A, DocContainer, StepIndicator, TableBorderGrid} from 'components';

import './ProjectsMilestones.scss';

const ProjectsMilestones: FC = () => {
  const renderMilestoneCaption = (heading: string, text: string) => (
    <div className="ProjectsMilestones__caption">
      <div className="ProjectsMilestones__caption-heading">{heading}</div>
      <div className="ProjectsMilestones__caption-text">{text}</div>
    </div>
  );

  return (
    <DocContainer className="ProjectsMilestones" title="Milestones & Payouts">
      <p>
        All projects will be funded based on the completion of milestones. All milestones will include a list of all
        quantifiable objectives and estimated coin value of each. Upon completion of the milestone, each objective will
        be reviewed by thenewboston team and once all objectives have been verified as completed, coins will then be
        rewarded. A sample milestone including a list of quantifiable objectives can be seen below.
      </p>

      {renderMilestoneCaption('Milestone 1', 'Completion of navigation, landing page, and initial deployment')}
      {renderMilestoneCaption('Requested Payment Upon Completion', '36,000 coins')}
      <TableBorderGrid
        className="ProjectsMilestones__TableBorderGrid"
        rows={[
          [<strong>Objective</strong>, <strong>Estimated Value (coins)</strong>],
          ['Functional top navigation menu linking to empty placeholder pages', '10,000'],
          ['Fully responsive, hifi landing page', '16,000'],
          ['Website deployed to live environment hosted on AWS', '10,000'],
        ]}
      />

      <h2>Milestone Payout Request Process</h2>
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={1}
        text={
          <>
            All the members of approved projects will receive <strong>weekly payments</strong> with pay per day of{' '}
            <strong>2800</strong> coins.
          </>
        }
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
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
        className="ProjectsMilestones__StepIndicator"
        number={3}
        text={
          <>
            A good <strong>Weekly Report</strong> consists of each member's tasks for that week and proof of the
            completion of each given task. The report should also have the contribution details of the project leader.
          </>
        }
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={4}
        text="Once we verify the report and progress of the project, we’ll send weekly payments to those members of the project who contributed."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={5}
        text={
          <>
            Failing to provide a weekly report may result in <strong>non-payment</strong>.
          </>
        }
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
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

export default ProjectsMilestones;
