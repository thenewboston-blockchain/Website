import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import BankAPI from './BankAPI';
import BankAPILeftMenu from './BankAPILeftMenu';
import Docs from './Docs';
import DocsLeftMenu from './DocsLeftMenu';
import Home from './Home';
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
        <Route exact path="/docs">
          <Redirect to="/docs/introduction" />
        </Route>
        <Route path="/docs/:chapter">
          <AdminLayout left={<DocsLeftMenu />} right={<Docs />} top={<TopNav />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
