import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import API from './API';
import APILeftMenu from './API/APILeftMenu';
import Docs from './Docs';
import DocsLeftMenu from './Docs/DocsLeftMenu';
import Home from './Home';
import TopNav from './TopNav';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/api">
          <Redirect to="/api/introduction" />
        </Route>
        <Route path="/api/:chapter">
          <AdminLayout left={<APILeftMenu />} right={<API />} top={<TopNav />} />
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
