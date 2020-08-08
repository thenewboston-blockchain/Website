import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import {A, Button, MarketingButton} from 'components';

import Arm from './Arm.png';
import './Contribute.scss';

const Contribute: FC = () => {
  const renderPythonDjango = (): ReactNode => (
    <div className="Contribute__navigation-column">
      <h2 className="Contribute__navigation-column-header">Python / Django</h2>

      <div className="Contribute__navigation-group">
        <h2 className="Contribute__navigation-group-header">Bank</h2>
        <NavLink className="Contribute__a" to="/bank-api/accounts">
          Bank API Docs
        </NavLink>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Bank">
          Repository
        </A>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Bank/issues">
          Issues / Tasks
        </A>
      </div>

      <div className="Contribute__navigation-group">
        <h2 className="Contribute__navigation-group-header">Validator</h2>
        <NavLink className="Contribute__a" to="/confirmation-validator-api/accounts">
          Confirmation Validator API Docs
        </NavLink>
        <NavLink className="Contribute__a" to="/primary-validator-api/accounts">
          Primary Validator API Docs
        </NavLink>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Validator">
          Repository
        </A>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Validator/issues">
          Issues / Tasks
        </A>
      </div>
    </div>
  );

  const renderReactFE = (): ReactNode => (
    <div className="Contribute__navigation-column">
      <h2 className="Contribute__navigation-column-header">React / FE</h2>

      <div className="Contribute__navigation-group">
        <h2 className="Contribute__navigation-group-header">Account Manager</h2>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Account-Manager">
          Repository
        </A>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Account-Manager/issues">
          Issues / Tasks
        </A>
      </div>

      <div className="Contribute__navigation-group">
        <h2 className="Contribute__navigation-group-header">Website</h2>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Website">
          Repository
        </A>
        <A className="Contribute__a" href="https://github.com/thenewboston-developers/Website/issues">
          Issues / Tasks
        </A>
      </div>

      <div className="Contribute__navigation-group">
        <h2 className="Contribute__navigation-group-header">Resources</h2>
        <A
          className="Contribute__a"
          href="https://www.figma.com/file/ZLQBaMEsAQIdnfg5qtL384/TNB-System?node-id=12%3A113"
        >
          Style Guide
        </A>
        <A
          className="Contribute__a"
          href="https://docs.google.com/document/d/1gRy71vQrHGDk2bZ4Wcz3ha4xHjNmOtcXCkDXtLeqt-4/edit"
        >
          Figma Links
        </A>
      </div>
    </div>
  );

  const renderStepIndicator = (color: string, number: number, text: string): ReactNode => (
    <div className="Contribute__step-indicator">
      <div className="Contribute__step-bubble" style={{backgroundColor: color}}>
        {number}
      </div>
      <div className="Contribute__step-text">{text}</div>
    </div>
  );

  const renderStepOne = (): ReactNode => (
    <div className="Contribute__step-one">
      {renderStepIndicator('#f4c2c4', 1, 'Get started on thenewboston')}
      <div className="Contribute__button-container">
        <NavLink to="/guide/introduction">
          <Button className="Contribute__doc-button">Documentation</Button>
        </NavLink>
        <MarketingButton website="slack" />
        <MarketingButton website="github" />
        <MarketingButton website="reddit" />
      </div>
    </div>
  );

  const renderStepTwo = (): ReactNode => (
    <div className="Contribute__step-two">
      {renderStepIndicator('#b7d6ff', 2, 'Choose your weapon')}
      <div className="Contribute__navigation-section">
        {renderPythonDjango()}
        {renderReactFE()}
      </div>
    </div>
  );

  return (
    <div className="Contribute">
      {renderStepOne()}
      {renderStepTwo()}
      <img alt="arm" className="Contribute__arm" src={Arm} />
    </div>
  );
};

export default Contribute;
