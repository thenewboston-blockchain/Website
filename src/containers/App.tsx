import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import BankAPI from './BankAPI';
import BankAPILeftMenu from './BankAPILeftMenu';
import ConfirmationValidatorAPI from './ConfirmationValidatorAPI';
import ConfirmationValidatorAPILeftMenu from './ConfirmationValidatorAPILeftMenu';
import Docs from './Docs';
import DocsLeftMenu from './DocsLeftMenu';
import Home from './Home';
import PrimaryValidatorAPI from './PrimaryValidatorAPI';
import PrimaryValidatorAPILeftMenu from './PrimaryValidatorAPILeftMenu';
import TopNav from './TopNav';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bank-api">
          <Redirect to="/bank-api/introduction" />
        </Route>
        <Route path="/bank-api/:chapter">
          <AdminLayout left={<BankAPILeftMenu />} right={<BankAPI />} top={<TopNav />} />
        </Route>
        <Route exact path="/confirmation-validator-api">
          <Redirect to="/confirmation-validator-api/introduction" />
        </Route>
        <Route path="/confirmation-validator-api/:chapter">
          <AdminLayout
            left={<ConfirmationValidatorAPILeftMenu />}
            right={<ConfirmationValidatorAPI />}
            top={<TopNav />}
          />
        </Route>
        <Route exact path="/docs">
          <Redirect to="/docs/introduction" />
        </Route>
        <Route path="/docs/:chapter">
          <AdminLayout left={<DocsLeftMenu />} right={<Docs />} top={<TopNav />} />
        </Route>
        <Route exact path="/primary-validator-api">
          <Redirect to="/primary-validator-api/introduction" />
        </Route>
        <Route path="/primary-validator-api/:chapter">
          <AdminLayout left={<PrimaryValidatorAPILeftMenu />} right={<PrimaryValidatorAPI />} top={<TopNav />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
