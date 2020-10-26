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
        <div className="HomeInstantTransactions__summary-container">
          <div className="HomeInstantTransactions__summary-snippet-container">
            <h1 className="HomeInstantTransactions__title">
              <b>Say goodbye to 10 minute block times</b>
            </h1>
            <div className="HomeInstantTransactions__text-snippets">
              <span>
                <p>
                  We rebuilt the Blockchain from the ground up. We kissed those outdated PoW and PoS algorithms goodbye
                  and replaced them with an innovative trust based architecture.
                </p>
                <p>
                  Get in on the ground floor as we reinvent digital currency and build the world's first instant,
                  peer-to-peer, open source payment network.
                </p>
                <p>
                  <strong>Now in alpha!</strong>
                </p>
                <NavLink className="HomeInstantTransactions__content-container--display-large" to="/guide/introduction">
                  <Button>View Docs</Button>
                </NavLink>
              </span>
              <NavLink className="HomeInstantTransactions__content-container--display-small" to="/guide/introduction">
                <Button>View Docs</Button>
              </NavLink>
            </div>
          </div>
          <div>
            <HomeComparisonCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInstantTransactions;
