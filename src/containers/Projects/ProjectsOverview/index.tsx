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
        Contributors can earn coins by working on apps, games, tools, and other software for thenewboston network. These
        projects will improve our network through continuous software development while also allowing for a widespread
        distribution of coins to many contributors.
      </p>
      <p>
        To receive funding, you must submit your project proposal to thenewboston team who will review the details of
        the proposal and ensure that it meets all the rules and guidelines. Once approved, coins will be rewarded as
        milestones are completed throughout the development process.
      </p>
      <p>
        To maintain the quality of projects and the reasonableness of the price of each milestone payout, there are:
      </p>
      <ul>
        <li>
          Strict <NavLink to="/projects/rules">guidelines</NavLink> that the projects must follow
        </li>
        <li>
          Detailed <NavLink to="/projects/milestones">milestone reports</NavLink> that the{' '}
          <NavLink to={`#${ProjectsOverviewNav.lead}`}>project lead</NavLink> must submit to receive payments
        </li>
      </ul>
      <p>
        To help with this process, project leads must partner with a{' '}
        <NavLink to={`#${ProjectsOverviewNav.reviewer}`}>project reviewer</NavLink> who will help guide through this
        process.
      </p>
      <DocSubSection id={ProjectsOverviewNav.lead} title="Project Lead">
        <p>As a project lead, you will be responsible for the following:</p>
        <ul>
          <li>Guiding the success of the project</li>
          <li>Connecting to a project reviewer</li>
          <li>Building your team</li>
          <li>Managing all aspects of the project, including planning, design, development, and so on</li>
          <li>Meeting objectives according to your submitted roadmap milestones</li>
          <li>Maintaining an active and happy team</li>
        </ul>
        <p>
          Once you complete a draft of your project proposal, you must submit it through the{' '}
          <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT">
            Project Proposal
          </A>{' '}
          template. A project reviewer will then contact you and help you finalize the project submission process.
        </p>
        <p>
          See <NavLink to="/projects/proposals">Proposal Submission Process</NavLink> for more details.
        </p>
        <p>
          If you, as a project lead, have a project in mind, you must first solidify your project idea, and then submit
          your project proposal by following the <NavLink to="/projects/proposals">Proposal Submission Process</NavLink>
          . Within the project proposal template, you can either write a preferred project reviewer, or leave it empty,
          in which case any project reviewer can come and claim the project proposal.
        </p>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.reviewer} title="Project Reviewer">
        <p>
          Project reviewers are <NavLink to="/teams/All/Members?title=project%20reviewer">core members</NavLink> of
          thenewboston community. Their role is to help project leads in the entire journey of the project creation:
          from the very beginning of submitting your project proposal, to helping the project get properly funded. To
          ensure the quality of our projects, partnering up with a project reviewer <strong>is required</strong> for the
          project to be approved.
        </p>
        <p>
          The project reviewer will work with you to complete your project proposal. Project reviewers must ensure that
          your proposal is sound, that your milestones are detailed, and that each objective is quantifiable. They will
          help you assign reasonable coin values to each objective/milestone, and ensure that milestones and timelines
          are reasonable, so that the project will get steady funding throughout its development phase. We recommend
          that you space out milestones in monthly increments to achieve this, but this is not a requirement.
        </p>
        <p>
          One challenge will be to estimate coin amounts for all objectives of your milestones. Because of that, it is
          not required in the initial phase of submitting a project proposal (without a project reviewer) to list out
          the estimated amounts for each objective. The project reviewer will help you assign coin values to each, and
          they will ensure that the amount that you put next to each objective is reasonable. If any amounts look
          suspicious on the surface, they will help you write detailed reports justifying that amount.
        </p>
        <p>
          Ideally, every report that you submit to the government will not raise any concerns from neither the
          government, nor the community. But should concerns arise, your project reviewer will help fight for your case,
          and help you negotiate with the government to come to a reasonable compromise.
        </p>
        <p>
          Every project must have one, and only one, project reviewer. If, at any point, you, as the project lead, are
          unhappy with the dedicated project reviewer, you can request to the government for a replacement.
        </p>
        <p>
          Project reviewers receive 10% commission on each successful milestone payout, at no cost to the project. For
          example, if a milestone is worth 100,000 in coins, the project will receive 100,000 from the government, and
          the project reviewer will receive 10,000 coins, making the total payout for the milestone 110,000 coins.
        </p>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.milestones} title="Project Roadmap, Milestones, and Objectives">
        <p>
          Your project roadmap outlines the major components of your project. Here is how your project will connect to
          milestones and objectives.
        </p>
        <DocImage alt="roadmap diagram" maxWidth={680} src={RoadmapMilestoneOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default ProjectsOverview;
