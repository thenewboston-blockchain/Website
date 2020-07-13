import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const BankAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/bank-api/accounts">Accounts</NavLink>
      <NavLink to="/bank-api/bank-transactions">Bank Transactions</NavLink>
      <NavLink to="/bank-api/banks">Banks</NavLink>
      <NavLink to="/bank-api/blocks">Blocks</NavLink>
      <NavLink to="/bank-api/config">Config</NavLink>
      <NavLink to="/bank-api/confirmation-blocks">Confirmation Blocks</NavLink>
      <NavLink to="/bank-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/bank-api/validator-confirmation-services">Validator Confirmation Services</NavLink>
      <NavLink to="/bank-api/validators">Validators</NavLink>
    </LeftMenu>
  );
};

export default BankAPILeftMenu;
