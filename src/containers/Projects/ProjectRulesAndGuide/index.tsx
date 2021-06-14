import React, {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import HowProposalsWork from './HowProposalsWork';
import Rules from './Rules';
import ProposalSubmissionProcess from './ProposalSubmissionProcess';
import MilestonesAndPayouts from './MilestonesAndPayouts';
import './ProjectRules.scss';

interface Section {
  id: string;
  title: string;
}

const ProjectsRules: FC = () => {
  const {hash, pathname} = useLocation();

  const SECTIONS: Section[] = [
    {
      id: 'how-proposals-work',
      title: 'How Proposals Work',
    },
    {
      id: 'rules',
      title: 'Rules',
    },
    {
      id: 'proposal-submission-process',
      title: 'Submission Process',
    },
    {
      id: 'milestones-and-payouts',
      title: 'Milestones & Payouts',
    },
  ];

  return (
    <div className="ProjectRules">
      <header className="ProjectRules__banner">
        <h1 className="ProjectRules__banner-headline">Project Rules and Guidelines</h1>
        <p className="ProjectRules__banner-text">The detailed guidelines about how the projects works. </p>
      </header>
      <main className="ProjectRules__main">
        <aside className="ProjectRules__sidebar">
          {SECTIONS.map((section) => (
            <Link className="ProjectRules__sidebar-item" key={section.id} to={`${pathname}#${section.id}`}>
              {section.title}
            </Link>
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
