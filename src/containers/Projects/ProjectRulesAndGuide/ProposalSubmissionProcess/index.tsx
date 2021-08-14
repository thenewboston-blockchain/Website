import React, {FC} from 'react';

import {Label} from 'components';
import {MEDIUM_DEVICE_WIDTH} from 'constants/breakpoints';
import {useWindowDimensions} from 'hooks';

import {Step1, Step2, Step3, Step4} from '../assets/icons';
import './ProposalSubmissionProcess.scss';

const ProposalSubmissionProcess: FC = () => {
  const {width} = useWindowDimensions();

  return (
    <div className="ProposalSubmissionProcess" id="proposal-submission-process">
      <h1 className="ProposalSubmissionProcess__heading">Proposal Submission Process</h1>
      <p className="ProposalSubmissionProcess__tagline">
        These 4 simple steps will ensure that decision makers will say “Approved” to your project.
      </p>
      <div className="ProposalSubmissionProcess__step">
        <div className="ProposalSubmissionProcess__step-count">
          <Step1 />
        </div>
        <div className="ProposalSubmissionProcess__step-body">
          <div className="ProposalSubmissionProcess__step-header">
            <h3 className="ProposalSubmissionProcess__step-heading"> Submission </h3>
            <p className="ProposalSubmissionProcess__step-sub-text">
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
          <div className="ProposalSubmissionProcess__step-content">
            <p className="ProposalSubmissionProcess__step-text">
              Your Project proposal will be labeled as{' '}
              <Label color="556CD6" className="ProposalSubmissionProcess__step-label" name="Project" />
            </p>
            <p className="ProposalSubmissionProcess__step-text">
              Your Idea Only Proposal will be labeled as{' '}
              <Label color="EFC078" className="ProposalSubmissionProcess__step-label" name="Idea Only" />
            </p>
            <p className="ProposalSubmissionProcess__step-note">
              Idea Only proposals can be claimed by anyone willing to take a lead on them.
            </p>
            <div className="ProposalSubmissionProcess__step-listing">
              <h4 className="ProposalSubmissionProcess__step-listing-header">
                As a project lead, you will be responsible for the following:
              </h4>
              <ul className="ProposalSubmissionProcess__step-listing-items">
                <li className="ProposalSubmissionProcess__step-listing-item">Writing the initial project proposal</li>
                <li className="ProposalSubmissionProcess__step-listing-item">Creating a detailed roadmap</li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Specifying milestones, objectives, and estimated timelines
                </li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Completing objectives according to your submitted milestones
                </li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Managing all aspects of the project, including planning, design, development, and so on
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {width <= MEDIUM_DEVICE_WIDTH && <hr className="ProposalSubmissionProcess__step-divider" />}
      <div className="ProposalSubmissionProcess__step">
        <div className="ProposalSubmissionProcess__step-count">
          <Step2 />
        </div>
        <div className="ProposalSubmissionProcess__step-body">
          <div className="ProposalSubmissionProcess__step-header">
            <h3 className="ProposalSubmissionProcess__step-heading"> Review </h3>
            <p className="ProposalSubmissionProcess__step-sub-text">
              Once submitted, an auditor will work with you to ensure the proposal uses the correct format and contains
              all the essential information.
            </p>
          </div>
          <div className="ProposalSubmissionProcess__step-content">
            <p className="ProposalSubmissionProcess__step-text">
              Once a proposal is complete, it will be labeled as{' '}
              <Label color="F5925E" className="ProposalSubmissionProcess__step-label" name="Pending Review" />
            </p>
            <p className="ProposalSubmissionProcess__step-note">
              You must then leave a comment on the original proposal (GitHub issue) noting the GitHub repository URL(s)
              of your project.
            </p>
            <div className="ProposalSubmissionProcess__step-listing">
              <h4 className="ProposalSubmissionProcess__step-listing-header">
                Auditors are responsible for the following:
              </h4>
              <ul className="ProposalSubmissionProcess__step-listing-items">
                <li className="ProposalSubmissionProcess__step-listing-item">Ensuring the project is unique</li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Working with the project lead to create a properly formatted proposal
                </li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Ensuring the project conforms to our rules and guidelines
                </li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Collaborating with the project lead to set estimated milestone dates
                </li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Setting coin amounts for milestone payouts
                </li>
                <li className="ProposalSubmissionProcess__step-listing-item">
                  Reviewing completed milestones to ensure the project meets every objective
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {width <= MEDIUM_DEVICE_WIDTH && <hr className="ProposalSubmissionProcess__step-divider" />}
      <div className="ProposalSubmissionProcess__step">
        <div className="ProposalSubmissionProcess__step-count">
          <Step3 />
        </div>
        <div className="ProposalSubmissionProcess__step-body">
          <div className="ProposalSubmissionProcess__step-header">
            <h3 className="ProposalSubmissionProcess__step-heading"> Repository </h3>
            <p className="ProposalSubmissionProcess__step-sub-text">
              If and when the proposal is accepted, the auditor will create a new directory within the{' '}
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
          <div className="ProposalSubmissionProcess__step-content">
            <p className="ProposalSubmissionProcess__step-text">
              After a proposal is accepted, it will be labeled as{' '}
              <Label color="09825D" className="ProposalSubmissionProcess__step-label" name="Pending Repository" />
            </p>
            <p className="ProposalSubmissionProcess__step-note">
              You must then leave a comment on the original proposal (GitHub issue) noting the GitHub repository URL(s)
              of your project.
            </p>
          </div>
        </div>
      </div>
      {width <= MEDIUM_DEVICE_WIDTH && <hr className="ProposalSubmissionProcess__step-divider" />}
      <div className="ProposalSubmissionProcess__step">
        <div className="ProposalSubmissionProcess__step-count">
          <Step4 />
        </div>
        <div className="ProposalSubmissionProcess__step-body">
          <div className="ProposalSubmissionProcess__step-header">
            <h3 className="ProposalSubmissionProcess__step-heading"> Approved </h3>
            <p className="ProposalSubmissionProcess__step-sub-text">
              Once the proposal is approved you can begin development towards your first milestone.
            </p>
          </div>
          <div className="ProposalSubmissionProcess__step-content">
            <p className="ProposalSubmissionProcess__step-text">
              After a proposal is accepted, it will be labeled as{' '}
              <Label color="33C27F" className="ProposalSubmissionProcess__step-label" name="Approved" />
            </p>
          </div>
        </div>
      </div>
      {width <= MEDIUM_DEVICE_WIDTH && <hr className="ProposalSubmissionProcess__step-divider" />}
    </div>
  );
};

export default ProposalSubmissionProcess;
