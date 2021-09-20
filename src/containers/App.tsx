import React, {FC, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import withSuspense from 'hoc/withSuspense';

import Analytics from './Analytics';
import Assets from './Assets';
import Bounties from './Bounties';
import CreateAccount from './CreateAccount';
import DeploymentGuide from './DeploymentGuide';
import Donate from './Donate';
import Download from './Download';
import Faq, {faqFilters, FaqFilterType} from './Faq';
import Guidelines from './Guidelines';
import Home from './Home';
import Openings from './Openings';
import PrivacyPolicy from './PrivacyPolicy';
import Profile from './Profile';
import Progress from './Progress';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Social from './Social';
import StyleGuide from './StyleGuide';
import Teams from './Teams';
import TermsOfUse from './TermsOfUse';
import Wallet from './Wallet';

/**
 * Lazy load pages that may contribute a lot to the bundle sizes
 */
const Arcade = lazy(() => import('./Arcade'));
const Roadmap = lazy(() => import('./Roadmap'));
const Tutorials = lazy(() => import('./Tutorials'));

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
          <Route exact path="/analytics/:type?" component={Analytics} />
          <Route exact path="/arcade/:appId?" component={withSuspense(Arcade)} />
          <Route exact path="/guidelines" component={Guidelines} />
          <Route exact path="/create-account" render={() => <CreateAccount disabled />} />
          <Route exact path="/donate" component={Donate} />
          <Redirect exact from="/faq" to={`/faq/${faqFilters[FaqFilterType.all]}`} />
          <Route exact path="/faq/:filter" component={Faq} />
          <Route exact path="/assets" component={Assets} />
          <Redirect exact from="/openings" to="/openings/All" />
          <Route exact path="/openings/:category/:openingId?" render={() => <Openings />} />
          <Route exact path="/social" component={Social} />
          <Redirect exact from="/bounties" to="/bounties/All" />
          <Route exact path="/bounties/:repository" component={Bounties} />
          <Redirect exact path="/teams" to="/teams/All/Members" />
          <Route exact path="/teams/:team/:tab?/:resource?" component={Teams} />
          <Route path="/wallet/:chapter?" component={Wallet} />
          <Route path="/deployment-guide/:chapter?" component={DeploymentGuide} />
          <Route path="/download" component={Download} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/progress" component={Progress} />
          <Route path="/roadmap" component={withSuspense(Roadmap)} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-out" component={SignOut} />
          <Route path="/style-guide/:chapter?" component={StyleGuide} />
          <Redirect exact path="/tutorials" to="/tutorials/All" />
          <Route exact path="/tutorials/:category/:playlistId?" component={withSuspense(Tutorials)} />
          <Route exact path="/terms-of-use" component={TermsOfUse} />
          <Route path="/users/:userId" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
