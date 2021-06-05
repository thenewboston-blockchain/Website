import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {A, DocContainer, DocImage, DocSubSection} from 'components';
import RoadmapMilestoneOverview from './RoadmapMilestoneOverview.png';

export enum ProjectsOverviewNav {
  overview = 'overview',
  lead = 'lead',
  auditors = 'auditors',
  milestones = 'milestones',
}

const ProjectsOverview: FC = () => {
  return (
    <DocContainer className="ProjectsOverview" id={ProjectsOverviewNav.overview} title="Overview">
      <p>
        Individuals can earn coins by working on apps, games, and other software projects for thenewboston network. To
        receive funding, you must submit your project proposal to thenewboston team who will review the details of the
        proposal to ensure it meets all rules and guidelines. Once approved, coins will be rewarded as milestones are
        completed throughout the development process.
      </p>
      <p>
        To maintain the quality of projects there are strict{' '}
        <NavLink to="/projects/rules">rules and guidelines</NavLink> that projects must follow, as well as detailed{' '}
        <NavLink to="/projects/milestones">milestone reports</NavLink> that the{' '}
        <NavLink to={`#${ProjectsOverviewNav.lead}`}>project lead</NavLink> must submit to receive payments.
      </p>
      <DocSubSection id={ProjectsOverviewNav.lead} title="Project Lead">
        <p>As a project lead, you will be responsible for the following:</p>
        <ul>
          <li>Writing the initial project proposal</li>
          <li>Creating a detailed roadmap</li>
          <li>Specifying milestones, objectives, and estimated timelines</li>
          <li>Completing objectives according to your submitted milestones</li>
          <li>Managing all aspects of the project, including planning, design, development, and so on</li>
        </ul>
        <p>
          Once you complete a draft of your project proposal, submit it by using the{' '}
          <A href="https://github.com/thenewboston-developers/Project-Proposals/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT">
            project proposal
          </A>{' '}
          template. A project auditor will help you complete the project submission if any changes are essential. See
          the <NavLink to="/projects/proposals">proposal submission process</NavLink> for more details.
        </p>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.auditors} title="Auditors">
        <p>
          Auditors will work with you to help ensure that your proposal is sound, your milestones are clear, and that
          each objective is quantifiable. They will also help in assigning reasonable coin values to each milestone in
          order to receive funding throughout development. We suggest aiming for 2-3 weeks worth of work per milestone,
          but this is not a strict requirement.
        </p>
        <p>In summary, auditors are responsible for the following:</p>
        <ul>
          <li>Ensuring the project is unique</li>
          <li>Working with the project lead to create a properly formatted proposal</li>
          <li>
            Ensuring the project conforms to our <NavLink to="/projects/rules">rules and guidelines</NavLink>
          </li>
          <li>Collaborating with the project lead to set estimated milestone dates</li>
          <li>Setting coin amounts for milestone payouts</li>
          <li>Reviewing completed milestones to ensure the project meets every objective</li>
        </ul>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.milestones} title="Roadmap, Milestones, and Objectives">
        <p>
          Your roadmap outlines the major components of your project. The relationship between roadmaps, milestones, and
          objectives is the following:
        </p>
        <DocImage alt="roadmap diagram" maxWidth={600} src={RoadmapMilestoneOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default ProjectsOverview;
