import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenuGroup from '../LeftMenuGroup';

import './LeftMenu.scss';

interface ComponentProps {
  leftMenuType: 'apis' | 'guides';
}

const LeftMenu: FC<ComponentProps> = ({leftMenuType}) => {
  const renderApiItems = (): ReactNode => (
    <>
      <LeftMenuGroup title="Bank API" urlBase="bank-api">
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

      <LeftMenuGroup title="Primary Validator API" urlBase="primary-validator-api">
        <NavLink to="/primary-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/primary-validator-api/bank-blocks">Bank Blocks</NavLink>
        <NavLink to="/primary-validator-api/banks">Banks</NavLink>
        <NavLink to="/primary-validator-api/config">Config</NavLink>
        <NavLink to="/primary-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/primary-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/primary-validator-api/validators">Validators</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup title="Confirmation Validator API" urlBase="confirmation-validator-api">
        <NavLink to="/confirmation-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/confirmation-validator-api/bank-confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/confirmation-validator-api/banks">Banks</NavLink>
        <NavLink to="/confirmation-validator-api/config">Config</NavLink>
        <NavLink to="/confirmation-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/confirmation-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/confirmation-validator-api/validators">Validators</NavLink>
      </LeftMenuGroup>
    </>
  );

  const renderGuideItems = (): ReactNode => (
    <>
      <LeftMenuGroup title="Guide" urlBase="guide">
        <NavLink to="/guide/introduction">Introduction</NavLink>
        <NavLink to="/guide/accounts">Accounts</NavLink>
        <NavLink to="/guide/blocks">Blocks</NavLink>
        <NavLink to="/guide/transaction-fees">Transaction Fees</NavLink>
        <NavLink to="/guide/root-account-file">Root Account File</NavLink>
        <NavLink to="/guide/banks">Banks</NavLink>
        <NavLink to="/guide/validators">Validators</NavLink>
        <NavLink to="/guide/confirmation-validators">Confirmation Validators</NavLink>
        <NavLink to="/guide/confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/guide/node-identifiers">Node Identifiers</NavLink>
        <NavLink to="/guide/resync-triggers">Resync Triggers</NavLink>
        <NavLink to="/guide/resync-process">Resync Process</NavLink>
        <NavLink to="/guide/trust">Trust</NavLink>
        <NavLink to="/guide/initial-funds">Initial Funds</NavLink>
        <NavLink to="/guide/best-practices">Best Practices</NavLink>
        <NavLink to="/guide/future-development">Future Development</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup title="Deployment Guides" urlBase="deployment-guide">
        <NavLink to="/deployment-guide/bank">Bank</NavLink>
        <NavLink to="/deployment-guide/validator">Validator</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup title="Style Guides" urlBase="style-guide">
        <NavLink to="/style-guide/react">React / JSX</NavLink>
        <NavLink to="/style-guide/css">CSS / SASS</NavLink>
      </LeftMenuGroup>
    </>
  );

  const renderMenuItems = (): ReactNode => {
    return {
      apis: renderApiItems(),
      guides: renderGuideItems(),
    }[leftMenuType];
  };

  return <nav className="LeftMenu">{renderMenuItems()}</nav>;
};

export default LeftMenu;
