import React from 'react';
import { NavLink } from 'react-router-dom';

import MarketingButton from 'components/MarketingButton';

import Arm from './Arm.png';

import './Contribute.scss';

const Contribute = () => {
  const renderDesign = () => (
    <div className="navigation-column">
      <h2 className="development-heading">Design</h2>

      <div className="navigation-group">
        <h2>Resources</h2>
        <a
          href="https://www.figma.com/file/ZLQBaMEsAQIdnfg5qtL384/TNB-System?node-id=12%3A113"
          target="_blank"
          rel="noopener noreferrer"
        >
          Style Guide
        </a>
        <a
          href="https://docs.google.com/document/d/1gRy71vQrHGDk2bZ4Wcz3ha4xHjNmOtcXCkDXtLeqt-4/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma Links
        </a>
      </div>
    </div>
  );

  const renderPythonDjango = () => (
    <div className="navigation-column">
      <h2 className="development-heading">Python / Django</h2>

      <div className="navigation-group">
        <h2>Bank</h2>
        <NavLink to="/bank-api/accounts">Bank API Docs</NavLink>
        <a href="https://github.com/thenewboston-developers/Bank" target="_blank" rel="noopener noreferrer">
          Repository
        </a>
        <a href="https://github.com/thenewboston-developers/Bank/projects/3" target="_blank" rel="noopener noreferrer">
          Tasks
        </a>
      </div>

      <h2>Validator</h2>
      <NavLink to="/confirmation-validator-api/accounts">Confirmation Validator API Docs</NavLink>
      <NavLink to="/primary-validator-api/accounts">Primary Validator API Docs</NavLink>
      <a href="https://github.com/thenewboston-developers/Validator" target="_blank" rel="noopener noreferrer">
        Repository
      </a>
      <a
        href="https://github.com/thenewboston-developers/Validator/projects/2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tasks
      </a>
    </div>
  );

  const renderReactFE = () => (
    <div className="navigation-column">
      <h2 className="development-heading">React / FE</h2>

      <div className="navigation-group">
        <h2>Account Manager</h2>
        <a href="https://github.com/thenewboston-developers/Account-Manager" target="_blank" rel="noopener noreferrer">
          Repository
        </a>
        <a
          href="https://github.com/thenewboston-developers/Account-Manager/projects/2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Tasks
        </a>
        <a
          href="https://github.com/thenewboston-developers/Account-Manager/projects/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Engineering Tasks
        </a>
      </div>

      <h2>Website</h2>
      <a href="https://github.com/thenewboston-developers/Website" target="_blank" rel="noopener noreferrer">
        Repository
      </a>
      <a href="https://github.com/thenewboston-developers/Website/projects/2" target="_blank" rel="noopener noreferrer">
        Design Tasks
      </a>
      <a href="https://github.com/thenewboston-developers/Website/projects/1" target="_blank" rel="noopener noreferrer">
        Engineering Tasks
      </a>
    </div>
  );

  const renderStepIndicator = (color: string, number: number, text: string) => (
    <div className="step-indicator">
      <div>
        <div className="step-bubble" style={{ backgroundColor: color }}>
          {number}
        </div>
      </div>
      <div className="step-text">{text}</div>
    </div>
  );

  const renderStepOne = () => (
    <div className="step-one">
      {renderStepIndicator('#f4c2c4', 1, 'Get started on thenewboston')}
      <div className="button-container">
        <NavLink to="/guide/introduction">
          <button className="primary">Documentation</button>
        </NavLink>
        <MarketingButton website="slack" />
        <MarketingButton website="github" />
        <MarketingButton website="reddit" />
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="step-two">
      {renderStepIndicator('#b7d6ff', 2, 'Choose your weapon')}
      <div className="navigation-section">
        {renderPythonDjango()}
        {renderReactFE()}
        {renderDesign()}
      </div>
    </div>
  );

  return (
    <div className="Contribute">
      {renderStepOne()}
      {renderStepTwo()}
      <img alt="arm" className="arm" src={Arm} />
    </div>
  );
};

export default Contribute;
