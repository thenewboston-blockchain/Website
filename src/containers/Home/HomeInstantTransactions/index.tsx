import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from 'components';

import HomeComparisonCards from 'containers/Home/HomeComparisonCards';

import './HomeInstantTransactions.scss';

const HomeInstantTransactions: FC = () => {
  return (
    <div className="HomeInstantTransactions">
      <div className="HomeInstantTransactions__content-container">
        <div className="HomeInstantTransactions__summary-container">
          <div className="HomeInstantTransactions__summary-snippet-container">
            <h1 className="HomeInstantTransactions__title">About our digital currency</h1>
            <div className="HomeInstantTransactions__text-snippets">
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
              <NavLink
                className="HomeInstantTransactions__content-container--display-large"
                tabIndex={-1}
                to="/guide/introduction"
              >
                <Button>View Docs</Button>
              </NavLink>
            </div>
          </div>
          <div className="HomeInstantTransactions__comparison-cards-container">
            <HomeComparisonCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInstantTransactions;
