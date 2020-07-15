import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenuGroup from 'containers/LeftMenuGroup';

import './LeftMenu.scss';

export const LeftMenu = () => {
  return (
    <nav className="LeftMenu">
      <NavLink className="menu-link heavy" exact to="/">
        <span className="material-icons">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className="menu-link heavy" to="/contributors">
        <span className="material-icons">people</span>
        <span>Contributors</span>
      </NavLink>
      <NavLink className="menu-link heavy" to="/roadmap">
        <span className="material-icons">map</span>
        <span>Roadmap</span>
      </NavLink>

      <LeftMenuGroup leftIcon={<span className="material-icons">description</span>} title="Docs">
        <NavLink to="/docs/introduction">Introduction</NavLink>
        <NavLink to="/docs/accounts">Accounts</NavLink>
        <NavLink to="/docs/blocks">Blocks</NavLink>
        <NavLink to="/docs/transaction-fees">Transaction Fees</NavLink>
        <NavLink to="/docs/root-account-file">Root Account File</NavLink>
        <NavLink to="/docs/banks">Banks</NavLink>
        <NavLink to="/docs/validators">Validators</NavLink>
        <NavLink to="/docs/confirmation-validators">Confirmation Validators</NavLink>
        <NavLink to="/docs/confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/docs/resyncing">Resyncing</NavLink>
        <NavLink to="/docs/trust">Trust</NavLink>
        <NavLink to="/docs/initial-funds">Initial Funds</NavLink>
        <NavLink to="/docs/best-practices">Best Practices</NavLink>
        <NavLink to="/docs/future-development">Future Development</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup leftIcon={<span className="material-icons">account_balance</span>} title="Bank API">
        <NavLink to="/bank-api/accounts">Accounts</NavLink>
        <NavLink to="/bank-api/bank-transactions">Bank Transactions</NavLink>
        <NavLink to="/bank-api/banks">Banks</NavLink>
        <NavLink to="/bank-api/blocks">Blocks</NavLink>
        <NavLink to="/bank-api/config">Config</NavLink>
        <NavLink to="/bank-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/bank-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/bank-api/validator-confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/bank-api/validators">Validators</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup leftIcon={<span className="material-icons">verified_user</span>} title="Primary Validator API">
        <NavLink to="/primary-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/primary-validator-api/bank-blocks">Bank Blocks</NavLink>
        <NavLink to="/primary-validator-api/banks">Banks</NavLink>
        <NavLink to="/primary-validator-api/config">Config</NavLink>
        <NavLink to="/primary-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/primary-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/primary-validator-api/validators">Validators</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup leftIcon={<span className="material-icons">check_circle</span>} title="Confirmation Validator API">
        <NavLink to="/confirmation-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/confirmation-validator-api/bank-confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/confirmation-validator-api/banks">Banks</NavLink>
        <NavLink to="/confirmation-validator-api/config">Config</NavLink>
        <NavLink to="/confirmation-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/confirmation-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/confirmation-validator-api/validators">Validators</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup leftIcon={<span className="material-icons">dns</span>} title="Deployment Guides">
        <NavLink to="/deployment-guides/bank">Bank</NavLink>
        <NavLink to="/deployment-guides/validator">Validator</NavLink>
      </LeftMenuGroup>
    </nav>
  );
};

export default LeftMenu;
