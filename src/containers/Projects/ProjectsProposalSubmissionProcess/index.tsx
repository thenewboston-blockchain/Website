import React, {FC} from 'react';

import {A, DocContainer, DocSubSection, Label} from 'components';

import './ProjectsProposalSubmissionProcess.scss';
import {NavLink} from 'react-router-dom';

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
        To submit a project proposal, fill out all project details using the{' '}
        <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT">
          project proposal
        </A>{' '}
        template. Once submitted, an auditor will work with you to ensure the proposal is formatted correctly and all
        necessary information is included. If and when the proposal has been accepted the auditor will create a new
        directory within the{' '}
        <A href="https://github.com/thenewboston-developers/Projects/tree/master/projects">projects folder</A> with the
        with the finalized version of the project proposal and you may begin development towards your first milestone.
      </p>
      <DocSubSection id={ProjectsProposalSubmissionProcessNav.status} title="Status Details">
        <ul>
          <li>
            Project proposals are labeled as <Label name="Project" color="97DEFC" />.
          </li>
          <li>
            Idea only proposals are labeled as <Label name="Idea Only" color="F9EDA9" /> and may be claimed by anyone
            willing to take lead on them.
          </li>
          <li>
            Once a proposal is complete it will be labeled as <Label name="Pending Review" color="FBCA04" />.
          </li>
          <li>
            After a proposal is accepted it will be labeled as <Label name="Pending Repository" color="006B75" />. You
            must then leave a comment on the original proposal (GitHub issue) noting the GitHub repository URL(s) of
            your project.
          </li>
          <li>
            Once the above steps have been completed your project will be labeled as{' '}
            <Label name="Approved" color="0E8A16" />.
          </li>
        </ul>
      </DocSubSection>
    </DocContainer>
  );
};

export default ProjectsProposalSubmissionProcess;
