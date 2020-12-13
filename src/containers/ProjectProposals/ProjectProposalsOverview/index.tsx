import React, {FC} from 'react';

import {A, DocContainer, StepIndicator} from 'components';

import './ProjectProposalsOverview.scss';

const ProjectProposalsOverview: FC = () => {
  return (
    <DocContainer className="ProjectProposalsOverview" title="Overview">
      <h2>How do the project proposals work?</h2>
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={1}
        text={
          <>
            Go to{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals">
              https://github.com/thenewboston-developers/Project-Proposals
            </A>{' '}
            and read thoroughly README.md file.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={2}
        text="Raise an issue for Project Proposal in the same repository and fill all the required details in the given format."
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={3}
        text='If your project adheres to the rules and guidelines of thenewboston, your proposal will be labeled "Pending Review".'
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={4}
        text='If your proposal is good enough to impress TNB team, your proposal will be approved and your proposal will be labeled as "Pending Repository".'
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={5}
        text="After that, you have to comment down the GitHub repository URL of your project."
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={6}
        text='Once done, your project will be successfully labeled as "Approved" and your project folder with your proposal issue number and the project name will be added to the Project-Proposals repository. (e.g: 464-TheNewBoston)'
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={7}
        text="All your project details will be added to that folder."
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={8}
        text={
          <>
            After the completion of each task, the project leader (or manager) will raise an issue to{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals">
              https://github.com/thenewboston-developers/Project-Proposals
            </A>{' '}
            with the proof of completion of a milestone and thenewboston account number.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={9}
        text="The amount of fund the project will receive after the completion of each milestone will be decided by the TNB team depending on how valuable and big the milestone is as well as the quality of work done to achieve that. That means, if your first milestone is getting UI/UX ready then your quality of UI/UX will be taken into consideration for the amount of fund you will receive."
      />
    </DocContainer>
  );
};

export default ProjectProposalsOverview;
