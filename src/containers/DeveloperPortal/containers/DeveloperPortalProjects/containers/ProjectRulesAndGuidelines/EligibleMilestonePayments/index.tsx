import React, {FC} from 'react';

import {Note, NoteType} from 'components';

import './EligibleMilestonePayments.scss';

const EligibleMilestonePayments: FC = () => {
  return (
    <div className="EligibleMilestonePayments" id="eligible-milestone-payments">
      <h1 className="EligibleMilestonePayments__heading">Eligible Milestone Payments</h1>
      <p className="EligibleMilestonePayments__tagline">
        All proposed milestones must represent a working piece of software that the community can use. This means that
        initial milestones such as research, architecture, UI/UX, and so on, will no longer be eligible for funding
        without a working piece of software. The core team will still account for such work in the overall valuation.
        However, the completed milestone must include a working app, a game, or any software as an MVP that provides an
        actual utility for the thenewboston community.
      </p>
      <Note
        className="EligibleMilestonePayments__note"
        text="A minimum viable product (MVP) is a version of a software product with just enough
          features that make it usable."
        type={NoteType.Information}
      />
      <p className="EligibleMilestonePayments__tagline">
        To clarify, this does not mean that the entire project must be complete at once to receive a milestone payout.
        However, it must be in a working state so that it provides value to the community. For example, if a project
        team is creating a game with 20+ levels that is going to take ~1 year to build, they can still submit a working
        MVP with only the first level or two completed. They just could not submit only the game storyboard or artwork
        alone as a milestone with no working game.
      </p>
    </div>
  );
};

export default EligibleMilestonePayments;
