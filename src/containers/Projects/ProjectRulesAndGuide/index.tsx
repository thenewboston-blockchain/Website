import React, {FC} from 'react';
import {Link} from 'react-scroll';

import {Container} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';

import HowProposalsWork from './HowProposalsWork';
import Rules from './Rules';
import ProposalSubmissionProcess from './ProposalSubmissionProcess';
import MilestonesAndPayouts from './MilestonesAndPayouts';
import './ProjectRules.scss';

interface Section {
  id: string;
  title: string;
}

const ProjectRules: FC = () => {
  const BANNER_HEIGHT = 200;

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
      <Container className="ProjectRules__main" element="main">
        <aside className="ProjectRules__sidebar">
          {SECTIONS.map((section) => (
            <Link
              activeClass="ProjectRules__sidebar-item-active"
              className="ProjectRules__sidebar-item"
              hashSpy
              key={section.id}
              offset={-(NAVBAR_HEIGHT + BANNER_HEIGHT + 48)} // Navbar + Banner + Padding
              smooth
              spy
              to={section.id}
            >
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
      </Container>
    </div>
  );
};

export default ProjectRules;
