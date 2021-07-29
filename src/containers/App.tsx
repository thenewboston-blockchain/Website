import React, {FC, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import withSuspense from 'hoc/withSuspense';

import Wallet from './Wallet';
import ArchitectureDeepDive from './LivingWhitepaper/containers/ArchitectureDeepDive';
import Assets from './Assets';
import BankApi from './Api/BankApi';
import ConfirmationValidatorApi from './Api/ConfirmationValidatorApi';
import CreateAccount from './CreateAccount';
import DeploymentGuide from './DeploymentGuide';
import Donate from './Donate';
import Download from './Download';
import Faq, {faqFilters, FaqFilterType} from './Faq';
import Guidelines from './Guidelines';
import Home from './Home';
import LivingWhitepaper from './LivingWhitepaper';
import Openings from './Openings';
import PrimaryValidatorApi from './Api/PrimaryValidatorApi';
import PrincipalEntities from './LivingWhitepaper/containers/PrincipalEntities';
import PrincipalEventsAndProcesses from './LivingWhitepaper/containers/PrincipalEventsAndProcesses';
import PrivacyPolicy from './PrivacyPolicy';
import Profile from './Profile';
import Progress from './Progress';
import ProjectRulesAndGuide from './Projects/ProjectRulesAndGuide';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Social from './Social';
import StyleGuide from './StyleGuide';
import Tasks from './Tasks';
import Teams from './Teams';
import TermsOfUse from './TermsOfUse';

/**
 * Lazy load pages that may contribute a lot to the bundle size
 */
const DeveloperPortal = lazy(() => import('./DeveloperPortal'));
const Projects = lazy(() => import('./Projects'));
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
          <Route exact path="/guidelines" component={Guidelines} />
          <Route exact path="/create-account" render={() => <CreateAccount disabled />} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/developer" component={withSuspense(DeveloperPortal)} />
          <Route exact path="/developer/whitepaper" component={LivingWhitepaper} />
          <Route exact path="/developer/whitepaper/principal-entities/:chapter?" component={PrincipalEntities} />
          <Route
            exact
            path="/developer/whitepaper/principal-events/:chapter?"
            component={PrincipalEventsAndProcesses}
          />
          <Route exact path="/developer/whitepaper/architecture/:chapter?" component={ArchitectureDeepDive} />
          <Redirect exact from="/faq" to={`/faq/${faqFilters[FaqFilterType.all]}`} />
          <Route exact path="/faq/:filter" component={Faq} />
          <Route exact path="/assets" component={Assets} />
          <Redirect exact from="/openings" to="/openings/All" />
          <Route exact path="/openings/:category/:openingId?" render={() => <Openings />} />
          <Route exact path="/social" component={Social} />
          <Redirect exact from="/tasks" to="/tasks/All" />
          <Route exact path="/tasks/:repository" component={Tasks} />
          <Redirect exact path="/teams" to="/teams/All/Members" />
          <Route exact path="/teams/:team/:tab?/:resource?" component={Teams} />
          <Route path="/wallet/:chapter?" component={Wallet} />
          <Route path="/developer/api/bank-api/:chapter?" component={BankApi} />
          <Route path="/developer/api/confirmation-validator-api/:chapter?" component={ConfirmationValidatorApi} />
          <Route path="/deployment-guide/:chapter?" component={DeploymentGuide} />
          <Route path="/download" component={Download} />
          <Route path="/developer/api/primary-validator-api/:chapter?" component={PrimaryValidatorApi} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/progress" component={Progress} />
          <Route path="/projects/:projectId?" component={withSuspense(Projects)} />
          <Route path="/project-rules/:chapter" component={ProjectRulesAndGuide} />
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
