import React, {FC} from 'react';

import {A, DocContainer, Label, StepIndicator} from 'components';

import './ProjectsProposalSubmissionProcess.scss';

const ProjectsProposalSubmissionProcess: FC = () => {
  return (
    <DocContainer className="ProjectsProposalSubmissionProcess" title="Proposal Submission Process">
      <StepIndicator
        className="ProjectsProposalSubmissionProcess__StepIndicator"
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
        className="ProjectsProposalSubmissionProcess__StepIndicator"
        number={2}
        text={
          <>
            Raise an issue for{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=add-project-proposal.md&title=NAME_OF_YOUR_PROJECT">
              Project Proposal
            </A>{' '}
            and fill all the required details in the given format. You can also raise an{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Idea+Only&template=idea-only-proposal.md&title=NAME_OF_YOUR_IDEA">
              Idea Only Proposal
            </A>{' '}
            if you have an idea but not able to or interested in working on the project itself.
          </>
        }
      />
      <StepIndicator
        className="ProjectsProposalSubmissionProcess__StepIndicator"
        number={3}
        text={
          <>
            Project proposals are labeled as <Label name="Project" color="97DEFC" /> and Idea proposals are labeled as{' '}
            <Label name="Idea Only" color="F9EDA9" />. Idea only proposals can be taken by anyone who is willing to work
            on it. Anyone ready to work on idea only proposal requires to comment down the{' '}
            <strong>project milestones</strong> and the <strong>team details</strong>.
          </>
        }
      />
      <StepIndicator
        className="ProjectsProposalSubmissionProcess__StepIndicator"
        number={4}
        text={
          <>
            If your project adheres to all Rules &amp; Guidelines of thenewboston, your proposal will be labeled{' '}
            <Label name="Pending Review" color="FBCA04" />.
          </>
        }
      />
      <StepIndicator
        className="ProjectsProposalSubmissionProcess__StepIndicator"
        number={5}
        text={
          <>
            If your proposal is good enough to impress thenewboston team, your proposal will be approved and your
            proposal will be labeled as <Label name="Pending Repository" color="006B75" />
          </>
        }
      />
      <StepIndicator
        className="ProjectsProposalSubmissionProcess__StepIndicator"
        number={6}
        text={
          <>
            After that, you have to comment down the <strong>GitHub repository URL</strong> of your project.
          </>
        }
      />
      <StepIndicator
        className="ProjectsProposalSubmissionProcess__StepIndicator"
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
        className="ProjectsProposalSubmissionProcess__StepIndicator"
        number={8}
        text="All your project details will be added to that folder."
      />
    </DocContainer>
  );
};

export default ProjectsProposalSubmissionProcess;
