import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {A, DocContainer, DocSubSection, StepIndicator, TableBorderGrid} from 'components';

import {ProjectsOverviewNav} from '../ProjectsOverview';
import './ProjectsMilestones.scss';

enum ProjectsMilestonesNav {
  overview = 'overview',
  milestonePayoutRequestProcess = 'milestone-payout-request-process',
  samplePayoutRequest = 'sample-payout-request',
  proofOfWork = 'proof-of-work',
}

const ProjectsMilestones: FC = () => {
  const renderAcceptableProofOfWork = () => (
    <DocSubSection id={ProjectsMilestonesNav.proofOfWork} title="Acceptable Proof of Work">
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={1}
        text="For all design-only related work including UI/UX a publicly viewable Figma, Adobe XD, or other URL must be provided."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={2}
        text="Link to a pull request or issue with pull request linked for the addition of a new feature and the screenshot/recording showing the new feature in action."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={3}
        text="Complete URL of the page where a new feature has been added if the website is live."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={4}
        text="For all documentation-related work, a publicly viewable Google Doc URL must be provided. Research-related Google Docs should have a clear description of the research and its findings."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={5}
        text="Link to the Google Play Store, App Store, Chrome Web Store, etc... in case of published applications."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={6}
        text="For marketing and social media related work, links to all the posts and user engagement data (if available)."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={7}
        text="Diagrams, documentation, screenshots, config files, etc... for DevOps-related work."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={8}
        text={
          <>
            For backend API Postman collection/ swagger doc should be submitted as proof of work. Learn more about{' '}
            <A href="https://learning.postman.com/docs/publishing-your-api/documenting-your-api/">
              documenting your API
            </A>
            .
          </>
        }
      />
    </DocSubSection>
  );

  const renderMilestoneCaption = (heading: string, text: string) => (
    <div className="ProjectsMilestones__caption">
      <div className="ProjectsMilestones__caption-heading">{heading}</div>
      <div className="ProjectsMilestones__caption-text">{text}</div>
    </div>
  );

  const renderMilestonePayoutRequestProcess = () => (
    <DocSubSection id={ProjectsMilestonesNav.milestonePayoutRequestProcess} title="Milestone Payout Request Process">
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={1}
        text={
          <>
            Upon completion of a milestone, the project lead will submit a{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=&template=payout-request.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER">
              payout request
            </A>{' '}
            including valid proof of work for all objectives.
          </>
        }
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={2}
        text="The auditors will then review the proof of work to ensure that all objectives have been met. The auditors will leave a comment if there are any questions or clarifications that are needed."
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={3}
        text={
          <>
            Once a milestone has been accepted, the payment will be sent and the project lead may then complete the next{' '}
            <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=&template=milestone-proposal.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER">
              milestone proposal
            </A>{' '}
            according to the next roadmap milestone.
          </>
        }
      />
      <StepIndicator
        className="ProjectsMilestones__StepIndicator"
        number={4}
        text={
          <>
            The newly proposed milestone will then be reviewed by an auditor who will work with the project lead to
            complete all information. The auditor will then submit the new milestone to the government for final review.
          </>
        }
      />
    </DocSubSection>
  );

  const renderProofOfWork = (number: number, title: string) => (
    <div className="ProjectsMilestones__proof-of-work">
      <div className="ProjectsMilestones__proof-of-work-heading">
        <strong>
          {number} - {title}
        </strong>
      </div>
      <ul>
        <li>
          <A href="#">Sample proof of work link</A>
        </li>
        <li>
          <A href="#">Sample proof of work link</A>
        </li>
      </ul>
    </div>
  );

  const renderSamplePayoutRequest = () => (
    <DocSubSection id={ProjectsMilestonesNav.samplePayoutRequest} title="Sample Payout Request (with Proof of Work)">
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
      {renderProofOfWork(1, 'Functional top navigation menu linking to empty placeholder pages')}
      {renderProofOfWork(2, 'Fully responsive, hifi landing page')}
      {renderProofOfWork(3, 'Website deployed to live environment hosted on AWS')}
      {renderMilestoneCaption('Project Reviewer', 'John Doe')}
      {renderMilestoneCaption('Project Wallet', 'b8fc2c7874c410b9747d214b6772b469df088fbf561bc2f4fe8a6dada3e6f137')}
    </DocSubSection>
  );

  return (
    <DocContainer className="ProjectsMilestones" id={ProjectsMilestonesNav.overview} title="Milestones & Payouts">
      <p>
        All projects will be funded based on the completion of milestones. Each milestone will include a list of related
        objectives. Upon completion of a milestone, each objective will be reviewed by the auditors and once all
        objectives have been verified as completed, coins will then be rewarded.
      </p>
      <p>
        Milestones are planned and written with the help of a{' '}
        <NavLink to={`/projects/overview#${ProjectsOverviewNav.auditors}`}>project auditor</NavLink>.
      </p>
      {renderMilestonePayoutRequestProcess()}
      {renderSamplePayoutRequest()}
      {renderAcceptableProofOfWork()}
    </DocContainer>
  );
};

export default ProjectsMilestones;
