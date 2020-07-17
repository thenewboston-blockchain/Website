import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import BankAPI from './BankAPI';
import ConfirmationValidatorAPI from './ConfirmationValidatorAPI';
import Contributors from './Contributors';
import DeploymentGuides from './DeploymentGuides';
import Guide from './Guide';
import Home from './Home';
import LeftMenu from './LeftMenu';
import PrimaryValidatorAPI from './PrimaryValidatorAPI';
import Roadmap from './Roadmap';

const App = () => {
  const renderContent = () => (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/bank-api">
        <Redirect to="/bank-api/accounts" />
      </Route>
      <Route path="/bank-api/:chapter">
        <BankAPI />
      </Route>

      <Route exact path="/confirmation-validator-api">
        <Redirect to="/confirmation-validator-api/accounts" />
      </Route>
      <Route path="/confirmation-validator-api/:chapter">
        <ConfirmationValidatorAPI />
      </Route>

      <Route exact path="/contributors">
        <Contributors />
      </Route>

      <Route exact path="/deployment-guides">
        <Redirect to="/deployment-guides/bank" />
      </Route>
      <Route path="/deployment-guides/:chapter">
        <DeploymentGuides />
      </Route>

      <Route exact path="/guide">
        <Redirect to="/guide/introduction" />
      </Route>
      <Route path="/guide/:chapter">
        <Guide />
      </Route>

      <Route exact path="/primary-validator-api">
        <Redirect to="/primary-validator-api/accounts" />
      </Route>
      <Route path="/primary-validator-api/:chapter">
        <PrimaryValidatorAPI />
      </Route>

      <Route exact path="/roadmap">
        <Roadmap />
      </Route>

      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <AdminLayout left={<LeftMenu />} right={renderContent()} />
    </Router>
  );
};

export default App;
