import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from 'components';

import HomeComparisonCards from 'containers/Home/HomeComparisonCards';

import './HomeInstantTransactions.scss';

const HomeInstantTransactions: FC = () => {
  return (
    <div className="HomeInstantTransactions">
      <div className="HomeInstantTransactions__content-container">
        <div className="HomeInstantTransactions__mini-text">INSTANT TRANSACTIONS</div>
        <h1 className="HomeInstantTransactions__title">Say goodbye to 10 minute block times</h1>
        <div className="HomeInstantTransactions__text-snippets">
          <div className="HomeInstantTransactions__text-snippets-left-block">
            <p>
              We rebuilt the Blockchain from the ground up. We kissed those outdated Proof of Work and Proof of Stake
              consensus algorithms goodbye and replaced them with an innovative trust based architecture.
            </p>
            <NavLink className="HomeInstantTransactions__content-container--display-large" to="/guide/introduction">
              <Button>View Docs</Button>
            </NavLink>
          </div>
          <div className="HomeInstantTransactions__text-snippets-right-block">
            <p>
              Join our open source development community as we reinvent digital currency. Help us build the worlds first
              peer-to-peer (yet blazing fast) distributed payment network using Python and JavaScript.
            </p>
            <p>
              <b>Now in alpha!</b>
            </p>
            <NavLink className="HomeInstantTransactions__content-container--display-small" to="/guide/introduction">
              <Button>View Docs</Button>
            </NavLink>
          </div>
        </div>
        <HomeComparisonCards />
      </div>
      <svg className="HomeInstantTransactions__background-graphic" viewBox="0 0 1366 659" fill="none">
        <path d="M1366 0L0 147L0 659H1366.5L1366 0Z" fill="#131F41" />
      </svg>
      <div className="HomeInstantTransactions__blue-block" />
    </div>
  );
};

export default HomeInstantTransactions;
