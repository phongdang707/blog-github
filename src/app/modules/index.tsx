// Libraries
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Molecules
import { PrivateRoute } from 'app/components/Molecules/PrivateRouter';

// Routes
import rootRoutes from './routes';

// Css
import 'assets/css/global.css';

export function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <Helmet htmlAttributes={{ lang: i18n.language }}></Helmet>
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
    </Router>
  );
}
