import React, {FC} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';

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
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/contribute">
            <Contribute />
          </Route>

          <Route exact path="/roadmap">
            <Roadmap />
          </Route>

          <Route path="/bank-api/:chapter?">
            <BankApi />
          </Route>

          <Route path="/confirmation-validator-api/:chapter?">
            <ConfirmationValidatorApi />
          </Route>

          <Route path="/deployment-guide/:chapter?">
            <DeploymentGuide />
          </Route>

          <Route path="/guide/:chapter?">
            <Guide />
          </Route>

          <Route path="/primary-validator-api/:chapter?">
            <PrimaryValidatorApi />
          </Route>

          <Route path="/style-guide/:chapter?">
            <StyleGuide />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
