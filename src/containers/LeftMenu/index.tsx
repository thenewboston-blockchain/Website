import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenuGroup from 'containers/LeftMenuGroup';

import './LeftMenu.scss';

export const LeftMenu = () => {
  return (
    <nav className="LeftMenu">
      <LeftMenuGroup />

      <NavLink to="/deployment-guides/bank">Bank</NavLink>
      <NavLink to="/deployment-guides/validator">Validator</NavLink>

      <NavLink to="/bank-api/accounts">Accounts</NavLink>
      <NavLink to="/bank-api/bank-transactions">Bank Transactions</NavLink>
      <NavLink to="/bank-api/banks">Banks</NavLink>
      <NavLink to="/bank-api/blocks">Blocks</NavLink>
      <NavLink to="/bank-api/config">Config</NavLink>
      <NavLink to="/bank-api/confirmation-blocks">Confirmation Blocks</NavLink>
      <NavLink to="/bank-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/bank-api/validator-confirmation-services">Validator Confirmation Services</NavLink>
      <NavLink to="/bank-api/validators">Validators</NavLink>

      <NavLink to="/confirmation-validator-api/accounts">Accounts</NavLink>
      <NavLink to="/confirmation-validator-api/bank-confirmation-services">Bank Confirmation Services</NavLink>
      <NavLink to="/confirmation-validator-api/banks">Banks</NavLink>
      <NavLink to="/confirmation-validator-api/config">Config</NavLink>
      <NavLink to="/confirmation-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
      <NavLink to="/confirmation-validator-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/confirmation-validator-api/validators">Validators</NavLink>

      <NavLink to="/docs/introduction">Introduction</NavLink>
      <NavLink to="/docs/overview">Overview</NavLink>
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
      <NavLink to="/docs/initial-funds">Initial Creation and Distribution of Funds</NavLink>
      <NavLink to="/docs/best-practices">Best Practices</NavLink>
      <NavLink to="/docs/future-development">Future Development</NavLink>

      <NavLink to="/primary-validator-api/accounts">Accounts</NavLink>
      <NavLink to="/primary-validator-api/bank-blocks">Bank Blocks</NavLink>
      <NavLink to="/primary-validator-api/banks">Banks</NavLink>
      <NavLink to="/primary-validator-api/config">Config</NavLink>
      <NavLink to="/primary-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
      <NavLink to="/primary-validator-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/primary-validator-api/validators">Validators</NavLink>
    </nav>
  );
};

export default LeftMenu;
