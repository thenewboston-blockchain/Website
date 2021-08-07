import React, {FC} from 'react';

import {A} from 'components';

import './HowProposalsWork.scss';

const HowProposalsWork: FC = () => {
  return (
    <div className="ProjectRulesHowProposalsWork" id="how-proposals-work">
      <h1 className="ProjectRulesHowProposalsWork__heading">How Proposals Work</h1>
      <p className="ProjectRulesHowProposalsWork__tagline">
        Individuals can earn coins by working on apps, games, and other software projects for thenewboston network.
      </p>
      <div className="ProjectRulesHowProposalsWork__step">
        <h3 className="ProjectRulesHowProposalsWork__step-heading">Submit proposal</h3>
        <p className="ProjectRulesHowProposalsWork__step-text">
          To receive funding, you must{' '}
          <A href="#proposal-submission-process" newWindow={false}>
            submit your project proposal
          </A>{' '}
          to thenewboston team who will review the details of the proposal to ensure it meets all rules and guidelines.
        </p>
      </div>
      <div className="ProjectRulesHowProposalsWork__step">
        <h3 className="ProjectRulesHowProposalsWork__step-heading">Get approval to earn</h3>
        <p className="ProjectRulesHowProposalsWork__step-text">
          If thenewboston team approves your project, you will receive coins as you and your team complete milestones
          throughout the development process.
        </p>
      </div>
      <div className="ProjectRulesHowProposalsWork__step">
        <h3 className="ProjectRulesHowProposalsWork__step-heading">Maintain Quality</h3>
        <p className="ProjectRulesHowProposalsWork__step-text">
          To maintain the quality of projects, there are strict{' '}
          <A href="#rules" newWindow={false}>
            rules and guidelines
          </A>{' '}
          that projects must follow, as well as detailed{' '}
          <A href="#milestones-and-payouts" newWindow={false}>
            milestone reports
          </A>{' '}
          that the project lead must submit to receive payments.
        </p>
      </div>
    </div>
  );
};

export default HowProposalsWork;
