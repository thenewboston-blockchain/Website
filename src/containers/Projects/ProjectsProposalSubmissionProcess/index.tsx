import React, {FC} from 'react';

import {A, DocContainer, DocSubSection, Label} from 'components';

import './ProjectsProposalSubmissionProcess.scss';

enum ProjectsProposalSubmissionProcessNav {
  overview = 'overview',
  reviewerDesignated = 'reviewer-designated',
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
        template. Note that you can:
        <ol>
          <li>
            Optionally list out the preferred project reviewer. While this may not guarantee you get the desired project
            reviewer, it will give the selected reviewer first call to decide whether he/she wants to proceed with your
            project.
          </li>
          <li>
            Optionally list out each milestone objective's estimated coin values. We highly encourage you write this
            part out in detail with the project reviewer (once one gets selected), but you may choose to write it in
            your proposal to give the reviewers some numbers to work with.
          </li>
        </ol>
      </p>
      <DocSubSection
        id={ProjectsProposalSubmissionProcessNav.reviewerDesignated}
        title="After a Project Reviewer Has Been Designated"
      >
        <p>
          After you have submitted the initial project proposal, you will wait until a Project Reviewer have decided to
          take on your project. If your proposal is not fleshed out thoroughly, there is a possibility that no reviewer
          decide to take on your project, but they will leave comments on your proposal explaining what needs to be
          improved.
        </p>
        <p>
          If you have decided to write a preferred project reviewer, that person will have the first dibs to decide
          whether he/she wants to take on your project. Otherwise, any project reviewer can come in and decide to take
          on your project. It will be a first come, first serve basis.
        </p>
        <p>
          After a project reviewer has been designated, he/she will contact the project lead, and they can start working
          together to solidify the project proposal. The reviewer will help you assign proper coin amounts to each
          objectives and milestones. He/she will also help make each milestones reasonable and reasonable in it's scope.
        </p>
        <p>
          Once the proposal is finalized, the project reviewer will submit a PR in the Projects repo. The PR will
          contain a new directory within the{' '}
          <A href="https://github.com/thenewboston-developers/Projects/tree/master/projects">projects folder</A> with
          the `project-details.md` filled out with the finalized version of the project proposal.
        </p>
        <p>
          The TNB team will then review the PR, and decide whether or not they want to proceed with the project or not.
        </p>
      </DocSubSection>
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
