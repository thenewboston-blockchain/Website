import React, {FC, useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';

import {initGA} from 'utils/components';
import AccountManager from './AccountManager';
import BankApi from './BankApi';
import ConfirmationValidatorApi from './ConfirmationValidatorApi';
import Contribute from './Contribute';
import DeploymentGuide from './DeploymentGuide';
import Download from './Download';
import Guide from './Guide';
import Home from './Home';
import PrimaryValidatorApi from './PrimaryValidatorApi';
import StyleGuide from './StyleGuide';

const App: FC = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contribute" component={Contribute} />
          <Route path="/account-manager/:chapter?" component={AccountManager} />
          <Route path="/bank-api/:chapter?" component={BankApi} />
          <Route path="/confirmation-validator-api/:chapter?" component={ConfirmationValidatorApi} />
          <Route path="/deployment-guide/:chapter?" component={DeploymentGuide} />
          <Route path="/download" component={Download} />
          <Route path="/guide/:chapter?" component={Guide} />
          <Route path="/primary-validator-api/:chapter?" component={PrimaryValidatorApi} />
          <Route path="/style-guide/:chapter?" component={StyleGuide} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
