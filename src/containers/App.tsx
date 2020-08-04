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
import StyleGuide from './StyleGuide';

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

        <Route path="/bank-api/:chapter?">
          <LayoutDashboard leftMenuType="apis">
            <BankApi />
          </LayoutDashboard>
        </Route>

        <Route path="/confirmation-validator-api/:chapter?">
          <LayoutDashboard leftMenuType="apis">
            <ConfirmationValidatorApi />
          </LayoutDashboard>
        </Route>

        <Route path="/deployment-guide/:chapter?">
          <LayoutDashboard leftMenuType="guides">
            <DeploymentGuide />
          </LayoutDashboard>
        </Route>

        <Route path="/guide/:chapter?">
          <LayoutDashboard leftMenuType="guides">
            <Guide />
          </LayoutDashboard>
        </Route>

        <Route path="/primary-validator-api/:chapter?">
          <LayoutDashboard leftMenuType="apis">
            <PrimaryValidatorApi />
          </LayoutDashboard>
        </Route>

        <Route path="/style-guide/:chapter?">
          <LayoutDashboard leftMenuType="guides">
            <StyleGuide />
          </LayoutDashboard>
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
