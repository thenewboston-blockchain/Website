import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, DocSubSection} from 'components';

import RoadmapMilestoneOverview from './RoadmapMilestoneOverview.png';
import './ProjectsOverview.scss';

enum ProjectsOverviewNav {
  overview = 'overview',
  milestones = 'milestones',
  reviewer = 'reviewer',
  lead = 'lead',
}

const ProjectsOverview: FC = () => {
  return (
    <DocContainer className="ProjectsOverview" id={ProjectsOverviewNav.overview} title="Overview">
      <p>
        Contributors can earn coins by working on apps, games, tools, and other software for the thenewboston network.
        To receive funding, project proposals will be submitted to the thenewboston government who will review the
        details of the proposal to ensure that all rules and guidelines are met. Once approved, coins will be rewarded
        as milestones are completed throughout the development process.
      </p>
      <p>
        These projects will improve our network through the continuous creation of new apps, games, and tools while also
        allowing for a more widespread distribution of coins to many contributors.
      </p>
      <p>
        In order to maintain the quality of the projects, and the reasonableness of the price of the milestone payouts,
        there will be strict <NavLink to="/projects/rules">guidelines</NavLink> that the project must follow, and the{' '}
        <NavLink to={`#${ProjectsOverviewNav.lead}`}>project lead</NavLink> must submit detailed{' '}
        <NavLink to="/projects/milestones">milestone reports</NavLink> to receive payments. To help with this process,
        the project lead will partner with a <NavLink to={`#${ProjectsOverviewNav.reviewer}`}>project reviewer</NavLink>{' '}
        who will help guide through this process.
      </p>
      <DocSubSection id={ProjectsOverviewNav.reviewer} title="Project Reviewer">
        <p>
          Project Reviewers are <NavLink to="/teams">core members</NavLink> within the thenewboston community that will
          help project leads in the entire journey of the project creation: from the very beginning of brainstorming for
          the project, to helping the project get properly funded. To ensure the quality of our projects, partnering up
          with a project reviewer will <strong>be required</strong> in order for the project to be approved.
        </p>
        <p>
          If you, as a project lead, have a project in mind, you should solidify your project ideas in writing, and then
          reach out to one of the project reviewers with your idea. The project reviewer will then help you write out
          your project proposal and roadmap. The project reviewer will ensure that your proposal is sound, and he/she
          will ensure that your milestones are written with enough detail, and that each objective is quantifiable.
          He/she will also ensure that milestones are spaced about reasonably, such that the project will get steady
          funding throughout it's development phase.
        </p>
        <p>
          One of the more tougher challenges will be to put estimated coin amounts to each objectives of your
          milestones. The project reviewer will ensure that the amount that you put next to each objective is
          reasonable, and if any amounts look suspicious on the surface, will help you write detailed reports explaining
          why that amount is justified.
        </p>
        <p>
          Ideally, each reports that you submit to the government (project proposal, milestone reports, etc) should have
          been reviewed properly by the project reviewer, such that it will not raise any concerns from the government
          and/or the community. But should concerns arise, the project reviewer will help fight for your case, and
          negotiate with the government to come to a reasonable compromise.
        </p>
        <p>
          Each projects must have one, and only one, project reviewer. If, at any point, the project lead is unhappy
          with the dedicated project reviewer, he/she may request to the government for a replacement.
        </p>
        <p>
          Project reviewers will receive 10% commission on each successful milestone payouts, at no cost to the project.
          For example, if a milestone was worth 100,000 in coins, the project will receive 100,000 from the government,
          and the project reviewer will also receive 10,000 from the government.
        </p>
      </DocSubSection>
      <DocSubSection id={ProjectsOverviewNav.milestones} title="Proposal/Roadmap, Milestones, and Objectives">
        <DocImage alt="roadmap diagram" maxWidth={680} src={RoadmapMilestoneOverview} />
        <p>TODO: i think the above picture's left box should say Project Proposal / Project Roadmap</p>
      </DocSubSection>
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
      </DocSubSection>
    </DocContainer>
  );
};

export default ProjectsOverview;
