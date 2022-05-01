// Libraries
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

// Hook
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Molecules
import { PrivateRoute } from 'app/components/Molecules/PrivateRouter';

// Organisms
import { Navbar } from 'app/components/Organisms';

// Routes
import rootRoutes from './routes';
import { themeActions } from '../../../styles/theme/slice';
import { FooterUser } from '../../components/Molecules';

export function User() {
  // Translate
  const { i18n } = useTranslation();

  // hook
  const dispatch = useDispatch();

  // change theme
  const handleOnChangeTheme = theme => {
    dispatch(themeActions.changeTheme(theme));
  };

  return (
    <Router>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <Navbar onChangeTheme={handleOnChangeTheme} />
      <Switch>
        {rootRoutes.map((route, index) => {
          const { exact, path, component, isPrivate, key } = route;

          if (isPrivate) {
            return (
              <PrivateRoute
                key={key}
                path={path}
                exact={exact}
                component={component}
              />
            );
          }

          return (
            <Route key={key} path={path} exact={exact} component={component} />
          );
        })}

        <Redirect to={'/'} />
      </Switch>
      <FooterUser />
    </Router>
  );
}
