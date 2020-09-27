import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import {A, Button, MarketingButton, StepIndicator} from 'components';
import {SocialMedia} from 'types/social-media';
import './Help.scss';

const Help: FC = () => {
  const renderPythonDjango = (): ReactNode => (
    <div className="Help__navigation-column">
      <h2 className="Help__navigation-column-header">Python / Django</h2>

      <div className="Help__navigation-group">
        <h2 className="Help__navigation-group-header">Bank</h2>
        <NavLink className="Help__a" to="/bank-api/accounts">
          Bank API Docs
        </NavLink>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Bank">
          Repository
        </A>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Bank/issues">
          Issues / Tasks
        </A>
      </div>

      <div className="Help__navigation-group">
        <h2 className="Help__navigation-group-header">Validator</h2>
        <NavLink className="Help__a" to="/confirmation-validator-api/accounts">
          Confirmation Validator API Docs
        </NavLink>
        <NavLink className="Help__a" to="/primary-validator-api/accounts">
          Primary Validator API Docs
        </NavLink>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Validator">
          Repository
        </A>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Validator/issues">
          Issues / Tasks
        </A>
      </div>
    </div>
  );

  const renderReactFE = (): ReactNode => (
    <div className="Help__navigation-column">
      <h2 className="Help__navigation-column-header">React / FE</h2>

      <div className="Help__navigation-group">
        <h2 className="Help__navigation-group-header">Account Manager</h2>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Account-Manager">
          Repository
        </A>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Account-Manager/issues">
          Issues / Tasks
        </A>
      </div>

      <div className="Help__navigation-group">
        <h2 className="Help__navigation-group-header">Website</h2>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Website">
          Repository
        </A>
        <A className="Help__a" href="https://github.com/thenewboston-developers/Website/issues">
          Issues / Tasks
        </A>
      </div>

      <div className="Help__navigation-group">
        <h2 className="Help__navigation-group-header">Resources</h2>
        <A className="Help__a" href="https://www.figma.com/file/ZLQBaMEsAQIdnfg5qtL384/TNB-System?node-id=12%3A113">
          Style Guide
        </A>
        <A
          className="Help__a"
          href="https://docs.google.com/document/d/1gRy71vQrHGDk2bZ4Wcz3ha4xHjNmOtcXCkDXtLeqt-4/edit"
        >
          Figma Links
        </A>
      </div>
    </div>
  );

  const renderStepOne = (): ReactNode => (
    <div className="Help__step-one">
      <StepIndicator className="Help__StepIndicator" number={1} text="Join the community" />
      <div className="Help__button-container">
        <MarketingButton website={SocialMedia.slack} />
        <MarketingButton website={SocialMedia.github} />
        <MarketingButton website={SocialMedia.reddit} />
        <NavLink to="/guide/introduction">
          <Button className="Help__doc-button">View Guide</Button>
        </NavLink>
      </div>
    </div>
  );

  const renderStepTwo = (): ReactNode => (
    <div className="Help__step-two">
      <StepIndicator className="Help__StepIndicator" number={2} text="Start building" />
      <div className="Help__navigation-section">
        {renderPythonDjango()}
        {renderReactFE()}
      </div>
    </div>
  );

  return (
    <div className="Help">
      {renderStepOne()}
      {renderStepTwo()}
    </div>
  );
};

export default Help;
