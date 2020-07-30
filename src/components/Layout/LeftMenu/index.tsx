import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Icon, IconType} from 'components';

import LeftMenuGroup from '../LeftMenuGroup';
import './LeftMenu.scss';

const LeftMenu: FC = () => {
  return (
    <nav className="LeftMenu">
      <LeftMenuGroup
        leftIcon={<Icon className="react-icons" icon={IconType.document} size={20} />}
        title="Guide"
        urlBase="guide"
      >
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

      <LeftMenuGroup
        leftIcon={<Icon className="react-icons" icon={IconType.accountBalance} size={20} />}
        title="Bank API"
        urlBase="bank-api"
      >
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

      <LeftMenuGroup
        leftIcon={<Icon className="react-icons" icon={IconType.verifiedUser} size={20} />}
        title="Primary Validator API"
        urlBase="primary-validator-api"
      >
        <NavLink to="/primary-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/primary-validator-api/bank-blocks">Bank Blocks</NavLink>
        <NavLink to="/primary-validator-api/banks">Banks</NavLink>
        <NavLink to="/primary-validator-api/config">Config</NavLink>
        <NavLink to="/primary-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/primary-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/primary-validator-api/validators">Validators</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup
        leftIcon={<Icon className="react-icons" icon={IconType.checkCircle} size={20} />}
        title="Confirmation Validator API"
        urlBase="confirmation-validator-api"
      >
        <NavLink to="/confirmation-validator-api/accounts">Accounts</NavLink>
        <NavLink to="/confirmation-validator-api/bank-confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/confirmation-validator-api/banks">Banks</NavLink>
        <NavLink to="/confirmation-validator-api/config">Config</NavLink>
        <NavLink to="/confirmation-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
        <NavLink to="/confirmation-validator-api/connection-requests">Connection Requests</NavLink>
        <NavLink to="/confirmation-validator-api/validators">Validators</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup
        leftIcon={<Icon className="react-icons" icon={IconType.dns} size={20} />}
        title="Deployment Guides"
        urlBase="deployment-guides"
      >
        <NavLink to="/deployment-guides/bank">Bank</NavLink>
        <NavLink to="/deployment-guides/validator">Validator</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup
        leftIcon={<Icon className="react-icons" icon={IconType.seatReclineExtra} size={20} />}
        title="Style Guides"
        urlBase="deployment-guides"
      >
        <NavLink to="/style-guides/html-css">HTML / CSS</NavLink>
      </LeftMenuGroup>
    </nav>
  );
};

export default LeftMenu;
