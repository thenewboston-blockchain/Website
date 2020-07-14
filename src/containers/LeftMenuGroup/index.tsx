import React from 'react';

import './LeftMenuGroup.scss';
import {NavLink} from 'react-router-dom';

const LeftMenuGroup = () => {
  return (
    <div className="LeftMenuGroup">
      <div className="toggle">
        <span>Bank API</span>
        <span className="material-icons">keyboard_arrow_right</span>
      </div>
      <div className="submenu">
        <NavLink to="/bank-api/accounts">Accounts</NavLink>
        <NavLink to="/bank-api/bank-transactions">Bank Transactions</NavLink>
        <NavLink to="/bank-api/banks">Banks</NavLink>
        <NavLink to="/bank-api/blocks">Blocks</NavLink>
        <NavLink to="/bank-api/config">Config</NavLink>
        <NavLink to="/bank-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/bank-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/bank-api/validator-confirmation-services">Validator Confirmation Services</NavLink>
        <NavLink to="/bank-api/validators">Validators</NavLink>
      </div>
    </div>
  );
};

export default LeftMenuGroup;
