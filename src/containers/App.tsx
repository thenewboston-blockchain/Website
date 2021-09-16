import React, {FC, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import withSuspense from 'hoc/withSuspense';

import Analytics from './Analytics';
import ArchitectureDeepDive from './DeveloperPortal/containers/LivingWhitepaper/containers/ArchitectureDeepDive';
import Assets from './Assets';
import BankApi from './Api/BankApi';
import ConfirmationValidatorApi from './Api/ConfirmationValidatorApi';
import CreateAccount from './CreateAccount';
import DeploymentGuide from './DeploymentGuide';
import DeveloperPortalApprovedProjects from './DeveloperPortal/containers/DeveloperPortalProjects/containers/ApprovedProjects';
import DeveloperPortalProjects from './DeveloperPortal/containers/DeveloperPortalProjects';
import DeveloperPortalProjectRulesAndGuidelines from './DeveloperPortal/containers/DeveloperPortalProjects/containers/ProjectRulesAndGuidelines';
import Donate from './Donate';
import Download from './Download';
import Faq, {faqFilters, FaqFilterType} from './Faq';
import Guidelines from './Guidelines';
import Home from './Home';
import LivingWhitepaper from './DeveloperPortal/containers/LivingWhitepaper';
import Openings from './Openings';
import PrimaryValidatorApi from './Api/PrimaryValidatorApi';
import PrincipalEntities from './DeveloperPortal/containers/LivingWhitepaper/containers/PrincipalEntities';
import PrincipalEventsAndProcesses from './DeveloperPortal/containers/LivingWhitepaper/containers/PrincipalEventsAndProcesses';
import PrivacyPolicy from './PrivacyPolicy';
import Profile from './Profile';
import Progress from './Progress';
import SdkAndLibraries from './DeveloperPortal/containers/SdkAndLibraries';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Social from './Social';
import StyleGuide from './StyleGuide';
import Bounties from './Bounties';
import Teams from './Teams';
import TermsOfUse from './TermsOfUse';
import Wallet from './Wallet';

/**
 * Lazy load pages that may contribute a lot to the bundle sizes
 */
const Arcade = lazy(() => import('./Arcade'));
const DeveloperPortal = lazy(() => import('./DeveloperPortal'));
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
          <Route exact path="/developer" component={withSuspense(DeveloperPortal)} />
          <Route exact path="/developer/projects" component={DeveloperPortalProjects} />
          <Route exact path="/developer/projects/rules" component={DeveloperPortalProjectRulesAndGuidelines} />
          <Route
            exact
            path="/developer/projects/approved-projects/:projectId?"
            component={DeveloperPortalApprovedProjects}
          />
          <Route path="/developer/sdks-and-libraries" component={SdkAndLibraries} />
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
          <Redirect exact from="/bounties" to="/bounties/All" />
          <Route exact path="/bounties/:repository" component={Bounties} />
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
