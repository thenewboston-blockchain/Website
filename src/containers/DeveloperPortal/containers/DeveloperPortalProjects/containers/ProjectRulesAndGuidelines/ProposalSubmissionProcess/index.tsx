import React, {FC} from 'react';

import {Label} from 'components';

import Step1 from '../../../assets/1.png';
import Step2 from '../../../assets/2.png';
import Step3 from '../../../assets/3.png';
import Step4 from '../../../assets/4.png';
import './ProposalSubmissionProcess.scss';

const ProposalSubmissionProcess: FC = () => {
  return (
    <div className="ProjectRulesProposalSubmissionProcess" id="proposal-submission-process">
      <h1 className="ProjectRulesProposalSubmissionProcess__heading">Proposal Submission Process</h1>
      <p className="ProjectRulesProposalSubmissionProcess__tagline">
        The following simple steps ensure that decision makers will tag your project as “Approved”
      </p>
      <div className="ProjectRulesProposalSubmissionProcess__step">
        <div className="ProjectRulesProposalSubmissionProcess__step-count">
          <img alt="Step 1" height={56} src={Step1} width={56} />
        </div>
        <div className="ProjectRulesProposalSubmissionProcess__step-body">
          <div className="ProjectRulesProposalSubmissionProcess__step-header">
            <h3 className="ProjectRulesProposalSubmissionProcess__step-heading"> Submission </h3>
            <p className="ProjectRulesProposalSubmissionProcess__step-sub-text">
              To submit a project proposal, fill out all project details using the{' '}
              <a
                href="https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT"
                target="_blank"
                rel="noreferrer"
              >
                project proposal
              </a>{' '}
              template.
            </p>
          </div>
          <div className="ProjectRulesProposalSubmissionProcess__step-content">
            <p className="ProjectRulesProposalSubmissionProcess__step-text">
              Label your project proposal as{' '}
              <Label color="556CD6" className="ProjectRulesProposalSubmissionProcess__step-label" name="Project" />
            </p>
            <p className="ProjectRulesProposalSubmissionProcess__step-text">
              Label your project proposal as{' '}
              <Label color="EFC078" className="ProjectRulesProposalSubmissionProcess__step-label" name="Idea Only" />
            </p>
            <p className="ProjectRulesProposalSubmissionProcess__step-note">
              Any member of the community can claim “Idea Only” proposal if the want to take a lead on them.
            </p>
            <div className="ProjectRulesProposalSubmissionProcess__step-listing">
              <h4 className="ProjectRulesProposalSubmissionProcess__step-listing-header">
                As a project lead, you will be responsible for the following:
              </h4>
              <ul className="ProjectRulesProposalSubmissionProcess__step-listing-items">
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Writing the initial project proposal
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Creating a detailed roadmap
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Specifying milestones, objectives, and estimated timelines
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Completing objectives according to your submitted milestones
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Managing all aspects of the project, including planning, design, development, and so on
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectRulesProposalSubmissionProcess__step">
        <div className="ProjectRulesProposalSubmissionProcess__step-count">
          <img alt="Step 2" height={56} src={Step2} width={56} />
        </div>
        <div className="ProjectRulesProposalSubmissionProcess__step-body">
          <div className="ProjectRulesProposalSubmissionProcess__step-header">
            <h3 className="ProjectRulesProposalSubmissionProcess__step-heading"> Review </h3>
            <p className="ProjectRulesProposalSubmissionProcess__step-sub-text">
              When you submit your project proposal, an auditor will work with you to ensure it uses the correct format
              and contains all the essential information.
            </p>
          </div>
          <div className="ProjectRulesProposalSubmissionProcess__step-content">
            <p className="ProjectRulesProposalSubmissionProcess__step-text">
              When a proposal is complete, it will have the{' '}
              <Label
                color="F5925E"
                className="ProjectRulesProposalSubmissionProcess__step-label"
                name="Pending Review"
              />{' '}
              label.
            </p>
            <p className="ProjectRulesProposalSubmissionProcess__step-note">
              You must then leave a comment on the original proposal (GitHub issue) noting the GitHub repository URL(s)
              of your project.
            </p>
            <div className="ProjectRulesProposalSubmissionProcess__step-listing">
              <h4 className="ProjectRulesProposalSubmissionProcess__step-listing-header">
                Auditors are responsible for the following:
              </h4>
              <ul className="ProjectRulesProposalSubmissionProcess__step-listing-items">
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Ensuring the project is unique
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Working with the project lead to create a properly formatted proposal
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Ensuring the project conforms to our rules and guidelines
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Collaborating with the project lead to set estimated milestone dates
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Setting coin amounts for milestone payouts
                </li>
                <li className="ProjectRulesProposalSubmissionProcess__step-listing-item">
                  Reviewing completed milestones to ensure the project meets every objective
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectRulesProposalSubmissionProcess__step">
        <div className="ProjectRulesProposalSubmissionProcess__step-count">
          <img alt="Step 3" height={56} src={Step3} width={56} />
        </div>
        <div className="ProjectRulesProposalSubmissionProcess__step-body">
          <div className="ProjectRulesProposalSubmissionProcess__step-header">
            <h3 className="ProjectRulesProposalSubmissionProcess__step-heading"> Repository </h3>
            <p className="ProjectRulesProposalSubmissionProcess__step-sub-text">
              If thenewboston team accepts your project proposal, the auditor will create a new directory within the{' '}
              <a
                href="https://github.com/thenewboston-developers/Projects/tree/master/projects"
                target="_blank"
                rel="noreferrer"
              >
                project's folder
              </a>{' '}
              with the completed version of the project proposal.
            </p>
          </div>
          <div className="ProjectRulesProposalSubmissionProcess__step-content">
            <p className="ProjectRulesProposalSubmissionProcess__step-text">
              Next, your proposal will have{' '}
              <Label
                color="09825D"
                className="ProjectRulesProposalSubmissionProcess__step-label"
                name="Pending Repository"
              />{' '}
              label.
            </p>
            <p className="ProjectRulesProposalSubmissionProcess__step-note">
              You must then leave a comment on the original proposal (GitHub issue) noting the GitHub repository URL(s)
              of your project.
            </p>
          </div>
        </div>
      </div>
      <div className="ProjectRulesProposalSubmissionProcess__step">
        <div className="ProjectRulesProposalSubmissionProcess__step-count">
          <img alt="Step 4" height={56} src={Step4} width={56} />
        </div>
        <div className="ProjectRulesProposalSubmissionProcess__step-body">
          <div className="ProjectRulesProposalSubmissionProcess__step-header">
            <h3 className="ProjectRulesProposalSubmissionProcess__step-heading"> Approved proposal </h3>
            <p className="ProjectRulesProposalSubmissionProcess__step-sub-text">
              After thenewboston team approves your proposal and you specify your repository, you can begin development
              towards your first milestone.
            </p>
          </div>
          <div className="ProjectRulesProposalSubmissionProcess__step-content">
            <p className="ProjectRulesProposalSubmissionProcess__step-text">
              Your project will have the{' '}
              <Label color="33C27F" className="ProjectRulesProposalSubmissionProcess__step-label" name="Approved" />{' '}
              label.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSubmissionProcess;
