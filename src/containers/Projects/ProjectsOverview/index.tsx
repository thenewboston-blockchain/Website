import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {A, DocContainer, DocImage, DocSubSection} from 'components';
import RoadmapMilestoneOverview from './RoadmapMilestoneOverview.png';

export enum ProjectsOverviewNav {
  overview = 'overview',
  lead = 'lead',
  milestones = 'milestones',
  reviewer = 'reviewer',
}

const ProjectsOverview: FC = () => {
  return (
    <DocContainer className="ProjectsOverview" id={ProjectsOverviewNav.overview} title="Overview">
      <p>
        Contributors can earn coins by working on apps, games, tools, and other software for the thenewboston network.
        To receive funding, project proposals will be submitted to the thenewboston team who will review the details of
        the proposal to ensure that all rules and guidelines are met. Once approved, coins will be rewarded as
        milestones are completed throughout the development process.
      </p>
      <p>
        These projects will improve our network through the continuous creation of new apps, games, and tools while also
        allowing for a more widespread distribution of coins to many contributors.
      </p>
      <p>
        In order to maintain the quality of the projects and the reasonableness of the price of the milestone payouts,
        there will be strict <NavLink to="/projects/rules">guidelines</NavLink> that the project must follow, and the{' '}
        <NavLink to={`#${ProjectsOverviewNav.lead}`}>project lead</NavLink> must submit detailed{' '}
        <NavLink to="/projects/milestones">milestone reports</NavLink> to receive payments. To help with this process,
        the project lead will partner with a <NavLink to={`#${ProjectsOverviewNav.reviewer}`}>project reviewer</NavLink>{' '}
        who will help guide through this process.
      </p>
      <DocSubSection id={ProjectsOverviewNav.lead} title="Project Lead">
        <p>As project lead, you will be responsible for the following:</p>
        <ul>
          <li>Guiding the success of the project</li>
          <li>Reaching out to a project reviewer</li>
          <li>Building your team</li>
          <li>Managing all aspects of the project including planning, design, development, etc...</li>
          <li>Meeting objectives according to your submitted roadmap milestones</li>
          <li>Maintaining an active and happy team</li>
        </ul>
        <p>
          Once you have finalized a draft of your project proposal, you will submit it via the{' '}
          <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT">
            Project Proposal
          </A>{' '}
          template. You will then be contacted by a project reviewer, who will help finalize the project submission
          process. Please read the <NavLink to="/projects/proposals">Proposal Submission Process</NavLink> for more
          details.
        </p>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.reviewer} title="Project Reviewer">
        <p>
          Project Reviewers are <NavLink to="/teams">core members</NavLink> within the thenewboston community that will
          help project leads in the entire journey of the project creation: from the very beginning of finalizing your
          project proposal, to helping the project get properly funded. To ensure the quality of our projects,
          partnering up with a project reviewer will <strong>be required</strong> in order for the project to be
          approved.
        </p>
        <p>
          If you, as a project lead, have a project in mind, you should solidify your project ideas and submit the
          project proposal as outlined in the <NavLink to="/projects/proposals">Proposal Submission Process</NavLink>.
          Within the project proposal template, you can either write a preferred project reviewer, or leave it empty, in
          which case any project reviewer can come and claim the project proposal. The project reviewer will then work
          with the project lead to finalize the project proposal. The project reviewer will ensure that your proposal is
          sound, and he/she will ensure that your milestones are written with enough detail, and that each objective is
          quantifiable. He/she will also help the project lead assign reasonable coin values to each
          objective/milestones. He/she will also ensure that milestones are spaced about reasonably, such that the
          project will get steady funding throughout it's development phase. We recommend that milestones be spaced out
          in monthly increments to achieve this, but this is not a requirement.
        </p>
        <p>
          One of the more tougher challenges will be to put estimated coin amounts to each objectives of your
          milestones. Because of this reason, it is not required in the initial phase of submitting a project proposal
          (without a project reviewer) to list out the estimated amounts for each objectives. The project reviewer will
          help the lead to assign coin values to each, and he/she will ensure that the amount that you put next to each
          objective is reasonable, and if any amounts look suspicious on the surface, he/she will help you write
          detailed reports explaining why that amount is justified.
        </p>
        <p>
          Project Reviewers will help you write all reports throughout the developmental stage of your project (final
          project proposal submission, milestone reports, etc). Ideally, each reports that you submit to the government
          will not raise any concerns from the government and/or the community. But should concerns arise, the project
          reviewer will help fight for your case, and help you negotiate with the government to come to a reasonable
          compromise.
        </p>
        <p>
          Each projects must have one, and only one, project reviewer. If, at any point, the project lead is unhappy
          with the dedicated project reviewer, he/she may request to the government for a replacement.
        </p>
        <p>
          Project reviewers will receive 10% commission on each successful milestone payouts, at no cost to the project.
          For example, if a milestone was worth 100,000 in coins, the project will receive 100,000 from the government,
          and the project reviewer will receive 10,000, making the total payout for the milestone 110,000.
        </p>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.milestones} title="Project Roadmap, Milestones, and Objectives">
        <DocImage alt="roadmap diagram" maxWidth={680} src={RoadmapMilestoneOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default ProjectsOverview;
