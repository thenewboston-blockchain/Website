import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import Docs from './Docs';
import Home from './Home';
import LeftMenu from './LeftMenu';
import TopNav from './TopNav';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/docs">
          <Redirect to="/docs/1" />
        </Route>
        <Route path="/docs/:chapter">
          <AdminLayout left={<LeftMenu />} right={<Docs />} top={<TopNav />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
