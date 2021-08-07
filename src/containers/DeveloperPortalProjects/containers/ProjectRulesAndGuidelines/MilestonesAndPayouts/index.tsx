import React, {FC} from 'react';

import {A, Note, NoteType, Divider} from 'components';

import Step1 from '../../../assets/1.png';
import Step2 from '../../../assets/2.png';
import Step3 from '../../../assets/3.png';
import Step4 from '../../../assets/4.png';
import RoadmapIllustration from '../../../assets/roadmap.png';
import './MilestonesAndPayouts.scss';

const MilestonesAndPayouts: FC = () => {
  return (
    <div className="ProjectRulesMilestonesAndPayouts" id="milestones-and-payouts">
      <h1 className="ProjectRulesMilestonesAndPayouts__heading">Milestones And Payouts</h1>
      <div className="ProjectRulesMilestonesAndPayouts__note">
        <Note
          text="Project leads must plan and write milestones with the help of a project auditor."
          type={NoteType.Important}
        />
      </div>
      <div className="ProjectRulesMilestonesAndPayouts__roadmap">
        <h3 className="ProjectRulesMilestonesAndPayouts__roadmap-heading">Roadmap, Milestones, and Objectives</h3>
        <p className="ProjectRulesMilestonesAndPayouts__roadmap-text">
          Your roadmap outlines the major components of your project. See the relationship between roadmaps, milestones,
          and objectives in the following example:
        </p>
        <img
          alt="Roadmap Example"
          className="ProjectRulesMilestonesAndPayouts__roadmap-illustration"
          src={RoadmapIllustration}
        />
      </div>
      <div className="ProjectRulesMilestonesAndPayouts__process">
        <h3 className="ProjectRulesMilestonesAndPayouts__process-heading">Milestone Payout Request Process</h3>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <img alt="Step 1" height={56} src={Step1} width={56} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            Upon completion of a milestone, you, as the project lead, must submit a payout request, including valid{' '}
            <b className="ProjectRulesMilestonesAndPayouts__process-step-text--bold">proof of work</b> for all
            objectives.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <img alt="Step 2" height={56} src={Step2} width={56} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            Auditors will then review proof of work to ensure that you and your team have met all objectives. In case of
            questions or required clarifications, leave a comment and tag your auditor.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <img alt="Step 3" height={56} src={Step3} width={56} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            When thenewboston team accepts a milestone, they will release a payment. The project lead and their team can
            then complete the next{' '}
            <A href="https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Milestone&template=milestone-proposal.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER">
              milestone proposal
            </A>{' '}
            according to the next roadmap milestone.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <img alt="Step 4" height={56} src={Step4} width={56} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            An auditor will review the newly proposed milestone and will work with the project lead to complete all
            essential information. The auditor will then submit the new milestone to the government for final review.
          </div>
        </div>
      </div>
      <div className="ProjectRulesMilestonesAndPayouts__pow">
        <h3 className="ProjectRulesMilestonesAndPayouts__pow-heading">Acceptable Proof of Work</h3>
        <div className="ProjectRulesMilestonesAndPayouts__pow-table">
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Design </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For all design-only related work, including UI/UX, use a publicly viewable Figma, Adobe XD, or other URL.
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> New Feature </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For the addition of a new feature, use a link to a pull request or issue with pull request linked, and the
              screenshot / recording showing the new feature in action.
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Live Website </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For live websites: complete URL of the page showing a new feature.
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Documentation </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For all documentation-related work: a publicly viewable Google Doc URL (research-related Google Docs must
              have a clear description of the research and its findings.)
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Published Applications </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For published applications, use links to the Google Play Store, App Store, Chrome Web Store, and so on.
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Marketing/ Social Media </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For marketing and social media related work: links to all the posts and user engagement data (if
              available)
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> DevOps </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For DevOps-related work, use diagrams, documentation, screenshots, config files, and so on.
            </p>
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Backend APIs </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For API-related work, use diagrams, documentation, screenshots, config files, and so on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesAndPayouts;
