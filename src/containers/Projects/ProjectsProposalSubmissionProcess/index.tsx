import React, {FC} from 'react';

import {A, DocContainer, DocSubSection, Label} from 'components';

import './ProjectsProposalSubmissionProcess.scss';

enum ProjectsProposalSubmissionProcessNav {
  overview = 'overview',
  status = 'status',
}

const ProjectsProposalSubmissionProcess: FC = () => {
  return (
    <DocContainer
      className="ProjectsProposalSubmissionProcess"
      id={ProjectsProposalSubmissionProcessNav.overview}
      title="Proposal Submission Process"
    >
      <p>
        To submit a project, fill out all project details using the{' '}
        <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT">
          Project Proposal
        </A>{' '}
        template.
      </p>

      <DocSubSection id={ProjectsProposalSubmissionProcessNav.status} title="Status Details">
        <ul>
          <li>
            {' '}
            Project proposals are labeled as <Label name="Project" color="97DEFC" /> and idea proposals are labeled as{' '}
            <Label name="Idea Only" color="F9EDA9" />. Idea only proposals can be taken by anyone who is willing to work
            on it.
          </li>
          <li>
            {' '}
            If your project adheres to all Rules &amp; Guidelines of thenewboston, your proposal will be labeled{' '}
            <Label name="Pending Review" color="FBCA04" />.
          </li>
          <li>
            {' '}
            If accepted, your proposal will be labeled as <Label name="Pending Repository" color="006B75" />. You must
            then leave a comment noting the <strong>GitHub repository URL</strong> of your project.
          </li>
          <li>
            {' '}
            Once the above steps have been completed your project will be labeled as{' '}
            <Label name="Approved" color="0E8A16" /> and your project folder with your proposal issue number and the
            project name will be added to the{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/tree/master/projects">projects</A>{' '}
            folder in the <strong>Project-Proposals</strong> repository. (e.g: 464-TheNewBoston)
          </li>
        </ul>
      </DocSubSection>
    </DocContainer>
  );
};

export default ProjectsProposalSubmissionProcess;
