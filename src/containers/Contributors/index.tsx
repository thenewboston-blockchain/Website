import React from 'react';
import {NavLink} from 'react-router-dom';

import TopNav from 'containers/TopNav';

import './Contributors.scss';

const Contributors = () => {
  const renderBE = () => (
    <>
      <h2>Python/Django Developers</h2>

      <h4>Bank</h4>
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
            <a href="https://github.com/thenewboston-developers/Bank">
              https://github.com/thenewboston-developers/Bank
            </a>
          </td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>
            <a href="https://github.com/thenewboston-developers/Bank/projects/3">
              https://github.com/thenewboston-developers/Bank/projects/3
            </a>
          </td>
        </tr>
      </table>

      <h4>Validator</h4>
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
            <a href="https://github.com/thenewboston-developers/Validator">
              https://github.com/thenewboston-developers/Validator
            </a>
          </td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>
            <a href="https://github.com/thenewboston-developers/Validator/projects/2">
              https://github.com/thenewboston-developers/Validator/projects/2
            </a>
          </td>
        </tr>
      </table>
    </>
  );

  return (
    <div className="Contributors">
      <div className="top">
        <TopNav />
      </div>
      <div className="main-content">{renderBE()}</div>
    </div>
  );
};

export default Contributors;
