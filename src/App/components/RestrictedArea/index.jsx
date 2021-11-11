import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { AuthConsumer } from '../../auth';
import CustomRoute from '../CustomRoute';
import { dashboardRoutes } from '../../../Dashboard';

class RestrictedArea extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) =>
          authContext && authContext.isUserLoggedIn ? (
            <DashboardLayout>
              <Switch>
                {dashboardRoutes
                  .filter(
                    (route) =>
                      (route.path.split('/').includes('company') &&
                        !(
                          authContext.currentUser.company &&
                          authContext.currentUser.company.length > 0
                        )) ||
                      (authContext.currentUser.company &&
                        authContext.currentUser.company.length > 0)
                  )
                  .map((route) => (
                    <CustomRoute
                      key={route.name}
                      exact={true}
                      path={route.path}
                      component={route.component}
                    />
                  ))}
              </Switch>

              {!(
                authContext.currentUser.company &&
                authContext.currentUser.company.length > 0
              ) &&
                window.location.pathname !== '/company' && (
                  <Redirect to="/company" />
                )}
            </DashboardLayout>
          ) : (
            <Redirect to="/login" />
          )
        }
      </AuthConsumer>
    );
  }
}

export default RestrictedArea;
