import React, {FC} from 'react';

import {A, DocContainer, Label, StepIndicator} from 'components';

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
        text={
          <>
            Raise an issue for{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=add-project-proposal.md&title=NAME_OF_YOUR_PROJECT">
              Project Proposal
            </A>{' '}
            in the same repository and fill all the required details in the given format. You can also raise the{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Idea+Only&template=idea-only-proposal.md&title=NAME_OF_YOUR_IDEA">
              Idea Only proposal
            </A>{' '}
            if you have an idea but not ready to work on the idea.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={3}
        text={
          <>
            Project proposals are labeled as <Label name="Project" color="97DEFC" /> and Idea proposals are labeled as{' '}
            <Label name="Idea Only" color="F9EDA9" />. Idea Only proposals can be taken by anyone who is willing to work
            on it. Anyone ready to work on Idea Only proposal requires to comment down the{' '}
            <strong>project milestones</strong> and the <strong>team details</strong>.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={4}
        text={
          <>
            If your project adheres to the Rules and Guidelines of thenewboston, your proposal will be labeled{' '}
            <Label name="Pending Review" color="FBCA04" />.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={5}
        text={
          <>
            If your proposal is good enough to impress TNB team, your proposal will be approved and your proposal will
            be labeled as <Label name="Pending Repository" color="006B75" />
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={6}
        text={
          <>
            After that, you have to comment down the <strong>GitHub repository URL</strong> of your project.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={7}
        text={
          <>
            Once done, your project will be successfully labeled as <Label name="Approved" color="0E8A16" /> and your
            project folder with your proposal issue number and the project name will be added to the{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/tree/master/projects">projects</A>{' '}
            folder in the <strong>Project-Proposals</strong> repository. (e.g: 464-TheNewBoston)
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={8}
        text="All your project details will be added to that folder."
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={9}
        text={
          <>
            After the team formation, the team leader (or manager) has to provide details of each member of the team.
            Details include{' '}
            <strong>full-name, GitHub username, Slack username, LinkedIn profile, role in the team, </strong>
            and the <strong>account number</strong> where they want to receive payments.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsOverview__StepIndicator"
        number={10}
        text={
          <>
            A person can be part of only <strong>one project</strong> at a time.
          </>
        }
      />
    </DocContainer>
  );
};

export default ProjectProposalsOverview;
