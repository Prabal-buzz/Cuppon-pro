import React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = ({ exact, path, component }) => {
  return <Route exact={exact} path={path} component={component} />;
};

export default CustomRoute;
