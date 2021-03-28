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
          [<strong>#</strong>, <strong>Objective</strong>, <strong>Estimated Value (coins)</strong>],
          [1, 'Functional top navigation menu linking to empty placeholder pages', '10,000'],
          [2, 'Fully responsive, hifi landing page', '16,000'],
          [3, 'Website deployed to live environment hosted on AWS', '10,000'],
        ]}
      />

      <h2>Milestone Payout Request Process</h2>
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={1}
        text={
          <>
            Upon completion of a milestone, the project manager will submit a{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=&template=payout-request.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER">
              Payout Request
            </A>{' '}
            including valid proof of work for all objectives.
          </>
        }
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={2}
        text="The audit team will then review the proof of work to ensure that all objectives have been met. The audit team will leave a comment if there are any questions or clarifications that are needed."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={3}
        text={
          <>
            Once a milestone has been accepted by the audit team, payment will be sent and the project lead may then
            complete the next{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=&template=milestone-proposal.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER">
              Milestone Proposal
            </A>{' '}
            according to their next roadmap milestone.
          </>
        }
      />
    </DocContainer>
  );
};

export default ProjectsMilestones;
