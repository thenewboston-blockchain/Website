import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import BankAPI from './BankAPI';
import ConfirmationValidatorAPI from './ConfirmationValidatorAPI';
import Contribute from './Contribute';
import DeploymentGuides from './DeploymentGuides';
import Guide from './Guide';
import Home from './Home';
import Layout from './Layout';
import LeftMenu from './LeftMenu';
import PrimaryValidatorAPI from './PrimaryValidatorAPI';
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

        <Route exact path="/bank-api">
          <Redirect to="/bank-api/accounts" />
        </Route>
        <Route path="/bank-api/:chapter">
          <AdminLayout left={<LeftMenu />} right={<BankAPI />} />
        </Route>

        <Route exact path="/confirmation-validator-api">
          <Redirect to="/confirmation-validator-api/accounts" />
        </Route>
        <Route path="/confirmation-validator-api/:chapter">
          <AdminLayout left={<LeftMenu />} right={<ConfirmationValidatorAPI />} />
        </Route>

        <Route exact path="/contribute">
          <AdminLayout left={<LeftMenu />} right={<Contribute />} />
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
          <AdminLayout left={<LeftMenu />} right={<PrimaryValidatorAPI />} />
        </Route>

        <Route exact path="/roadmap">
          <AdminLayout left={<LeftMenu />} right={<Roadmap />} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
