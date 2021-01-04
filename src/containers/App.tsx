import React, {FC} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';

import AccountManager from './AccountManager';
import Assets from './Assets';
import BankApi from './BankApi';
import ConfirmationValidatorApi from './ConfirmationValidatorApi';
import CreateAccount from './CreateAccount';
import DeploymentGuide from './DeploymentGuide';
import Donate from './Donate';
import Download from './Download';
import Faq from './Faq';
import Guide from './Guide';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Openings from './Openings';
import PrimaryValidatorApi from './PrimaryValidatorApi';
import Profile from './Profile';
import ProjectProposals from './ProjectProposals';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Social from './Social';
import StyleGuide from './StyleGuide';
import Tasks from './Tasks';
import Teams from './Teams';
import WebMap from './Webmap';

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
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/assets" component={Assets} />
          <Redirect exact from="/leaderboard" to="/leaderboard/All" />
          <Route exact path="/leaderboard/:repository" component={Leaderboard} />
          <Redirect exact from="/openings" to="/openings/All" />
          <Route exact path="/openings/:category/:openingId?" render={() => <Openings openingsFrozen={false} />} />
          <Route exact path="/social" component={Social} />
          <Redirect exact from="/tasks" to="/tasks/All" />
          <Route exact path="/tasks/:repository" component={Tasks} />
          <Redirect exact path="/teams" to="/teams/All/Members" />
          <Route exact path="/teams/:team/:tab?/:resource?" component={Teams} />
          <Route path="/account-manager/:chapter?" component={AccountManager} />
          <Route path="/bank-api/:chapter?" component={BankApi} />
          <Route path="/confirmation-validator-api/:chapter?" component={ConfirmationValidatorApi} />
          <Route path="/deployment-guide/:chapter?" component={DeploymentGuide} />
          <Route path="/download" component={Download} />
          <Route path="/guide/:chapter?" component={Guide} />
          <Route path="/primary-validator-api/:chapter?" component={PrimaryValidatorApi} />
          <Route path="/project-proposals/:chapter?" component={ProjectProposals} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-out" component={SignOut} />
          <Route path="/style-guide/:chapter?" component={StyleGuide} />
          <Route path="/users/:userId" component={Profile} />
          <Route path="/webmap" component={WebMap} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
