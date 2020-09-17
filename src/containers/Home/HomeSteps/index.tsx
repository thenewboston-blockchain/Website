import React from 'react';
import {NavLink} from 'react-router-dom';

import {A, StepIndicator} from 'components';

import './HomeSteps.scss';

const HomeSteps = () => {
  return (
    <div className="HomeSteps">
      <div className="HomeSteps__content-container">
        <div className="HomeSteps__Step">
          <StepIndicator number={1} text="Sign up for GitHub" />
          <div className="HomeSteps__instructional-text">
            <A href="https://github.com/">Create a GitHub account</A> if you dont already one.
          </div>
        </div>
        <div className="HomeSteps__Step">
          <StepIndicator number={2} text="Complete tasks" />
          <div className="HomeSteps__instructional-text">The more difficult the task, the bigger the reward.</div>
        </div>
        <div className="HomeSteps__Step">
          <StepIndicator number={3} text="Earn points" />
          <div className="HomeSteps__instructional-text">
            Climb the <NavLink to="/guide/blocks">Leaderboard</NavLink> to become a top developer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSteps;
