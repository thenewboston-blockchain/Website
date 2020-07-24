import React, {FC} from 'react';
import {BrowserRouter as Router, Route, RouteChildrenProps, RouteProps, Switch, Redirect} from 'react-router-dom';

import BankAPI from 'containers/BankAPI';
import ConfirmationValidatorAPI from 'containers/ConfirmationValidatorAPI';
import Contribute from 'containers/Contribute';
import DeploymentGuides from 'containers/DeploymentGuides';
import Guide from 'containers/Guide';
import Home from 'containers/Home';
import PrimaryValidatorAPI from 'containers/PrimaryValidatorAPI';
import Roadmap from 'containers/Roadmap';

import {BasicLayout, FixedToolbarLayout, GuideLayout} from './Layouts';

export enum LayoutType {
  basic,
  fixedToolbar,
  guide,
}

interface RouteWithLayoutProps extends Omit<RouteProps, 'component' | 'render'> {
  children: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  layout: LayoutType;
}

const RouteWithLayout: FC<RouteWithLayoutProps> = ({children, layout, ...routeProps}) => {
  const Layout =
    layout === LayoutType.fixedToolbar ? FixedToolbarLayout : layout === LayoutType.guide ? GuideLayout : BasicLayout;

  return <Route {...routeProps} render={() => <Layout>{children}</Layout>} />;
};

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWithLayout exact path="/" layout={LayoutType.basic}>
          <Home />
        </RouteWithLayout>
        <RouteWithLayout exact path="/contribute" layout={LayoutType.fixedToolbar}>
          <Contribute />
        </RouteWithLayout>
        <RouteWithLayout exact path="/roadmap" layout={LayoutType.fixedToolbar}>
          <Roadmap />
        </RouteWithLayout>

        <Route exact path="/guide">
          <Redirect to="/guide/introduction" />
        </Route>
        <RouteWithLayout path="/guide/:chapter" layout={LayoutType.guide}>
          <Guide />
        </RouteWithLayout>

        <Route exact path="/confirmation-validator-api">
          <Redirect to="/confirmation-validator-api/accounts" />
        </Route>
        <RouteWithLayout path="/confirmation-validator-api/:chapter" layout={LayoutType.guide}>
          <ConfirmationValidatorAPI />
        </RouteWithLayout>

        <Route exact path="/bank-api">
          <Redirect to="/bank-api/accounts" />
        </Route>
        <RouteWithLayout path="/bank-api/:chapter" layout={LayoutType.guide}>
          <BankAPI />
        </RouteWithLayout>

        <Route exact path="/primary-validator-api">
          <Redirect to="/primary-validator-api/accounts" />
        </Route>
        <RouteWithLayout path="/primary-validator-api/:chapter" layout={LayoutType.guide}>
          <PrimaryValidatorAPI />
        </RouteWithLayout>

        <Route exact path="/deployment-guides">
          <Redirect to="/deployment-guides/bank" />
        </Route>
        <RouteWithLayout path="/deployment-guides/:chapter" layout={LayoutType.guide}>
          <DeploymentGuides />
        </RouteWithLayout>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
