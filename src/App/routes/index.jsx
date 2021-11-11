import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../../Public';
import RestrictedArea from '../components/RestrictedArea';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
      <Route path={'/'} component={RestrictedArea} />
    </Switch>
  </ConnectedRouter>
);

export default connect((state) => ({}))(Routes);
