import React, {FC} from 'react';

import {A, Note, NoteType, Divider} from 'components';
import Step from '../../../components/Step';

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
        <p className="ProjectRulesMilestonesAndPayouts__process-text">A detailed overview of this process follows:</p>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={1} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            The project lead creates a project proposal that describes a{' '}
            <b className="ProjectRulesMilestonesAndPayouts__process-step-text--bold">working MVP</b>.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={2} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            Auditors review the proposal and mark it as approved or leave a response on why they do not approve it.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={3} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            The project lead begins work on the project.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={4} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            Once MVP is complete, the project lead submits a payout request including valid{' '}
            <b className="ProjectRulesMilestonesAndPayouts__process-step-text--bold">proof of work</b> for all
            objectives.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={5} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            Auditors review the MVP quality, assess the value that the project adds to the community, and offer an
            amount of TNBC.
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={6} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">
            The project lead can discuss the amount of coins with the auditors and negotiate a more accurate amount (for
            example, improve descriptions, provide additional information, and so on).
          </div>
        </div>
        <div className="ProjectRulesMilestonesAndPayouts__process-step">
          <div className="ProjectRulesMilestonesAndPayouts__process-step-count">
            <Step size={56} number={7} />
          </div>
          <div className="ProjectRulesMilestonesAndPayouts__process-step-text">Auditors approve milestone pay out.</div>
        </div>
        <Note
          type={NoteType.Important}
          text="As of August 31, 2021, project leads can still make payout requests once an existing milestone is complete for the already agreed-on amount. However, their next milestone must follow the updates listed above."
        />
      </div>
      <div className="ProjectRulesMilestonesAndPayouts__pow">
        <h3 className="ProjectRulesMilestonesAndPayouts__pow-heading">Acceptable Proof of Work</h3>
        <div className="ProjectRulesMilestonesAndPayouts__pow-table">
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Design </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For all design-only related work, including UI/UX, use a publicly viewable{' '}
              <A href="https://www.figma.com">Figma</A>, <A href="https://www.adobe.com/products/xd.html">Adobe XD</A>,
              or other URL.
            </p>
            <Note
              className="ProjectRulesMilestonesAndPayouts__pow-note"
              type={NoteType.Information}
              text="Although such proof of design work does not suffice in making a milestone eligible for payment, the core team will still account for it in the overall valuation of the project milestone."
            />
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
            <Note
              className="ProjectRulesMilestonesAndPayouts__pow-note"
              type={NoteType.Information}
              text="Although such proof of documentation work does not suffice in making a milestone eligible for payment, the core team will still account for it in the overall valuation of the project milestone."
            />
          </div>
          <Divider />
          <div className="ProjectRulesMilestonesAndPayouts__pow-table-row">
            <h4 className="ProjectRulesMilestonesAndPayouts__pow-table-row-heading"> Published Applications </h4>
            <p className="ProjectRulesMilestonesAndPayouts__pow-table-row-text">
              For published applications, use links to the <A href="https://play.google.com/store">Google Play Store</A>
              , <A href="https://www.apple.com/app-store/">App Store</A>,{' '}
              <A href="https://chrome.google.com/webstore">Chrome Web Store</A>, and so on.
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
