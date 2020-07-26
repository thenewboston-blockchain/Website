import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import BankApi from './BankApi';
import ConfirmationValidatorApi from './ConfirmationValidatorApi';
import Contribute from './Contribute';
import DeploymentGuides from './DeploymentGuides';
import Guide from './Guide';
import Home from './Home';
import Layout from './Layout';
import LeftMenu from './LeftMenu';
import PrimaryValidatorApi from './PrimaryValidatorApi';
import Roadmap from './Roadmap';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>

        <Route exact path="/contribute">
          <Layout>
            <Contribute />
          </Layout>
        </Route>

        <Route exact path="/roadmap">
          <Layout>
            <Roadmap />
          </Layout>
        </Route>

        <Route exact path="/bank-api">
          <Redirect to="/bank-api/accounts" />
        </Route>
        <Route path="/bank-api/:chapter">
          <AdminLayout left={<LeftMenu />} right={<BankApi />} />
        </Route>

        <Route exact path="/confirmation-validator-api">
          <Redirect to="/confirmation-validator-api/accounts" />
        </Route>
        <Route path="/confirmation-validator-api/:chapter">
          <AdminLayout left={<LeftMenu />} right={<ConfirmationValidatorApi />} />
        </Route>

        <Route exact path="/deployment-guides">
          <Redirect to="/deployment-guides/bank" />
        </Route>
        <Route path="/deployment-guides/:chapter">
          <AdminLayout left={<LeftMenu />} right={<DeploymentGuides />} />
        </Route>

        <Route exact path="/guide">
          <Redirect to="/guide/introduction" />
        </Route>
        <Route path="/guide/:chapter">
          <AdminLayout left={<LeftMenu />} right={<Guide />} />
        </Route>

        <Route exact path="/primary-validator-api">
          <Redirect to="/primary-validator-api/accounts" />
        </Route>
        <Route path="/primary-validator-api/:chapter">
          <AdminLayout left={<LeftMenu />} right={<PrimaryValidatorApi />} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
