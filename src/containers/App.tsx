import React, {FC} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {LayoutBasic, LayoutDashboard} from 'components';

import BankApi from './BankApi';
import ConfirmationValidatorApi from './ConfirmationValidatorApi';
import Contribute from './Contribute';
import DeploymentGuide from './DeploymentGuide';
import Guide from './Guide';
import Home from './Home';
import PrimaryValidatorApi from './PrimaryValidatorApi';
import Roadmap from './Roadmap';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LayoutBasic>
            <Home />
          </LayoutBasic>
        </Route>

        <Route exact path="/contribute">
          <LayoutBasic>
            <Contribute />
          </LayoutBasic>
        </Route>

        <Route exact path="/roadmap">
          <LayoutBasic>
            <Roadmap />
          </LayoutBasic>
        </Route>

        <Route exact path="/bank-api">
          <Redirect to="/bank-api/accounts" />
        </Route>
        <Route path="/bank-api/:chapter">
          <LayoutDashboard>
            <BankApi />
          </LayoutDashboard>
        </Route>

        <Route exact path="/confirmation-validator-api">
          <Redirect to="/confirmation-validator-api/accounts" />
        </Route>
        <Route path="/confirmation-validator-api/:chapter">
          <LayoutDashboard>
            <ConfirmationValidatorApi />
          </LayoutDashboard>
        </Route>

        <Route exact path="/deployment-guides">
          <Redirect to="/deployment-guides/bank" />
        </Route>
        <Route path="/deployment-guides/:chapter">
          <LayoutDashboard>
            <DeploymentGuide />
          </LayoutDashboard>
        </Route>

        <Route exact path="/guide">
          <Redirect to="/guide/introduction" />
        </Route>
        <Route path="/guide/:chapter">
          <LayoutDashboard>
            <Guide />
          </LayoutDashboard>
        </Route>

        <Route exact path="/primary-validator-api">
          <Redirect to="/primary-validator-api/accounts" />
        </Route>
        <Route path="/primary-validator-api/:chapter">
          <LayoutDashboard>
            <PrimaryValidatorApi />
          </LayoutDashboard>
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
