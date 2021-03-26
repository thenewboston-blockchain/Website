import React from 'react';
import {NavLink} from 'react-router-dom';

import {A, StepIndicator} from 'components';

import './HomeSteps.scss';

const HomeSteps = (): JSX.Element => {
  return (
    <div className="HomeSteps">
      <div className="HomeSteps__content-container">
        <div className="HomeSteps__Step">
          <StepIndicator number={1} text="Sign up for GitHub" />
          <div className="HomeSteps__instructional-text">
            <A href="https://github.com/" className="HomeSteps__instructional-link">
              Create a GitHub account
            </A>{' '}
            if you don't already have one.
          </div>
        </div>
        <div className="HomeSteps__Step">
          <StepIndicator number={2} text="Complete tasks" />
          <div className="HomeSteps__instructional-text">
            The more difficult the{' '}
            <NavLink to="/tasks" className="HomeSteps__instructional-link">
              task
            </NavLink>
            , the bigger the reward.
          </div>
        </div>
        <div className="HomeSteps__Step">
          <StepIndicator number={3} text="Earn coins" />
          <div className="HomeSteps__instructional-text">Earn coins and be a part of our community.</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSteps;
