import React, {FC} from 'react';

import {A} from 'components';

import './HowProposalsWork.scss';

const HowProposalsWork: FC = () => {
  return (
    <div className="HowProposalsWork" id="how-proposals-work">
      <h1 className="HowProposalsWork__heading">How Proposals Work</h1>
      <p className="HowProposalsWork__tagline">
        Individuals can earn coins by working on apps, games, and other software projects for thenewboston network.
      </p>
      <div className="HowProposalsWork__step">
        <h3 className="HowProposalsWork__step-heading">Submit proposal</h3>
        <p className="HowProposalsWork__step-text">
          To receive funding, you must{' '}
          <A href="#proposal-submission-process" newWindow={false}>
            submit your project proposal
          </A>{' '}
          to thenewboston team who will review the details of the proposal to ensure it meets all rules and guidelines.
        </p>
      </div>
      <div className="HowProposalsWork__step">
        <h3 className="HowProposalsWork__step-heading">Get approval to earn</h3>
        <p className="HowProposalsWork__step-text">
          Once approved, coins will be rewarded as milestones are completed throughout the development process.
        </p>
      </div>
      <div className="HowProposalsWork__step">
        <h3 className="HowProposalsWork__step-heading">Maintain Quality</h3>
        <p className="HowProposalsWork__step-text">
          To maintain the quality of projects, there are strict{' '}
          <A href="#rules" newWindow={false}>
            rules and guidelines
          </A>{' '}
          that projects must follow, as well as detailed{' '}
          <A href="#milestones-and-payouts" newWindow={false}>
            milestone reports
          </A>{' '}
          that the project lead must submit to receive payments
        </p>
      </div>
    </div>
  );
};

export default HowProposalsWork;
