import React from 'react';

import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { BasicLayout, FixedToolbarLayout, GuideLayout } from './Layouts';

import Home from '../containers/Home';
import Roadmap from '../containers/Roadmap';
import Contribute from '../containers/Contribute';
import Guide from '../containers/Guide';
import ConfirmationValidatorAPI from '../containers/ConfirmationValidatorAPI';
import BankAPI from '../containers/BankAPI';
import PrimaryValidatorAPI from '../containers/PrimaryValidatorAPI';
import DeploymentGuides from '../containers/DeploymentGuides';

/**
 * This component wraps the react-router Route component. This is so
 * we can specify a custom layout for each route.
 * 
 * Usage: <UsePage path="" component={YourPage} layout={YourLayout} />
 */
const UsePage = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    }/>
  );
}

const App = () => {
  return (
    <Router>
      <Switch>
        <UsePage exact path="/" component={Home} layout={BasicLayout} />
        <UsePage exact path="/contribute" component={Contribute} layout={FixedToolbarLayout} />
        <UsePage exact path="/roadmap" component={Roadmap} layout={FixedToolbarLayout} />

        <Route exact path="/guide">
          <Redirect to="/guide/introduction"/>
        </Route>
        <UsePage path="/guide/:chapter" component={Guide} layout={GuideLayout} />

        <Route exact path="/confirmation-validator-api">
          <Redirect to="/confirmation-validator-api/accounts" />
        </Route>
        <UsePage path="/confirmation-validator-api/:chapter" component={ConfirmationValidatorAPI} layout={GuideLayout} />

        <Route exact path="/bank-api">
          <Redirect to="/bank-api/accounts" />
        </Route>
        <UsePage path="/bank-api/:chapter" component={BankAPI} layout={GuideLayout} />

        <Route exact path="/primary-validator-api">
          <Redirect to="/primary-validator-api/accounts" />
        </Route>
        <UsePage path="/primary-validator-api/:chapter" component={PrimaryValidatorAPI} layout={GuideLayout} />

        <Route exact path="/deployment-guides">
          <Redirect to="/deployment-guides/bank" />
        </Route>
        <UsePage path="/deployment-guides/:chapter" component={DeploymentGuides} layout={GuideLayout} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;