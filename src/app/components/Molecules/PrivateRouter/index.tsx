// Libraries
// import { APP_CONFIG } from 'app/constants/appConfig';
import { ROUTES } from 'app/constants/routes';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouterProps {}

export const PrivateRoute: React.FC<PrivateRouterProps> | any = props => {
  const validate = () => {
    return true;
  };
  if (!validate()) {
    // if (APP_CONFIG.APPLICATION_ENV === 'development') {
    //   return <Redirect to={ROUTES.LOGIN.path} />;
    // } else {
    // }
    return (window.location.href = '/login');
  }

  return <Route {...props} />;
};
