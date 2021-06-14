import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';

import {Step1, Step2, Step3, Step4} from '../assets/icons';
import RoadmapIllustration from '../assets/img/roadmap.png';
import './MilestonesAndPayouts.scss';

const MilestonesAndPayouts: FC = () => {
  const SMALL_DEVICE_WIDTH = 768;

  const {width} = useWindowDimensions();

  return (
    <div className="MilestonesAndPayouts" id="milestones-and-payouts">
      <h1 className="MilestonesAndPayouts__heading">Milestones And Payouts</h1>
      <div className="MilestonesAndPayouts__note">
        <p className="MilestonesAndPayouts__note-highlight">Important</p>
        <p className="MilestonesAndPayouts__note-text">
          Project leads must plan and write milestones with the help of a project auditor.
        </p>
      </div>
      <div className="MilestonesAndPayouts__roadmap">
        <h3 className="MilestonesAndPayouts__roadmap-heading">Roadmap, Milestones, and Objectives</h3>
        <p className="MilestonesAndPayouts__roadmap-text">
          Your roadmap outlines the major components of your project. The relationship between roadmaps, milestones, and
          objectives is the following:
        </p>
        <img alt="Roadmap Example" className="MilestonesAndPayouts__roadmap-illustration" src={RoadmapIllustration} />
      </div>
      <div className="MilestonesAndPayouts__process">
        <h3 className="MilestonesAndPayouts__process-heading">Milestone Payout Request Process</h3>
        <div className="MilestonesAndPayouts__process-step">
          <div className="MilestonesAndPayouts__process-step-count">
            <Step1 />
          </div>
          <div className="MilestonesAndPayouts__process-step-text">
            Upon completion of a milestone, the project lead must submit a payout request including valid proof of work
            for all objectives.
          </div>
        </div>
        {width <= SMALL_DEVICE_WIDTH && <hr className="MilestonesAndPayouts__process-divider" />}
        <div className="MilestonesAndPayouts__process-step">
          <div className="MilestonesAndPayouts__process-step-count">
            <Step2 />
          </div>
          <div className="MilestonesAndPayouts__process-step-text">
            Auditors will then review proof of work to ensure that all objectives have been met. In case of questions or
            required clarifications, they will leave a comment.
          </div>
        </div>
        {width <= SMALL_DEVICE_WIDTH && <hr className="MilestonesAndPayouts__process-divider" />}
        <div className="MilestonesAndPayouts__process-step">
          <div className="MilestonesAndPayouts__process-step-count">
            <Step3 />
          </div>
          <div className="MilestonesAndPayouts__process-step-text">
            Once a milestone has been accepted, the payment will be sent. The project lead can then complete the next
            milestone proposal according to the next roadmap milestone.
          </div>
        </div>
        {width <= SMALL_DEVICE_WIDTH && <hr className="MilestonesAndPayouts__process-divider" />}
        <div className="MilestonesAndPayouts__process-step">
          <div className="MilestonesAndPayouts__process-step-count">
            <Step4 />
          </div>
          <div className="MilestonesAndPayouts__process-step-text">
            An auditor will review the newly proposed milestone and will work with the project lead to complete all
            essential information. The auditor will then submit the new milestone to the government for final review.
          </div>
        </div>
        {width <= SMALL_DEVICE_WIDTH && <hr className="MilestonesAndPayouts__process-divider" />}
      </div>
      <div className="MilestonesAndPayouts__pow">
        <h3 className="MilestonesAndPayouts__pow-heading">Acceptable Proof of Work</h3>
        <div className="MilestonesAndPayouts__pow-table">
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> Design </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For all design-only related work, including UI/UX: a publicly viewable Figma, Adobe XD, or other URL
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> New Feature </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For the addition of a new feature: link to a pull request or issue with pull request linked, and the
              screenshot /recording showing the new feature in action
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> Live Website </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For live websites: complete URL of the page showing a new feature
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> Documentation </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For all documentation-related work: a publicly viewable Google Doc URL (research-related Google Docs must
              have a clear description of the research and its findings)
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> Published Applications </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For published applications: link to the Google Play Store, App Store, Chrome Web Store, and so on
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> Marketing/ Social Media </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For marketing and social media related work: links to all the posts and user engagement data (if
              available)
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> DevOps </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For DevOps-related work: diagrams, documentation, screenshots, config files, and so on
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
          <div className="MilestonesAndPayouts__pow-table-row">
            <h4 className="MilestonesAndPayouts__pow-table-row-heading"> Backend APIs </h4>
            <p className="MilestonesAndPayouts__pow-table-row-text">
              For DevOps-related work: diagrams, documentation, screenshots, config files, and so on
            </p>
            <div className="MilestonesAndPayouts__pow-table-row-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesAndPayouts;
