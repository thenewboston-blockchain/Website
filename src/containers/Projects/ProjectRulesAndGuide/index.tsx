import React, {FC} from 'react';

import HowProposalsWork from './HowProposalsWork';
import Rules from './Rules';
import ProposalSubmissionProcess from './ProposalSubmissionProcess';
import MilestonesAndPayouts from './MilestonesAndPayouts';
import './ProjectRules.scss';

const ProjectsRules: FC = () => {
  const SECTIONS = ['How Proposals Work', 'Rules', 'Submission Process', 'Milestone & Payouts'];

  return (
    <div className="ProjectRules">
      <header className="ProjectRules__banner">
        <h1 className="ProjectRules__banner-headline">Project Rules and Guidelines</h1>
        <p className="ProjectRules__banner-text">The detailed guidelines about how the projects works. </p>
      </header>
      <main className="ProjectRules__main">
        <aside className="ProjectRules__sidebar">
          {SECTIONS.map((section) => (
            <button className="ProjectRules__sidebar-item" key={section}>
              {section}
            </button>
          ))}
        </aside>
        <section className="ProjectRules__content">
          <HowProposalsWork />
          <hr className="ProjectRules__divider" />
          <Rules />
          <hr className="ProjectRules__divider" />
          <ProposalSubmissionProcess />
          <hr className="ProjectRules__divider" />
          <MilestonesAndPayouts />
        </section>
      </main>
    </div>
  );
};

export default ProjectsRules;
