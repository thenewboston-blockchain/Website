import React, {FC} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';

import AccountManager from './AccountManager';
import BankApi from './BankApi';
import ConfirmationValidatorApi from './ConfirmationValidatorApi';
import DeploymentGuide from './DeploymentGuide';
import Download from './Download';
import Guide from './Guide';
import Help from './Help';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Openings from './Openings';
import PrimaryValidatorApi from './PrimaryValidatorApi';
import StyleGuide from './StyleGuide';
import Tasks from './Tasks';

interface GoogleAnalyticsWindow extends Window {
  ga: any;
  gtag: any;
}

declare const window: GoogleAnalyticsWindow;

const App: FC = () => {
  const renderGoogleAnalytics = () => {
    if (process.env.NODE_ENV === 'development') return null;
    return (
      <Route
        path="/"
        render={({location}) => {
          if (typeof window.ga === 'function') {
            window.gtag('config', 'UA-56989641-1', {
              page_location: window.location.href,
              page_path: location.pathname,
              page_title: document.title,
            });
          }
          return null;
        }}
      />
    );
  };

  return (
    <Router>
      {renderGoogleAnalytics()}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/leaderboard/:repository" component={Leaderboard} />
          <Route exact path="/openings/:category" component={Openings} />
          <Route exact path="/tasks/:repository" component={Tasks} />
          <Route path="/account-manager/:chapter?" component={AccountManager} />
          <Route path="/bank-api/:chapter?" component={BankApi} />
          <Route path="/confirmation-validator-api/:chapter?" component={ConfirmationValidatorApi} />
          <Route path="/deployment-guide/:chapter?" component={DeploymentGuide} />
          <Route path="/download" component={Download} />
          <Route path="/guide/:chapter?" component={Guide} />
          <Route path="/primary-validator-api/:chapter?" component={PrimaryValidatorApi} />
          <Route path="/style-guide/:chapter?" component={StyleGuide} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
