import React from 'react';
import {NavLink} from 'react-router-dom';

import GitHubLogo from './GitHubLogo.png';
import RedditLogo from './RedditLogo.png';
import SlackLogo from './SlackLogo.png';

import './Contributors.scss';

const Contributors = () => {
  const renderAll = () => (
    <section>
      <h2>All Contributors</h2>

      <table className="glossary">
        <tr>
          <td>Docs</td>
          <td>
            <NavLink to="/docs/introduction">thenewboston Documentation</NavLink>
          </td>
        </tr>
        <tr>
          <td>Slack</td>
          <td>
            <a
              href="https://join.slack.com/t/thenewboston/shared_invite/zt-g31r9hm8-gqVQmhwhhoriEhZQJTsdkQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://join.slack.com/t/thenewboston/shared_invite/zt-g31r9hm8-gqVQmhwhhoriEhZQJTsdkQ
            </a>
          </td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td>
            <a href="https://github.com/thenewboston-developers" target="_blank" rel="noopener noreferrer">
              https://github.com/thenewboston-developers
            </a>
          </td>
        </tr>
        <tr>
          <td>reddit</td>
          <td>
            <a href="https://www.reddit.com/r/thenewboston/" target="_blank" rel="noopener noreferrer">
              https://www.reddit.com/r/thenewboston/
            </a>
          </td>
        </tr>
      </table>
    </section>
  );

  const renderBE = () => (
    <section>
      <h2>Python/Django Developers</h2>

      <h3>Bank</h3>
      <table className="glossary">
        <tr>
          <td>API Docs</td>
          <td>
            <NavLink to="/bank-api/introduction">Bank API Documentation</NavLink>
          </td>
        </tr>
        <tr>
          <td>Repository</td>
          <td>
            <a href="https://github.com/thenewboston-developers/Bank" target="_blank" rel="noopener noreferrer">
              https://github.com/thenewboston-developers/Bank
            </a>
          </td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>
            <a
              href="https://github.com/thenewboston-developers/Bank/projects/3"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thenewboston-developers/Bank/projects/3
            </a>
          </td>
        </tr>
      </table>

      <h3>Validator</h3>
      <table className="glossary">
        <tr>
          <td>Confirmation Validator API Docs</td>
          <td>
            <NavLink to="/confirmation-validator-api/introduction">Confirmation Validator API Documentation</NavLink>
          </td>
        </tr>
        <tr>
          <td>Primary Validator API Docs</td>
          <td>
            <NavLink to="/primary-validator-api/introduction">Primary Validator API Documentation</NavLink>
          </td>
        </tr>
        <tr>
          <td>Repository</td>
          <td>
            <a href="https://github.com/thenewboston-developers/Validator" target="_blank" rel="noopener noreferrer">
              https://github.com/thenewboston-developers/Validator
            </a>
          </td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>
            <a
              href="https://github.com/thenewboston-developers/Validator/projects/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thenewboston-developers/Validator/projects/2
            </a>
          </td>
        </tr>
      </table>
    </section>
  );

  const renderFE = () => (
    <section>
      <h2>React/FE Developers</h2>

      <h3>Account Manager</h3>
      <table className="glossary">
        <tr>
          <td>Repository</td>
          <td>
            <a
              href="https://github.com/thenewboston-developers/Account-Manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thenewboston-developers/Account-Manager
            </a>
          </td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>
            <a
              href="https://github.com/thenewboston-developers/Account-Manager/projects/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thenewboston-developers/Account-Manager/projects/1
            </a>
          </td>
        </tr>
      </table>

      <h3>Website</h3>
      <table className="glossary">
        <tr>
          <td>Repository</td>
          <td>
            <a href="https://github.com/thenewboston-developers/Website" target="_blank" rel="noopener noreferrer">
              https://github.com/thenewboston-developers/Website
            </a>
          </td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>
            <a
              href="https://github.com/thenewboston-developers/Website/projects/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thenewboston-developers/Website/projects/1
            </a>
          </td>
        </tr>
      </table>
    </section>
  );

  const renderStepIndicator = (color: string, number: number, text: string) => (
    <div className="step-indicator">
      <div className="step-bubble" style={{backgroundColor: color}}>
        {number}
      </div>
      <div className="step-text">{text}</div>
    </div>
  );

  const renderStepOne = () => (
    <div className="step-one">
      {renderStepIndicator('#f4c2c4', 1, 'Get started on thenewboston')}
      <div className="button-container">
        <NavLink to="/docs/introduction">
          <button className="primary">Documentation</button>
        </NavLink>
        <a
          className="marketing-button"
          href="https://thenewboston.slack.com/join/shared_invite/zt-fmj4j8af-reXJKdQADo7QIvAp92Ro5w?fbclid=IwAR1AKKWJ_ljPi8SpfEuQW2oCcZ8r_ho9ebanqH0fDvuppQKxSiN-k5VY4jk#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="slack logo" className="" src={SlackLogo} />
        </a>
        <a
          className="marketing-button"
          href="https://github.com/thenewboston-developers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="github logo" className="" src={GitHubLogo} />
        </a>
        <a
          className="marketing-button"
          href="https://www.reddit.com/r/thenewboston/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="reddit logo" className="" src={RedditLogo} />
        </a>
      </div>
    </div>
  );

  const renderStepTwo = () => <div className="step-two">{renderStepIndicator('#b7d6ff', 2, 'Choose your weapon')}</div>;

  return (
    <div className="Contributors">
      {renderStepOne()}
      {renderStepTwo()}
    </div>
  );
};

export default Contributors;
