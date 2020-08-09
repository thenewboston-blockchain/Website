import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';

const ApiMenuItems: FC = () => {
  return (
    <>
      <MenuGroup title="Bank API" urlBase="bank-api">
        <NavLink to="/bank-api/accounts">Accounts</NavLink>
        <NavLink to="/bank-api/bank-transactions">Bank Transactions</NavLink>
        <NavLink to="/bank-api/banks">Banks</NavLink>
        <NavLink to="/bank-api/blocks">Blocks</NavLink>
        <NavLink to="/bank-api/config">Config</NavLink>
        <NavLink to="/bank-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/bank-api/invalid-blocks">Invalid Blocks</NavLink>
        <NavLink to="/bank-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/bank-api/validator-confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/bank-api/validators">Validators</NavLink>
      </MenuGroup>

      <MenuGroup title="Primary Validator API" urlBase="primary-validator-api">
        <NavLink to="/primary-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/primary-validator-api/bank-blocks">Bank Blocks</NavLink>
        <NavLink to="/primary-validator-api/banks">Banks</NavLink>
        <NavLink to="/primary-validator-api/config">Config</NavLink>
        <NavLink to="/primary-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/primary-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/primary-validator-api/validators">Validators</NavLink>
      </MenuGroup>

      <MenuGroup title="Confirmation Validator API" urlBase="confirmation-validator-api">
        <NavLink to="/confirmation-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/confirmation-validator-api/bank-confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/confirmation-validator-api/banks">Banks</NavLink>
        <NavLink to="/confirmation-validator-api/config">Config</NavLink>
        <NavLink to="/confirmation-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/confirmation-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/confirmation-validator-api/validators">Validators</NavLink>
      </MenuGroup>
    </>
  );
};

export default ApiMenuItems;
