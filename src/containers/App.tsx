import React, {FC} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';

import AccountManager from './AccountManager';
import Auth from './Auth';
import Assets from './Assets';
import BankApi from './BankApi';
import ConfirmationValidatorApi from './ConfirmationValidatorApi';
import DeploymentGuide from './DeploymentGuide';
import Donate from './Donate';
import Download from './Download';
import Faq from './Faq';
import Guide from './Guide';
import Home from './Home';
import Internal from './Internal';
import Leaderboard from './Leaderboard';
import Openings from './Openings';
import PrimaryValidatorApi from './PrimaryValidatorApi';
import ProjectProposals from './ProjectProposals';
import Social from './Social';
import StyleGuide from './StyleGuide';
import Tasks from './Tasks';
import Teams from './Teams';

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
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/assets" component={Assets} />
          <Route exact path="/leaderboard/:repository" component={Leaderboard} />
          <Redirect exact from="/openings" to="/openings/All" />
          <Route exact path="/openings/:category/:openingId?" render={() => <Openings openingsFrozen={false} />} />
          <Route exact path="/social" component={Social} />
          <Redirect exact from="/tasks" to="/tasks/All" />
          <Route exact path="/tasks/:repository" component={Tasks} />
          <Route exact path="/teams" component={Teams} />
          <Route path="/account-manager/:chapter" component={AccountManager} />
          <Route path="/bank-api/:chapter" component={BankApi} />
          <Route path="/confirmation-validator-api/:chapter" component={ConfirmationValidatorApi} />
          <Route path="/deployment-guide/:chapter" component={DeploymentGuide} />
          <Route path="/download" component={Download} />
          <Route path="/guide/:chapter" component={Guide} />
          <Route path="/internal/:chapter" component={Internal} />
          <Route path="/primary-validator-api/:chapter" component={PrimaryValidatorApi} />
          <Route path="/project-proposals/:chapter" component={ProjectProposals} />
          <Route path="/style-guide/:chapter" component={StyleGuide} />
          <Route path="/user/signin/callback" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
